import { ComponentPropsWithoutRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router";

interface AuthRedirectProviderProps extends ComponentPropsWithoutRef<"div"> {
  skipAuth?: boolean;
}

const AuthRedirectProvider = ({
  children,
  skipAuth,
}: AuthRedirectProviderProps) => {
  const navigate = useNavigate();

  const isLogin = false;

  // добавить проверки путей

  // In Auth Layout
  useLayoutEffect(() => {
    if (isLogin && !skipAuth) {
      if (logOutPath) navigate(logOutPath, { replace: true });
      else navigate(pages.resume, { replace: true });
    }
  }, [isLogin, logOutPath]); // eslint-disable-line
  // /In Auth Layout

  // In Account Layout
  // Если вдруг токен протух, записываем последнее местоположение и выкидываем на логин
  useLayoutEffect(() => {
    if (!isLogin) {
      const isPathForbidden = !!forbiddenPath.find((p) =>
        new RegExp(p).test(location.pathname)
      );

      dispatch(setLogOutPath(isPathForbidden ? "" : location.pathname));
      navigate(pages.login, { replace: true });
    }
  }, [isLogin, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  // /In Account Layout

  // Token refresh
  // useLayoutEffect(() => {
  //   // eslint-disable-next-line no-magic-numbers
  //   const currentTime = Date.now() / 1000;

  //   if (
  //     authErrorStatus === ACCESS_TOKEN_ERROR ||
  //     (exp_access_token && exp_access_token < currentTime)
  //   ) {
  //     // eslint-disable-next-line no-magic-numbers
  //     if (refresh_token && exp_refresh_token && exp_refresh_token >= currentTime + 60) {
  //       // If the access token is about to expire (within 60 seconds), refresh it
  //       dispatch(fetchRefresh());
  //     }

  //     // eslint-disable-next-line no-magic-numbers
  //     if (exp_refresh_token && exp_refresh_token < currentTime + 60) {
  //       dispatch(setRefreshLogOut());
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [authErrorStatus, exp_access_token, exp_refresh_token]);
  // /Token refresh

  return children;
};
export default AuthRedirectProvider;
