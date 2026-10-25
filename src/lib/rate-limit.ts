type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

const CONTACT_LIMIT = 5;
const CONTACT_WINDOW_MS = 15 * 60 * 1000;
const MAX_BUCKETS = 10_000;

declare global {
  var contactRateLimitStore: Map<string, RateLimitBucket> | undefined;
}

const store = globalThis.contactRateLimitStore ?? new Map<string, RateLimitBucket>();
globalThis.contactRateLimitStore = store;

function pruneExpiredBuckets(now: number) {
  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key);
  }
}

export function checkContactRateLimit(key: string, now = Date.now()): RateLimitResult {
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    if (store.size >= MAX_BUCKETS) {
      pruneExpiredBuckets(now);
      if (store.size >= MAX_BUCKETS) {
        const oldestKey = store.keys().next().value;
        if (oldestKey) store.delete(oldestKey);
      }
    }

    store.set(key, { count: 1, resetAt: now + CONTACT_WINDOW_MS });
    return {
      allowed: true,
      remaining: CONTACT_LIMIT - 1,
      retryAfterSeconds: Math.ceil(CONTACT_WINDOW_MS / 1000),
    };
  }

  const retryAfterSeconds = Math.max(1, Math.ceil((current.resetAt - now) / 1000));

  if (current.count >= CONTACT_LIMIT) {
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  current.count += 1;
  return {
    allowed: true,
    remaining: CONTACT_LIMIT - current.count,
    retryAfterSeconds,
  };
}
