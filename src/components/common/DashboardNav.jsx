import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import useUserActions from "../../lib/hooks/useUserActions";
import { FaAngleRight } from "react-icons/fa";

export default function DashboardNav() {
  const { logOut, user } = useUserActions();
  const location = useLocation();
  const path = location.pathname.split("/");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Define the routes with user role access
  const dashboardRoutes = [
    {
      path: "/dashboard",
      label: "Profile",
      admin: true,
      property_owner: true,
      bidder: true,
    },
    {
      path: "/dashboard/add-property",
      label: "Add Property",
      admin: true,
      property_owner: true,
      bidder: false,
    },
    {
      path: "/dashboard/properties",
      label: "All Properties",
      admin: true,
      property_owner: true,
      bidder: true,
    },
    {
      path: "/dashboard/my-properties",
      label: "My Properties",
      admin: true,
      property_owner: true,
      bidder: true,
    },
    {
      path: "/dashboard/my-bids",
      label: "My Bids",
      admin: false,
      property_owner: false,
      bidder: true,
    },
    {
      path: "/dashboard/bids",
      label: "Bids",
      admin: true,
      property_owner: false,
      bidder: false,
    },
    {
      path: "/dashboard/users",
      label: "Users",
      admin: true,
      property_owner: false,
      bidder: false,
    },
    {
      path: "/dashboard/bidding",
      label: "Bidding Activities",
      admin: true,
      property_owner: false,
      bidder: false,
    },
    {
      path: "/dashboard/settings",
      label: "Settings",
      admin: true,
      property_owner: true,
      bidder: true,
    },
    {
      path: "/",
      label: "Home",
      admin: true,
      property_owner: true,
      bidder: true,
    },
  ];
  //   console.log(user);

  // Function to check if the route should be displayed based on the user's role
  const shouldDisplayRoute = (route) => {
    return (
      (route.admin && user.role === "admin") ||
      (route.property_owner && user.role === "property_owner") ||
      (route.bidder && user.role === "bidder")
    );
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  // Filter routes based on user role
  const filteredRoutes = dashboardRoutes.filter(shouldDisplayRoute);

  return (
    <div
      className={`relative w-64 z-40 transition-all bg-blue-50 min-h-screen p-5 ${
        open ? "-ml-64" : "ml-0"
      }`}
    >
      <button
        onClick={handleOpen}
        className="absolute rounded-r-full z-30 transition-all -right-6 top-2 drop-shadow-md hover:bg-orange-300 bg-orange-200 py-4 px-1"
      >
        <FaAngleRight />
      </button>
      <h1 className="text-2xl font-semibold px-4 mb-6">Dashboard</h1>
      <ul>
        {filteredRoutes.map((route) => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={`block py-2 px-4 my-2 font-medium rounded hover:bg-blue-200 ${
                route.path.split("/")[route.path.split("/").length - 1] ===
                path[path.length - 1]
                  ? "bg-blue-100"
                  : ""
              }`}
            >
              {route.label}
            </Link>
          </li>
        ))}
        <li>
          <div
            onClick={() => {
              logOut();
              navigate("/");
            }}
            className={`block cursor-pointer py-2 px-4 my-2 font-medium rounded hover:bg-blue-200`}
          >
            Sign out
          </div>
        </li>
      </ul>
    </div>
  );
}
