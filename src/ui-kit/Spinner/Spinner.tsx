import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";

import styles from "./Spinner.module.scss";

import { CgSpinner as Icon, CgSpinnerAlt as IconAlt } from "react-icons/cg";

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
          <Icon />
          <IconAlt />
        </div>
      </div>
    );
  }
);
