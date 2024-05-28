import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";

import styles from "./AccountMenu.module.scss";

import { AccountMenuNav } from "./AccountMenuNav";

export const AccountMenu = ({
  className,
  onClick,
}: ComponentPropsWithoutRef<"a">): JSX.Element => {
  // const dispatch = useAppDispatch();

  // const closeMenu = (): void => {
  //   dispatch(setMenuActive(false));
  // };

  const { isSidebarCollapsed } = useAppSelector((state) => state.uiPersist);

  return (
    <div
      className={cn(className, styles._, {
        [styles.collapsed]: isSidebarCollapsed,
      })}
    >
      <div className={styles.header}>menu header</div>
      <div className={styles.scrollContainer}>
        <AccountMenuNav onClick={onClick} />
      </div>
    </div>
  );
};
