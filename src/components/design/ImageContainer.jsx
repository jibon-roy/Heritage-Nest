import { IoMdPlay } from "react-icons/io";

export default function ImageContainer({
  image1Url,
  image2Url,
  imagePosition,
  className,
}) {
  return (
    <div className={`${className ? className : ""} relative`}>
      <img
        src={image1Url}
        alt="room-image"
        className={`rounded-xl shadow-xl drop-shadow-2xl max-h-[452px] w-[80%] object-cover
             ${imagePosition == "bottom" && ""} 
            ${imagePosition == "top" && "mt-20"} 
                `}
      />

      <img
        src={image2Url}
        alt="room-image"
        className={`absolute shadow-xl drop-shadow-2xl rounded-xl object-cover w-[80%] h-52 
            ${imagePosition == "bottom" && "-bottom-20 right-0"} 
            ${imagePosition == "top" && "-top-24 right-0"} 

        }
            `}
      />

      {/* Play Button */}
      <div
        className={`absolute flex justify-center items-center rounded-full bg-blue-700 
                     md:w-16 md:h-16 w-12 h-12  hover:bg-blue-600 transition-colors duration-300
                      ${
                        imagePosition == "bottom" &&
                        "right-12 md:right-10 lg:right-[4.7rem] bottom-[6.3rem] md:bottom-24 "
                      }
                      ${
                        imagePosition == "top" &&
                        "left-12 md:left-10 lg:left-[4.5rem] -top-6 md:-top-8 "
                      }
                      `}
      >
        <IoMdPlay className="text-2xl md:text-3xl text-white" />
      </div>
    </div>
  );
}
