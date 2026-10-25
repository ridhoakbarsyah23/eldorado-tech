'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  submitContact,
  type ContactField,
  type ContactFormState,
} from '@/app/actions/contact';

const fields: ContactField[] = ['name', 'email', 'service', 'message'];
const initialContactFormState: ContactFormState = { status: 'idle' };

export default function ContactSection() {
  const locale = useLocale();
  const t = useTranslations('Contact');
  const [state, formAction, pending] = useActionState(submitContact, initialContactFormState);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === 'error') errorSummaryRef.current?.focus();
  }, [state]);

  const fieldClass = 'mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-100';
  const getError = (field: ContactField) => state.fieldErrors?.[field] ? t(`errors.${field}`) : null;
  const summaryFields = fields.filter((field) => state.fieldErrors?.[field]);
  const retryAfterMinutes = Math.max(1, Math.ceil((state.retryAfterSeconds ?? 0) / 60));

  return (
    <section id="contact" data-motion-section className="bg-blue-700 py-16 text-white sm:py-24 lg:py-28">
      <div className="site-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div data-motion-item className="min-w-0">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">{t('eyebrow')}</p>
          <h2 className="font-display mt-4 text-balance text-3xl tracking-tight sm:text-5xl lg:text-6xl">{t('title')} {t('titleHighlight')}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:mt-6 sm:text-lg sm:leading-8">{t('subtitle')}</p>
          <div className="mt-9 space-y-5 border-t border-white/20 pt-7 sm:mt-12 sm:pt-8">
            <a href="mailto:hello@eldoradotech.com" className="group flex min-h-14 items-center gap-4 rounded-xl text-blue-50 transition-colors hover:text-white">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10"><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18v12H3z" /><path d="m3 7 9 6 9-6" /></svg></span>
              <span className="responsive-copy"><span className="block text-xs font-bold uppercase tracking-[0.12em] text-blue-200">{t('emailTitle')}</span><span className="mt-1 block font-semibold">hello@eldoradotech.com</span></span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10"><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
              <span className="responsive-copy"><span className="block text-xs font-bold uppercase tracking-[0.12em] text-blue-200">{t('officeTitle')}</span><span className="mt-1 block font-semibold">{t('officeAddress')}</span></span>
            </div>
          </div>
        </div>

        <div data-motion-item className="min-w-0 rounded-3xl bg-white p-5 text-slate-900 shadow-[0_28px_80px_rgba(15,23,42,0.28)] sm:p-9">
          <h3 className="text-2xl font-extrabold tracking-tight">{t('infoTitle')}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{t('infoDesc')}</p>

          <form action={formAction} className="mt-7 space-y-5" noValidate>
            <input type="hidden" name="locale" value={locale} />
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website<input id="website" name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>

            {state.status === 'error' && (
              <div ref={errorSummaryRef} tabIndex={-1} role="alert" aria-labelledby="contact-error-title" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900 focus:outline-none focus:ring-4 focus:ring-red-100">
                <p id="contact-error-title" className="font-bold">
                  {state.errorType === 'validation' ? t('validationTitle') : state.errorType === 'rate-limit' ? t('rateLimitTitle') : t('submissionTitle')}
                </p>
                <p className="mt-1 text-sm leading-6">
                  {state.errorType === 'configuration'
                    ? t('configurationError')
                    : state.errorType === 'submission'
                      ? t('formErrorMsg')
                      : state.errorType === 'rate-limit'
                        ? t('rateLimitError', { minutes: retryAfterMinutes })
                        : t('validationDesc')}
                </p>
                {summaryFields.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm font-semibold">
                    {summaryFields.map((field) => <li key={field}><a className="underline underline-offset-2" href={`#${field}`}>{getError(field)}</a></li>)}
                  </ul>
                )}
                {state.errorType !== 'validation' && <a href="mailto:hello@eldoradotech.com" className="mt-3 inline-flex font-bold underline underline-offset-2">{t('emailFallback')}</a>}
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-700" htmlFor="name">
                {t('formName')}
                <input className={fieldClass} id="name" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder={t('formNamePlaceholder')} aria-invalid={Boolean(state.fieldErrors?.name)} aria-describedby={state.fieldErrors?.name ? 'name-error' : undefined} />
                {getError('name') && <span id="name-error" className="mt-2 block text-sm font-semibold text-red-700">{getError('name')}</span>}
              </label>
              <label className="text-sm font-bold text-slate-700" htmlFor="email">
                {t('formEmail')}
                <input className={fieldClass} id="email" name="email" type="email" required maxLength={254} autoComplete="email" inputMode="email" placeholder={t('formEmailPlaceholder')} aria-invalid={Boolean(state.fieldErrors?.email)} aria-describedby={state.fieldErrors?.email ? 'email-error' : undefined} />
                {getError('email') && <span id="email-error" className="mt-2 block text-sm font-semibold text-red-700">{getError('email')}</span>}
              </label>
            </div>
            <label className="block text-sm font-bold text-slate-700" htmlFor="service">
              {t('formService')}
              <select className={fieldClass} id="service" name="service" defaultValue="" required aria-invalid={Boolean(state.fieldErrors?.service)} aria-describedby={state.fieldErrors?.service ? 'service-error' : undefined}>
                <option value="" disabled>{t('formServicePlaceholder')}</option>
                <option value="web">{t('serviceWeb')}</option>
                <option value="mobile">{t('serviceMobile')}</option>
                <option value="uiux">{t('serviceUiUx')}</option>
                <option value="cloud">{t('serviceCloud')}</option>
              </select>
              {getError('service') && <span id="service-error" className="mt-2 block text-sm font-semibold text-red-700">{getError('service')}</span>}
            </label>
            <label className="block text-sm font-bold text-slate-700" htmlFor="message">
              {t('formMessage')}
              <textarea className={`${fieldClass} min-h-32 py-3`} id="message" name="message" required minLength={20} maxLength={3000} placeholder={t('formMessagePlaceholder')} aria-invalid={Boolean(state.fieldErrors?.message)} aria-describedby={state.fieldErrors?.message ? 'message-help message-error' : 'message-help'} />
              <span id="message-help" className="mt-2 block text-xs font-medium text-slate-500">{t('messageHelp')}</span>
              {getError('message') && <span id="message-error" className="mt-2 block text-sm font-semibold text-red-700">{getError('message')}</span>}
            </label>
            <button type="submit" disabled={pending} data-cta="contact-submit" className="group inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-orange-600 px-6 font-bold text-white transition-colors duration-200 hover:bg-orange-700 disabled:cursor-wait disabled:opacity-70">
              {pending ? t('formSending') : t('formSubmit')}
              {pending ? (
                <svg aria-hidden="true" className="ml-2 h-5 w-5 animate-spin motion-reduce:animate-none" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" /><path className="opacity-90" d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
              ) : (
                <svg aria-hidden="true" className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              )}
            </button>
            <p aria-live="polite" className="sr-only">{pending ? t('formSending') : ''}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
