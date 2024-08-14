import {
  MdBalcony,
  MdOutlineLocationOn,
  MdOutlineQueuePlayNext,
} from "react-icons/md";
import Section from "../../components/design/Section";
import { useState, useRef, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import Button from "../../components/actions/Button";
import useLoadPropertyById from "../../lib/hooks/admin/useLoadPropertyById";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import useUserActions from "../../lib/hooks/useUserActions";
import { FaBath, FaBed } from "react-icons/fa";
import Services from "../home/Services";
import PopularCard from "../buy/PopularCard";
import Winner from "./Winner";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const [values, setValues] = useState([20, 50]);
  const { user } = useUserActions();
  const trackRef = useRef(null);
  const params = useParams();
  const { property, isLoading } = useLoadPropertyById(params.id);
  // console.log(property);

  useEffect(() => {
    // Check if trackRef is defined and has a getBoundingClientRect method
    if (trackRef.current) {
      // const rect = trackRef.current.getBoundingClientRect();
      // console.log("Track dimensions:", rect);
    }
  }, [values]);

  const [img, setImg] = useState(property?.pictures[0]);

  const handleChangeImage = (src) => {
    setImg(src);
  };

  const handleBid = () => {
    const max = values[1];
    const min = values[0];
    const propertyId = property?._id;
    const bidder = user?.email;
    const data = { max, min, propertyId, bidder };
    console.log(data);
  };

  if (isLoading) return <Loading />;

  return (
    <Section>
      <div className="flex gap-4 justify-between max-w-xl">
        <div>
          <h3 className="text-lg my-2 max-w-lg font-semibold">
            {property?.property_name}
          </h3>
          <div className="flex mb-3 justify-start text-sm text-black gap-1 items-center">
            <span className="text-orange-500">
              <MdOutlineLocationOn className="text-2xl" />
            </span>
            Meadowshire Park, Greenfield, USA
          </div>
        </div>
        <p className="text-2xl font-bold my-2">$ {property?.bid_price_max}K</p>
      </div>
      <div className="gap-4 flex max-md:flex-col">
        <div className="w-4/5">
          <hr className="mb-4" />
          <div className="overflow-hidden">
            <img
              src={img ? img : property?.pictures[0]}
              alt="Property Image 1"
              className="w-full  hover:scale-150 transition-all aspect-video object-cover mb-4"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 overflow-hidden">
            {property?.pictures?.map((src, key) => (
              <img
                key={key}
                src={src}
                onClick={() => handleChangeImage(src)}
                alt="Property Image 1"
                className="w-full cursor-pointer aspect-video object-cover"
              />
            ))}
          </div>
          <div>
            <div className="my-10 bg-[#F9FAFB] border border-[#e9eAeB] rounded-md p-4">
              <h2 className="text-xl col-span-3 font-bold">Overview</h2>
              <div
                style={{
                  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
                }}
                className="grid my-4 bg-white font-semibold gap-4 py-2 px-4 rounded grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
              >
                <p className="flex gap-2 items-center">
                  <FaBed />
                  {property?.OverView?.bed} Beds
                </p>
                <p className="flex gap-2 items-center">
                  <FaBath />
                  {property?.OverView?.bath} Baths
                </p>
                <p className="flex gap-2 items-center">
                  <MdBalcony />1 BalCony
                </p>
                <p className="flex gap-2 items-center">
                  <MdOutlineQueuePlayNext />
                  Fully Furnished
                </p>
              </div>
              <div className="grid my-4 py-2 px-4 rounded grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <p>
                  Carpet Area <br />
                  <span className="font-semibold">
                    {property?.OverView?.area} sqft
                  </span>
                  <br />
                  <span>$ {property?.OverView?.area / 10} / sqft</span>
                </p>
                <p>
                  Floor <br />
                  <span className="font-semibold">
                    {property?.OverView?.floor} sqft
                  </span>
                </p>
                <p>
                  Transaction type <br />
                  <span className="font-semibold">Ready to move</span>
                </p>
                <p>
                  Facing <br />
                  <span className="font-semibold">North - East</span>
                </p>
                <p>
                  Additional Rooms <br />
                  <span className="font-semibold">
                    15ervant room &1 gust room
                  </span>
                </p>
                <p>
                  Age of construction <br />
                  <span className="font-semibold">New Construction</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-sm">
          <div className="bg-blue-100 p-6 h-fit mb-4 ">
            <p className="text-gray-500">Property Value</p>
            <h3 className="font-bold text-2xl mb-4">
              {property?.bid_price_max}k - {property?.bid_price_min}k
            </h3>
            <p className="font-medium text-gray-500">
              Your bid cannot be more than 10% of the property minimum value.
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
                value={values[0] * 10000}
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
                value={values[1] * 10000}
                className="bg-white rounded-md pl-8 py-3 px-4 w-full"
              />
            </div>
            <div className="p-4">
              <Range
                step={1}
                min={1}
                max={100}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => {
                  const { key, ...restProps } = props;
                  return (
                    <div
                      key={key}
                      ref={trackRef}
                      {...restProps}
                      style={{
                        ...restProps.style,
                        height: "6px",
                        width: "100%",
                        background: getTrackBackground({
                          values,
                          colors: ["#3498db", "#dfe6e9"],
                          min: 0,
                          max: 100,
                        }),
                      }}
                      className="rounded-full p-3 bg-orange-100  w-full"
                    >
                      {children}
                    </div>
                  );
                }}
                renderThumb={({ props }) => {
                  // Destructure key out of props
                  const { key, ...restProps } = props;
                  return (
                    <div
                      key={key}
                      {...restProps}
                      style={{
                        ...restProps.style,
                        height: "24px",
                        width: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(234, 88, 12)",
                      }}
                      className="flex items-center outline-none justify-center"
                    />
                  );
                }}
              />
              <div className="flex justify-between mt-4">
                <span className="font-semibold">$: {values[0] * 10}k</span>
                <span className="font-semibold">$: {values[1] * 10}k</span>
              </div>
            </div>
            <div>
              {user ? (
                <Button type={"secondary"} onClick={handleBid} center={true}>
                  Bid Property
                </Button>
              ) : (
                <Link to={"/sign-in"}>
                  <Button type={"secondary"} center={true}>
                    Sign in to Bid
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div>
            <img
              className="rounded-md border border-gray-300"
              src="https://static.vecteezy.com/system/resources/previews/002/258/917/non_2x/abstract-city-map-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Winner />
      <Services />
      <PopularCard />
    </Section>
  );
};

export default PropertyDetails;
