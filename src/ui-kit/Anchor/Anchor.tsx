import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import styles from "./Anchor.module.scss";

interface AnchorProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  children?: undefined;
}

export const Anchor = ({
  className,
  name,
  ...props
}: AnchorProps): JSX.Element => {
  return <span className={cn([className, styles._])} id={name} {...props} />;
};
