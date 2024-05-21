import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import styles from "./AccountLayout.module.scss";

import { AccountSidebar } from "../AccountSidebar/AccountSidebar";
import { AccountHeader } from "../AccountHeader/AccountHeader";
import { TechnicalWorkAlert } from "../../../";

const IS_TECHNICAL_ALERT = process.env.REACT_APP_IS_TECHNICAL_WORK === "true";

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
  // const scrollableRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if (scrollableRef.current)
  //     scrollableRef.current.scrollTo({
  //       top: 0,
  //       behavior: "instant",
  //     });
  // }, [location.pathname]);
  // /Scroll main content to top on route change

  return (
    <div className={styles._}>
      {IS_TECHNICAL_ALERT && (
        <TechnicalWorkAlert className={styles.techAlert} />
      )}

      {/* <header className={styles.header}> */}
      <AccountHeader className={styles.header} />
      {/* </header> */}

      {/* <aside className={styles.sidebar}> */}
      <AccountSidebar className={styles.sidebar} />
      {/* </aside> */}

      <main className={styles.main}>
        <div className={styles.scrollContainer}>
          <div className={styles.container}>{children || <Outlet />}</div>
        </div>
      </main>
    </div>
  );
};
