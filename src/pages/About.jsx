import React from "react";
import Button from "../components/Button";
import dots from "../assets/dotes2.png";
import hero from "../assets/MOUSE.png";
import leftline from "../assets/aboutleftline.png";
import rightline from "../assets/rightline.png";
import icon from "../assets/social.png";

const About = () => {
  return (
    <div className="w-full h-auto min-h-[100vh] flex justify-between items-center px-2 sm:px-6 overflow-hidden">
      <div className="flex w-full items-center ">
        <div className="hidden sm:h-[50vh] sm:flex items-center gap-2 sm:gap-4">
          <img src={dots} alt="dots" className="w-8 sm:w-auto" />
          <img src={leftline} alt="leftline" className="w-4 sm:w-auto" />
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row xl:justify-evenly lg:justify-between sm:px-10">
          {/* left */}
          <div className="w-full lg:w-[450px] h-auto mb-6 lg:mb-0 px-4 sm:px-0 order-1 lg:order-2">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-4">
              <span className="text-shadow-lg">Make Your</span>
              <span className="text-active">Play</span>
            </h1>
            <p className="text-white/80 mb-6 sm:mb-10 text-sm sm:text-base">
              your pawer your control . conquor MOBA, mmo, and battle royale
              gameplay with the strategically design g604 lightspeed wireless
              gaming mouse. 15 programmable controls join forces with ultra-fast
              lightspeed dual connectivity and the class- leading hero 16k
              sensor. it’s a multifaceted battle weapon that lets you play
              longer, play button, and make your play.
            </p>
            <div className="md:text-start text-center " >
            <Button text="Buy" />
            </div>
          </div>
          {/* right */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src={hero}
              alt="hero"
              className="w-full max-w-[80vw] lg:max-w-[35vw] h-auto object-contain "
            />
          </div>
        </div>
        <div className="hidden sm:h-[50vh] sm:flex items-center gap-2 sm:px-2 px-0 sm:gap-4">
          <img src={rightline} alt="rightline" className="w-4 sm:w-auto" />
          <img src={icon} alt="" className="w-8 sm:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;

