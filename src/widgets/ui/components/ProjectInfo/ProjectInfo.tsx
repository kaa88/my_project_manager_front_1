import styles from "./ProjectInfo.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

const URL_PLACEHOLDER = "#";
const AUTHOR_URL = process.env.REACT_APP_AUTHOR_URL || URL_PLACEHOLDER;
const PROJECT_URL = process.env.REACT_APP_PROJECT_URL || URL_PLACEHOLDER;

export const ProjectInfo = ({
  className,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  return (
    <div className={cn(className, styles._)}>
      <div className={styles.item}>2024</div>

      <div className={styles.item}>
        <a href={AUTHOR_URL} target="_blank" rel="noreferrer">
          About author
        </a>
      </div>

      <div className={styles.item}>
        <a href={PROJECT_URL} target="_blank" rel="noreferrer">
          About build version
        </a>
      </div>
    </div>
  );
};
