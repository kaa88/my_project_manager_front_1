import styles from "./Attachments.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";
// import { apiTask } from "../../task/api";
import { ITask } from "../../task/types";
import { Button, InputText, Spinner } from "../../../ui/kit";

interface AttachmentsProps extends ComponentPropsWithoutRef<"div"> {
  task: ITask | null | undefined;
}

export const Attachments = ({
  task,
  className,
  children,
  ...props
}: AttachmentsProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      {task?.attachments}
    </div>
  );
};
