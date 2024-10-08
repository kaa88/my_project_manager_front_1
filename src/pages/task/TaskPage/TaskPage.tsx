import styles from "./TaskPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import { useParams } from "react-router";
import cn from "classnames";
import { Task, NewTask } from "../../../features/task";
import { PageTitle } from "../../../shared/router";

interface TaskPageProps extends ComponentPropsWithoutRef<"div"> {}

export const TaskPage = ({
  className,
  children,
  ...props
}: TaskPageProps): JSX.Element => {
  const { taskId } = useParams();

  console.log(taskId);

  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        {taskId ? <Task id={taskId} /> : <NewTask />}
      </div>
    </>
  );
};
