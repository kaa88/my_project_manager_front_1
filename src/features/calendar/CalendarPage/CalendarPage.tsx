import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./CalendarPage.module.scss";

interface CalendarPageProps extends ComponentPropsWithoutRef<"div"> {}

export const CalendarPage = ({
  className,
  children,
  ...props
}: CalendarPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      CalendarPage
    </div>
  );
};
