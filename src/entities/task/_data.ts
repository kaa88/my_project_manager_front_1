import { ITask } from "./types";

export const tasks: ITask[] = [
  {
    id: "11",
    title: "title11",
    descr: "descr11",
    createDate: "2024-06-01",
    expireDate: "2024-07-01",
    priority: "top",
    label: "02",
    group: ["gr1", "gr2"],
    creator: "creator01",
    assignee: ["assignee01"],
    subtasks: "0/5", // id of block
    comments: "comm", // id of block
    attachments: ["att01"], // ids
  },
  {
    id: "22",
    title: "title22",
    descr: "descr22",
    createDate: "2024-06-01",
    priority: "top",
    label: "01",
    assignee: [
      "assignee01",
      "assignee02",
      "assignee03",
      "assignee04",
      "assignee05",
    ],
    group: ["assignee01", "assignee01", "assignee01", "assignee01"],
  },
  {
    id: "33",
    title: "title33",
    descr: "descr33",
    createDate: "2024-06-01",
    priority: "high",
    label: "01",
    assignee: ["assignee01", "assignee02"],
    comments: "comm", // id of block
  },
  {
    id: "44",
    title: "title44",
    descr: "descr44",
    createDate: "2024-06-01",
    expireDate: "2024-07-01",
    label: "01",
    attachments: ["att01"], // ids
    subtasks: "0/6", // id of block
  },
  {
    id: "55",
    title: "title55",
    descr: "descr55",
    createDate: "2024-06-01",
    label: "01",
    attachments: ["att01"], // ids
    subtasks: "0/6", // id of block
  },
  {
    id: "66",
    title: "title66",
    descr: "descr66",
    createDate: "2024-06-01",
    label: "01",
  },
  {
    id: "77",
    title: "title77",
    descr: "descr77",
    createDate: "2024-06-01",
    label: "01",
    expireDate: "2024-07-01",
    group: ["Gr1"],
    creator: "creator01",
    subtasks: "0/3", // id of block
    comments: "comm", // id of block
    attachments: ["att01"], // ids
  },
  {
    id: "88",
    title: "title88",
    descr: "descr88",
    createDate: "2024-06-01",
    label: "01",
  },
  {
    id: "99",
    title: "title99",
    descr: "descr99",
    label: "01",
    createDate: "2024-06-01",
  },
];
