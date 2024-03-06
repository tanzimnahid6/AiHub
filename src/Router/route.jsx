import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SingleModelPageInfo from "../Pages/SingleModelPageInfo";
import Login from "../Pages/Login";
import About from "../Pages/About";

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
        path: "/aboutUs",
        element: <About></About>,
      },

      {
        path: "/singleModelInfo/:modelId",
        element: <SingleModelPageInfo></SingleModelPageInfo>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
