// Development only

export const _fetchFakeApi = (props?: {
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
