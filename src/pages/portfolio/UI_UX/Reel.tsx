import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/reelStyles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import { useInView } from "react-intersection-observer";

import img from "./images/meter1.svg";

function Reel() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <>
      <div ref={ref} id="skills" className="wrapper mx-4 h-full bg-no-repeat bg-center bg-cover  lg:p-4">
        <div className="skills-wrapper text-center text-white bg-transparent  p-16 rounded-[50px] lg:p-2">
          <h1 className="text-4xl py-8  ">Market Size</h1>
          <p className="text-lg px-16 pb-8">
            Post It provides listings that are created from users and are verified through Post It's data management
            team. To create a listing, a user must provide a caption, an address, a description, and photos/videos.
            These listings will be sorted by distance and relevance from the user's current location. User's may share
            these listings through Post It's messaging service or via airport.{" "}
          </p>
          <div
            className={`square flex  justify-between  items-center bg-transparent my-6 ${
              inView
                ? "opacity-100 transform scale-100 transition-all duration-1000 delay-[700ms] ease-in-out"
                : "opacity-0 scale-75"
            }`}
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={45}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="">
                {" "}
                <div className=" ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Global</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                {" "}
                <div className=" ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">North America </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                {" "}
                <div className=" ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">US</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" ">
                {" "}
                <div className=" ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">California</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                {" "}
                <div className=" ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Los Angeles</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reel;
