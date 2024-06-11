import styles from "./NewTask.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import { Button, InputText } from "../../../../ui/kit";
// import { Subtasks } from "../Subtasks/Subtasks";
// import { Comments } from "../Comments/Comments";
// import { Attachments } from "../Attachments/Attachments";

interface NewTaskProps extends ComponentPropsWithoutRef<"div"> {}

export const NewTask = ({
  className,
  children,
  ...props
}: NewTaskProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <h1>NewTask</h1>
      <label>title</label>
      <InputText readOnly />
      <label>description</label>
      <InputText readOnly />
      <label>due date</label>
      <InputText readOnly />
      <label>assignee</label>
      <InputText readOnly />
      <label>priority</label>
      <InputText readOnly />
      <label>status</label>
      <InputText readOnly />
      <label>groups</label>
      <InputText readOnly />

      <div className={styles.subtasks}>
        <p>subtasks</p>
        {/* <Subtasks task={null} /> */}
      </div>
      <div className={styles.comments}>
        <p>comments</p>
        {/* <Comments task={null} /> */}
      </div>
      <div className={styles.attachments}>
        <p>attachments</p>
        {/* <Attachments task={null} /> */}
      </div>

      <Button>create</Button>
      <Button variant="secondary">cancel</Button>
    </div>
  );
};
