import styles from "./TutorialPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

interface TutorialPageProps extends ComponentPropsWithoutRef<"div"> {}

export const TutorialPage = ({
  className,
  children,
  ...props
}: TutorialPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      TutorialPage
    </div>
  );
};
