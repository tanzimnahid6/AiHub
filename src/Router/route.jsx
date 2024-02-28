import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SingleModelPageInfo from "../Pages/SingleModelPageInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/singleModelInfo",
        element: <SingleModelPageInfo></SingleModelPageInfo>,
      },
      {
        path: "/login",
        element: <p>Login page</p>,
      },
    ],
  },
]);
export default router;
