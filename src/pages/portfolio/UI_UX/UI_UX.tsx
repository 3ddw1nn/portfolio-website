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
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#postit-image"),
      intensity: 0.3,
      image1: image,
      image2: image2,
      displacementImage: overlay,
    });
  });
  return (
    <div>
      <header>
        <div className="h-[800px] sm:px-8 w-full flex items-center text-white absolute justify-center">
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
      <div className="space-y-8">
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px] sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <a
              href="/portfolio/ui_ux/postit"
              id="postit-image"
              className="bg-no-repeat flex justify-center items-center h-[300px]  sm:h-[300px]  sm:w-full"
            ></a>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">POST IT</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal UI/UX Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI_UX;
