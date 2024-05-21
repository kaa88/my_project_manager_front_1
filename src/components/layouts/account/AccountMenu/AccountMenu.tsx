import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setMenuActive } from "../../../../store/ui/uiSlice";

import cn from "classnames";
import styles from "./AccountMenu.module.scss";

import { AccountMenuNav } from "./AccountMenuNav";
import { ComponentPropsWithoutRef } from "react";

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
