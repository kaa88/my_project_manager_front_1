export const _fetchFakeServer = (props?: {
  wait?: number;
  isError?: boolean;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (props?.isError) reject(new Error("Fake server error"));
      else resolve(true);
    }, (props?.wait || 1) * 1000);
  });
};

export const fixPath = (url: string | undefined): string =>
  url ? url.replace(/\/$/, "") : "";

export const getCssVariable = (name: string): number => {
  const errorMessage = `Could not find CSS variable "${name}"`;
  let value = null;
  if (name) {
    const varPrefix = "--";
    if (!name.match(new RegExp("^" + varPrefix))) name = varPrefix + name;
    let variable = parseFloat(
      getComputedStyle(document.body).getPropertyValue(name)
    );
    if (!isNaN(variable)) value = variable;
  }
  if (value === null) {
    console.error(errorMessage);
    return 0;
  }
  return value;
};

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
