import { Link } from "react-router-dom";
import useUserActions from "../../lib/hooks/useUserActions";

export default function UserDropdown() {
  const { user, logOut } = useUserActions();

  const isAdmin = user?.role == "admin";
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 p-[2px] flex justify-center items-center border border-blue-400 rounded-full">
          <img
            className=" rounded-full "
            alt="Tailwind CSS Navbar component"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            }
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to={"/dashboard"} className="justify-between">
            {isAdmin ? "Dashboard" : "Profile"}
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link>Settings</Link>
        </li>
        <li>
          <span onClick={logOut}>Logout</span>
        </li>
      </ul>
    </div>
  );
}
