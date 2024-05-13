import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fixPath } from "../../utils/utils";

import { PAGE_NAMES, PAGES } from "../const";
import { PageTitle } from "../PageTitle/PageTitle";
import AuthRedirect from "../AuthRedirect/AuthRedirect";
import NoAuthRedirect from "../NoAuthRedirect/NoAuthRedirect";

import { AuthLayout } from "../../components/layouts/auth/AuthLayout/AuthLayout";
import { AccountLayout } from "../../components/layouts/account/AccountLayout/AccountLayout";

import { ErrorPage } from "../../components/pages/ErrorPage/ErrorPage";
import { LoginPage } from "../../components/pages/LoginPage/LoginPage";
import { RegisterPage } from "../../components/pages/RegisterPage/RegisterPage";
import { ProfilePage } from "../../components/pages/ProfilePage/ProfilePage";
import { HelloPage } from "../../components/pages/HelloPage/HelloPage";

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: (
        <>
          <ErrorPage />
          <PageTitle title={PAGE_NAMES.ERROR} />
        </>
      ),
    },

    {
      element: <PageTitle />,
      children: [
        {
          element: (
            <AuthRedirect>
              <AuthLayout />
            </AuthRedirect>
          ),
          children: [
            {
              path: PAGES.ROOT,
              element: <HelloPage />,
            },
            {
              path: PAGES.LOGIN,
              element: <LoginPage />,
            },
            {
              path: PAGES.REGISTER,
              element: <RegisterPage />,
            },
          ],
        },

        {
          element: (
            <NoAuthRedirect>
              <AccountLayout />
            </NoAuthRedirect>
          ),
          children: [
            {
              path: PAGES.PROFILE,
              element: <ProfilePage />,
            },
          ],
        },
      ],
    },
  ],

  {
    basename: fixPath(process.env.REACT_APP_HOST_BASENAME),
  }
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
