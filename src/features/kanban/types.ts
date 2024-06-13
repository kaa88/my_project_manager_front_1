export interface IKanbanBoard {
  id: string;
  title: string;
  labels: IKanbanLabel[];
}

export interface IKanbanLabel {
  id: string;
  title: string;
  color?: string;
}
