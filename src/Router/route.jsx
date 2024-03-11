import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SingleModelPageInfo from "../Pages/SingleModelPageInfo";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Services from "../Pages/Services";
import BusinessModel from "../Pages/BusinessModel";
import Publication from "../Pages/Publication";
import SignIn from "../Pages/SignIn";

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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/model",
        element: <BusinessModel></BusinessModel>,
      },
      {
        path: "/publication",
        element: <Publication></Publication>,
      },
      {
        path: "/singleModelInfo/:modelId",
        element: <SingleModelPageInfo></SingleModelPageInfo>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
