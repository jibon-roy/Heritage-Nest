import { MdOutlineLocationOn } from "react-icons/md";

const LandingCard = () => {
  return (
    <div className="bg-[#F9FAFB] hover:bg-orange-50 transition p-4 flex w-fit gap-4 rounded-lg shadow-md">
      <div>
        <img
          src="https://via.placeholder.com/150"
          alt="Property Image"
          className="w-40 h-full rounded-lg object-cover mb-4"
        />
      </div>
      <div>
        <div className="flex gap-4 justify-between mb-3">
          <div>
            <h3 className="text-lg max-w-lg font-semibold">
              3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
            </h3>
            <div className="flex mb-3 justify-start text-sm text-black gap-1 items-center">
              <span className="text-orange-500">
                <MdOutlineLocationOn className="text-2xl" />
              </span>
              Meadowshire Park, Greenfield, USA
            </div>
          </div>
          <div>
            <div className="text-2xl mb-4 font-bold text-red-500">$300000</div>
            <button className="border rounded-md font-medium active:scale-95 transition-all border-black border-solid py-2 px-4">
              Bid Property
            </button>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Property details</h4>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <img
                src="https://via.placeholder.com/20"
                alt="Icon"
                className="mr-2 w-10 h-10"
              />
              <span>Total Area</span>
              <span className="font-semibold">891 sqft</span>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src="https://via.placeholder.com/20"
                alt="Icon"
                className="mr-2 w-10 h-10"
              />
              <span>Status</span>
              <span className="font-semibold">Ready to move</span>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src="https://via.placeholder.com/20"
                alt="Icon"
                className="mr-2 w-10 h-10"
              />
              <span>Total Area</span>
              <span className="font-semibold">891 sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
