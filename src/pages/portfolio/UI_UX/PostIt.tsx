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
  // if (inView) {
  //   setIsVisible(true);
  // }
  return (
    <div className="">
      <div className="text-white mt-24  ">
        <div className=" flex flex-wrap flex-col sm:h-[350px] sm:flex-row items-center">
          <div className="flex flex-col w-full sm:items-center sm:justify-center sm:flex-row justify-center items-center text-center sm:text-left">
            <h1 className=" text-[2.5rem] font-bold leading-tight ">
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
      <section className="bg-white border-b py-8">
        <div className=" max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Post It</h2>
          <div className="absolute bg-transparent mt-24 pr-4 mr-48 right-0 ">
            <div className="flex flex-col justify-end">
              <PostItLogo />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-2/3 pl-6 pr-6 pt-6">
              <div className="flex">
                <p className="text-xl">Timeline </p>
                <p className="ml-8 text-xl text-gray-500">July-August 2021</p>
              </div>
              <div className="flex mb-5">
                <p className="text-xl">Tools </p>
                <p className="ml-8 text-xl text-gray-500">Adobe XD, Illustrator, Dreamweaver, Sketch</p>
              </div>
              <p className="text-gray-600 text-left mb-36">
                Post It is a social network that brings locals together to find secretly known or well known spots of
                interest. I developed this concept webapp as lead designer and I presented the capabilities of how newer
                innovations could redefine the direction of App development. My time developing this project has pushed
                event storming, quality assurance, and execution abilities. I gained valuable insights on the balance of
                relationships between user needs and business needs.
                <br />
                <br />
              </p>
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
        {/* <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg> */}
      </div>
      {/* Device Sizes */}
      <div ref={ref} className="flex sm:items-center sm:-mt-[20rem] mb-20 sm:px-14">
        <div
          className={`w-2/3 sm:w-2/3 sm:h-1/2 px-4  ${
            inView
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img src={iMac} className="sm:rounded-3xl sm:w-full " alt="Placeholder 1" />
        </div>
        <div
          className={`w-1/3 sm:w-1/3 sm:pl-8 ${
            inView
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-200 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img src={tablet} className="sm:rounded-3xl  sm:w-full " alt="Placeholder 2" />
        </div>
        <div
          className={`w-1/3 sm:w-1/4 px-4 ${
            inView
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-300 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img src={mobile} className="sm:rounded-3xl  sm:w-full h-auto" alt="Placeholder 3" />
        </div>
      </div>
      <div className="text-white flex flex-wrap justify-center">
        <h3 className="text-3xl font-bold leading-none mb-8"> Data Integration</h3>
        <p className="text-lg px-16 pb-8">
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
      <div className="flex justify-center mx-20 mb-6 ">
        <div className="sm:grid sm:grid-cols-2 sm:gap-6 flex flex-col sm:space-y-0 space-y-4">
          <div ref={ref2}>
            <div
              className={`rounded-xl ${
                inView2
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <img src={screenShot1} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
          <div
            className={`rounded-xl ${
              inView2
                ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                : "opacity-0 translate-x-12"
            }`}
          >
            <img src={screenShot2} className="rounded-xl " alt="Placeholder 1" />
          </div>
          <div ref={ref3}>
            <div
              className={`rounded-xl ${
                inView3
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <img src={screenShot3} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
          <div ref={ref4}>
            <div
              className={`rounded-xl ${
                inView4
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <img src={screenShot4} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-wrap justify-center">
        <h3 className="text-3xl font-bold leading-none mt-8"> Mobile</h3>
      </div>
      <div ref={ref5} className="flex justify-center ">
        <div
          className={`flex flex-col w-1/5 justify-center text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img src={mobile_log_in} className="p-0" alt="Placeholder 1" />
          <div className="text-2xl text-white font-bold leading-none ">Log In</div>
        </div>
        <div
          className={`flex flex-col w-1/5 justify-center text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[300ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img src={mobile_search} className="p-0" alt="Placeholder 1" />
          <div className="text-2xl text-white font-bold leading-none ">Search</div>
        </div>
        <div
          className={`flex flex-col w-1/5 justify-center text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[500ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img src={mobile_map} className="p-0" alt="Placeholder 1" />
          <div className="text-2xl text-white font-bold leading-none ">Map</div>
        </div>
        <div
          className={`flex flex-col w-1/5 justify-center text-center ${
            inView5
              ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-[700ms] ease-in-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          <img src={mobile_create_post} className="p-0" alt="Placeholder 1" />
          <div className="text-2xl text-white font-bold leading-none ">Create Post</div>
        </div>
      </div>
      <div className="text-white flex flex-wrap justify-center mt-12">
        <h3 className="text-3xl font-bold leading-none mb-8"> Instant Messaging</h3>
      </div>
    </div>
  );
};

export default PostIt;
