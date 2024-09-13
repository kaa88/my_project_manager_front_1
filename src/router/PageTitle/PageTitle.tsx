import { ComponentPropsWithoutRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { PAGE, PAGE_NAME } from "../const";

type Indexed = { [key: string]: string };

const p = PAGE as Indexed;
const pn = PAGE_NAME as Indexed;

const siteName = "my_project_manager";
const divider = " | ";

interface PageTitleProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
}

export const PageTitle = ({ title, children }: PageTitleProps) => {
  const location = useLocation();

  useEffect(() => {
    let name = title || "";

    if (title === undefined) {
      for (let key in p) {
        if (location.pathname.match(p[key])) {
          if (
            location.pathname.length > 1 ||
            (location.pathname.length <= 1 && !name)
          ) {
            name = pn[key] || "";
          }
        }
      }
    }

    document.title = name ? name + divider + siteName : siteName;
  }, [location.pathname]);

  return <>{children || <Outlet />}</>;
};
