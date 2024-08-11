import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout";
import DashboardLayout from "../../layouts/dashboardLayout";
import Home from "../../pages/home/Home";
import Sell from "../../pages/sell/Sell";
import Services from "../../pages/services/Services";
import ManageRentals from "../../pages/manage_rentals/ManageRentals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buy",
        element: <Home />,
      },
      {
        path: "/sell",
        element: <Sell />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/manage-rentals",
        element: <ManageRentals />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/sign-in",
    element: <DashboardLayout />,
  },
]);

export default router;
