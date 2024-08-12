import { NavLink } from "react-router-dom";
import Logo from "../design/Logo";

export default function Navbar() {
  return (
    <>
      <div className="drawer">
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
              <div className="mx-2  px-2">Sell</div>
              <div className="mx-2  px-2">Services</div>
            </div>
            <div className="mx-2 flex-1 flex justify-center px-2">
              <NavLink to={"/"}>
                <Logo />
              </NavLink>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="mx-2  px-2">Manage Rentals</div>
              <div className="mx-2  px-2">Sign Up</div>
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
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
