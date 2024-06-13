import { _fetchFakeServer } from "../../api";
import { boards } from "./_data";
import { IKanbanBoard } from "./types";

export const api = {
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
};
