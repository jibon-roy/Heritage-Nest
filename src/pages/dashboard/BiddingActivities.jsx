// import { swalAlert } from "../../components/actions/SwalAlert";
import { Link } from "react-router-dom";
import Loading from "../../components/common/Loading";
import Heading from "../../components/design/Heading";
import useLoadBids from "../../lib/hooks/admin/useLoadBids";
// import useLoadProperties from "../../lib/hooks/admin/useLoadProperties";
// import useLoadUsers from "../../lib/hooks/admin/useLoadUsers";
// import useAxiosSecure from "./../../lib/hooks/useAxiosSecure";
// import useUserActions from "./../../lib/hooks/useUserActions";

export default function BiddingActivities() {
  // const { user } = useUserActions();
  const { bids, isLoading } = useLoadBids();
  // const axiosSecure = useAxiosSecure();

  // const handleDelete = (id) => {
  //   axiosSecure.delete(`/api/v1/property/delete/${id}`).then(() => {
  //     swalAlert("success", "Property deleted successful.");
  //     refetch();
  //   });
  // };
  // console.log(properties);
  return (
    <div>
      <Heading center={true}>
        All Bid Activities
        <div className="text-2xl font-medium mt-3">View all Bids</div>
      </Heading>
      <Loading className={isLoading ? "block" : "hidden"} />
      <div className="p-4 max-h-[600px] overflow-y-auto overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bidder Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
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
            {bids?.map((bid) => (
              <tr key={bid._id} className={`hover:bg-blue-50`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {bid?.bidder}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bid?._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bid?.max}k
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link to={`/property/${bid?.propertyId}`}>
                    <button
                      // onClick={() => handleDelete(bid._id)}
                      className="py-2 px-4 rounded-sm text-white bg-blue-500 hover:bg-blue-700"
                    >
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
