import { ComponentProps } from "react";
import styles from "./ErrorPage.module.scss";

interface ErrorPageProps extends ComponentProps<"div"> {}

const ErrorPage = ({ className, children, ...props }: ErrorPageProps) => {
  return (
    <div className={`${className} ${styles.default}`} {...props}>
      {children}
    </div>
  );
};
export default ErrorPage;
