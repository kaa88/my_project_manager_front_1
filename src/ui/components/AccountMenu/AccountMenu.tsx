import styles from "./AccountMenu.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import { useAppSelector } from "../../../store";

import { AccountMenuNav } from "./AccountMenuNav";

export const AccountMenu = ({
  className,
  onClick,
}: ComponentPropsWithoutRef<"a">): JSX.Element => {
  // const dispatch = useAppDispatch();

  // const closeMenu = (): void => {
  //   dispatch(setMenuActive(false));
  // };

  const collapsed = useAppSelector(
    (state) => state.uiPersist.isSidebarCollapsed
  );

  return (
    <div
      className={cn(className, styles._, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.header}>menu header</div>
      <div className={styles.scrollContainer}>
        <AccountMenuNav onClick={onClick} />
      </div>
    </div>
  );
};
