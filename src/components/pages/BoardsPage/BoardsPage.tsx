import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./BoardsPage.module.scss";

interface BoardsPageProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardsPage = ({
  className,
  children,
  ...props
}: BoardsPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      BoardsPage
    </div>
  );
};
