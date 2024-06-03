import styles from "./AccountSidebar.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "../../../store";

import { Icon } from "../../kit";

import { setSidebarCollapsed } from "../../storePersist";

import { AccountMenu } from "../AccountMenu/AccountMenu";

export const AccountSidebar = ({
  className,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector(
    (state) => state.uiPersist.isSidebarCollapsed
  );

  const toggleSidebar = (): void => {
    dispatch(setSidebarCollapsed(!collapsed));
  };

  return (
    <div
      className={cn(className, styles._, {
        [styles.collapsed]: collapsed,
      })}
    >
      <button
        className={styles.toggleButton}
        type="button"
        onClick={toggleSidebar}
      >
        <Icon className={styles.icon} name="chevron_double" />
      </button>
      <AccountMenu />
    </div>
  );
};
