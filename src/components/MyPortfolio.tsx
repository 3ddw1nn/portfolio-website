import React from "react";
import { useInView } from "react-intersection-observer";
import { Images } from "../pages/portfolio/Portfolio.json";
import screenShot1 from "/Code/images/Coding.png";
import screenShot2 from "/UI-UX/images/TravelWebsite.png";
import screenShot3 from "/ArtCatalog/Akira.jpg";
import screenShot4 from "/ArchCatalog/4.jpg";

import { ThumbnailGrid } from "./ThumbnailGrid/ThumbnailGrid";

const images: { src: string; label: string }[] = [
  { src: screenShot1, label: "Coding" },
  { src: screenShot2, label: "UI-UX" },
  { src: screenShot3, label: "Art" },
  { src: screenShot4, label: "Architecture" },
];

type Image = {
  name: string;
  src: string;
  link: string;
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
      <div className="gallery sm:mt-12 sm:px-24 sm:h-[350px] h-[150px] rounded-full">
        {Images.map((image: Image) => (
          <div className="relative sm:visible invisible" key={image.src}>
            <a href={`/portfolio/${image.link}`}>
              <img className="" src={image.src} loading="lazy" alt="" />
            </a>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
              <div className=" text-white font-bold">{image.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:invisible visible">
        <ThumbnailGrid /> {/* Provide the images prop */}
      </div>
    </div>
  );
}

export default MyPortfolio;
