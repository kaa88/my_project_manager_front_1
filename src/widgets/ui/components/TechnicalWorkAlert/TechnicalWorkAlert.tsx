import styles from "./TechnicalWorkAlert.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

const ENABLED = process.env.REACT_APP_IS_TECHNICAL_WORK === "true";

interface TechnicalWorkAlertProps extends ComponentPropsWithoutRef<"div"> {}

export const TechnicalWorkAlert = ({
  className,
  ...props
}: TechnicalWorkAlertProps): JSX.Element | null => {
  return ENABLED ? (
    <div className={cn([className, styles._])} {...props}>
      <p>
        Technical work is being carried out at the service. We apologize for the
        inconvenience.
      </p>
    </div>
  ) : null;
};
