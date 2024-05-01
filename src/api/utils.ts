type Entries = {
  [key: string]: string | number | boolean | null | undefined;
};

export const getQueryStringFromEntries = (entries: Entries): string => {
  const queryItems = Object.entries(entries)
    .filter((item) => item[1] !== undefined)
    .map(([key, value]) => `${key}=${value}`);

  const query = queryItems.join("&");

  return query ? "?" + query : "";
};
