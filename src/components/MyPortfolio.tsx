import React from "react";
import { Images } from "../pages/portfolio/Portfolio.json";
type Image = {
  name: string;
  src: string;
  date: string;
  description: string;
};

function MyPortfolio() {
  return (
    <div>
      {" "}
      <section className="flex justify-center mb-36">
        <div className="content">
          <h2 className="text-8xl">PORTFOLIO</h2>
          <h2 className="text-8xl">PORTFOLIO</h2>
        </div>
      </section>
      <div className="gallery sm:mt-12 sm:px-24 sm:h-[350px] rounded-full">
        {Images.map((image: Image) => {
          return (
            <div className="relative">
              <a key={image.src} href={`/portfolio/illustration/${image.name}`}>
                {" "}
                <img className="" src={image.src} alt="" />
              </a>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                <div className=" text-white font-bold">{image.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyPortfolio;
