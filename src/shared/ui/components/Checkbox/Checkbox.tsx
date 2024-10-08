import styles from "./Checkbox.module.scss";
import { ComponentPropsWithoutRef, forwardRef, memo, useId } from "react";
import cn from "classnames";

import { Icon } from "../Icon/Icon";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  variant?: "checkbox" | "switch";
  clickableLabel?: boolean;
  state?: "default" | "success" | "error";
  disabled?: boolean;
}

export const Checkbox = memo(
  forwardRef<HTMLInputElement, CheckboxProps>(
    (
      {
        variant = "checkbox",
        clickableLabel,
        state,
        disabled,
        className,
        children,
        ...props
      },
      ref
    ): JSX.Element => {
      const elemId = useId();

      return (
        <div
          className={cn(
            className,
            styles.wrapper,
            styles[variant],
            styles[state || ""],
            disabled && styles.disabled
          )}
        >
          <div className={styles.box}>
            <input
              id={clickableLabel ? elemId : undefined}
              type="checkbox"
              ref={ref}
              disabled={disabled}
              {...props}
            />
            {variant === "switch" ? (
              <div className={styles.customSwitch}>
                <b></b>
              </div>
            ) : (
              <div className={styles.customCheckbox}>
                <Icon className={styles.icon} name="check" />
              </div>
            )}
          </div>

          <label htmlFor={elemId}>{children}</label>
        </div>
      );
    }
  )
);
