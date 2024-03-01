import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Today from "../pages/Today";
import LastSevenDays from "../pages/LastSevenDays";
import LastThirtyDays from "../pages/LastThirtyDays";
import Dashboard from "../components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
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
    ],
  },
]);

export default router;
