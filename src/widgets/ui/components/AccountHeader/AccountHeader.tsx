import styles from "./AccountHeader.module.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import cn from "classnames";

import { AccountMenu } from "../AccountMenu/AccountMenu";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Logo } from "../Logo/Logo";
import { Icon } from "../../../../shared/ui";

export const AccountHeader = ({
  className,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const openMenu = () => setIsMenuActive(true);
  const closeMenu = () => setIsMenuActive(false);

  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []); // eslint-disable-line

  return (
    <div className={cn(className, styles._)}>
      <button className={styles.menuButton} type="button" onClick={openMenu}>
        <Icon name="menu" />
      </button>
      <BurgerMenu active={isMenuActive} onClose={closeMenu}>
        <AccountMenu onClick={closeMenu} />
      </BurgerMenu>

      <Logo className={styles.logo} />
      <div className={styles.name}>Create_Task</div>
      <div className={styles.name}>Search</div>
      <div className={styles.name}>Settings</div>
      <div className={styles.name}>Notifications</div>
      <div className={styles.name}>Profile</div>
      <div className={styles.name}>Help</div>
    </div>
  );
};
