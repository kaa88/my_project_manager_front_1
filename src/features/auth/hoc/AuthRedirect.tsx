import { ComponentPropsWithoutRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../../app/store";
import { PAGE } from "../../../shared/router";

export const AuthRedirect = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuth, logOutPath } = useAppSelector((state) => state.auth);
  console.log("isAuth", isAuth);

  // useLayoutEffect(() => {
  //   if (isAuth) {
  //     if (logOutPath) navigate(logOutPath, { replace: true });
  //     else navigate(PAGE.profile, { replace: true });
  //   }
  // }, [isAuth, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};
