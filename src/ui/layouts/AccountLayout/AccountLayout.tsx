import styles from "./AccountLayout.module.scss";
import { ComponentPropsWithoutRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { useAppSelector } from "../../../store";

import { IS_TECHNICAL_ALERT } from "../../const";

import { TechnicalWorkAlert } from "../../components/TechnicalWorkAlert/TechnicalWorkAlert";
import { AccountHeader } from "../../components/AccountHeader/AccountHeader";
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";

export const AccountLayout = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  // const navigate = useNavigate();

  // const { isLogin, refresh_token, exp_refresh_token, exp_access_token } =
  //   useAppSelector((state) => state.auth.auth);
  // const authErrorStatus = useAppSelector(
  //   (state) => state.authStatus.fetchRefresh.statusCode
  // );

  const sidebarState = useAppSelector(
    (state) => state.uiPersist.isSidebarCollapsed
  )
    ? "collapsed"
    : "full";

  return (
    <div className={styles._} data-sidebar={sidebarState}>
      <header className={styles.header}>
        {IS_TECHNICAL_ALERT && (
          <TechnicalWorkAlert className={styles.techAlert} />
        )}
        <AccountHeader className={styles.innerHeader} />
        <AccountSidebar className={styles.sidebar} />
      </header>

      <main className={styles.main}>
        <ScrollRestoration />
        <div className={styles.container}>{children || <Outlet />}</div>
      </main>
    </div>
  );
};
