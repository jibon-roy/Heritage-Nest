import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Autoplay, Navigation } from "swiper/modules";
import Card from "../design/Card";

export default function CardSlider({ data }) {
  // Swiper configuration
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      464: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // loop: true,
    modules: [Navigation, Autoplay],
  };

  return (
    <div className="relative pb-20">
      <Swiper {...swiperParams}>
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev flex rounded-full w-16 h-10 absolute after:hidden top-1/2 bg-[#5490CB] left-4 z-50 transform -translate-y-1/2 cursor-pointer">
        <div>
          <MdKeyboardArrowLeft className="text-2xl text-white " />
        </div>
      </div>
      <div className="swiper-button-next absolute rounded-full top-1/2 right-4 after:hidden z-50 bg-[#5490CB]  transform -translate-y-1/2 cursor-pointer">
        <div>
          <MdKeyboardArrowRight className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
}
