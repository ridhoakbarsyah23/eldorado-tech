'use server';

import { redirect } from 'next/navigation';

const supportedLocales = new Set(['id', 'en']);
const supportedServices = new Set(['web', 'mobile', 'uiux', 'cloud']);

export type ContactField = 'name' | 'email' | 'service' | 'message';

export type ContactFormState = {
  status: 'idle' | 'error';
  errorType?: 'validation' | 'configuration' | 'submission';
  fieldErrors?: Partial<Record<ContactField, string>>;
};

function readText(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === 'string' ? value.trim() : '';
}

function validateEndpoint(value: string | undefined) {
  if (!value) return null;

  try {
    const endpoint = new URL(value);
    return endpoint.protocol === 'https:' ? endpoint.toString() : null;
  } catch {
    return null;
  }
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const localeValue = readText(formData, 'locale');
  const locale = supportedLocales.has(localeValue) ? localeValue : 'id';
  const honeypot = readText(formData, 'website');

  if (honeypot) {
    redirect(`/${locale}/thank-you`);
  }

  const name = readText(formData, 'name');
  const email = readText(formData, 'email');
  const service = readText(formData, 'service');
  const message = readText(formData, 'message');
  const fieldErrors: ContactFormState['fieldErrors'] = {};

  if (name.length < 2 || name.length > 80) fieldErrors.name = 'invalid';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = 'invalid';
  if (!supportedServices.has(service)) fieldErrors.service = 'invalid';
  if (message.length < 20 || message.length > 3000) fieldErrors.message = 'invalid';

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      errorType: 'validation',
      fieldErrors,
    };
  }

  const endpoint = validateEndpoint(process.env.CONTACT_FORM_ENDPOINT);

  if (!endpoint) {
    return {
      status: 'error',
      errorType: 'configuration',
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        service,
        subject: `Eldorado Tech inquiry: ${service}`,
        message,
        locale,
        source: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eldoradotech.com',
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(12_000),
    });

    if (!response.ok) {
      return {
        status: 'error',
        errorType: 'submission',
      };
    }
  } catch {
    return {
      status: 'error',
      errorType: 'submission',
    };
  }

  redirect(`/${locale}/thank-you`);
}
