import styles from "./AccountMenu.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "../../../store";
import { PAGES } from "../../../router";

import { Icon, IconName } from "../../kit";

interface NavItem {
  link: string;
  text: string;
  icon?: IconName;
  isDisabled?: boolean;
  isDeveloping?: boolean;
  isBlank?: boolean;
}

const navItems: NavItem[] = [
  {
    link: PAGES.PROFILE,
    text: "Profile",
    icon: "person",
  },
  {
    link: PAGES.KANBAN,
    text: "Kanban",
    icon: "board",
  },
  {
    link: PAGES.TASK_LIST,
    text: "Task list",
    icon: "list",
  },
  {
    link: PAGES.TUTORIAL,
    text: "Tutorial",
    icon: "book",
  },
  {
    link: PAGES.WIKI,
    text: "Wiki",
    icon: "book",
  },
  {
    link: PAGES.CALENDAR,
    text: "Calendar",
    icon: "calendar",
  },
];

export const AccountMenuNav = memo(
  ({ className, onClick }: ComponentPropsWithoutRef<"a">): JSX.Element => {
    const collapsed = useAppSelector(
      (state) => state.uiPersist.isSidebarCollapsed
    );

    return (
      <nav className={cn(className, styles.nav)}>
        {navItems.map((item) => (
          <NavLink
            className={cn(styles.navLink, {
              [styles.collapsed]: collapsed,
            })}
            to={item.link}
            title={collapsed ? item.text : ""}
            key={item.link}
            onClick={onClick}
          >
            {!!item.icon && <Icon className={styles.icon} name={item.icon} />}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    );
  }
);
