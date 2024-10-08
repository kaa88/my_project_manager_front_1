import styles from "./CalendarPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import { PageTitle } from "../../../shared/router";

interface CalendarPageProps extends ComponentPropsWithoutRef<"div"> {}

export const CalendarPage = ({
  className,
  children,
  ...props
}: CalendarPageProps): JSX.Element => {
  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        CalendarPage
      </div>
    </>
  );
};
