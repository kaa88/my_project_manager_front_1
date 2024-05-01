import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./ProfilePage.module.scss";

interface ProfilePageProps extends ComponentPropsWithoutRef<"div"> {}

export const ProfilePage = ({
  className,
  children,
  ...props
}: ProfilePageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      ProfilePage
    </div>
  );
};
