import { ComponentPropsWithoutRef, memo } from "react";
import { NavLink } from "react-router-dom";

import { PAGES } from "../../../../router/const";

import cn from "classnames";
import styles from "./AccountMenu.module.scss";

import {
  CgUser,
  CgTrello,
  CgMenuLeftAlt,
  CgLoadbarDoc,
  CgReadme,
  CgCalendarDates,
} from "react-icons/cg";
import { useAppSelector } from "../../../../store/hooks";

interface NavItem {
  link: string;
  text: string;
  icon?: JSX.Element;
  isDisabled?: boolean;
  isDeveloping?: boolean;
  isBlank?: boolean;
}

const navItems: NavItem[] = [
  {
    link: PAGES.PROFILE,
    text: "Profile",
    icon: <CgUser />,
  },
  {
    link: PAGES.KANBAN,
    text: "Kanban",
    icon: <CgTrello />,
  },
  {
    link: PAGES.TASK_LIST,
    text: "Task list",
    icon: <CgMenuLeftAlt />,
  },
  {
    link: PAGES.TASK,
    text: "Task",
    icon: <CgLoadbarDoc />,
  },
  {
    link: PAGES.TUTORIAL,
    text: "Tutorial",
    icon: <CgReadme />,
  },
  {
    link: PAGES.WIKI,
    text: "Wiki",
    icon: <CgReadme />,
  },
  {
    link: PAGES.CALENDAR,
    text: "Calendar",
    icon: <CgCalendarDates />,
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
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    );
  }
);
