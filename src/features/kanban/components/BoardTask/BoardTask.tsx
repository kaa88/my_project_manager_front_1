import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./BoardTask.module.scss";
import { ITask } from "../../../task";
import { Button } from "../../../../ui/kit";
import { PAGES } from "../../../../router";

interface BoardTaskProps extends ComponentPropsWithoutRef<"div"> {
  task: ITask;
}

export const BoardTask = ({
  task,
  className,
  ...props
}: BoardTaskProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <Button variant="link" href={`${PAGES.TASK}/${task.id}`}>
        {task.title}
      </Button>
      {/* <div className={styles.title}></div> */}
      <div className={styles.description}>{task.descr}</div>
    </div>
  );
};
