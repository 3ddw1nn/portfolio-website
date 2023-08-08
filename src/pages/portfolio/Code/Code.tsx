import React, { useState, useEffect, useRef } from "react";
import iphonestock from "./images/iphoneStock.png";
//@ts-ignore
import hoverEffect from "hover-effect";
import overlay from "./images/overlay.png";
import overlay2 from "./images/overlay2.png";
import planetBackground from "./images/planetBackground.jpg";
import blogProject from "./images/blogProject.png";
import blogProject2 from "./images/blogProject2.png";
import membersOnly from "./images/membersOnly.png";
import membersOnly2 from "./images/membersOnly2.png";
import inventory from "./images/inventory.png";
import inventory2 from "./images/inventory2.png";
import shoppingCart from "./images/shoppingcart.png";
import memoryCard from "./images/memoryCard.png";
import weather from "./images/weatherApp.png";
import task from "./images/task.png";
import etchnsketch from "./images/etchnsketch.png";
import Footer from "../../../components/Footer/Footer";
const code = () => {
  useEffect(() => {
    var membersOnlyPhoto = new hoverEffect({
      parent: document.querySelector("#members-only-hover-photo"),
      imagesRatio: 0.3,
      intensity: 0.1,
      image1: membersOnly,
      image2: membersOnly2,
      displacementImage: overlay2,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#blog-hover-photo"),
      imagesRatio: 0.4,
      intensity: 0.3,
      image1: blogProject,
      image2: blogProject2,
      displacementImage: overlay,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#express-inventory-app"),
      imagesRatio: 0.4,
      intensity: 0.3,
      image1: inventory2,
      image2: inventory,
      displacementImage: overlay,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#react-shopping-cart"),
      imagesRatio: 0.4,
      intensity: 0.3,
      image1: shoppingCart,
      image2: inventory,
      displacementImage: overlay,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#memory-card"),
      imagesRatio: 0.4,
      intensity: 0.3,
      image1: memoryCard,
      image2: inventory,
      displacementImage: overlay,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#weather-app"),
      imagesRatio: 0.4,
      intensity: 0.3,
      image1: weather,
      image2: inventory,
      displacementImage: overlay,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#task-app"),
      imagesRatio: 0.4,
      intensity: 0.3,
      image1: task,
      image2: inventory,
      displacementImage: overlay,
    });
  });
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#etch-n-sketch"),
      imagesRatio: 0.4,
      intensity: 0.3,
      image1: etchnsketch,
      image2: inventory,
      displacementImage: overlay,
    });
  });
  return (
    <div className="bg-black">
      <header>
        <h1 className=" flex items-center text-4xl text-transparent text-center">
          <img
            loading="lazy"
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
            <div className="flex flex-col text-center justify-center ">
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
            <div className="flex flex-col text-center  justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Members Only</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Members Club Project</p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px]   sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="express-inventory-app"
              className=" flex justify-center items-center h-[300px] sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col text-center  justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Express Inventory App</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Inventory Application Project</p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px]   sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="react-shopping-cart"
              className=" flex justify-center items-center h-[300px]  sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col text-center  justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">React Shopping Cart</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Shopping Cart Project</p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px]   sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="memory-card"
              className=" flex justify-center items-center h-[300px]  sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col text-center  justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Memory Card Game</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Memory Card Project</p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px]   sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="weather-app"
              className=" flex justify-center items-center h-[300px] sm:bg-top sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col text-center  justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Weather App</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Weather App Project</p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px]   sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="task-app"
              className=" flex justify-center items-center h-[300px] sm:bg-top sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col text-center  justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Task App</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Task App Project</p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex flex-col items-center border border-gray-700 rounded-3xl backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent shadow sm:flex-row ">
          <div className=" sm:h-[300px] h-[250px] w-[200px]   sm:bg-auto sm:w-[800px] rounded-3xl overflow-hidden">
            <div
              id="etch-n-sketch"
              className=" flex justify-center items-center h-[300px] sm:bg-top sm:h-[300px]  sm:w-full"
            ></div>
          </div>
          <div className="flex w-1/3 justify-center">
            <div className="flex flex-col text-center  justify-center ">
              <h5 className="mb-2 mt-8 sm:mt-0 sm:ml-6 ml-0 text-2xl font-bold text-white">Etch N' Sketch</h5>
              <p className="mb-3  font-normal  sm:ml-6 ml-0 text-gray-400">Personal Etch N' Sketch Project</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default code;
