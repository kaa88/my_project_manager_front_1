import styles from "./TaskPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import { useParams } from "react-router";
import cn from "classnames";
import { Task } from "../../components/Task/Task";
import { NewTask } from "../../components/NewTask/NewTask";

interface TaskPageProps extends ComponentPropsWithoutRef<"div"> {}

export const TaskPage = ({
  className,
  children,
  ...props
}: TaskPageProps): JSX.Element => {
  const { taskId } = useParams();

  console.log(taskId);

  return (
    <div className={cn([className, styles._])} {...props}>
      {taskId ? <Task id={taskId} /> : <NewTask />}
    </div>
  );
};
