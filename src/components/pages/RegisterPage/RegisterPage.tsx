import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./RegisterPage.module.scss";

interface RegisterPageProps extends ComponentPropsWithoutRef<"div"> {}

export const RegisterPage = ({
  className,
  children,
  ...props
}: RegisterPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      RegisterPage
    </div>
  );
};
