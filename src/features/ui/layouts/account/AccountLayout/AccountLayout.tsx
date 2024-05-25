import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../store/hooks";

import styles from "./AccountLayout.module.scss";

import { AccountSidebar } from "../AccountSidebar/AccountSidebar";
import { AccountHeader } from "../AccountHeader/AccountHeader";
import { Anchor } from "../../../../../ui-kit";
import {
  TechnicalWorkAlert,
  useScroll,
  IS_TECHNICAL_ALERT,
  LAYOUT_TOP_ANCHOR,
} from "../../../";

export const AccountLayout = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const location = useLocation();
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const { isLogin, refresh_token, exp_refresh_token, exp_access_token } =
  //   useAppSelector((state) => state.auth.auth);
  // const authErrorStatus = useAppSelector(
  //   (state) => state.authStatus.fetchRefresh.statusCode
  // );

  // Scroll main content to top on route change
  const scrollToTop = useScroll(LAYOUT_TOP_ANCHOR);
  useLayoutEffect(() => {
    scrollToTop();
  }, [location.pathname]);
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
          <div className={styles.container}>
            <Anchor className={styles.anchor} name={LAYOUT_TOP_ANCHOR} />
            {children || <Outlet />}
          </div>
        </div>
      </main>
    </div>
  );
};
