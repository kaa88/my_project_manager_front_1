import { _fetchFakeServer } from "../../api";
import { taskApi } from "../task";
import { boards } from "./_data";
import { IKanbanBoard } from "./kanban.types";

export const kanbanApi = {
  getAll() {
    return _fetchFakeServer({ data: { data: boards } });
  },
  get(id: IKanbanBoard["id"]) {
    return _fetchFakeServer({
      data: { data: boards.find((b) => b.id === id) },
    });
  },
  create() {}, // post
  update() {}, // patch
  delete() {}, // delete

  getTasks: taskApi.getAll,
};
