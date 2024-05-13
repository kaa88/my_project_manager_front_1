import { useLayoutEffect, ComponentPropsWithoutRef } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import styles from "./AuthLayout.module.scss";

// import { ErrorCatcher } from "components/ErrorCatcher";
// import { Footer } from "components/layouts/AuthLayout/Footer";
// import { Header } from "components/layouts/AuthLayout/Header";
// import { TechnicalWorkAlert } from "components/TechnicalWorkAlert";
// import Spinner from "components/ui/Spinner/Spinner";
// import { STATUS_PENDING } from "features/generic";
// import { useAppSelector } from "store/hooks";
// import { pages } from "utils/const";

// const IS_TECHNICAL_ALERT = process.env.REACT_APP_IS_TECHNICAL_WORK === "true";

interface AuthLayoutProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "error";
  // skipAuth?: boolean;
}

export const AuthLayout = ({
  variant = "default",
  children,
}: // skipAuth,
AuthLayoutProps): JSX.Element => {
  // const navigate = useNavigate();
  // const authStatuses = useAppSelector((state) => state.authStatus);
  // const auth = useAppSelector((state) => state.auth);
  // const { isLogin } = auth.auth;
  // const { logOutPath } = auth;

  // Scroll main content to top on route change
  const location = useLocation();

  // useLayoutEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "instant",
  //   });
  // }, [location]);
  // /Scroll main content to top on route change

  // const isConnectPending =
  //   authStatuses.fetchProviderLogin.status === STATUS_PENDING;

  return (
    <div className={styles._}>
      <div className={styles.info}>
        <p>my_project_manager</p>
      </div>
      <div className={styles.content}>
        <div className={styles.container}>{children || <Outlet />}</div>
      </div>
    </div>
  );
};
