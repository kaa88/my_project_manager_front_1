import { ComponentPropsWithoutRef, memo } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "../../../../../store/hooks";
import { PAGES } from "../../../../../router/const";

import styles from "./AccountMenu.module.scss";

import { Icon, icons } from "../../../../../ui-kit";

interface NavItem {
  link: string;
  text: string;
  icon?: keyof typeof icons;
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
    link: PAGES.TASK,
    text: "Task",
    icon: "task",
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
    const { isSidebarCollapsed } = useAppSelector((state) => state.uiPersist);

    return (
      <nav className={cn(className, styles.nav)}>
        {navItems.map((item) => (
          <NavLink
            className={cn(styles.navLink, {
              [styles.collapsed]: isSidebarCollapsed,
            })}
            to={item.link}
            title={isSidebarCollapsed ? item.text : ""}
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
