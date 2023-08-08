import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyPortfolio from "../components/MyPortfolio";
import { ContactMe } from "../components/ContactMe";

import Foreground from "../assets/ParallaxImages/Foreground.webp";
import MiddleStars from "../assets/ParallaxImages/MiddleStars.png";
import BigStars from "../assets/ParallaxImages/BigStars.png";
import Stars from "../assets/ParallaxImages/Stars.png";

import "./infoAnimation.css";
import "./multiTextAnimation.css";
import "./borderAnimation.css";
import "./myPortfolioAnimation.css";

const Home = ({}) => {
  return (
    <div>
      <div className={"w-full h-full"}>
        <div className="top-0 flex h-[70vh] lg:h-[200vh] w-screen justify-center bg-gradient-to-b from-blue-900 via-purple-900 to-black">
          {/* Intro Title */}
          <h1 className="text-4xl text-transparent text-center">
            <section className="flex mt-24 lg:mt-56 justify-center">
              <div className="content bg-transparent">
                <h2 className="sm:text-8xl text-5xl">PORTFOLIO</h2>
                <h2 className="sm:text-8xl text-5xl">PORTFOLIO</h2>
              </div>
            </section>
          </h1>
          v
        </div>
        <div
          className="absolute top-0 z-3 w-full"
          style={{
            backgroundImage: `url(${Stars})`,
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Middle Stars Layer */}
        <div
          className="absolute top-0 z-2 w-full"
          style={{
            height: "80vh",
            backgroundImage: `url(${MiddleStars})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Closest Stars Layer */}
        <div
          className="absolute top-0 z-1 w-full"
          style={{
            height: "80vh",
            backgroundImage: `url(${BigStars})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Foreground Layer */}
        <img loading="lazy" src={Foreground} alt="Foreground" className="absolute top-56 z-5 w-full" />
        {/* My Portfolio Section */}
        <div id="portfolio" className="lg:mt-0 mt-[-175px]"></div>
        <div className="mt-[-210px]  lg:mt-40">
          <div className="">
            <MyPortfolio />
          </div>
          <div id="about" className="mt-24">
            <AboutMe />
          </div>
          <div id="skills" className="mt-24">
            <MySkills />
          </div>
          <div id="contact" className="mt-24">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
