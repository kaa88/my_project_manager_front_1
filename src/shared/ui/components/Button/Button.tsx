import styles from "./Button.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";

import { Link } from "react-router-dom";

// TODO: add spinner & 'loading' prop

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a"> & {
    variant?: "primary" | "secondary" | "link";
    size?: "small" | "large";
    icon?: JSX.Element;
    active?: boolean;
    // loading?: boolean
  };

export const Button = memo(
  ({
    variant = "primary",
    size,
    href,
    className,
    children,
    icon,
    active,
    disabled,
    // loading,
    ...props
  }: ButtonProps): JSX.Element => {
    const btnProps = {
      className: cn(
        className,
        styles._,
        styles[variant],
        !!size && styles[size],
        active && styles.active,
        disabled && styles.disabled
      ),
      disabled,
      tabIndex: disabled ? -1 : undefined,
      ...props,
    };
    const btnInner = (
      <>
        {!!icon && <i>{icon}</i>}
        {!!children && <span>{children}</span>}
      </>
    );

    return href ? (
      <Link to={href} {...btnProps}>
        {btnInner}
      </Link>
    ) : (
      <button {...btnProps}>{btnInner}</button>
    );
  }
);
