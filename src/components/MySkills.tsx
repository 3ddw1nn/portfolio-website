import React, { useState } from "react";
import { code, programs } from "./iconlist.json";

type Icon = {
  title: string;
  src: string;
};
function MySkills() {
  const [skillTitle, setSkillTitle] = useState("Skills");
  return (
    <div>
      <div className="flex justify-center ">
        <div className="backdrop-blur-3xl box-border p-10 bg-gradient-135 from-slate-900 to-transparent sm:mx-12 sm:flex sm:flex-col sm:justify-center sm:p-16 sm:w-fit rounded-3xl sm:border-solid sm:border-[0.5px] sm:border-slate-500">
          <div className="flex justify-center text-white text-3xl mb-4"> {skillTitle} </div>
          <div className=" flex justify-center">
            <div className="sm:flex sm:py-6 grid grid-cols-4 gap-2 mx-auto ">
              {code.map((icon: Icon) => {
                return (
                  <div key={icon.src}>
                    <img
                      onMouseEnter={() => {
                        setSkillTitle(`${icon.title}`);
                      }}
                      onMouseLeave={() => {
                        setSkillTitle("Skills");
                      }}
                      src={icon.src}
                      className="grayscale hover:grayscale-0 h-14 mr-3 transition-transform hover:transition-duration-1000 hover:-translate-y-3"
                      alt={icon.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="sm:flex grid grid-cols-4 gap-2 mx-auto">
              {programs.map((icon: Icon) => {
                return (
                  <div key={icon.src} className="">
                    <img
                      onMouseEnter={() => {
                        setSkillTitle(`${icon.title}`);
                      }}
                      onMouseLeave={() => {
                        setSkillTitle("Skills");
                      }}
                      src={icon.src}
                      className="grayscale hover:grayscale-0 h-14 mr-3 transition-transform hover:transition-duration-1000 hover:-translate-y-3"
                      alt={icon.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
