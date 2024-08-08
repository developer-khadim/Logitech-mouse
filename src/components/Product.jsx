import React from "react";
import Button from "../components/Button";
import dots from "../assets/dotes3.png";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import leftline from "../assets/proleftline.png";
import rightline from "../assets/prorightline.png";
import icon from "../assets/social.png";

const products = [
  {
    title: "15 Programmable Control",
    description:
      "Program, refine, and win. Master your arsenal in battle royale, MMO, and MOBA gameplay with tactically positioned controls in optimal quantity and configuration. Refine and align keybinds, perfect your commands and win.",
  },
  {
    title: "Dual Connectivity with Lightspeed",
    description:
      "One click lets you toggle between ultra-fast 1ms LIGHTSPEED wireless and Bluetooth even across two separate machines.",
  },
  {
    title: "Hero 16k Sensor",
    description:
      "Experience precision with the HERO 16K sensor, which provides ultra-fast tracking and accuracy, making it perfect for competitive gameplay.",
  },
  {
    title: "Spin, Ratchet, Switch",
    description:
      "A durable metal scroll wheel switches between hyper-fast and ratcheted scrolling. Fly through menus, ratchet through weapon and spell selections, or apply keybinds to up and down inputs.",
  },
];

const productImages = [pro1, pro2, pro3, pro4];

const Product = () => {
  return (
    <section className="text-white w-full px-4 lg:px-0">
      <div className="text-2xl text-center md:text-3xl font-bold py-10 uppercase">
        Products
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-[98vw]">
          {/* Left Decorations */}
          <div className="hidden lg:flex items-center gap-5">
            <img src={dots} alt="dots" />
            <img src={leftline} alt="LeftLine" />
          </div>

          {/* Main Content */}
          <div className="flex flex-col space-y-12 md:space-y-16 lg:space-y-10 w-full lg:w-2/4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between gap-8"
              >
                <img
                  src={productImages[index]}
                  alt={`pro${index + 1}`}
                  className={`w-full md:w-2/5 lg:w-[22vw] }
                  `}
                />
                <div className="md:w-[500px] text-center md:text-left">
                  <h2 className="font-bold text-xl text-active mb-4">
                    {product.title}
                  </h2>
                  <p className="text-sm lg:text-base text-gray-300">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Decorations */}
          <div className="hidden lg:flex items-center gap-5">
            <img src={rightline} alt="Right line" />
            <img src={icon} alt="Icon" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 md:py-20 w-full">
        <Button text="Buy NOW" />
      </div>
    </section>
  );
};

export default Product;
