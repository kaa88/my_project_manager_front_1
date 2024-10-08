export const getPluralEn = (num: number, text: string): string => {
  let str = `${num} ${text}`;
  if (num !== 1) str = str.replace(/y$/, "ie") + "s";
  return str;
};

// export const capitalizeString = (str: string): string => {
// }

export const shortenText = (string = "", length = 50) => {
  const suffix = "...";

  if (typeof string !== "string" || typeof length !== "number") return "";

  const trimmed = string.trim();
  if (trimmed.length > length) return trimmed.substring(0, length) + suffix;
  else return trimmed;
};
