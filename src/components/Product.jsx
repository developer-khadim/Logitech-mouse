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
import centerline from "../assets/centerline.svg";


const ProductInfo = ({ title, description }) => (
    <div className="w-full md:w-[320px] mb-[350px]">
      <h1 className="text-white font-bold text-xl">{title}</h1>
      <p className="text-white text-sm py-2">{description}</p>
    </div>
  );
  
  const Product = () => (
    <section className="w-auto h-[2420px]">
      <h1 className="text-[45px] font-semibold text-white text-center pt-20">Products</h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex w-full md:w-[5%] items-center gap-5 pl-5">
          <img src={dots} alt="dots" />
          <img src={leftline} alt="leftline" />
        </div>
        <div className="w-full md:w-[43%] h-[2000px] flex flex-col items-center">
          {[pro1, pro2, pro3, pro4].map((img, index) => (
            <img key={index} src={img} alt={`pro${index + 1}`} className={index > 1 ? "mt-16" : ""} />
          ))}
        </div>
        <img src={centerline} alt="" />
        <div className="w-full md:w-[44%] flex flex-col items-center mt-[320px]">
          <ProductInfo
            title="15 programmable control"
            description="Program, refine, and win. Master your arsenal in battle royale, MMO, and MOBA gameplay with tactically positioned controls in optimal quantity and configuration."
          />
          <ProductInfo
            title="Dual connectivity with lightspeed"
            description="One click lets you toggle between ultra-fast 1ms LIGHTSPEED wireless and Bluetooth even across two separate machines."
          />
          <ProductInfo  
            title={<>hero <span className="text-active">16K</span> sensor</>}
            description="One click lets you toggle between ultra-fast 1ms LIGHTSPEED wireless and Bluetooth even across two separate machines."
          />
          <ProductInfo
            title="Spin, ratchet, switch"
            description="A durable metal scroll wheel switches between hyper-fast and ratcheted scrolling. Fly through menus, ratchet through weapon and spell selections, or apply keybinds to up and down inputs."
          />
        </div>
        <div className="flex items-center gap-5 pr-5">
          <img src={rightline} alt="rightline" />
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="text-center">
        <Button text="Buy NOW" />
      </div>
    </section>
  );
  
  export default Product;