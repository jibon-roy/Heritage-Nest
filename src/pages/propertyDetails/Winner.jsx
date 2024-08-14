import useLoadUsersByEmail from "../../lib/hooks/useLoadUsersByEmail";

export default function Winner({ sortBidsByPrice }) {
  const winner = sortBidsByPrice ? sortBidsByPrice[0] : {};
  console.log(winner);

  const emails = sortBidsByPrice?.map((a) => a?.bidder);
  console.log(emails);
  const { users } = useLoadUsersByEmail(emails || []);
  const filteredUser = users?.find((user) => (user.email = winner?.bidder));

  console.log(filteredUser);

  return (
    <div>
      <div className="my-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Property Winner:</h2>
        {winner ? (
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-lg font-semibold">{filteredUser?.name}</p>
              <p className="text-gray-500">Bid Value: ${winner?.max}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No winners yet</p>
        )}
      </div>
      <div className="my-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Current highest bid:</h2>
        {winner ? (
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-lg font-semibold">{filteredUser?.name}</p>
              <p className="text-gray-500">Bid Value: ${winner?.max}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No winners yet</p>
        )}
      </div>
    </div>
  );
}
