import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./TechnicalWorkAlert.module.scss";

interface TechnicalWorkAlertProps extends ComponentPropsWithoutRef<"div"> {}

export const TechnicalWorkAlert = ({
  className,
  ...props
}: TechnicalWorkAlertProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <p>
        Technical work is being carried out at the service. We apologize for the
        inconvenience.
      </p>
    </div>
  );
};
