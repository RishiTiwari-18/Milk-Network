import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa6";
import { PiArrowBendDownRightLight } from "react-icons/pi";

const Dreams = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="px-5 py-20">
      <div className=" h-[100vh] bg-[#eecdd8] relative overflow-hidden rounded-xl w-full">
        <img
          className=" w-full h-full object-contain scale-[2]"
          src="https://strapi-cms-3mz0.onrender.com/uploads/img38_64977c1583.jpg"
          alt=""
        />
        <div className=" absolute h-full flex  flex-col justify-between p-10 w-full top-0 left-0">
          <div className="flex justify-between">
            <div className="">
              <h1 className="flex items-center gap-3 text-5xl h-fit">
                <FaCircle />
                From dreams to reality:
              </h1>
              <h1 className=" text-5xl">creating brans that</h1>
              <h1 className=" text-5xl">change the worls.</h1>
            </div>
            <div className=" h-40 w-40 bg-[#b48d94]  rounded-full">
              <img
                className=" h-full -rotate-90 w-full object-contain"
                src="https://milknetwork.com/assets/images/bottle.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center leading-none">
              <h1 className=" text-4xl font-medium leading-none">Get in touch</h1>
              <h1 className=" text-4xl leading-none">{currentTime}</h1>
            </div>
            <div className="flex justify-between items-center text-[17px] mt-4 bg-black text-white rounded-lg py-3 px-5">
              <h3>Contact us</h3>
              <PiArrowBendDownRightLight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dreams;
