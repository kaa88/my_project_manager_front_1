import styles from "./BoardListPage.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import { ITask } from "../../../features/task";
import { PAGE, PageTitle } from "../../../shared/router";
import { Button } from "../../../shared/ui";
// import { api } from "../../api";

interface BoardListPageProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardListPage = ({
  className,
  children,
  ...props
}: BoardListPageProps): JSX.Element => {
  const [pending, setPending] = useState(false);
  const [boards, setBoards] = useState<ITask[]>([]);

  // убрать логику из страницы

  // useEffect(() => {
  //   setPending(true);
  //   api
  //     .getAll()
  //     .then((res) => {
  //       console.log(res);
  //       setBoards(res.data);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setPending(false));
  // }, []); // eslint-disable-line

  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        {boards.map((board) => (
          <Button href={`${PAGE.board}/${board.id}`} key={board.id}>
            board {board.title}
          </Button>
        ))}
      </div>
    </>
  );
};
