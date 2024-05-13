import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import styles from "./AccountLayout.module.scss";

import AccountSidebar from "../AccountSidebar/AccountSidebar";
import { AccountHeader } from "../AccountHeader/AccountHeader";

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
    <div className={styles._}>
      <header className={styles.header}>
        <div className={styles.container}>
          <AccountHeader />
        </div>
      </header>

      <aside className={styles.sidebar}>
        <AccountSidebar />
      </aside>

      <main className={styles.main} ref={scrollableRef}>
        <main className={styles.content}>
          <div className={styles.container}>{children || <Outlet />}</div>
        </main>
      </main>
    </div>
  );
};
