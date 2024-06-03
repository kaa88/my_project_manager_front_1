import styles from "./ModalAlert.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";

// TODO: delete ???

interface ModalAlertProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  text?: string | JSX.Element;
  button?: JSX.Element;
}

export const ModalAlert = memo(
  ({ className = "", title, text, button, children }: ModalAlertProps) => {
    return (
      <div className={`${className} ${styles.wrapper}`}>
        {!!title && <h3 className={styles.title}>{title}</h3>}
        {!!text && <p className={styles.text}>{text}</p>}
        {children}
        {button}
      </div>
    );
  }
);
