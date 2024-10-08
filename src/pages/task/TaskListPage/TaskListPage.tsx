import styles from "./TaskListPage.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
// import { api } from "../../api";
import { Link } from "react-router-dom";
import { ITask } from "../../../features/task";
import { PAGE, PageTitle } from "../../../shared/router";
import { Button, Spinner } from "../../../shared/ui";

interface TaskListPageProps extends ComponentPropsWithoutRef<"div"> {}

export const TaskListPage = ({
  className,
  children,
  ...props
}: TaskListPageProps): JSX.Element => {
  const [pending, setPending] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  // убрать логику отсюда, страница должна быть тонкой

  // useEffect(() => {
  //   setPending(true);
  //   api
  //     .getTaskList()
  //     .then((res) => {
  //       console.log(res);
  //       setTasks(res.data);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setPending(false));
  // }, []); // eslint-disable-line

  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        <p>URL FILTERS:</p>
        <p>Filters (one of): open, closed, all</p>
        <p>
          Filters (one of): priority, createDate, closeDate, dueDate, label,
          title, group
        </p>
        <p>Filters (one of): asc, desc</p>
        <p>Search</p>
        <p>Recent Searches</p>
        <p>Show #number# items</p>
        <Button href={PAGE.task}>New task</Button>
        <Spinner hidden={!pending} />

        {tasks.map((task) => (
          <div className={styles.task} key={task.id}>
            <Link to={`${PAGE.task}/${task.id}`}>{task.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
};
