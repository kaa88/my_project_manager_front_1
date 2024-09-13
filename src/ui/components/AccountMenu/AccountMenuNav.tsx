import styles from "./AccountMenu.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "../../../store";
import { PAGE } from "../../../router";

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
    link: PAGE.profile,
    text: "Profile",
    icon: "person",
  },
  {
    link: PAGE.kanbanBoardList,
    text: "Kanban",
    icon: "board",
  },
  {
    link: PAGE.taskList,
    text: "Task list",
    icon: "list",
  },
  {
    link: PAGE.tutorial,
    text: "Tutorial",
    icon: "book",
  },
  {
    link: PAGE.wiki,
    text: "Wiki",
    icon: "book",
  },
  {
    link: PAGE.calendar,
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
