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
import Users from "../../pages/dashboard/Users";
import BiddingActivities from "../../pages/dashboard/BiddingActivities";
import Properties from "../../pages/dashboard/Properties";
import Settings from "../../pages/dashboard/Settings";
import MyProperties from "../../pages/dashboard/MyProperties";
import MyBids from "../../pages/dashboard/MyBids";

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
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/add-property",
        element: <Properties />,
      },
      {
        path: "/dashboard/properties",
        element: <Properties />,
      },
      {
        path: "/dashboard/my-properties",
        element: <MyProperties />,
      },
      {
        path: "/dashboard/my-bids",
        element: <MyBids />,
      },
      {
        path: "/dashboard/bidding",
        element: <BiddingActivities />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
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
