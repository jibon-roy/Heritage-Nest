import { NavLink } from "react-router-dom";
import Logo from "../design/Logo";
import { Link } from "react-router-dom";
import useUserActions from "../../lib/hooks/useUserActions";
import UserDropdown from "../actions/UserDropDown";
import { swalAlert } from "../actions/SwalAlert";

export default function Navbar() {
  const { user } = useUserActions();
  // console.log(user);
  return (
    <>
      <div className="drawer z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-blue-50 flex flex-col">
          {/* Navbar */}
          <div className="navbar grid grid-cols-3 container px-2 md:px-10 lg:px-20   w-full">
            <div className="lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="hidden lg:flex">
              <NavLink to={"/buy"}>
                <div className="mx-2  px-2">Buy</div>
              </NavLink>
              {!user?.role === "bidder" ? (
                <NavLink to={`/dashboard/add-property`}>
                  <div className="mx-2  px-2">Sell</div>
                </NavLink>
              ) : user?.role === "bidder" || !user ? (
                <div
                  onClick={() =>
                    swalAlert("error", "Please login as property owner")
                  }
                  className="mx-2 cursor-pointer px-2"
                >
                  Sell
                </div>
              ) : (
                <NavLink to={`/property-owner-sign-up`}>
                  <div className="mx-2  px-2">Sell</div>
                </NavLink>
              )}
              <div className="mx-2  px-2">Services</div>
            </div>
            <div className="mx-2 flex-1 flex justify-center px-2">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="hidden lg:flex justify-end">
              <NavLink to={"/manage-rentals"}>
                <div className="mx-2  px-2">Manage Rentals</div>
              </NavLink>
              {user && <UserDropdown />}
              {!user && (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="m-1">
                    Sign Up
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <NavLink to={"/sign-in"}>Sign In</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/sign-up"}>Builder Sign Up</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/property-owner-sign-up"}>
                        Property Owner Sign Up
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-[70%] p-4">
            {/* Sidebar content here */}
            <li>
              <Link to={"/"}>
                <Logo />
              </Link>
            </li>
            <li className="">
              <div>
                <NavLink to={"/buy"}>Buy</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={"/buy"}>Sell</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={"/buy"}>Services</NavLink>
              </div>
            </li>
            {user && (
              <>
                <li>
                  <div>
                    <NavLink to={"/dashboard"}>Settings</NavLink>
                  </div>
                </li>
                <li>
                  <div>
                    <NavLink to={"/dashboard"}>Log Out</NavLink>
                  </div>
                </li>
                <li>
                  <div>
                    <NavLink to={"/dashboard"}>Sign Up</NavLink>
                  </div>
                </li>
              </>
            )}
            {!user && (
              <>
                <li>
                  <div>
                    <NavLink to={"/sign-up"}>Sign Up</NavLink>
                  </div>
                </li>
                <li>
                  <NavLink to={"/sign-up"}>Sign In</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
