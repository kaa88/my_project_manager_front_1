import styles from "./Task.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import { api } from "../../api";
import { ITask } from "../../types";
import { Button, InputText, Spinner } from "../../../../ui/kit";
import { TaskInfo } from "../TaskInfo/TaskInfo";
import { Subtasks } from "../../../subtask";
// import { Comments } from "../Comments/Comments";
// import { Attachments } from "../Attachments/Attachments";

interface TaskProps extends ComponentPropsWithoutRef<"div"> {
  id: ITask["id"];
}

export const Task = ({
  id,
  className,
  children,
  ...props
}: TaskProps): JSX.Element => {
  const [task, setTask] = useState<ITask | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (id) {
      setPending(true);
      api
        .getTask(id)
        .then((res) => {
          console.log(res);
          setTask(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setPending(false));
    }
  }, []); // eslint-disable-line

  return (
    <div className={cn([className, styles._])} {...props}>
      <header className={styles.header}>
        <h1>{task?.title}</h1>
        <Spinner hidden={!pending} />
        <Button>Edit</Button>
        <Button>Close</Button>
        <Button>Delete</Button>
      </header>

      <main className={styles.main}>
        <div
          className={styles.description}
        >{`description: ${task?.descr}`}</div>
        <div className={styles.subtasks}>
          <p>subtasks</p>
          <Subtasks taskId={id} />
        </div>
        <div className={styles.comments}>
          <p>comments</p>
          {/* <Comments task={task} /> */}
        </div>
        <div className={styles.attachments}>
          <p>attachments</p>
          {/* <Attachments task={task} /> */}
        </div>
      </main>

      <TaskInfo className={styles.info} task={task} />
    </div>
  );
};
