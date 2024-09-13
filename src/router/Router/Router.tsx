import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { fixPath } from "../../shared";

import { PAGE, PAGE_NAME } from "../const";
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
            <PageTitle title={PAGE_NAME.error} />
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
                path: PAGE.root,
                element: <HelloPage />,
              },
              {
                path: PAGE.login,
                element: <LoginPage />,
              },
              {
                path: PAGE.register,
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
                path: PAGE.profile,
                element: <ProfilePage />,
              },
              {
                path: `${PAGE.kanbanBoard}/:boardId`,
                element: <BoardPage />,
              },
              {
                path: `${PAGE.kanbanBoardSettings}/:boardId`,
                element: <BoardSettingsPage />,
              },
              {
                path: PAGE.kanbanBoardList,
                element: <BoardListPage />,
              },
              {
                path: PAGE.taskList,
                element: <TaskListPage />,
              },
              {
                path: PAGE.task,
                element: <TaskPage />,
              },
              {
                path: `${PAGE.task}/:taskId`,
                element: <TaskPage />,
              },
              {
                path: PAGE.tutorial,
                element: <TutorialPage />,
              },
              {
                path: PAGE.wiki,
                element: <WikiPage />,
              },
              {
                path: PAGE.calendar,
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
