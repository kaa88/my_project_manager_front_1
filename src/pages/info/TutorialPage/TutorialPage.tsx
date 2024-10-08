import styles from "./TutorialPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import { PageTitle } from "../../../shared/router";

interface TutorialPageProps extends ComponentPropsWithoutRef<"div"> {}

export const TutorialPage = ({
  className,
  children,
  ...props
}: TutorialPageProps): JSX.Element => {
  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        TutorialPage
      </div>
    </>
  );
};
