import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import { setSidebarCollapsed } from "../../../";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";

import styles from "./AccountSidebar.module.scss";

import { AccountMenu } from "../AccountMenu/AccountMenu";
import { Icon } from "../../../../../ui-kit";

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
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <Icon className={styles.icon} name="chevron_double" />
      </button>
      <AccountMenu />
    </div>
  );
};
