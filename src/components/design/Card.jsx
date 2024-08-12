import { BsImage } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Card() {
  return (
    <div className="card rounded-sm bg-[#F9FAFB]">
      <figure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <div className="absolute left-4  bottom-4 px-1 font-semibold rounded-md bg-orange-100 flex gap-2 items-center">
          <BsImage className="transform text-orange-500 scale-x-[-1]" /> 20
        </div>
      </figure>
      <div className="card-body p-4">
        <div className="flex justify-between font-medium ">
          <div className="px-1 text-sm bg-blue-200 rounded">Apartment</div>
          <div className="px-1 text-sm font-semibold flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500"></div>
            Ready to move
          </div>
        </div>
        <hr />
        <h2 className="card-title text-xl">SunnySlope Suites </h2>
        <div className="flex mb-3 justify-start text-sm text-black gap-1 items-center">
          <span className="text-orange-500">
            <MdOutlineLocationOn className="text-2xl" />
          </span>
          Meadowshire Park, Greenfield, USA
        </div>

        <div className="font-semibold text-xl">$ 25000</div>
      </div>
    </div>
  );
}
