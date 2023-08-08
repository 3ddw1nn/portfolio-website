import React, { useState, useEffect, useRef } from "react";
import iphonestock from "./images/iphoneStock.png";
//@ts-ignore
import hoverEffect from "hover-effect";
import postItImage2 from "./images/postItUI2.png";
import postItImage from "./images/postItUI.jpg";
import image2 from "./images/image2.jpg";
import overlay from "./images/overlay.png";
import "./styles/ui-ux.css";
import { Navigate, useNavigate } from "react-router-dom";

const UI_UX = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#postit-image"),
      intensity: 0.3,
      image1: postItImage,
      image2: postItImage2,
      displacementImage: overlay,
    });
  });
  return (
    <div className="bg-black">
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
      <div className="bg-[url('https://media.giphy.com/media/Byour3OgR0nWnRR6Tc/giphy.gif')] w-full h-[600px] bg-cover bg-center bg-no-repeat mb-8"></div>
      <div className="space-y-8">
        <div
          onClick={() => {
            navigate("/portfolio/ui_ux/postit");
          }}
          className=" mx-16 cursor-pointer mb-24 lg:mx-[300px] flex items-center border border-gray-700 pl-6 rounded-3xl backdrop-blur-3xl box-border lg:p-10 bg-gradient-135 from-slate-900 to-transparent shadow "
        >
          <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] rounded-3xl overflow-hidden">
            <a
              href="/portfolio/ui_ux/postit"
              id="postit-image"
              className="bg-no-repeat flex justify-center items-center lg:h-full w-full h-[100px]"
            ></a>
          </div>
          <div className="flex">
            <div className="flex flex-col ml-6 lg:my-0 my-6  ">
              <h5 className="lg:mb-2 lg:mt-8 mt-4 lg:ml-5 text-2xl font-bold text-white">POST IT</h5>
              <p className="mb-3  font-normal text-gray-400">Personal UI/UX Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI_UX;
