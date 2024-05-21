import { ComponentPropsWithoutRef, useEffect, useState } from "react";

import cn from "classnames";
import styles from "./AccountHeader.module.scss";

import { BurgerMenu } from "../../../ui/BurgerMenu/BurgerMenu";
import { CgMenuGridR as MenuIcon } from "react-icons/cg";
import { Logo } from "../../../ui/Logo/Logo";
import { AccountMenu } from "../AccountMenu/AccountMenu";

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
    <header className={cn(className, styles._)}>
      <button className={styles.menuButton} type="button" onClick={openMenu}>
        <MenuIcon />
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
    </header>
  );
};
