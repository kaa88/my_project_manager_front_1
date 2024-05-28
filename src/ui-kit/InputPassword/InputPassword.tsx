import { forwardRef, useState } from "react";
import cn from "classnames";

import styles from "./InputPassword.module.scss";

import { CgEye as IconShow } from "react-icons/cg";
import { CgEyeAlt as IconHide } from "react-icons/cg";
import { InputText, InputTextProps } from "../";

interface InputPasswordProps extends InputTextProps {
  type?: "password";
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, style, disabled, ...props }, ref): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = (): void => setIsVisible(!isVisible);
    const innerType = isVisible && !disabled ? "text" : "password";

    return (
      <div className={cn(className, styles.wrapper)} style={style}>
        <InputText
          className={styles.input}
          type={innerType}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        <button
          className={styles.hideButton}
          type="button"
          onClick={toggleVisibility}
          disabled={disabled}
          tabIndex={-1}
        >
          {isVisible && !disabled ? <IconHide /> : <IconShow />}
        </button>
      </div>
    );
  }
);
