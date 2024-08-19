import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Today from "../pages/Today";
import LastSevenDays from "../pages/LastSevenDays";
import LastThirtyDays from "../pages/LastThirtyDays";
import AllExpenses from "../pages/AllExpenses";
import Form from "../components/Form";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "today",
        element: <Today />,
      },
      {
        path: "last-seven-days",
        element: <LastSevenDays />,
      },
      {
        path: "last-thirty-days",
        element: <LastThirtyDays />,
      },
      {
        path: "all-expenses",
        element: <AllExpenses />,
      },
    ],
  },
]);

export default router;
