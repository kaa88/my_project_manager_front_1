type IEntries = {
  [key: string]: string | number | boolean | null | undefined;
};

export const getQueryStringFromEntries = (entries: IEntries): string => {
  const queryItems = Object.entries(entries)
    .filter((item) => item[1] !== undefined)
    .map(([key, value]) => `${key}=${value}`);

  const query = queryItems.join("&");

  return query ? "?" + query : "";
};

export const fixUrl = (url: string | undefined): string =>
  url ? url.replace(/\/$/, "") : "";
