import { swalAlert } from "../../components/actions/SwalAlert";
import Loading from "../../components/common/Loading";
import Heading from "../../components/design/Heading";
// import useLoadUsers from "../../lib/hooks/admin/useLoadUsers";
import useAxiosSecure from "./../../lib/hooks/useAxiosSecure";
import useUserActions from "./../../lib/hooks/useUserActions";
import useLoadPropertyById from "./../../lib/hooks/admin/useLoadPropertyById";

export default function MyProperties() {
  const { user } = useUserActions();
  const { properties, isLoading, refetch } = useLoadPropertyById(user?.email);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    axiosSecure.delete(`/api/v1/properties/${id}`).then(() => {
      swalAlert("success", "User deleted successfull.");
      refetch();
    });
  };
  console.log(properties);
  return (
    <div>
      <Heading center={true}>
        My Properties
        <div className="text-2xl font-medium mt-3">Manage Properties</div>
      </Heading>
      <Loading className={isLoading ? "block" : "hidden"} />
      <div className="p-4 max-h-[900px] overflow-y-auto overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Max Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties?.map((property) => (
              <tr key={property._id} className={`hover:bg-blue-50`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {property?.property_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {property?.property_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {property?.bid_price_max}k
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleDelete(property._id)}
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
