// import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaHome, FaUsers } from "react-icons/fa";
import Heading from "../../components/design/Heading";
import useLoadUsers from "../../lib/hooks/admin/useLoadUsers";
import useUserActions from "../../lib/hooks/useUserActions";
import useLoadProperties from "../../lib/hooks/admin/useLoadProperties";
// import { Link } from "react-router-dom";
// import useAxiosSecure from "../../lib/hooks/useAxiosSecure";

export default function Dashboard() {
  const { user } = useUserActions();
  const { users } = useLoadUsers();
  const { properties } = useLoadProperties();
  const role =
    user?.role === "admin"
      ? "Admin"
      : user?.role === "property_owner"
      ? "Property Owner"
      : "Bidder";
  // console.log(user);
  const propertyOwners = (users || []).filter(
    (u) => u.role === "property_owner"
  );
  const myProperties = (properties || []).filter(
    (u) => u.property_owner === user?.email
  );
  const bidders = (users || []).filter((u) => u.role === "bidder");

  // console.log(properties);
  return (
    <div>
      <Heading center={true}>
        {role === "Admin" ? "Dashboard" : "Your Profile"}
        <div className="text-2xl font-medium mt-3">{user?.displayName}</div>
      </Heading>
      <div className="max-w-md mb-4 mx-auto bg-blue-50 rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          <img
            src={
              user?.photoURL
                ? user.photoURL
                : "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            }
            alt={user?.displayName}
            className="w-24 h-24 rounded-full border-4 border-blue-300"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-600">
              {user?.displayName}
            </h2>

            <p className="text-blue-500">User type: {user?.role}</p>
          </div>
        </div>
      </div>
      {role === "Admin" && (
        <div className="grid grid-cols-1 w-full gap-4  px-2 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-blue-200 w-full rounded p-4">
            <h3 className="text-xl font-medium">All Users</h3>
            <div className="text-5xl font-semibold flex justify-between flex-wrap mt-4">
              <FaUsers />
              {users?.length}
            </div>
          </div>
          <div className="bg-blue-200 w-full rounded p-4">
            <h3 className="text-xl font-medium">Property Owners</h3>
            <div className="text-5xl font-semibold flex justify-between flex-wrap mt-4">
              <FaUsers />
              {propertyOwners?.length}
            </div>
          </div>
          <div className="bg-blue-200 w-full rounded p-4">
            <h3 className="text-xl font-medium">All Bidders</h3>
            <div className="text-5xl font-semibold flex justify-between flex-wrap mt-4">
              <FaUsers />
              {bidders?.length}
            </div>
          </div>
        </div>
      )}
      {role === "Admin" || role === "Property Owner" ? (
        <div className="grid grid-cols-1 w-full gap-4 my-4 px-2 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-blue-200 w-full rounded p-4">
            <h3 className="text-xl font-medium">All Properties</h3>
            <div className="text-5xl font-semibold flex justify-between flex-wrap mt-4">
              <FaHome />
              {properties?.length}
            </div>
          </div>
          <div className="bg-blue-200 w-full rounded p-4">
            <h3 className="text-xl font-medium">My Properties</h3>
            <div className="text-5xl font-semibold flex justify-between flex-wrap mt-4">
              <FaHome />
              {myProperties?.length}
            </div>
          </div>
          <div className="bg-blue-200 w-full rounded p-4">
            <h3 className="text-xl font-medium">My Bidders</h3>
            <div className="text-5xl font-semibold flex justify-between flex-wrap mt-4">
              <FaDollarSign />
              {bidders?.length}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
