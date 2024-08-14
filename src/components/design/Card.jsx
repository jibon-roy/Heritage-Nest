import { BsImage } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  console.log(item);
  return (
    <div className="card rounded-sm bg-[#F9FAFB]">
      <figure className="relative">
        <img
          src={item?.pictures[1]}
          alt="Shoes"
          className="object-cover aspect-video"
        />
        <div className="absolute left-4  bottom-4 px-1 font-semibold rounded-md bg-orange-100 flex gap-2 items-center">
          <BsImage className="transform text-orange-500 scale-x-[-1]" />{" "}
          {item?.pictures?.length}
        </div>
      </figure>
      <div className="card-body p-4">
        <div className="flex justify-between font-medium ">
          <div className="px-1 text-sm bg-blue-200 rounded">
            {item?.property_type}
          </div>
          <div className="px-1 text-sm font-semibold flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500"></div>
            Ready to move
          </div>
        </div>
        <hr />
        <Link to={`/property/${item?._id}`}>
          <h2 className="card-title text-xl hover:text-orange-400 transition-all">
            {item?.property_name}{" "}
          </h2>
        </Link>
        <div className="flex mb-3 justify-start text-sm text-black gap-1 items-center">
          <span className="text-orange-500">
            <MdOutlineLocationOn className="text-2xl" />
          </span>
          {item?.location}
        </div>

        <div className="font-semibold text-xl">$ {item?.bid_price_max}k</div>
      </div>
    </div>
  );
}
