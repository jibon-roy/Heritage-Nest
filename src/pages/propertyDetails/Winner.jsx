import { useState } from "react";

export default function Winner() {
  const [winners, setWinners] = useState([
    { name: "Alice", value: 500 },
    { name: "Bob", value: 750 },
    { name: "Charlie", value: 600 },
  ]);

  const findWinner = (winners) => {
    return winners.reduce(
      (max, winner) => (winner.value > max.value ? winner : max),
      winners[0]
    );
  };

  const winner = findWinner(winners);
  return (
    <div>
      <div className="my-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Property Winner:</h2>
        {winner ? (
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold">{winner.name[0]}</span>
            </div>
            <div>
              <p className="text-lg font-semibold">{winner.name}</p>
              <p className="text-gray-500">Bid Value: ${winner.value}</p>
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
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold">{winner.name[0]}</span>
            </div>
            <div>
              <p className="text-lg font-semibold">{winner.name}</p>
              <p className="text-gray-500">Bid Value: ${winner.value}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No winners yet</p>
        )}
      </div>
    </div>
  );
}
