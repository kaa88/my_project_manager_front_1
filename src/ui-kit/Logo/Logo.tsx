import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Logo.module.scss";

interface LogoProps extends ComponentPropsWithoutRef<"div"> {}

export const Logo = ({
  className,
  children,
  ...props
}: LogoProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      Logo
    </div>
  );
};
