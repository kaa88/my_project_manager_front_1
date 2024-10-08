import styles from "./BoardPage.module.scss";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useState,
} from "react";
import cn from "classnames";
import { useParams } from "react-router";
import { IKanbanBoard, Board } from "../../../features/kanban";
import { PAGE, PageTitle } from "../../../shared/router";
import { Button } from "../../../shared/ui";
// import { api } from "../../api";

interface BoardPageProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardPage = ({
  className,
  ...props
}: BoardPageProps): JSX.Element => {
  const { boardId } = useParams();

  const [board, setBoard] = useState<IKanbanBoard | null>(null);
  const [pending, setPending] = useState(false);

  // убрать логику из страницы

  // useEffect(() => {
  //   if (boardId) {
  //     setPending(true);
  //     api
  //       .get(boardId)
  //       .then((res) => {
  //         console.log(res);
  //         setBoard(res.data);
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(() => setPending(false));
  //   }
  // }, []); // eslint-disable-line

  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        <Button href={PAGE.boardList}>Board list</Button>
        <Button href={`${PAGE.boardSettings}/${boardId}`}>Edit board</Button>

        {!!board && <Board board={board} />}
      </div>
    </>
  );
};
