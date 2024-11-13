import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const barsData = [
    {
      topHead: "What we do",
      bottomHead: "Strategy",
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/5_copy_f6d04848b3.webp",
    },
    {
      topHead: "",
      bottomHead: "Visual Identity",
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/Identity_01_01_55c98615b3.webp",
    },
    {
      topHead: "",
      bottomHead: "Communictaion",
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/00_Cover_78239f9f60.jpg",
    },
  ];

  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((imageDiv) => {
      gsap.fromTo(
        imageDiv,
        { width: "0%" },
        {
          width: "100%",
          scrollTrigger: {
            trigger: imageDiv,
            start: "top bottom",
            end: "top top+=20%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mb-[15vw] mt-[6vw]">
      {barsData.map((item, index) => (
        <div key={index} className="h-[35vh]  flex w-full border-b border-zinc-200 py-3 px-5">
          <div className=" w-1/2 flex flex-col justify-between h-full">
            <h2>{item.topHead}</h2>
            <h1 className=" text-3xl font-medium">{item.bottomHead}</h1>
          </div>
          <div className=" h-full w-1/2">
            <div
              className="imageDiv h-full w-full rounded-lg overflow-hidden"
              ref={(el) => (imageRefs.current[index] = el)}
            >
              <img
                className=" h-full w-full object-cover object-center"
                src={item.image}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;
