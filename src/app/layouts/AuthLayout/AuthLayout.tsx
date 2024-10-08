import styles from "./AuthLayout.module.scss";
import {
  useLayoutEffect,
  ComponentPropsWithoutRef,
  useRef,
  useState,
} from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import cn from "classnames";
import { cssVariable } from "../../../shared/ui";
import { ProjectInfo } from "../../../widgets/ui/components/ProjectInfo/ProjectInfo";
import { TechnicalWorkAlert } from "../../../widgets/ui/components/TechnicalWorkAlert/TechnicalWorkAlert";

interface AuthLayoutProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "error";
}

export const AuthLayout = ({
  variant,
  children,
}: AuthLayoutProps): JSX.Element => {
  // const navigate = useNavigate();
  // const authStatuses = useAppSelector((state) => state.authStatus);
  // const auth = useAppSelector((state) => state.auth);
  // const { isLogin } = auth.auth;
  // const { logOutPath } = auth;

  // AuthRedirect

  const headerRef = useRef<HTMLDivElement>(null);

  const calcHeaderHeight = () => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      cssVariable.set("header-height", height + "px");
    }
  };

  useLayoutEffect(() => {
    calcHeaderHeight();
    window.addEventListener("resize", calcHeaderHeight);
    return () => window.removeEventListener("resize", calcHeaderHeight);
  }, []); // eslint-disable-line

  return (
    <div className={cn(styles._, !!variant && styles[variant])}>
      <div className={styles.bg}>
        <div></div>
        <div></div>
      </div>

      <header className={styles.header} ref={headerRef}>
        <TechnicalWorkAlert className={styles.techAlert} />

        <div className={styles.banner}>
          <h2>{process.env.REACT_APP_TITLE}</h2>
        </div>
      </header>

      <main className={styles.main}>
        <ScrollRestoration />
        <div className={styles.container}>{children || <Outlet />}</div>
      </main>

      <ProjectInfo className={styles.info} />
    </div>
  );
};
