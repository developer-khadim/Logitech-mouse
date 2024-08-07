import React from "react";
import dots from "../assets/dotes4.png";
import leftline from "../assets/leftline.png";

const Specification = () => {
  return (
    <section className="text-white">
      <div className="h-[100vh] flex items-center px-5">
        <div className="flex items-center gap-5 ">
          <img src={dots} alt="dots" />
          <img src={leftline} alt="leftline" />
        </div>
        <div className=" w-[90vw] h-[90vh]  flex items-center mx-auto">
          <div className=" flex flex-col gap-10  ">
            <div >
              <h2 className="text-xl font-bold ">PHYSICAL SPECIFICATIONS</h2>
              <p>
                <span>Height :</span> 11.42 in (290 mm)
              </p>
              <p>
                <span>Width :</span> 2.95 in (75 mm)
              </p>
              <p>
                <span>Depth :</span> 1.57 in (40 mm)
              </p>
              <p>
                <span>Weight :</span> 4.02 oz (114 g) mouse only
              </p>
              <p>Optional extra weights : up to 0.56 oz (16 g)</p>
            </div>
            <div>
              <h2 className="text-xl font-bold ">TRACKING</h2>
              <p>
                <span>Sensor :</span> HERO 25K
              </p>
              <p>
                <span>Resolution :</span> 100 - 25,600 dpi
              </p>
              <p>Zero smoothing/acceleration/filtering</p>
              <p>
                <span>Max. acceleration :</span> 40 G
              </p>
              <p>
                <span>Max. speed :</span> 400 IPS
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold "> RESPONSIVENESS </h2>
              <p>
                <span>USB data format :</span> 16 bits/axis{" "}
              </p>
              <p>
                <span>USB report rate :</span> 1 ms (1000 Hz){" "}
              </p>
              <p>
                <span> Wireless report rate :</span> 1 ms (1000 Hz){" "}
              </p>
              <p>
                <span>Wireless technology :</span> LIGHTSPEED Wireless
              </p>
              <p>
                <span>Microprocessor :</span> 32-bit ARM{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specification;
