import { useState } from "react";
import useUserActions from "../../lib/hooks/useUserActions";
import { swalAlert } from "../../components/actions/SwalAlert";
import useAxiosSecure from "../../lib/hooks/useAxiosSecure";

const AddProperty = () => {
  const { user } = useUserActions();
  const axiosSecure = useAxiosSecure();
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Columbus",
    "Indianapolis",
  ];

  const [propertyData, setPropertyData] = useState({
    property_name: "",
    location: "",
    bid_price_max: "",
    bid_price_min: "",
    OverView: {
      bed: "",
      bath: "",
      area: "",
      floor: "",
      publish: "",
      winner: "",
    },
    bid_requests: [],
    property_owner: user?.email,
    property_type: "",
    pictures: [""],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in propertyData) {
      setPropertyData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setPropertyData((prevData) => ({
        ...prevData,
        OverView: {
          ...prevData.OverView,
          [name]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.log(propertyData);
    e.preventDefault();
    const data = e.target;
    try {
      await axiosSecure.post("/api/v1/add-property", propertyData);
      swalAlert("success", "Submited property.");
      setPropertyData({
        property_name: data.property_name.value,
        location: data.location,
        bid_price_max: data.bid_price_max,
        bid_price_min: data.bid_price_min,
        OverView: {
          bed: data.bed,
          bath: data.bath,
          area: data.area,
          floor: data.floor,
          publish: data.publish,
          winner: "",
        },
        bid_requests: "",
        property_owner: user?.email,
        property_type: data.property_type,
        pictures: [""],
      });
    } catch (error) {
      console.error("Error submitting property:", error);
      swalAlert("error", "Failed to submit property.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-blue-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold  mb-4">Add Property</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-blue-600 mb-2" htmlFor="property_name">
            Property Name
          </label>
          <input
            type="text"
            id="property_name"
            name="property_name"
            value={propertyData.property_name}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-600 mb-2" htmlFor="location">
            Location
          </label>
          {/* <input
            type="text"
            id="location"
            name="location"
            value={propertyData.location}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          /> */}
          <select
            onChange={handleChange}
            value={propertyData.location}
            id="location"
            name="location"
            className="w-full p-2 border bg-white border-blue-300 rounded-md"
          >
            <option value="">Your Location</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-blue-600 mb-2" htmlFor="bid_price_max">
            Max Bid Price
          </label>
          <input
            type="number"
            id="bid_price_max"
            name="bid_price_max"
            value={propertyData.bid_price_max}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-600 mb-2" htmlFor="bid_price_min">
            Min Bid Price
          </label>
          <input
            type="number"
            id="bid_price_min"
            name="bid_price_min"
            value={propertyData.bid_price_min}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Overview</h2>
          <label className="block text-blue-600 mb-2" htmlFor="bed">
            Beds
          </label>
          <input
            type="number"
            id="bed"
            name="bed"
            value={propertyData.OverView.bed}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
          <label className="block text-blue-600 mb-2 mt-4" htmlFor="bath">
            Baths
          </label>
          <input
            type="number"
            id="bath"
            name="bath"
            value={propertyData.OverView.bath}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
          <label className="block text-blue-600 mb-2 mt-4" htmlFor="area">
            Area (sq ft)
          </label>
          <input
            type="number"
            id="area"
            name="area"
            value={propertyData.OverView.area}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
          <label className="block text-blue-600 mb-2 mt-4" htmlFor="floor">
            Floor
          </label>
          <input
            type="text"
            id="floor"
            name="floor"
            value={propertyData.OverView.floor}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
          <label className="block text-blue-600 mb-2 mt-4" htmlFor="publish">
            Publish Date
          </label>
          <input
            type="date"
            id="publish"
            name="publish"
            value={propertyData.OverView.publish}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
          {/* <label className="block text-blue-600 mb-2 mt-4" htmlFor="winner">
            Winner
          </label>
          <input
            type="text"
            id="winner"
            name="winner"
            value={propertyData.OverView.winner}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
          /> */}
        </div>

        <div className="mb-4">
          <label className="block text-blue-600 mb-2" htmlFor="property_owner">
            Property Owner
          </label>
          <input
            type="email"
            id="property_owner"
            name="property_owner"
            value={propertyData.property_owner}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-600 mb-2" htmlFor="property_type">
            Property Type
          </label>
          {/* <input
            type="text"
            id="property_type"
            name="property_type"
            value={propertyData.property_type}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          /> */}
          <select
            name="property_type"
            value={propertyData.property_type}
            onChange={handleChange}
            id="property_type"
            className="p-2  w-full bg-white  rounded-sm"
          >
            <option value="">Property Type</option>
            <option value="Residential">Residential</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-blue-600 mb-2" htmlFor="pictures">
            Pictures (comma separated URLs)
          </label>
          <input
            type="text"
            id="pictures"
            name="pictures"
            value={propertyData.pictures.join(", ")}
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                pictures: e.target.value.split(", "),
              })
            }
            className="w-full p-2 border border-blue-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
