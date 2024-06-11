import styles from "./BoardSettingsPage.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import { useParams } from "react-router";
import { IKanbanBoard } from "../../kanban.types";
import { kanbanApi } from "../../kanbanApi";

interface BoardSettingsPageProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardSettingsPage = ({
  className,
  ...props
}: BoardSettingsPageProps): JSX.Element => {
  const { boardId } = useParams();

  const [board, setBoard] = useState<IKanbanBoard | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (boardId) {
      setPending(true);
      kanbanApi
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
      <p>Labels:</p>
      {!!board &&
        board.labels.map((label) => (
          <div className={styles.label} key={label.id}>
            {label.title}
          </div>
        ))}
    </div>
  );
};
