import React from "react";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const [reference, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div>
      <div className="flex flex-col pt-24 justify-center items-center">
        <div className="profilePhoto relative overflow-hidden w-[200px] h-[200px] md:w-[400px] md:h-[400px] text-white "></div>
        <div className="sm:pt-10 pt-3 flex flex-col items-center justify-center bg-cool-gray-700 z-0">
          <h1 className="text-4xl font-black text-white text-center">
            <section className="container px-8">
              <div className="bg-gradient-to-r bg-clip-text from-green-400 to-purple-500">
                <div className="sm:pt-9 ">FULL STACK SOFTWARE ENGINEER</div>
              </div>
              <div className="bg-gradient-to-r bg-clip-text from-green-400 to-purple-500">
                <div className="pt-9"> DESIGNER</div>
              </div>
              <div className="bg-gradient-to-r bg-clip-text from-green-400 to-purple-500">
                <div className="pt-9"> ENTREPRENEUR</div>
              </div>
            </section>
          </h1>
        </div>
        <div className=" flex justify-centerabsolute mt-[-90px] text-white">
          <div className=" text-l lg:text-xl text-left text-center px-11 pb-6">
            <h1 className="">
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                I'm
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                an
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                artist
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                turned
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                software
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                engineer
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                that
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                loves
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                solving
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                complex
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                problems
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                with
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                data
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                -
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                driven
              </span>
              <span ref={reference} className={`pr-1 opacity-0 ${inView ? "infoParagraph" : ""}`}>
                solutions
              </span>
              <br></br>
              <div ref={reference} className={` pt-4 opacity-0 text-white ${inView ? "infoParagraph" : ""}`}>
                <div>Los Angeles, California</div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
