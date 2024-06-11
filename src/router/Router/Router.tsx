import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { fixPath } from "../../shared";

import { PAGES, PAGE_NAMES } from "../const";
import { PageTitle } from "../PageTitle/PageTitle";

import { AuthLayout, AccountLayout } from "../../ui";
import {
  AuthRedirect,
  LoginPage,
  RegisterPage,
  NoAuthRedirect,
} from "../../features/auth";
import { CalendarPage } from "../../features/calendar";
import {
  ErrorPage,
  HelloPage,
  TutorialPage,
  WikiPage,
} from "../../features/info";
import {
  BoardListPage,
  BoardPage,
  BoardSettingsPage,
} from "../../features/kanban";
import { ProfilePage } from "../../features/profile";
import { TaskListPage, TaskPage } from "../../features/task";

export const Router = () => {
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
                path: `${PAGES.KANBAN_BOARD}/:boardId`,
                element: <BoardPage />,
              },
              {
                path: `${PAGES.KANBAN_BOARD_SETTINGS}/:boardId`,
                element: <BoardSettingsPage />,
              },
              {
                path: PAGES.KANBAN_BOARD_LIST,
                element: <BoardListPage />,
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
                path: `${PAGES.TASK}/:taskId`,
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

  return <RouterProvider router={router} />;
};
