import styles from "./TaskPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

interface TaskPageProps extends ComponentPropsWithoutRef<"div"> {}

export const TaskPage = ({
  className,
  children,
  ...props
}: TaskPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      TaskPage
    </div>
  );
};
