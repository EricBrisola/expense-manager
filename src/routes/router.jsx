import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Today from "../pages/Today";
import LastSevenDays from "../pages/LastSevenDays";
import LastThirtyDays from "../pages/LastThirtyDays";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/today",
    element: <Today />,
  },
  {
    path: "/last-seven-days",
    element: <LastSevenDays />,
  },
  {
    path: "/last-thirty-days",
    element: <LastThirtyDays />,
  },
]);

export default router;
