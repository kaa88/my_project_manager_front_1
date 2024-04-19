const FETCH_COOLDOWN_SEC = 60 * 5; // eslint-disable-line no-magic-numbers

interface ICacheItem<T = any> {
  lastFetchTime: number;
  data: T;
}

const defaultCache: { [key: string]: ICacheItem } = {};
let cache = { ...defaultCache };

export const apiCache = {
  isExpired: (value?: number, cooldownSec?: number): boolean => {
    if (!value) return true;

    const DEFAULT_COOLDOWN_SEC = 3;
    const refetchTime =
      Date.now() -
      (cooldownSec !== undefined ? cooldownSec : DEFAULT_COOLDOWN_SEC) * 1000; // eslint-disable-line no-magic-numbers

    return value < refetchTime;
  },

  get: <T>(id: string): ICacheItem<T>['data'] | undefined => {
    if (!cache[id] || apiCache.isExpired(cache[id].lastFetchTime, FETCH_COOLDOWN_SEC))
      return;

    return cache[id].data;
  },

  set: (id: string, data: any): void => {
    cache[id] = {
      lastFetchTime: Date.now(),
      data,
    };
  },

  clear: (id: string): void => {
    delete cache[id];
  },

  clearAll: (): void => {
    cache = { ...defaultCache };
  },
};
