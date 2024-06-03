import styles from "./KanbanPage.module.scss";
import { ChangeEvent, ComponentPropsWithoutRef, useState } from "react";
import cn from "classnames";

interface KanbanPageProps extends ComponentPropsWithoutRef<"div"> {}

export const KanbanPage = ({
  className,
  children,
  ...props
}: KanbanPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      KanbanPage
    </div>
  );
};
