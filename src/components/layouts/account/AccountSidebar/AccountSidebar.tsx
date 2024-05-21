import { ComponentPropsWithoutRef } from "react";
import { CgChevronDoubleLeft as Icon } from "react-icons/cg";

import { setSidebarCollapsed } from "../../../../store/ui/uiPersistSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

import cn from "classnames";
import styles from "./AccountSidebar.module.scss";

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
