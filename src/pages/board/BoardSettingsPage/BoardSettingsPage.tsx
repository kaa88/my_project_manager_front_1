import styles from "./BoardSettingsPage.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
import { useParams } from "react-router";
import { IKanbanBoard } from "../../../features/kanban";
import { Button } from "../../../shared/ui";
import { PageTitle } from "../../../shared/router";
// import { api } from "../../api";

interface BoardSettingsPageProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardSettingsPage = ({
  className,
  ...props
}: BoardSettingsPageProps): JSX.Element => {
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
        <p>функционал как у сабтасок (add, edit, delete, drag)</p>
        <p>выбор цвета</p>
        <p>при удалении - модал, "точно удалить?" и "куда перенести таски"</p>
        <br />
        <p>Labels:</p>
        {!!board &&
          board.labels.map((label) => (
            <div className={styles.label} key={label.id}>
              {label.title}
            </div>
          ))}

        <Button>Save changes ???</Button>
        <Button variant="secondary">Back</Button>
      </div>
    </>
  );
};
