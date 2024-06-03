import styles from "./WarnMessage.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";

import { Icon } from "../Icon/Icon";

interface WarnMessageProps extends ComponentPropsWithoutRef<"div"> {
  value?: string;
  state?: "success" | "error";
}

export const WarnMessage = memo(
  ({
    className,
    value,
    state = "error",
    ...props
  }: WarnMessageProps): JSX.Element => {
    return (
      <div
        className={cn(
          className,
          styles._,
          !!state && styles[state],
          !value && styles.hidden
        )}
        {...props}
      >
        <Icon className={styles.icon} name="info" />
        <span className={styles.text}>{value}</span>
      </div>
    );
  }
);
