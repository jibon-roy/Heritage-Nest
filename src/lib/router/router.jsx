import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout";
import DashboardLayout from "../../layouts/dashboardLayout";
import Home from "../../pages/home/Home";
import Sell from "../../pages/sell/Sell";
import Services from "../../pages/services/Services";
import ManageRentals from "../../pages/manage_rentals/ManageRentals";
import Buy from "../../pages/buy/Buy";
import SignIn from "../../pages/signin/SignIn";
import SearchDetails from "../../pages/SearchDetails/SearchDetails";
import PropertyDetails from "../../pages/propertyDetails/PropertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/buy",
        element: <Buy />,
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
        path: "/search",
        element: <SearchDetails />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails />,
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
    element: <SignIn />,
  },
]);
