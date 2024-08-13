import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout";
import Home from "../../pages/home/Home";
import Sell from "../../pages/sell/Sell";
import Services from "../../pages/services/Services";
import ManageRentals from "../../pages/manage_rentals/ManageRentals";
import Buy from "../../pages/buy/Buy";
import SignIn from "../../pages/signin/SignIn";
import SearchDetails from "../../pages/SearchDetails/SearchDetails";
import PropertyDetails from "../../pages/propertyDetails/PropertyDetails";
import SignUp from "../../pages/SignUp/SignUp";
import PropertyOwnerSignUp from "../../pages/SignUp/PropertyOwnerSignUp";
import Error from "../../pages/error/Error";
import DashboardLayout from "../../layouts/DashboardLayout";
import Dashboard from "../../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/property-owner-sign-up",
    element: <PropertyOwnerSignUp />,
  },
]);
