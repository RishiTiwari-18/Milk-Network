import React from "react";
import { FaCircle } from "react-icons/fa6";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Discription from "./Discription";
const InfoCard = () => {
  const cards = [
    { title: "Numbers and Facts", subHed: "" },
    { title: "200+", subHed: "Brands" },
    { title: "120+", subHed: "Videos" },
    { title: "78+", subHed: "Strategies" },
    { title: "16+", subHed: "Industries" },
  ]; // Array to map over

  return (
    <>
      <div className="grid grid-cols-4 px-5 max-sm:grid-cols-2 max-sm:px-3 max-sm:gap-2 gap-3">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`h-96 max-sm:h-72 ${
              index === 1 || index === 2 ? "col-span-1" : "col-span-2"
            }
            ${
              index === 3 || index === 4 ? "max-sm:col-span-1" : "col-span-1"
            }
          ${
            index === 0 ? "bg-black text-white" : "bg-[#f4f4f4]"
            
          } rounded-xl px-6 py-4 max-sm:px-3 max-sm:py-3
          ${
            index > 0 &&
            "md:hover:bg-[#ffe943] max-sm:active:bg-[#ffe943] ease-linear duration-300 flex flex-col justify-between group"
          }
           relative`}
          >
            <h1
              className={`${
                index === 0 ? "text-5xl" : "text-[108px] max-sm:text-[56px]"
              } leading-none  flex gap-3`}
            >
              {index === 0 && (
                <div className=" scale-75">
                  <FaCircle />
                </div>
              )}
              {item.title}
            </h1>

            <div className="">
              <h3 className=" text-[22px] mb-2">{item.subHed}</h3>
              {index > 0 && (
                <div className=" absolute left-0 bottom-28 w-full h-[.9px] bg-gray-300"></div>
              )}
              <div className="text-4xl max-sm:text-2xl w-fit duration-300 ease-linear md:group-hover:rotate-180">
                {index > 0 && <BsFillPlusCircleFill />}
              </div>
            </div>
          </div>
        ))}
      </div>

        <Discription  head={"About us"} number={"©️12-24"} button={"Read more"}/>
      
    </>
  );
};

export default InfoCard;
