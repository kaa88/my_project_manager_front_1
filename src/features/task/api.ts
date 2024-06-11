import { _fetchFakeServer } from "../../api";
import { tasks } from "./_data";
import { ITask } from "./types";

export const taskApi = {
  getAll() {
    return _fetchFakeServer({ data: { data: tasks } });
  },
  get(id: ITask["id"]) {
    return _fetchFakeServer({ data: { data: tasks.find((t) => t.id === id) } });
  },
  create() {}, // post
  update() {}, // patch
  delete() {}, // delete
};
