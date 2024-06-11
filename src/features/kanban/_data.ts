import { IKanbanBoard, IKanbanLabel } from "./kanban.types";

export const labels: IKanbanLabel[] = [
  {
    id: "01",
    title: "open",
  },
  {
    id: "02",
    title: "in progress",
  },
  {
    id: "03",
    title: "done",
  },
];

export const boards: IKanbanBoard[] = [
  {
    id: "1",
    title: "work",
    labels: [],
  },
  {
    id: "2",
    title: "study",
    labels: labels,
  },
  {
    id: "3",
    title: "travel",
    labels: [...labels, ...labels],
  },
];
