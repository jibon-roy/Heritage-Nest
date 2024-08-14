import { useState } from "react";
import second from "../../assets/images/bg3.jpg";
import Section from "../design/Section";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiHomeCircle } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [selectedTab, setSelectedTab] = useState("Buy");
  const [isInputFocused, setIsInputFocused] = useState(false);
  // const [search, setSearch] = useState({});
  const navigate = useNavigate();
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

  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target;
    const category = selectedTab;
    const search = data.search.value;
    const location = data.location.value;
    const propertyType = data.propertyType.value;
    const budget = data.budget.value;
    // const searchedData = {
    //   category,
    //   search,
    //   location,
    //   propertyType,
    //   budget,
    // };
    navigate(
      `/search?category=${category}&search=${search}&location=${location}&propertyType=${propertyType}&budget=${budget}`
    );
    // setSearch(searchedData);
  };

  return (
    <Section
      sectionClass="relative md:h-80 h-screen bg-cover bg-center mb-20 md:mb-44"
      style={{
        backgroundImage: `url(${second})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-700 bg-opacity-60"></div>
      <form
        onSubmit={handleSearch}
        className=" mx-auto mt-0 px-2 md:px-10 lg:px-20"
      >
        <div className="bg-white container h-fit shadow-lg rounded mx-auto w-4/5 2xl:w-[70%] p-6 absolute max-md:top-20 md:-bottom-28 -translate-x-1/2 left-1/2">
          <div className="flex flex-wrap border-b border-gray-200">
            {["Buy", "Rent", "PG", "Plot", "Commercial"].map((tab) => (
              <div
                key={tab}
                className={`py-2 cursor-pointer px-4 text-sm font-medium ${
                  selectedTab === tab
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-500"
                } hover:text-blue-700`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="relative">
              <div
                className={`absolute top-1/2 left-4 flex items-center gap-2 text-gray-400 transition-opacity duration-300 ${
                  isInputFocused ? "opacity-0" : "opacity-100"
                }`}
                style={{ transform: "translateY(-80%)", pointerEvents: "none" }}
              >
                <FaMagnifyingGlass /> Search Properties
              </div>
              <input
                id="search"
                name="search"
                autoComplete="name"
                onFocus={() => setIsInputFocused(true)}
                onBlur={(e) =>
                  e.target.value.length > 0
                    ? setIsInputFocused(true)
                    : setIsInputFocused(false)
                }
                onChange={(e) =>
                  e.target.value.length > 0
                    ? setIsInputFocused(true)
                    : setIsInputFocused(false)
                }
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded-sm mb-4"
                style={{ zIndex: 10 }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label
                  htmlFor="location"
                  className="flex mb-3 justify-start text-black font-semibold gap-2 items-center"
                >
                  <span className="text-orange-500 text-xl">
                    <MdOutlineLocationOn />
                  </span>
                  Your Location
                </label>
                <select
                  id="location"
                  name="location"
                  className="p-2  w-full bg-blue-50  rounded-sm"
                >
                  <option value="">Your Location</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="propertyType"
                  className="flex mb-3 justify-start text-black font-semibold gap-2 items-center"
                >
                  <span className="text-orange-500 text-xl">
                    <BiHomeCircle />
                  </span>
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  className="p-2  w-full bg-blue-50  rounded-sm"
                >
                  <option value="">Property Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="flex mb-3 justify-start text-black font-semibold gap-2 items-center"
                >
                  <span className="text-orange-500 text-xl">
                    <AiFillDollarCircle />
                  </span>
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="p-2  w-full bg-blue-50  rounded-sm"
                >
                  <option value={""}>Budget</option>
                  <option value={100}>200k</option>
                  <option value={300}>300k</option>
                  <option value={500}>500k</option>
                  <option value={1000}>1000k</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-2 rounded-sm hover:bg-blue-600"
            >
              <FaMagnifyingGlass />
              Find Property
            </button>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default SearchBox;
