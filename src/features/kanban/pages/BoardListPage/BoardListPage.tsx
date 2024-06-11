import styles from "./BoardListPage.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import { Button } from "../../../../ui/kit";
import { PAGES } from "../../../../router";
import { ITask } from "../../../task";
import { kanbanApi } from "../../kanbanApi";

interface BoardListPageProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardListPage = ({
  className,
  children,
  ...props
}: BoardListPageProps): JSX.Element => {
  const [pending, setPending] = useState(false);
  const [boards, setBoards] = useState<ITask[]>([]);

  useEffect(() => {
    setPending(true);
    kanbanApi
      .getAll()
      .then((res) => {
        console.log(res);
        setBoards(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setPending(false));
  }, []); // eslint-disable-line

  return (
    <div className={cn([className, styles._])} {...props}>
      {boards.map((board) => (
        <Button href={`${PAGES.KANBAN_BOARD}/${board.id}`} key={board.id}>
          board {board.title}
        </Button>
      ))}
    </div>
  );
};
