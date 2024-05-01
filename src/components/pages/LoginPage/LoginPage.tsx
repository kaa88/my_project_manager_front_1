import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./LoginPage.module.scss";

interface LoginPageProps extends ComponentPropsWithoutRef<"div"> {}

export const LoginPage = ({
  className,
  children,
  ...props
}: LoginPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      LoginPage
    </div>
  );
};
