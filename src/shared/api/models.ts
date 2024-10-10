export type ApiBasicEntity = {
  id: number;
  createdAt?: Date | number; // ? number
  updatedAt?: Date | number; // ? number
  deletedAt?: Date | number; // ? number
};

export type ApiProjectElemEntity = ApiBasicEntity & {
  relativeId: number;
  projectId: number;
  project?: object; // ?
};

export type ApiBoardElemEntity = ApiProjectElemEntity & {
  boardId: number;
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
