import React from "react";
import dots from "../assets/dotes4.png";
import leftline from "../assets/rightline.png";

const Specification = () => (
  <section className="text-white">
    <div className="text-2xl text-center md:text-4xl font-bold py-10 uppercase">
      Specifications
    </div>
    <div className="min-h-screen flex items-center px-5">
      <div className="hidden sm:h-[50vh] sm:flex items-center gap-2 sm:gap-4">
        <img src={dots} alt="dots" className="w-10 h-10 md:w-auto md:h-auto" />
        <img src={leftline} alt="leftline" className="w-10 h-10 md:w-auto md:h-auto" />
      </div>
      <div className="w-full md:w-[90vw] h-full md:h-[90vh] flex flex-col md:flex-row items-center justify-evenly">
        {/* Text-1 */}
        <div className="text-gray-300 flex flex-col gap-5 md:gap-10 p-5 md:ml-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-active">
              PHYSICAL SPECIFICATIONS
            </h2>
            <p>
              <span className="text-white font-semibold">Height :</span> 11.42 in (290 mm)
            </p>
            <p>
              <span className="text-white font-semibold">Width :</span> 2.95 in (75 mm)
            </p>
            <p>
              <span className="text-white font-semibold">Depth :</span> 1.57 in (40 mm)
            </p>
            <p>
              <span className="text-white font-semibold">Weight :</span> 4.02 oz (114 g) mouse only
            </p>
            <p>Optional extra weights : up to 0.56 oz (16 g)</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-active">
              TRACKING
            </h2>
            <p>
              <span className="text-white font-semibold">Sensor :</span> HERO 25K
            </p>
            <p>
              <span className="text-white font-semibold">Resolution :</span> 100 - 25,600 dpi
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-active">
              RESPONSIVENESS
            </h2>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                USB data format :
              </span> 16 bits/axis
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                USB report rate :
              </span> 1 ms (1000 Hz)
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                Wireless report rate :
              </span> 1 ms (1000 Hz)
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                Wireless technology :
              </span> LIGHTSPEED Wireless
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                Microprocessor :
              </span> 32-bit ARM
            </p>
            <p>Zero smoothing/acceleration/filtering</p>
            <p>
              <span className="text-white font-semibold">
                Max. acceleration :
              </span> 40 G
            </p>
            <p>
              <span className="text-white font-semibold">Max. speed :</span> 400 IPS
            </p>
          </div>
        </div>
        {/* Text-2 */}
        <div className="text-start md:text-left  w-full md:w-auto md:items-start xl:h-[100%] md:h-[120%] py-5 px-5 ">
          <div className="text-gray-300 flex flex-col gap-5 md:gap-10">
            <div className="w-full md:w-[300px]">
              <h2 className="text-xl md:text-2xl font-bold text-active uppercase">
                Durability
              </h2>
              <p>
                <span className="text-white font-semibold">PTFE Feet: </span> 250-km range
              </p>
              <p>
                <span className="text-white font-semibold">
                  Durable Design:{" "}
                </span> Built to withstand heavy use and harsh environments
              </p>
              <p>
                <span className="text-white font-semibold">
                  Water Resistance:{" "}
                </span> IP67 rating for protection against water and dust
              </p>
            </div>
            <div className="w-full md:w-[300px]">
              <h2 className="text-xl md:text-2xl font-bold text-active">
                BATTERY LIFE (CONTINUOUS USE)4
              </h2>
              <p>
                <span className="text-white font-semibold">
                  Default lighting:
                </span> up to 48 Hrs No lighting: up to 60 Hrs
              </p>
              <p>
                <span className="text-white font-semibold">
                  Additional Information:
                </span> This is a dummy text for additional information.
              </p>
            </div>
            <div className="w-full md:w-[300px]">
              <h2 className="text-xl md:text-2xl font-bold text-active uppercase">
                Other Features
              </h2>
              <p className="text-gray-300">Hyper-fast scroll wheel</p>
              <p className="text-gray-300">POWERPLAY compatible</p>
              <p className="text-gray-300">Onboard memory</p>
              <p className="text-gray-300">
                <span className="text-white font-semibold">
                  LIGHTSYNC RGB:
                </span> 2 zone
              </p>
              <p className="text-gray-300">
                Mechanical Button Tensioning System
              </p>
            </div>
          </div>
        </div>
        {/* Text-3 */}
        <div className="text-gray-300 flex flex-col gap-5 md:gap-10 p-5">
          <div className="w-full md:w-[250px]">
            <h2 className="text-xl md:text-2xl font-bold text-active uppercase">
              Other Features
            </h2>
            <p>
              This is a dummy text for other features. It includes advanced technologies and innovative designs that enhance user experience Lorem ipsum dolor sit amet .
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-active">
              TRACKING
            </h2>
            <p>
              <span className="text-white font-semibold">Sensor :</span> HERO 25K
            </p>
            <p>
              <span className="text-white font-semibold">Resolution :</span> 100 - 25,600 dpi
            </p>
            <p>Zero smoothing/acceleration/filtering</p>
            <p>
              <span className="text-white font-semibold">
                Max. acceleration :
              </span> 40 G
            </p>
            <p>
              <span className="text-white font-semibold">Max. speed :</span> 400 IPS
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-active">
              RESPONSIVENESS
            </h2>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                USB data format :
              </span> 16 bits/axis
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                USB report rate :
              </span> 1 ms (1000 Hz)
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                Wireless report rate :
              </span> 1 ms (1000 Hz)
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                Wireless technology :
              </span> LIGHTSPEED Wireless
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">
                Microprocessor :
              </span> 32-bit ARM
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Specification;

