import { ComponentPropsWithRef, forwardRef } from "react";
import cn from "classnames";

import styles from "./InputText.module.scss";

export interface InputTextProps extends ComponentPropsWithRef<"input"> {
  type?: "text" | "email" | "password" | "number";
  state?: "success" | "error";
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ type = "text", state, className, ...props }, ref): JSX.Element => {
    return (
      <input
        className={cn(className, styles.input, !!state && styles[state])}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
