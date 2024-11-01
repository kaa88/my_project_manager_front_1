import { ComponentPropsWithoutRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { setLogOutPath } from "../model/slice";
import { PAGE } from "../../../shared/router";
import { useAppDispatch, useAppSelector } from "../../../shared/store";
import { authSelectors } from "../model/selectors";

const forbiddenPaths: string[] = [PAGE.error];

export const NoAuthRedirect = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(authSelectors.isAuth);

  // If token expires, set current path as logOutPath to go back to it later
  useLayoutEffect(() => {
    if (!isAuth) {
      const isForbiddenPath = !!forbiddenPaths.find((p) =>
        new RegExp(p, "i").test(location.pathname)
      );

      dispatch(setLogOutPath(isForbiddenPath ? "" : location.pathname));
      navigate(PAGE.login, { replace: true });
    }
  }, [isAuth, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};
