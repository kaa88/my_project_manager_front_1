import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./BoardTask.module.scss";
import { ITask } from "../../../task";
import { PAGE } from "../../../../shared/router";
import { Link } from "react-router-dom";
import { Icon } from "../../../../shared/ui";

interface BoardTaskProps extends ComponentPropsWithoutRef<"div"> {
  task: ITask;
}

export const BoardTask = ({
  task,
  className,
  ...props
}: BoardTaskProps): JSX.Element => {
  let priority = "";
  if (task.priority === "high") priority = "priority_high";
  if (task.priority === "top") priority = "priority_top";

  const isInfoVisible =
    !!task.attachments ||
    !!task.comments ||
    !!task.expireDate ||
    !!task.subtasks;

  return (
    <div
      className={cn([className, styles._, !!priority && styles[priority]])}
      {...props}
    >
      <div className={styles.header}>
        <Link className={styles.title} to={`${PAGE.task}/${task.id}`}>
          {task.title}
        </Link>
        <div className={styles.id}>{`#${task.id}`}</div>
      </div>

      {isInfoVisible && (
        <div className={styles.info}>
          {!!task.expireDate && (
            <div className={styles.expire}>
              <Icon className={styles.icon} name="watch" />
              <span>{task.expireDate}</span>
            </div>
          )}
          {!!task.subtasks && (
            <button
              className={styles.subtasks}
              onClick={() => alert("get subtasks")}
            >
              <Icon className={styles.icon} name="check_square" />
              <span>{task.subtasks}</span>
            </button>
          )}
          {!!task.comments && (
            <div className={styles.comments}>
              <Icon className={styles.icon} name="list2" />
            </div>
          )}
          {!!task.attachments && (
            <div className={styles.attachments}>
              <Icon className={styles.icon} name="file" />
            </div>
          )}
        </div>
      )}

      {!!task.assignee?.length && (
        <div
          className={styles.assignee}
          data-items={task.assignee.length > 3 ? 3 : task.assignee.length}
          title={task.assignee.join(" ")}
        >
          {task.assignee.map((item) => (
            <div className={styles.user} key={item}>
              {item.substring(0, 1).toUpperCase()}
            </div>
          ))}
        </div>
      )}

      {!!task.group?.length && (
        <div className={styles.groupList}>
          {task.group.map((item) => (
            <div className={styles.group} key={item}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
