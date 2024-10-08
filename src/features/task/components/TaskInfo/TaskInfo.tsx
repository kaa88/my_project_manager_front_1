import styles from "./TaskInfo.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import { ITask } from "../../types";

interface TaskInfoProps extends ComponentPropsWithoutRef<"div"> {
  task: ITask | null | undefined;
}

export const TaskInfo = ({
  task,
  className,
  ...props
}: TaskInfoProps): JSX.Element => {
  const [pending, setPending] = useState(false);

  return (
    <div className={cn(className, styles._)} {...props}>
      <p className={styles.id}>{`#${task?.id}`}</p>
      <p className={styles.date}>{`create date: ${task?.createDate || ""}`}</p>
      <p className={styles.date}>{`expire date: ${task?.expireDate || ""}`}</p>
      {/* <p className={styles.date}>{`close date: ${task?.closeDate || ""}`}</p> */}
      {/* <p className={styles.status}>{`status: ${
        task?.closeDate ? "closed" : "open"
      }`}</p> */}
      <p className={styles.label}>{`label: ${task?.label || ""}`}</p>
      <p className={styles.group}>{`group: ${task?.group || ""}`}</p>
      <p className={styles.creator}>{`creator: ${task?.creator || ""}`}</p>
      <p className={styles.assignee}>{`assignee: ${task?.assignee || ""}`}</p>
    </div>
  );
};
