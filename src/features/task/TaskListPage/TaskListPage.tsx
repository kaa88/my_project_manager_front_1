import styles from "./TaskListPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

interface TaskListPageProps extends ComponentPropsWithoutRef<"div"> {}

export const TaskListPage = ({
  className,
  children,
  ...props
}: TaskListPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      TaskListPage
    </div>
  );
};
