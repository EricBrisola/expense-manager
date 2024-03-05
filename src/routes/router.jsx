import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Today from "../pages/Today";
import LastSevenDays from "../pages/LastSevenDays";
import LastThirtyDays from "../pages/LastThirtyDays";
import Form from "../components/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
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
    ],
  },
]);

export default router;
