import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./BoardTaskList.module.scss";
import { IKanbanLabel } from "../../types";
import { BoardTask } from "../BoardTask/BoardTask";
import { Spinner } from "../../../../ui/kit";
import { ITask, api as taskApi } from "../../../task";

interface BoardTaskListProps extends ComponentPropsWithoutRef<"div"> {
  label: IKanbanLabel;
}

export const BoardTaskList = ({
  label,
  className,
  ...props
}: BoardTaskListProps): JSX.Element => {
  // здесь запрашиваются таски с фильтрацией по группам и с постраничным выводом (10шт)

  const [pending, setPending] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setPending(true);
    taskApi
      .getTaskList()
      .then((res) => {
        console.log(res);
        setTasks(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setPending(false));
  }, []); // eslint-disable-line

  return (
    <div className={cn([className, styles._])} {...props}>
      <header
        className={styles.header}
        style={label.color ? { borderColor: label.color } : undefined}
      >
        <p className={styles.labelName}>{label.title}</p>
        <p className={styles.taskCount}>{tasks.length}</p>
      </header>

      <div className={styles.taskList}>
        {tasks.map((task) => {
          return label.id === task.label ? (
            <BoardTask className={styles.task} task={task} key={task.id} />
          ) : null;
        })}

        <Spinner className={styles.loader} hidden={!pending} />
        <p>pagination</p>
      </div>
    </div>
  );
};
