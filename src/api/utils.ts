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
