import styles from "./BoardPage.module.scss";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useState,
} from "react";
import cn from "classnames";
import { Board } from "../../components/Board/Board";
import { Button } from "../../../../ui/kit";
import { PAGE } from "../../../../router";
import { useParams } from "react-router";
import { IKanbanBoard, IKanbanLabel } from "../../types";
import { api } from "../../api";

interface BoardPageProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardPage = ({
  className,
  ...props
}: BoardPageProps): JSX.Element => {
  const { boardId } = useParams();

  const [board, setBoard] = useState<IKanbanBoard | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (boardId) {
      setPending(true);
      api
        .get(boardId)
        .then((res) => {
          console.log(res);
          setBoard(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setPending(false));
    }
  }, []); // eslint-disable-line

  return (
    <div className={cn([className, styles._])} {...props}>
      <Button href={PAGE.kanbanBoardList}>Board list</Button>
      <Button href={`${PAGE.kanbanBoardSettings}/${boardId}`}>
        Edit board
      </Button>

      {!!board && <Board board={board} />}
    </div>
  );
};
