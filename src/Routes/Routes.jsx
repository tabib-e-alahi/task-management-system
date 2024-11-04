import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Problems from "../pages/Problems/Problems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/problems",
        element: <Problems></Problems>,
      },
    ],
  },

  {
    path: "dashboard/:email",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);
