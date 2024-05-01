import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import styles from "./AccountLayout.module.scss";

// import { AccountHeader } from "components/AccountHeader";
// import { ErrorCatcher } from "components/ErrorCatcher";
// import Sidebar from "components/Sidebar/Sidebar";
// import { TechnicalWorkAlert } from "components/TechnicalWorkAlert";
// import {
//   fetchRefresh,
//   setLogOutPath,
//   setRefreshLogOut,
// } from "features/auth/authSlice";
// import { fetchProviders } from "features/provider/providerSlice";
// import { useAppDispatch, useAppSelector } from "store/hooks";
// import { pages } from "utils/const";

const IS_TECHNICAL_ALERT = process.env.REACT_APP_IS_TECHNICAL_WORK === "true";
const ACCESS_TOKEN_ERROR = 401;

// const forbiddenPath = [pages.error, pages.connectedHh, pages.connectedSj];

export const AccountLayout = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const { isLogin, refresh_token, exp_refresh_token, exp_access_token } =
  //   useAppSelector((state) => state.auth.auth);
  // const authErrorStatus = useAppSelector(
  //   (state) => state.authStatus.fetchRefresh.statusCode
  // );

  // Fetch Providers
  // useLayoutEffect(() => {
  //   if (
  //     isLogin &&
  //     !new RegExp(pages.connectedHh).test(location.pathname) &&
  //     !new RegExp(pages.connectedSj).test(location.pathname)
  //   ) {
  //     dispatch(fetchProviders());
  //   }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // /Fetch Providers

  // Scroll main content to top on route change
  const scrollableRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if (scrollableRef.current)
  //     scrollableRef.current.scrollTo({
  //       top: 0,
  //       behavior: "instant",
  //     });
  // }, [location]);
  // /Scroll main content to top on route change

  return (
    <div className={styles.layout}>
      AccountLayout
      {children || <Outlet />}
      {/* {IS_TECHNICAL_ALERT && (
        <TechnicalWorkAlert className={styles.technicalAlert} />
      )}

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main} ref={scrollableRef}>
        <header className={styles.header}>
          <div className={styles.container}>
            <AccountHeader />
          </div>
        </header>
        <main className={styles.content}>
          <div className={styles.container}>{children || <Outlet />}</div>
        </main>
      </main>
      <ErrorCatcher /> */}
    </div>
  );
};
