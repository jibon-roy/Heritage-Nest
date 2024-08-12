import { MdOutlineLocationOn } from "react-icons/md";
import Section from "../../components/design/Section";

const PropertyDetails = () => {
  return (
    <Section>
      <div className="flex gap-4">
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
        <p className="text-2xl font-bold">$300K</p>
      </div>
      <div className="gap-4 flex">
        <div className="w-4/5">
          <hr className="mb-4" />
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Property Image 1"
              className="w-full aspect-video object-cover mb-4"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Property Image 1"
              className="w-full aspect-video object-cover"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Property Image 2"
              className="w-full aspect-video object-cover"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Property Image 3"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>

        <div className="bg-blue-100 p-6 h-full w-full max-w-sm">
          <p className="text-gray-500">Property Value</p>
          <h3 className="font-bold text-2xl mb-4">300k - 310k</h3>
          <p className="font-medium text-gray-500">
            Your bid can not be than 10% of the property Minimum value.
          </p>
          <div className="mt-5 relative">
            <label htmlFor="min" className="block font-semibold">
              Min
            </label>
            <span className="absolute text-lg font-semibold left-3 top-[47.5%]">
              $
            </span>
            <input
              id="min"
              name="min"
              autoComplete="none"
              placeholder="Min"
              type="text"
              className="bg-white rounded-md pl-8 py-3 px-4 w-full"
            />
          </div>
          <div className="mt-5 relative">
            <label htmlFor="max" className="block font-semibold">
              Max
            </label>
            <span className="absolute text-lg font-semibold left-3 top-[47.5%]">
              $
            </span>
            <input
              id="max"
              name="max"
              autoComplete="none"
              placeholder="Max"
              type="text"
              className="bg-white rounded-md pl-8 py-3 px-4 w-full"
            />
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-xl font-bold">Overview</h2>
        <p>3 Beds</p>
        <p>2 Baths</p>
        <p>1 Balcony</p>
        <p>Furnished</p>
        <p>Carpet Area: 1500 sqft</p>
        <p>Floor: 2</p>
        <p>Transaction: New Property</p>
      </div>
      <div className="">
        <h2 className="text-xl font-bold">Place Your Bid</h2>
        <p>Min: $300K</p>
        <p>Max: $310K</p>
        <input type="range" min="300000" max="310000" className="slider" />
      </div>
      <div className="">
        <img
          src="map_https://via.placeholder.com/150"
          alt="Property Location Map"
        />
      </div>
    </Section>
  );
};

export default PropertyDetails;
