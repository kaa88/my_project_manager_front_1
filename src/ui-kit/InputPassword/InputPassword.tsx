import { forwardRef, memo, useState } from "react";
import cn from "classnames";

import styles from "./InputPassword.module.scss";

import { InputText, InputTextProps, Icon } from "../";

interface InputPasswordProps extends InputTextProps {
  type?: "password";
}

export const InputPassword = memo(
  forwardRef<HTMLInputElement, InputPasswordProps>(
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
            <Icon
              className={styles.icon}
              name={isVisible && !disabled ? "eye_closed" : "eye"}
            />
          </button>
        </div>
      );
    }
  )
);
