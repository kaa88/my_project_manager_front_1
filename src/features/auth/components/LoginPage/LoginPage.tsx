import styles from "./LoginPage.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import { LoginForm } from "../LoginForm/LoginForm";

interface LoginPageProps extends ComponentPropsWithoutRef<"div"> {}

export const LoginPage = ({
  className,
  children,
  ...props
}: LoginPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <h2>Log in</h2>
      <LoginForm />
    </div>
  );
};
