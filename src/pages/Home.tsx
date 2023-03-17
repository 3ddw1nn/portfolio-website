import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyPortfolio from "../components/MyPortfolio";
import { ContactMe } from "../components/ContactMe";
// import MySkills from "../components/Skills2";

import Foreground from "../assets/ParallaxImages/Foreground.png";
import MiddleStars from "../assets/ParallaxImages/MiddleStars.png";
import BigStars from "../assets/ParallaxImages/BigStars.png";
import Stars from "../assets/ParallaxImages/Stars.png";
import Sky from "../assets/ParallaxImages/Sky.png";

import { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./infoAnimation.css";
import "./multiTextAnimation.css";
import "./borderAnimation.css";
import "./myPortfolioAnimation.css";

let element: IParallax | null;

const Home = () => {
  const handleClick = () => {
    element?.scrollTo(0);
    // scrollToSkills();
  };
  const portfolio = document.getElementById("Portfolio");
  portfolio?.addEventListener("click", function () {
    element?.scrollTo(1.26);
  });
  const about = document.getElementById("About");
  about?.addEventListener("click", function () {
    element?.scrollTo(2.26);
  });
  const contact = document.getElementById("Contact");
  contact?.addEventListener("click", function () {
    element?.scrollTo(4.8);
  });

  return (
    <div>
      <div className={"w-full h-full"}>
        <Parallax pages={window.innerWidth < 768 ? 5.45 : 5.4} ref={(ref) => (element = ref)}>
          {/* Intro Art Scroll Section */}
          {/* Sky Layer */}
          <ParallaxLayer
            offset={0}
            speed={0.5}
            factor={2}
            style={{
              backgroundImage: `url(${Sky})`,
              backgroundSize: "w-fit",
              backgroundPosition: "center",
            }}
          ></ParallaxLayer>
          {/* Furthest Stars Layer */}
          <ParallaxLayer
            offset={0}
            speed={0.8}
            factor={1.2}
            style={{
              backgroundImage: `url(${Stars})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></ParallaxLayer>
          {/* Middle Stars Layer */}
          <ParallaxLayer
            offset={0}
            speed={1.5}
            factor={1.2}
            style={{
              backgroundImage: `url(${MiddleStars})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></ParallaxLayer>
          {/* Closest Stars Layer */}
          <ParallaxLayer
            offset={0}
            speed={1.8}
            factor={1.2}
            style={{
              backgroundImage: `url(${BigStars})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></ParallaxLayer>
          {/* Intro Title */}
          <ParallaxLayer offset={0.4} speed={1.5} factor={1.1}>
            <h1 className="text-4xl text-transparent text-center">
              <div className="sm:text-7xl text-4xl tracking-wide font-extrabold bg-gradient-to-r animate-text bg-clip-text from-green-400 to-purple-500">
                <div className="">SEND MOODS</div>
              </div>
            </h1>
          </ParallaxLayer>
          {/* Foreground Layer */}
          <ParallaxLayer
            offset={window.innerWidth < 768 ? 0.4 : 0.3}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${Foreground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* My Portfolio Section */}
          </ParallaxLayer>
          <ParallaxLayer offset={window.innerWidth < 768 ? 1.3 : 1.65} speed={0.7} id="portfolio">
            <MyPortfolio />
          </ParallaxLayer>
          {/* About Me Section */}
          <ParallaxLayer offset={window.innerWidth < 768 ? 2.2 : 2.4} id="about">
            <AboutMe />
          </ParallaxLayer>
          {/* My Skills Section  */}
          <ParallaxLayer offset={window.innerWidth < 768 ? 3.4 : 3.8}>
            <MySkills />
          </ParallaxLayer>
          {/* Contact Me Section */}
          <ParallaxLayer offset={4.5} id="contact">
            <ContactMe />
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="z-10 absolute bg-transparent mt-20 pr-4 right-0 ">
        <div className="flex flex-col justify-end">
          <img
            onClick={() => handleClick()}
            src="/images/BackToTop.png"
            className=" bg-transparent cursor-pointer invert h-14 w-14 ml-10 "
            alt="Back To Top"
          />
          <h1 className="bg-transparent pl-4 text-sm font-bold  text-white">BACK TO TOP</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
