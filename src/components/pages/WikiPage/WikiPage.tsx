import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./WikiPage.module.scss";

interface WikiPageProps extends ComponentPropsWithoutRef<"div"> {}

export const WikiPage = ({
  className,
  children,
  ...props
}: WikiPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      WikiPage
    </div>
  );
};
