import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useUserActions from "../../lib/hooks/useUserActions";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DashboardNav() {
  const dashboardRoutes = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/users", label: "Users" },
    { path: "/dashboard/add-property", label: "Add Property" },
    { path: "/dashboard/properties", label: "Properties" },
    { path: "/dashboard/my-properties", label: "My Properties" },
    { path: "/dashboard/my-bids", label: "My Bids" },
    { path: "/dashboard/bidding", label: "Bidding Activities" },
    { path: "/dashboard/settings", label: "Settings" },
    { path: "/", label: "Home" },
  ];
  const { logOut } = useUserActions();
  const location = useLocation();
  const path = location.pathname.split("/");
  //   console.log(path);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <div
      className={`relative w-64 z-40 transition-all bg-blue-50 min-h-screen p-5 ${
        open ? "-ml-64" : "ml-0"
      }`}
    >
      <button
        onClick={handleOpen}
        className="absolute rounded-r-full z-30 transition-all -right-6 top-1/2 -translate-y-1/2 drop-shadow-md hover:bg-orange-300 bg-orange-200 py-4 px-1"
      >
        <FaAngleRight />
      </button>
      <h1 className="text-2xl font-semibold px-4 mb-6">Dashboard</h1>
      <ul>
        {dashboardRoutes.map((route) => (
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
