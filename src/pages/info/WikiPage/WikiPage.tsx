import styles from "./WikiPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import { PageTitle } from "../../../shared/router";

interface WikiPageProps extends ComponentPropsWithoutRef<"div"> {}

export const WikiPage = ({
  className,
  children,
  ...props
}: WikiPageProps): JSX.Element => {
  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        WikiPage
      </div>
    </>
  );
};
