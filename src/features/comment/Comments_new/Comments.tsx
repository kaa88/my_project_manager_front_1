import styles from "./Comments.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
// import { apiTask } from "../../task/api";
import { ITask } from "../../task/types";
import { Button, InputText, Spinner } from "../../../ui/kit";

interface CommentsProps extends ComponentPropsWithoutRef<"div"> {
  task: ITask | null | undefined;
}

export const Comments = ({
  task,
  className,
  children,
  ...props
}: CommentsProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      {task?.comments}
    </div>
  );
};
