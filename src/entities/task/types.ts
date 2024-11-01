export interface ITask {
  id: string;
  title: string;
  descr?: string;
  createDate: string;
  expireDate?: string;
  // closeDate?: string;
  priority?: TaskPriority;
  label?: string; // статус по колонкам доски (только 1 возможная) (в настройках)
  group?: string[]; // группа (в настройках)
  creator?: string; // id
  assignee?: string[]; // id
  subtasks?: string; // id of block
  comments?: string; // id of block
  attachments?: string[]; // ids
}

// export type TaskStatus = "open" | "closed";

export type TaskPriority = "normal" | "high" | "top";
export type TaskApiPriority = number; // 0, 1, 2 +

// ?
export interface IApiTask {
  id: string;
  title?: string;
  descr?: string;
  createDate?: string;
  expireDate?: string;
  closeDate?: string;
  priority?: TaskPriority;
  label?: string; // статус по колонкам доски (только 1 возможная) (в настройках)
  group?: string[]; // группа (в настройках)
  creator?: string; // id
  assignee?: string[]; // id
  subtasks?: string; // id of block
  comments?: string; // id of block
  attachments?: string[]; // ids
}
