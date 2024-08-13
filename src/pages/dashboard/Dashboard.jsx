// import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import Heading from "../../components/design/Heading";
import useLoadUsers from "../../lib/hooks/admin/useLoadUsers";
import useUserActions from "../../lib/hooks/useUserActions";
// import useAxiosSecure from "../../lib/hooks/useAxiosSecure";

export default function Dashboard() {
  const { users } = useLoadUsers();
  const { user } = useUserActions();
  console.log(user);
  const role =
    user?.role === "admin"
      ? "Admin"
      : user?.role === "property_owner"
      ? "Property Owner"
      : "Bidder";

  const propertyOwners = (users || []).filter(
    (u) => u.role === "property_owner"
  );
  const bidders = (users || []).filter((u) => u.role === "bidder");
  console.log(users);
  return (
    <div>
      <Heading center={true}>
        {user.displayName}
        <div className="text-2xl font-medium mt-3">{role}</div>
      </Heading>
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
    </div>
  );
}
