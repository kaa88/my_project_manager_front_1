import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fixUrl } from "../../api/utils";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { AccountLayout } from "../layouts/account/AccountLayout/AccountLayout";
import AuthRedirectProvider from "../AuthRedirectProvider/AuthRedirectProvider";

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <ErrorPage />,
    },
    // {
    //   path: "/",
    //   element: <AccountLayout />,
    //   children: [
    //     // nested pages
    //   ]
    // },
    // {
    //   path: "/project/:id",
    //   element: <ProjectPage />,
    // },
  ],
  {
    basename: fixUrl(process.env.REACT_APP_HOST_BASENAME),
  }
);

const App = () => {
  return (
    <AuthRedirectProvider>
      <RouterProvider router={router} />
    </AuthRedirectProvider>
  );
};

export default App;
