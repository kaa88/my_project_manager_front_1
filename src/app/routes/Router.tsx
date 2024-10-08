import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { fixPath } from "../../shared/utils";

import { PAGE } from "../../shared/router/const";

import { AuthLayout, AccountLayout } from "../layouts";
// import { AuthRedirect, NoAuthRedirect } from "../../features/auth";

import * as Pages from "../../pages";

export const Router = () => {
  const router = createBrowserRouter(
    [
      {
        path: "*",
        element: <Pages.ErrorPage />,
      },

      {
        element: (
          // <AuthRedirect>
          <AuthLayout />
          // </AuthRedirect>
        ),
        children: [
          {
            path: PAGE.root,
            element: <Pages.HelloPage />,
          },
          {
            path: PAGE.login,
            element: <Pages.LogInPage />,
          },
          {
            path: PAGE.register,
            element: <Pages.RegisterPage />,
          },
        ],
      },

      {
        element: (
          // <NoAuthRedirect>
          <AccountLayout />
          // </NoAuthRedirect>
        ),
        children: [
          {
            path: PAGE.profile,
            element: <Pages.ProfilePage />,
          },
          {
            path: `${PAGE.board}/:boardId`,
            element: <Pages.BoardPage />,
          },
          {
            path: `${PAGE.boardSettings}/:boardId`,
            element: <Pages.BoardSettingsPage />,
          },
          {
            path: PAGE.boardList,
            element: <Pages.BoardListPage />,
          },
          {
            path: PAGE.taskList,
            element: <Pages.TaskListPage />,
          },
          {
            path: PAGE.task,
            element: <Pages.TaskPage />,
          },
          {
            path: `${PAGE.task}/:taskId`,
            element: <Pages.TaskPage />,
          },
          {
            path: PAGE.tutorial,
            element: <Pages.TutorialPage />,
          },
          {
            path: PAGE.wiki,
            element: <Pages.WikiPage />,
          },
          {
            path: PAGE.calendar,
            element: <Pages.CalendarPage />,
          },

          {
            path: "/test",
            element: <Pages.TestPage />,
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
