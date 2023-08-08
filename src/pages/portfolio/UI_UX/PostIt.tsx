import React, { useState } from "react";
import Reel from "./Reel";
import iphonestock from "./images/iphoneStock.png";
import { useInView } from "react-intersection-observer";
import mobile from "./images/mobile.png";
import tablet from "./images/tablet.png";
import iMac from "./images/iMac.png";
import DataIntegrationMap from "./DataIntegrationMap";
import screenShot1 from "./images/screenshot1.png";
import screenShot2 from "./images/screenshot2.png";
import screenShot3 from "./images/screenshot3.png";
import screenShot4 from "./images/screenshot4.png";
import mobile_log_in from "./images/mobile_log_in.png";
import mobile_search from "./images/mobile_search.png";
import mobile_map from "./images/mobile_map.png";
import mobile_create_post from "./images/mobile_create_post.png";
import mobile_im from "./images/mobile_IM.png";
import desktop_Im from "./images/DesktopIM.png";
import mobile_im2 from "./images/mobile_IM2.png";

import PostItLogo from "./PostItLogo";
import "./styles/animatedIntro.css";
import "./styles/wave.css";

const PostIt: React.FC = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [ref2, inView2] = useInView({
    threshold: 0,
  });
  const [ref3, inView3] = useInView({
    threshold: 0,
  });
  const [ref4, inView4] = useInView({
    threshold: 0,
  });
  const [ref5, inView5] = useInView({
    threshold: 0,
  });
  const [ref6, inView6] = useInView({
    threshold: 0,
  });
  // if (inView) {
  //   setIsVisible(true);
  // }
  return (
    <div className="bg-black">
      <div className="text-white mt-24  ">
        <div className=" flex flex-wrap flex-col sm:h-[350px] sm:flex-row items-center">
          <div className="flex flex-col w-full  sm:items-center sm:justify-center sm:flex-row justify-center items-center text-center sm:text-left">
            <h1 className="sm:mx-0 mx-6 sm:text-[2.5rem] text-3xl font-bold leading-tight ">
              Connecting locals to discover nearby social points of interest
            </h1>
            {/* <img className=" h-[400px]" src={iphonestock}></img> */}
          </div>
        </div>
      </div>
      <div className="loop-wrapper w-full z-0">
        {/* <div className="mountain"></div>
            <div className="hill"></div> */}
        <div className="tree"></div>
        <div className="tree"></div>
        <div className="tree"></div>
        {/* <div className="rock"></div> */}
        <div className="waves-container mt-2">
          <svg
            className="waves animated"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave"
                d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z"
              />
            </defs>
            <g className="wave-set">
              <use xlinkHref="#wave" x="50" y="0" className="wave-1" />
              <use xlinkHref="#wave" x="50" y="4" className="wave-2" />
              <use xlinkHref="#wave" x="50" y="5" className="wave-3" />
              <use xlinkHref="#wave" x="50" y="7" className="wave-4" />
            </g>
          </svg>
        </div>
        <div className="truck"></div>
        <div className="wheels"></div>
      </div>
      <section className="bg-white border-b sm:mt-0 -mt-20 py-8">
        <div className=" max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 pt-24 sm:mt-0 text-5xl font-bold leading-tight text-center text-gray-800">
            Post It
          </h2>

          {/* <div className="sm:absolute flex justify-center bg-transparent sm:mt-24 my-24 pr-4  right-0 ">
            <div className="flex justify-center">
              <PostItLogo />
            </div>
          </div> */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:hidden flex justify-center pt-12 px-24">
              <PostItLogo />
            </div>
            <div className="flex flex-wrap">
              <div className="mt-24 pl-6 pr-6 pt-6">
                <div className="flex">
                  <p className="text-xl">Timeline </p>
                  <p className="ml-8 text-xl text-gray-500">July-August 2021</p>
                </div>
                <div className="flex mb-5">
                  <p className="text-xl">Tools </p>
                  <p className="ml-8 text-xl text-gray-500">Adobe XD, Illustrator, Dreamweaver, Sketch</p>
                </div>
                <p className="text-gray-600 text-left sm:mb-36 mb-0">
                  Post It is a social network that brings locals together to find secretly known or well known spots of
                  interest. I developed this concept webapp as lead designer and I presented the capabilities of how
                  newer innovations could redefine the direction of App development. My time developing this project has
                  pushed event storming, quality assurance, and execution abilities. I gained valuable insights on the
                  balance of relationships between user needs and business needs.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="md:flex hidden justify-center p-24">
              <PostItLogo />
            </div>
          </div>
        </div>
      </section>
      <div className="relative -mt-[9px] rotate-180 transform -scale-x-100 ">
        <div className="waves-container mt-2">
          <svg
            className="waves animated"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave"
                d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z"
              />
            </defs>
            <g className="wave-set">
              <use xlinkHref="#wave" x="50" y="7" className="wave-4" />
            </g>
          </svg>
        </div>
      </div>
      {/* Device Sizes */}
      <div ref={ref} className="flex sm:items-center sm:-mt-[20rem] -mt-[14rem] mb-10 sm:px-14">
        <div
          className={`w-2/3 sm:w-2/3 sm:h-1/2 px-4  ${
            inView
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={iMac} className=" sm:w-full " alt="Placeholder 1" />
        </div>
        <div
          className={`w-1/3 sm:w-1/3 sm:pl-8 ${
            inView
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-200 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={tablet} className="sm:w-full " alt="Placeholder 2" />
        </div>
        <div
          className={`w-1/3 sm:w-1/4 px-4 ${
            inView
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-300 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={mobile} className=" sm:w-full h-auto" alt="Placeholder 3" />
        </div>
      </div>
      <div className="text-white flex flex-wrap justify-center">
        <h3 className="text-3xl font-bold leading-none my-10"> Data Integration</h3>
        <p className="text-lg px-16 sm:pb-8 pb-0">
          Post It provides listings that are created from users and are verified through Post It's data management team.
          To create a listing, a user must provide a caption, an address, a description, and photos/videos. These
          listings will be sorted by distance and relevance from the user's current location. User's may share these
          listings through Post It's messaging service or via airport.
        </p>
      </div>
      <DataIntegrationMap />
      <Reel />
      <div className="text-white flex flex-wrap justify-center">
        <h3 className="text-3xl font-bold leading-none mb-11"> Desktop</h3>
      </div>
      <div className="flex justify-center sm:mx-20 mx-4 mb-6 ">
        <div className="sm:grid sm:grid-cols-2 sm:gap-6 flex flex-col sm:space-y-0 space-y-4">
          <div ref={ref2}>
            <div
              className={`rounded-xl ${
                inView2
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 sm:-translate-x-12 translate-y-10"
              }`}
            >
              <img loading="lazy" src={screenShot1} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
          <div
            className={`rounded-xl ${
              inView2
                ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                : "opacity-0 sm:translate-x-12 translate-y-10"
            }`}
          >
            <img loading="lazy" src={screenShot2} className="rounded-xl " alt="Placeholder 1" />
          </div>
          <div ref={ref3}>
            <div
              className={`rounded-xl ${
                inView3
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 sm:-translate-x-12 translate-y-10"
              }`}
            >
              <img loading="lazy" src={screenShot3} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
          <div ref={ref4}>
            <div
              className={`rounded-xl ${
                inView4
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 sm:translate-x-12 translate-y-10"
              }`}
            >
              <img loading="lazy" src={screenShot4} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-wrap justify-center">
        <h3 className="text-3xl font-bold leading-none my-8"> Mobile</h3>
      </div>
      <div ref={ref5} className="flex justify-center sm:space-x-0 space-x-2 ">
        <div
          className={`flex flex-col w-1/5 justify-center text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={mobile_log_in} className="p-0" alt="Placeholder 1" />
          <div className="sm:text-2xl text-lg  text-white font-bold leading-none ">Log In</div>
        </div>
        <div
          className={`flex flex-col w-1/5 justify-center text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[300ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={mobile_search} className="p-0" alt="Placeholder 1" />
          <div className="sm:text-2xl text-lg  text-white font-bold leading-none ">Search</div>
        </div>
        <div
          className={`flex flex-col w-1/5 justify-center text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[500ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={mobile_map} className="p-0" alt="Placeholder 1" />
          <div className="sm:text-2xl text-lg  text-white font-bold leading-none ">Map</div>
        </div>
        <div
          className={`flex flex-col w-1/5 justify-center  text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[700ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={mobile_create_post} className="p-0" alt="Placeholder 1" />
          <div className="sm:text-2xl text-lg flex justify-center whitespace-nowrap text-white sm:font-bold leading-none ">
            Create Post
          </div>
        </div>
      </div>
      <div className="text-white flex sm:flex-wrap justify-center mt-12">
        <h3 className="text-3xl font-bold leading-none sm:mb-8"> Instant Messaging</h3>
      </div>
      <div ref={ref6} className="flex sm:flex-row flex-col items-center justify-center mb-20 sm:mr-11 ">
        <div
          className={`flex sm:w-1/5 w-full sm:mt-0 -mt-6 justify-center text-center ${
            inView6
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[700ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={mobile_im2} className="p-0" alt="Placeholder 1" />
        </div>
        <div
          className={`flex sm:w-1/5 w-full sm:mt-0 -mt-24 justify-center text-center ${
            inView6
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[700ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={mobile_im} className="p-0" alt="Placeholder 1" />
        </div>
        <div
          className={`flex sm:w-2/3 w-full sm:px-0 px-4 justify-center text-center ${
            inView6
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[700ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img loading="lazy" src={desktop_Im} className="p-0 rounded-xl" alt="Placeholder 1" />
        </div>
      </div>
    </div>
  );
};

export default PostIt;
