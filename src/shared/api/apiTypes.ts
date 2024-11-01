export type ApiId = number;

/** Use this ID in URL query. API also receives 'string' numbers separated by commas. */
export type ApiQueryId = ApiId | string;

/** Use this ID in http body. API also receives 'string' numbers separated by commas. */
export type ApiMultiId = ApiId | ApiId[] | string;

export type ApiBasicEntity = {
  id: ApiId;
  createdAt?: Date | number; // ? number
  updatedAt?: Date | number; // ? number
  deletedAt?: Date | number; // ? number
};

export type ApiProjectElemEntity = ApiBasicEntity & {
  relativeId: ApiId;
  projectId: ApiId;
  project?: object; // ?
};

export type ApiBoardElemEntity = ApiProjectElemEntity & {
  boardId: ApiId;
  board?: object; // ?
};

export type ApiRequestPagination = {
  max?: number;
  page?: number;
  order?: "asc" | "desc";
  orderBy?: string;
};
export type ApiResponsePagination<T> = {
  max: number;
  page: number;
  totalPages: number;
  totalItems: number;
  items: T[];
};
