import React from "react";
import { useInView } from "react-intersection-observer";
import { Images } from "../pages/portfolio/Portfolio.json";
import screenShot1 from "/Code/images/Coding.png";
import screenShot2 from "/UI-UX/images/TravelWebsite.png";
import screenShot3 from "/ArtCatalog/Akira.jpg";
import screenShot4 from "/ArchCatalog/4.jpg";
type Image = {
  name: string;
  src: string;
  date: string;
  description: string;
};

function MyPortfolio() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [ref2, inView2] = useInView({
    threshold: 0,
  });
  return (
    <div>
      {" "}
      <section className="flex justify-center">
        <div className="content bg-transparent">
          <h2 className="sm:text-8xl text-5xl">PORTFOLIO</h2>
          <h2 className="sm:text-8xl text-5xl">PORTFOLIO</h2>
        </div>
      </section>
      <div className="gallery sm:mt-12 sm:px-24 sm:h-[350px] h-[150px] rounded-full">
        {Images.map((image: Image) => {
          return (
            <div className="relative sm:visible invisible">
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
      <div className="sm:invisible visible flex justify-center ">
        <div className="grid grid-cols-2 flex-col space-y-2">
          <div ref={ref}>
            <div
              className={`rounded-xl ${
                inView
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <img src={screenShot1} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
          <div
            className={`rounded-xl ${
              inView
                ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                : "opacity-0 translate-x-12"
            }`}
          >
            <img src={screenShot2} className="rounded-xl " alt="Placeholder 1" />
          </div>
          <div ref={ref2}>
            <div
              className={`rounded-xl ${
                inView2
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <img src={screenShot3} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
          <div ref={ref2}>
            <div
              className={`rounded-xl ${
                inView2
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 delay-100 ease-in-out"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <img src={screenShot4} className="rounded-xl " alt="Placeholder 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
