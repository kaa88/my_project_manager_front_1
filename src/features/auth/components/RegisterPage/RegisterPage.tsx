import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./RegisterPage.module.scss";
import { RegisterForm } from "../RegisterForm/RegisterForm";

interface RegisterPageProps extends ComponentPropsWithoutRef<"div"> {}

export const RegisterPage = ({
  className,
  children,
  ...props
}: RegisterPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <h2>Sign up</h2>
      <RegisterForm />
    </div>
  );
};
