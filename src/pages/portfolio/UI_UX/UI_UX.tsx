import React, { useState, useEffect, useRef } from "react";
import iphonestock from "./images/iphoneStock.png";
//@ts-ignore
import hoverEffect from "hover-effect";
import image from "./images/image.jpg";
import image2 from "./images/image2.jpg";
import overlay from "./images/overlay.png";

const UI_UX = () => {
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#item-image"),
      intensity: 0.3,
      image1: image,
      image2: image2,
      displacementImage: overlay,
    });
  });
  return (
    <div>
      <header>
        <div className="h-[800px] px-8 w-full flex items-center text-white absolute">
          <div className="text-3xl w-2/3">
            <span>
              I'm a Software Engineer that uses my background in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-200 to-red-600">design</span>{" "}
              to create meaningful digital experiences
            </span>
          </div>
        </div>
      </header>
      <div className="bg-[url('https://media.giphy.com/media/Byour3OgR0nWnRR6Tc/giphy.gif')] sm:w-full w-full h-[600px] bg-cover bg-center bg-no-repeat mb-8 sm:h-[800px]"></div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center  border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row sm:max-w-xl">
          <h4 className=" text-white absolute vertical-rl sm:visible invisible transform rotate-180">POST IT</h4>
          <div className=" sm:h-[300px] sm:w-[700px] rounded-3xl overflow-hidden">
            <div id="item-image" className="h-full w-full" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 mx-16 w-1/2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              POST IT
            </h5>
            <p className="mb-3 mx-16 font-normal text-gray-700 dark:text-gray-400">Personal UI/UX Project</p>
          </div>
          <a href="/portfolio/ui_ux/postit" className="text-white">
            See More
          </a>
        </div>
      </div>
      {/* <div className="w-full flex justify-center">
        <div className="flex flex-col items-center  border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row sm:max-w-xl">
          <h4 className=" text-white absolute vertical-rl sm:visible invisible transform rotate-180">POST IT</h4>
          <div className=" sm:h-[300px] sm:w-[700px] rounded-3xl overflow-hidden">
            <div id="item-image" className="h-full w-full" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 mx-16 w-1/2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              POST IT
            </h5>
            <p className="mb-3 mx-16 font-normal text-gray-700 dark:text-gray-400">Personal UI/UX Project</p>
          </div>
          <a href="/portfolio/ui-ux/postit" className="text-white">
            See More
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center  border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row sm:max-w-xl">
          <h4 className=" text-white absolute vertical-rl sm:visible invisible transform rotate-180">POST IT</h4>
          <div className=" sm:h-[300px] sm:w-[700px] rounded-3xl overflow-hidden">
            <div id="item-image" className="h-full w-full" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 mx-16 w-1/2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              POST IT
            </h5>
            <p className="mb-3 mx-16 font-normal text-gray-700 dark:text-gray-400">Personal UI/UX Project</p>
          </div>
          <a href="/portfolio/ui-ux/postit" className="text-white">
            See More
          </a>
        </div>
      </div> */}

      {/* 
      <section className="overflow-hidden text-gray-700 ">
        <div className=" px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 sm:-m-2">
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 sm:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 sm:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 sm:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 sm:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 sm:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 sm:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default UI_UX;
