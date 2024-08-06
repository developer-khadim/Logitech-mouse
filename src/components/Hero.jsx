import React from "react";
import dots from "../assets/dotes1.png";
import hero from "../assets/hero.png";
import leftline from "../assets/leftline.png";
import rightline from "../assets/rightline.png";
import icon from "../assets/social.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full h-auto min-h-[80vh] flex justify-between items-center px-2 sm:px-6 overflow-hidden">
      <div className="flex w-full">
        <div className="hidden sm:h-[50vh] sm:flex items-center gap-2 sm:gap-4">
          <img src={dots} alt="dots" className="w-8 sm:w-auto" />
          <img src={leftline} alt="leftline" className="w-4 sm:w-auto" />
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row xl:justify-evenly lg:justify-between sm:px-10">
          {/* left */}
          <div className="w-full lg:w-[450px] h-auto mb-6 lg:mb-0 px-4 sm:px-0">
            <h1 className="text-6xl font-bold text-gray-200 mb-4">
              <span className="text-shadow-lg">Forge Your</span>
              <br />
              <span className="text-shadow-lg">Fire</span>
              <span className="text-active">power</span>
            </h1>
            <p className="uppercase font-bold text-sm sm:text-base text-white ">
              all new <span className="text-active">g604</span> for battle
              royale mastery focus your skills and own every moment of the fight
            </p>
            <p className="text-white/80 mb-6 sm:mb-10 text-sm sm:text-base">
              make your weapons play harder in the configuration you deem
              fittest, use the 15 programmable controls, LIGHTSPEED or bluetooth
              wireless, HERO 16k sensor, and 240 hour battery life to be the
              fastest gunslinger on the battlefield
            </p>
            <div className="md:text-start text-center " >
            <Button text="PLAY ADVANCED" />
            </div>
          </div>
          {/* right */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src={hero}
              alt="hero"
              className="w-full max-w-[80vw] lg:max-w-[50vw] h-auto object-contain"
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

export default Hero;
