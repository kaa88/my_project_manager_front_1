// TODO: this is backend utils - check if any unnecessary

export const isArray = (x: any) => Array.isArray(x);

export const isObject = (x: any) =>
  x !== null && typeof x === "object" && !Array.isArray(x);

export const isEmptyObject = (obj: object) => {
  if (!isObject(obj)) throw new Error("Value is not an Object");
  for (let prop in obj) {
    if (Object.hasOwn(obj, prop)) return false;
  }
  return true;
};

export const isNullish = (x: any) =>
  ["", null].includes(x) || /^null$/i.test(x);

export const isTotallyNullish = (x: any) =>
  ["", null, 0, false, undefined].includes(x) ||
  /^(null|0|false|undefined)$/i.test(x);

export const toNumber = (x: any) => (isNaN(x) ? 0 : Number(x));

export const toNumberArray = (x: any) => {
  const arr = isArray(x) ? x : [x];
  let result: unknown[] = [];
  arr.forEach((item: unknown) => {
    result = result.concat(typeof item === "string" ? item.split(",") : [item]);
  });
  return result.map((item) => toNumber(item));
};

export const toNumberOrNull = (x: any) => (isNullish(x) ? null : toNumber(x));

export const toNumberArrayOrNull = (x: any) =>
  isNullish(x) ? null : toNumberArray(x);

/** Func does not convert types, non-string values will be skipped. */
export const toStringArray = (x: any) => {
  const arr = isArray(x) ? x : [x];
  let result: unknown[] = [];
  arr.forEach((item: unknown) => {
    result = result.concat(typeof item === "string" ? item.split(",") : [item]);
  });
  return result.reduce((res: string[], item) => {
    const str = typeof item === "string" ? item.trim() : "";
    return str ? [...res, str] : res;
  }, []);
};

export const toBoolean = (x: any) => (isTotallyNullish(x) ? false : Boolean(x));
