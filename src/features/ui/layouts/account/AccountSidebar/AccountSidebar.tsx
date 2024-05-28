import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import { setSidebarCollapsed } from "../../../";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";

import styles from "./AccountSidebar.module.scss";

import { CgChevronDoubleLeft as Icon } from "react-icons/cg";

import { AccountMenu } from "../AccountMenu/AccountMenu";

export const AccountSidebar = ({
  className,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isSidebarCollapsed } = useAppSelector((state) => state.uiPersist);

  const toggleSidebar = (): void => {
    dispatch(setSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div
      className={cn(className, styles._, {
        [styles.collapsed]: isSidebarCollapsed,
      })}
    >
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <Icon className={styles.icon} />
      </button>
      <AccountMenu />
    </div>
  );
};
