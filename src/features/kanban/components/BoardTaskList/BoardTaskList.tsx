import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./BoardTaskList.module.scss";
import { IKanbanLabel } from "../../kanban.types";
import { BoardTask } from "../BoardTask/BoardTask";
import { Spinner } from "../../../../ui/kit";
import { ITask, taskApi } from "../../../task";
import { kanbanApi } from "../../kanbanApi";

interface BoardTaskListProps extends ComponentPropsWithoutRef<"div"> {
  title: IKanbanLabel["title"];
}

export const BoardTaskList = ({
  title,
  className,
  ...props
}: BoardTaskListProps): JSX.Element => {
  // здесь запрашиваются таски с фильтрацией по группам и с постраничным выводом (10шт)

  const [pending, setPending] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setPending(true);
    kanbanApi
      .getTasks()
      .then((res) => {
        console.log(res);
        setTasks(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setPending(false));
  }, []); // eslint-disable-line

  return (
    <div className={cn([className, styles._])} {...props}>
      <header className={styles.header}>{title}</header>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <BoardTask className={styles.task} task={task} key={task.id + 1} />
        ))}
        {tasks.map((task) => (
          <BoardTask className={styles.task} task={task} key={task.id + 2} />
        ))}
        {tasks.map((task) => (
          <BoardTask className={styles.task} task={task} key={task.id + 3} />
        ))}
      </div>
      <Spinner className={styles.loader} hidden={!pending} />
    </div>
  );
};
