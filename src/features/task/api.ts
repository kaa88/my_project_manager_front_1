import { _fetchFakeServer } from "../../api";
import { tasks } from "./_data";
import { ITask } from "./types";

export const api = {
  getTaskList() {
    return _fetchFakeServer({ data: { data: tasks } });
  },
  getTask(id: ITask["id"]) {
    return _fetchFakeServer({ data: { data: tasks.find((t) => t.id === id) } });
  },
  createTask() {}, // post
  updateTask() {}, // patch
  deleteTask() {}, // delete
};
