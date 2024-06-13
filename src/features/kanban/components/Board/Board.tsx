import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Board.module.scss";
import { BoardTaskList } from "../BoardTaskList/BoardTaskList";
import { IKanbanBoard, IKanbanLabel } from "../../types";

interface BoardProps extends ComponentPropsWithoutRef<"div"> {
  board: IKanbanBoard;
}

export const Board = ({
  board,
  className,
  children,
  ...props
}: BoardProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      {board.labels.length ? (
        board.labels.map((label) => (
          <BoardTaskList className={styles.list} label={label} key={label.id} />
        ))
      ) : (
        <p>empty</p>
      )}
    </div>
  );
};
