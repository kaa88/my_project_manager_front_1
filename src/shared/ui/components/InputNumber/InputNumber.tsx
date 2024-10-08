import styles from "./InputNumber.module.scss";
import { forwardRef, memo } from "react";
import cn from "classnames";

import { Icon } from "../Icon/Icon";
import { InputTextProps, InputText } from "../InputText/InputText";

interface InputNumberProps extends Omit<InputTextProps, "onChange"> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export const InputNumber = memo(
  forwardRef<HTMLInputElement, InputNumberProps>(
    (
      {
        className,
        step = 1,
        value = 0,
        onChange,
        disabled,
        ...props
      }: InputNumberProps,
      ref
    ): JSX.Element => {
      const setValue = (value: number): void => {
        let newValue = value;
        if (props.max !== undefined && value > props.max) newValue = props.max;
        if (props.min !== undefined && value < props.min) newValue = props.min;
        if (onChange) onChange(newValue);
      };

      return (
        <div className={cn(className, styles.wrapper)}>
          <div className={styles.controlls}>
            <button
              onClick={() => setValue(value + step)}
              type="button"
              tabIndex={-1}
              disabled={disabled}
            >
              <Icon className={styles.icon} name="chevron" />
            </button>
            <button
              onClick={() => setValue(value - step)}
              type="button"
              tabIndex={-1}
              disabled={disabled}
            >
              <Icon className={styles.icon} name="chevron" />
            </button>
          </div>
          <InputText
            {...props}
            className={styles.input}
            type="number"
            step={step}
            value={value}
            onChange={(e) => setValue(Number(e.currentTarget.value))}
            ref={ref}
            disabled={disabled}
          />
        </div>
      );
    }
  )
);
