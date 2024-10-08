import styles from "./AccountLayout.module.scss";
import { ComponentPropsWithoutRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { useAppSelector } from "../../../shared/store";
import { AccountHeader } from "../../../widgets/ui/components/AccountHeader/AccountHeader";
import { AccountSidebar } from "../../../widgets/ui/components/AccountSidebar/AccountSidebar";
import { TechnicalWorkAlert } from "../../../widgets/ui/components/TechnicalWorkAlert/TechnicalWorkAlert";

export const AccountLayout = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  // const navigate = useNavigate();

  // const { isLogin, refresh_token, exp_refresh_token, exp_access_token } =
  //   useAppSelector((state) => state.auth.auth);
  // const authErrorStatus = useAppSelector(
  //   (state) => state.authStatus.fetchRefresh.statusCode
  // );

  // NoAuthRedirect

  const sidebarState = useAppSelector(
    (state) => state.uiPersist.isSidebarCollapsed
  )
    ? "collapsed"
    : "full";

  return (
    <div className={styles._} data-sidebar={sidebarState}>
      <header className={styles.header}>
        <TechnicalWorkAlert className={styles.techAlert} />
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
