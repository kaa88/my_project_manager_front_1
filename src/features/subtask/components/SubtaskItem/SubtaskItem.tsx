import styles from "./SubtaskItem.module.scss";
import {
  ChangeEvent,
  ComponentPropsWithRef,
  KeyboardEvent,
  forwardRef,
  memo,
  useLayoutEffect,
  useState,
} from "react";
import cn from "classnames";

import { AutoResizeTextarea, Icon } from "../../../../ui/kit";

import { ISubtaskItem } from "../../types";

interface SubtaskItemProps extends ComponentPropsWithRef<"div"> {
  item: ISubtaskItem;
  onUpdate: (subtask: ISubtaskItem) => void;
  onDelete: (id: ISubtaskItem["id"]) => void;
  dragHandleProps?: any;
  dragging?: boolean;
}

export const SubtaskItem = memo(
  forwardRef<HTMLDivElement, SubtaskItemProps>(
    (
      {
        item,
        onUpdate,
        onDelete,
        dragHandleProps,
        dragging,
        className,
        ...props
      },
      ref
    ) => {
      const [value, setValue] = useState<string | null>(null);
      if (value === null) setValue(item.title);
      const [isConfirmUpdate, setIsConfirmUpdate] = useState(false);

      const updateTitle = (value: string | number) => {
        value = value.toString();
        setValue(null);
        onUpdate({ ...item, title: value });
      };
      const updateStatus = () => {
        onUpdate({ ...item, isDone: !item.isDone });
      };
      const deleteTask = () => {
        onDelete(item.id);
      };

      const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
      };

      const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          setValue(value ? value.trimEnd() : value);
          e.currentTarget.blur();
        }
        if (e.key === "Escape") {
          setValue(item.title);
          e.currentTarget.blur();
        }
      };

      const handleBlur = () => {
        setValue((prevState) => {
          if (prevState === item.title) return prevState;
          setIsConfirmUpdate(true);
          return prevState ? prevState.trimEnd() : prevState;
        });
      };

      useLayoutEffect(() => {
        if (isConfirmUpdate) {
          setIsConfirmUpdate(false);
          setValue(null);
          if (value !== item.title && value !== null) updateTitle(value);
        }
      }, [isConfirmUpdate]); // eslint-disable-line

      return (
        <div
          className={cn(
            className,
            styles._,
            item.isDone && styles.status_done,
            dragging && styles.dragging
          )}
          {...props}
          ref={ref}
        >
          <div className={styles.dragButton} {...dragHandleProps}>
            <Icon name="menu" />
          </div>
          <button className={styles.subtaskStatusButton} onClick={updateStatus}>
            <Icon name="check" />
          </button>
          <AutoResizeTextarea
            className={styles.subtaskTitle}
            wrapperClassName={styles.autoResizeTextareaWrapper}
            value={value || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
          <button className={styles.deleteButton} onClick={deleteTask}>
            <Icon name="cross" />
          </button>
        </div>
      );
    }
  )
);
