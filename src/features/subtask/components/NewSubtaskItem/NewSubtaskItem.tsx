import styles from "./NewSubtaskItem.module.scss";
import {
  useState,
  useLayoutEffect,
  ChangeEvent,
  KeyboardEvent,
  ComponentPropsWithoutRef,
  memo,
} from "react";
import cn from "classnames";

import { AutoResizeTextarea, Icon } from "../../../../ui/kit";

import { ISubtaskItem } from "../../subtask.types";

interface NewSubtaskProps extends ComponentPropsWithoutRef<"div"> {
  onCreate: (title: ISubtaskItem["title"]) => void;
}

export const NewSubtaskItem = memo(
  ({ onCreate, className, ...props }: NewSubtaskProps) => {
    const defaultValue = "";
    const [value, setValue] = useState(defaultValue);
    const [isComfirm, setIsConfirm] = useState(false);

    const confirmUpdate = () => {
      setIsConfirm(true);
    };
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (value !== defaultValue) confirmUpdate();
      }
      if (e.key === "Escape") {
        setValue(defaultValue);
        e.currentTarget.blur();
      }
    };
    useLayoutEffect(() => {
      if (isComfirm) {
        const trimmedValue = value.trimEnd();
        if (trimmedValue !== defaultValue) onCreate(trimmedValue);
        setValue(defaultValue);
        setIsConfirm(false);
      }
    }, [isComfirm]); // eslint-disable-line

    return (
      <div className={cn(className, styles._)} {...props}>
        <Icon className={styles.newIcon} name="cross" />
        <AutoResizeTextarea
          className={styles.title}
          wrapperClassName={styles.autoResizeTextareaWrapper}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Add subtask"
        />
        <button
          className={styles.confirmButton}
          onClick={confirmUpdate}
          disabled={value === defaultValue}
        >
          <Icon name="check" />
        </button>
      </div>
    );
  }
);
