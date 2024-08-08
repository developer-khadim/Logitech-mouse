import React from "react";
import dots from "../assets/dotes4.png";
import leftline from "../assets/rightline.png";

const specs = [
  {
    title: "PHYSICAL SPECIFICATIONS",
    details: [
      { label: "Height", value: "11.42 in (290 mm)" },
      { label: "Width", value: "2.95 in (75 mm)" },
      { label: "Depth", value: "1.57 in (40 mm)" },
      { label: "Weight", value: "4.02 oz (114 g) mouse only" },
      { label: "", value: "Optional extra weights: up to 0.56 oz (16 g)" },
    ],
  },
  {
    title: "TRACKING",
    details: [
      { label: "Sensor", value: "HERO 25K" },
      { label: "Resolution", value: "100 - 25,600 dpi" },
    ],
  },
  {
    title: "RESPONSIVENESS",
    details: [
      { label: "USB data format", value: "16 bits/axis" },
      { label: "USB report rate", value: "1 ms (1000 Hz)" },
      { label: "Wireless report rate", value: "1 ms (1000 Hz)" },
      { label: "Wireless technology", value: "LIGHTSPEED Wireless" },
      { label: "Microprocessor", value: "32-bit ARM" },
      { label: "", value: "Zero smoothing/acceleration/filtering" },
      { label: "Max. acceleration", value: "40 G" },
      { label: "Max. speed", value: "400 IPS" },
    ],
  },
];

const additionalSpecs = [
  {
    title: "Durability",
    details: [
      { label: "PTFE Feet", value: "250-km range" },
      { label: "Durable Design", value: "Built to withstand heavy use and harsh environments" },
      { label: "Water Resistance", value: "IP67 rating for protection against water and dust" },
    ],
  },
  {
    title: "BATTERY LIFE (CONTINUOUS USE)",
    details: [
      { label: "Default lighting", value: "up to 48 Hrs" },
      { label: "No lighting", value: "up to 60 Hrs" },
      { label: "Additional Information", value: "This is a dummy text for additional information." },
    ],
  },
  {
    title: "Other Features",
    details: [
      { label: "", value: "Hyper-fast scroll wheel" },
      { label: "", value: "POWERPLAY compatible" },
      { label: "", value: "Onboard memory" },
      { label: "LIGHTSYNC RGB", value: "2 zone" },
      { label: "", value: "Mechanical Button Tensioning System" },
    ],
  },
];

const OtherData = [
  {
    title: "Other Features",
    details: [
      { label: "", value: "This is a dummy text for other features. It includes advanced technologies and innovative designs that enhance user experience Lorem ipsum dolor sit amet." },
    ],
  },
  {
    title: "TRACKING",
    details: [
      { label: "Sensor", value: "HERO 25K" },
      { label: "Resolution", value: "100 - 25,600 dpi" },
      { label: "", value: "Zero smoothing/acceleration/filtering" },
      { label: "Max. acceleration", value: "40 G" },
      { label: "Max. speed", value: "400 IPS" },
    ],
  },
  {
    title: "RESPONSIVENESS",
    details: [
      { label: "USB data format", value: "16 bits/axis" },
      { label: "USB report rate", value: "1 ms (1000 Hz)" },
      { label: "Wireless report rate", value: "1 ms (1000 Hz)" },
      { label: "Wireless technology", value: "LIGHTSPEED Wireless" },
      { label: "Microprocessor", value: "32-bit ARM" },
    ],
  },
];

const Specification = () => (
  <section className="text-white">
    <div className="text-2xl text-center md:text-3xl font-bold py-10 uppercase">
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
          {specs.map((spec, index) => (
            <div key={index} className="text-sm">
              <h2 className="text-xl font-bold text-active">
                {spec.title}
              </h2>
              {spec.details.map((detail, index) => (
                <p key={index}>
                  <span className="text-white font-semibold">{detail.label} :</span> {detail.value}
                </p>
              ))}
            </div>
          ))}
        </div>
        {/* Text-2 */}
        <div className="text-start md:text-left w-full md:w-auto md:items-start xl:h-[80%] md:h-[95%] py-5 px-5">
          <div className="text-gray-300 text-sm flex flex-col gap-5 md:gap-10">
            {additionalSpecs.map((spec, index) => (
              <div key={index} className="w-full md:w-[300px]">
                <h2 className="text-xl font-bold text-active uppercase">
                  {spec.title}
                </h2>
                {spec.details.map((detail, index) => (
                  <p key={index}>
                    <span className="text-white font-semibold">{detail.label} :</span> {detail.value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Text-3 */}
        <div className="text-gray-300 flex flex-col gap-5 md:gap-10 p-5 text-sm">
          {OtherData.map((spec, index) => (
            <div key={index} className="w-full md:w-[255px]">
              <h2 className="text-xl font-bold text-active uppercase">
                {spec.title}
              </h2>
              {spec.details.map((detail, index) => (
                <p key={index}>
                  {detail.label ? (
                    <span className="text-white font-semibold">{detail.label} :</span>
                  ) : null}{" "}
                  {detail.value}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Specification;