type QueryObject = {
  [key: string]: string | number | boolean | null | undefined;
};

export const getQueryStringFromObject = (queryObject: QueryObject): string => {
  const queryItems = Object.entries(queryObject)
    .filter((item) => item[1] !== undefined)
    .map(([key, value]) => `${key}=${value}`);

  const query = queryItems.join("&");
  return query ? "?" + query : "";
};
