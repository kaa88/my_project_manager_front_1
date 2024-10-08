export const _fetchFakeServer = (props?: {
  wait?: number;
  data?: any;
  isError?: boolean;
  errorData?: any;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (props?.isError || props?.errorData)
        reject(
          props?.errorData !== undefined
            ? props.errorData
            : new Error("Fake server error")
        );
      else resolve(props?.data !== undefined ? props.data : true);
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
