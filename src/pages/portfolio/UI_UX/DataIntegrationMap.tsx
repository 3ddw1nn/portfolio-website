import React from "react";
import sectionMap from "./images/sectionMap.png";
import userNetwork from "./images/userNetwork.png";
import userProfile from "./images/userProfile.png";
import userListing from "./images/listing.png";
import instantMessaging from "./images/instantMessaging.png";
import rightArrow from "./images/arrow-right.svg";

import { useInView } from "react-intersection-observer";

function DataIntegrationMap() {
  const [ref2, inView2] = useInView({
    threshold: 0,
  });
  return (
    <div>
      <div ref={ref2} className="flex mt-24 mx-12 ">
        {/* Column 1 */}
        <div
          className={`w-[48%] space-y-6  ${
            inView2
              ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-200 ease-in-out"
              : "opacity-0 translate-x-24"
          }`}
        >
          <div className="flex">
            <div className=" w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
              <div className="flex h-full w-full items-center justify-center bg-black rounded-full back">
                <h1 className="text-lg py-2 text-center font-black text-white">Search Engine</h1>
              </div>
            </div>
            <img
              src={rightArrow}
              className={`mx-4 w-10 ${
                inView2
                  ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-[400ms] ease-in-out"
                  : "opacity-0 translate-x-24"
              }`}
              alt="Placeholder 2"
            />
          </div>
          <div className="flex">
            <div className=" w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
              <div className="flex h-full w-full items-center justify-center bg-black rounded-full back">
                <h1 className="text-lg py-2 text-center font-black text-white">Create Post</h1>
              </div>
            </div>
            <img
              src={rightArrow}
              className={`mx-4 w-10 ${
                inView2
                  ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-[600ms] ease-in-out"
                  : "opacity-0 translate-x-24"
              }`}
              alt="Placeholder 2"
            />
          </div>
          <div className="flex">
            <div className="h-1/2 w-full rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
              <div className="flex flex-col h-full w-full bg-black overflow-hidden rounded-3xl">
                <h1 className="text-lg py-2 text-center font-black text-white">Section Map</h1>
                <img src={sectionMap} className="rounded-br-3xl rounded-bl-3xl" alt="Placeholder 2" />
              </div>
            </div>
            <img
              src={rightArrow}
              className={`mx-4 w-10 ${
                inView2
                  ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-[800ms] ease-in-out"
                  : "opacity-0 translate-x-24"
              }`}
              alt="Placeholder 2"
            />
          </div>
        </div>
        {/* Column 2 */}

        <div
          className={`w-[63.8%] h-full ${
            inView2
              ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-200 ease-in-out"
              : "opacity-0 translate-x-24"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="w-full  rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
              <div className="flex flex-col w-full bg-black rounded-3xl">
                <h1 className="text-lg py-2 text-center font-black text-white">Listing</h1>
                <img src={userListing} className="rounded-br-3xl w-full h-full  rounded-bl-3xl " alt="Placeholder 2" />
              </div>
            </div>
            <img
              src={rightArrow}
              className={`mx-4 w-10 ${
                inView2
                  ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-[1000ms] ease-in-out"
                  : "opacity-0 translate-x-24"
              }`}
              alt="Placeholder 2"
            />
          </div>
        </div>
        {/* Column 3 */}
        <div
          className={`w-[62.3%] h-full ${
            inView2
              ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-200 ease-in-out"
              : "opacity-0 translate-x-24"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="w-full  rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
              <div className="flex  flex-col w-full bg-black rounded-3xl">
                <h1 className="text-lg py-2 text-center font-black text-white">User Network</h1>
                <img src={userNetwork} className="rounded-br-3xl w-full h-full  rounded-bl-3xl " alt="Placeholder 2" />
              </div>
            </div>
            <div className="flex flex-col space-y-[9rem]">
              <img
                src={rightArrow}
                className={`mx-4 w-10 ${
                  inView2
                    ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-[1200ms] ease-in-out"
                    : "opacity-0 translate-x-24"
                }`}
                alt="Placeholder 2"
              />
              <img
                src={rightArrow}
                className={`mx-4 w-10 ${
                  inView2
                    ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-[1400ms] ease-in-out"
                    : "opacity-0 translate-x-24"
                }`}
                alt="Placeholder 2"
              />
            </div>
          </div>
        </div>
        {/* Column 4 */}
        <div
          className={` ml-4 w-[34%] space-y-6  ${
            inView2
              ? "opacity-100 transform translate-x-0 transition-all duration-1000 delay-200 ease-in-out"
              : "opacity-0 translate-x-24"
          }`}
        >
          <div className="h-[43%] w-full rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div className="flex flex-col h-full w-full bg-black overflow-hidden rounded-3xl">
              <h1 className="text-lg py-2 text-center font-black text-white">User Profile</h1>
              <img src={userProfile} className="rounded-br-3xl rounded-bl-3xl" alt="Placeholder 2" />
            </div>
          </div>

          <div className="h-[43%] w-full rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div className="flex flex-col h-full w-full bg-black overflow-hidden rounded-3xl">
              <h1 className="text-lg py-2 text-center font-black text-white">Instant Messaging</h1>
              <img src={instantMessaging} className="rounded-br-3xl rounded-bl-3xl" alt="Placeholder 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataIntegrationMap;
