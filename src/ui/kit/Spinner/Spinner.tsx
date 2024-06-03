import styles from "./Spinner.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";

import { Icon } from "../Icon/Icon";

interface SpinnerProps extends ComponentPropsWithoutRef<"div"> {
  size?: "small" | undefined;
  children?: undefined;
}

export const Spinner = memo(
  ({ className, hidden, size, ...props }: SpinnerProps): JSX.Element => {
    return (
      <div
        className={cn(
          className,
          styles._,
          hidden && styles.hidden,
          !!size && styles[size]
        )}
        {...props}
      >
        <div className={styles.wrapper}>
          <Icon className={styles.icon} name="spinner" />
          <Icon className={styles.icon} name="spinner2" />
        </div>
      </div>
    );
  }
);
