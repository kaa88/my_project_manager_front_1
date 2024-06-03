export const fixPath = (url: string | undefined): string =>
  url ? url.replace(/\/$/, "") : "";

export const objectIsEmpty = (obj: object): boolean => {
  if (Array.isArray(obj)) return !obj.length;
  for (let prop in obj) {
    if (Object.hasOwn(obj, prop)) return false;
  }
  return true;
};

export const getPlural = (num: number, text: string): string => {
  let str = `${num} ${text}`;
  if (num !== 1) str = str.replace(/y$/, "ie") + "s";
  return str;
};

// export const capitalizeString = (str: string): string => {
// }

export const debounce = (callback: (...args: any) => any, timeout?: number) => {
  const t = timeout || 500;
  let id: NodeJS.Timeout;
  return () => {
    clearTimeout(id);
    id = setTimeout(() => callback(), t);
  };
};
