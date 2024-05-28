import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fixPath } from "../../utils/utils";

import { PAGE_NAMES, PAGES } from "../const";
import { PageTitle } from "../PageTitle/PageTitle";

import { AccountLayout, AuthLayout, ErrorPage } from "../../features/ui";
import {
  AuthRedirect,
  LoginPage,
  NoAuthRedirect,
  RegisterPage,
} from "../../features/auth";
import { ProfilePage } from "../../features/profile";
import { TaskListPage, TaskPage } from "../../features/task";
import { KanbanPage } from "../../features/kanban";
import { CalendarPage } from "../../features/calendar";
import { HelloPage, TutorialPage, WikiPage } from "../../features/info";

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
            {
              path: PAGES.KANBAN,
              element: <KanbanPage />,
            },
            {
              path: PAGES.TASK_LIST,
              element: <TaskListPage />,
            },
            {
              path: PAGES.TASK,
              element: <TaskPage />,
            },
            {
              path: PAGES.TUTORIAL,
              element: <TutorialPage />,
            },
            {
              path: PAGES.WIKI,
              element: <WikiPage />,
            },
            {
              path: PAGES.CALENDAR,
              element: <CalendarPage />,
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
