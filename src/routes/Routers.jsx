import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/BlogsPage/Blogs/Blogs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
  ],
  },
]);

export default routes;
