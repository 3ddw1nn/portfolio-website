import React, { useState, useEffect, useRef } from "react";
import iphonestock from "./images/iphoneStock.png";
//@ts-ignore
import hoverEffect from "hover-effect";
import image from "./images/image.jpg";
import image2 from "./images/image2.jpg";
import overlay from "./images/overlay.png";
import overlay2 from "./images/overlay2.png";
import planetBackground from "./images/planetBackground.jpg";
import blogProject from "./images/blogProject.png";
import blogProject2 from "./images/blogProject2.png";
import membersOnly from "./images/membersOnly.png";
import membersOnly2 from "./images/membersOnly2.png";

const code = () => {
  // useEffect(() => {
  //   var blogPhoto = new hoverEffect({
  //     parent: document.querySelector("#blog-hover-photo"),
  //     intensity: 0.3,
  //     image1: blogProject,
  //     image2: blogProject,
  //     displacementImage: overlay,
  //   });
  // });
  useEffect(() => {
    var membersOnlyPhoto = new hoverEffect({
      parent: document.querySelector("#members-only-hover-photo"),
      imagesRatio: 1,
      intensity: 0.1,
      image1: membersOnly,
      image2: membersOnly2,
      displacementImage: overlay2,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#blog-hover-photo"),
      imagesRatio: 1,
      intensity: 0.3,
      image1: blogProject,
      image2: blogProject2,
      displacementImage: overlay,
    });
  });
  return (
    <div>
      <header>
        <h1 className=" flex items-center text-4xl text-transparent text-center">
          <img
            className=" md:w-[850px] h-auto md:ml-0  -ml-[100px] bg-cover  bg-no-repeat mb-8 "
            src={planetBackground}
          ></img>
          <div className="w-full">
            <div className="md:text-7xl flex justify-center text-4xl md:-ml-[150px] -ml-[175px] py-14 tracking-wide font-extrabold bg-gradient-to-r animate-text bg-clip-text from-yellow-400 to-red-600">
              <div className="">Coding Projects</div>
            </div>
          </div>
        </h1>
      </header>
      <div className="space-y-8">
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px] sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="blog-hover-photo"
              className="bg-no-repeat flex justify-center items-center h-[300px]  sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Blog</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Blog Project</p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px]   sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="members-only-hover-photo"
              className=" flex justify-center items-center h-[300px]  sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Members Only</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Members Club Project</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center">
        <div className="flex flex-col items-center  border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <h4 className=" text-white absolute vertical-rl sm:visible invisible transform rotate-180">Members Only</h4>
          <div className=" sm:h-[300px] sm:w-[700px] rounded-3xl overflow-hidden">
            <div id="blog-hover-photo" className="h-full w-full" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 mx-16 w-1/2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Members Only
            </h5>
            <p className="mb-3 mx-16 font-normal text-gray-700 dark:text-gray-400">Members Only Project</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center  border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <h4 className=" text-white absolute vertical-rl sm:visible invisible transform rotate-180">Inventory</h4>
          <div className=" sm:h-[300px] sm:w-[700px] rounded-3xl overflow-hidden">
            <div id="blog-hover-photo" className="h-full w-full" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 mx-16 w-1/2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Inventory
            </h5>
            <p className="mb-3 mx-16 font-normal text-gray-700 dark:text-gray-400">Personal Inventory Project</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center  border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <h4 className=" text-white absolute vertical-rl sm:visible invisible transform rotate-180">Task Organizer</h4>
          <div className=" sm:h-[300px] sm:w-[700px] rounded-3xl overflow-hidden">
            <div id="blog-hover-photo" className="h-full w-full" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 mx-16 w-1/2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Task Organizer
            </h5>
            <p className="mb-3 mx-16 font-normal text-gray-700 dark:text-gray-400">Personal Task Organizer Project</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default code;
