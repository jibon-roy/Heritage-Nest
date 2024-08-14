import { swalAlert } from "../../components/actions/SwalAlert";
import Loading from "../../components/common/Loading";
import Heading from "../../components/design/Heading";
import useLoadUsers from "../../lib/hooks/admin/useLoadUsers";
import useAxiosSecure from "./../../lib/hooks/useAxiosSecure";

export default function Users() {
  const { users, isLoading, refetch } = useLoadUsers();
  const axiosSecure = useAxiosSecure();
  const handleRoleChange = (id, newRole) => {
    axiosSecure
      .put(
        `/api/v1/user/${id}`,
        { role: newRole },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => refetch());
  };

  const handleDelete = (id) => {
    axiosSecure.delete(`/api/v1/user/${id}`).then(() => {
      swalAlert("success", "User deleted successfull.");
      refetch();
    });
  };
  return (
    <div>
      <Heading center={true}>
        All Users
        <div className="text-2xl font-medium mt-3">Manage Users</div>
      </Heading>
      <Loading className={isLoading ? "block" : "hidden"} />
      <div className="p-4 max-h-[900px] overflow-y-auto overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user._id} className={`hover:bg-blue-50`}>
                <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6  whitespace-nowrap text-sm text-gray-500">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="admin">Admin</option>
                    <option value="property_owner">Property Owner</option>
                    <option value="bidder">Bidder</option>
                  </select>
                </td>
                <td className="px-6  whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
