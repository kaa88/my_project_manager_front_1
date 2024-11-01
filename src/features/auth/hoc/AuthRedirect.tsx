import { ComponentPropsWithoutRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../../shared/store";
import { PAGE } from "../../../shared/router";
import { authSelectors } from "../model/selectors";

export const AuthRedirect = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuth = useAppSelector(authSelectors.isAuth);
  const logOutPath = useAppSelector(authSelectors.logOutPath);

  useLayoutEffect(() => {
    if (isAuth) {
      if (logOutPath) navigate(logOutPath, { replace: true });
      else navigate(PAGE.profile, { replace: true });
    }
  }, [isAuth, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};
