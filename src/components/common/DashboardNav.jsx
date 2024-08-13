import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DashboardNav() {
  const dashboardRoutes = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/users", label: "Users" },
    { path: "/dashboard/properties", label: "Properties" },
    { path: "/dashboard/bidding", label: "Bidding Activities" },
    { path: "/", label: "Home" },
    { path: "/dashboard/logout", label: "Logout" },
  ];

  const location = useLocation();
  const path = location.pathname.split("/");
  console.log(path);

  return (
    <div className="w-64 bg-blue-50 min-h-screen p-5">
      <h1 className="text-2xl font-semibold px-4 mb-6">Dashboard</h1>
      <ul>
        {dashboardRoutes.map((route) => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={`block py-2 px-4 my-2 rounded hover:bg-blue-200 ${
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
      </ul>
    </div>
  );
}
