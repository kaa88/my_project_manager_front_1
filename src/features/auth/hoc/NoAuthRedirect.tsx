import { ComponentPropsWithoutRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { setLogOutPath } from "../store";
import { PAGE } from "../../../shared/router";

const forbiddenPaths: string[] = [];

export const NoAuthRedirect = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  // If token expires, set current path as logOutPath to go back to it later
  useLayoutEffect(() => {
    if (!isAuth) {
      const isPathForbidden = !!forbiddenPaths.find((p) =>
        new RegExp(p, "i").test(location.pathname)
      );

      dispatch(setLogOutPath(isPathForbidden ? "" : location.pathname));
      navigate(PAGE.login, { replace: true });
    }
  }, [isAuth, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};
