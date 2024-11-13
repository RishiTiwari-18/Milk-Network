import React from "react";
import { PiArrowBendDownRightLight } from "react-icons/pi";

const Discription = ({head,number,button}) => {

  return (
    <div className=" flex justify-between items-center px-5 max-sm:h-[40vh] max-sm:px-3 h-[50vh]">
      <span></span>
      <div className="w-1/2 max-sm:w-full">
        <div className="flex justify-between items-center leading-none">
          <h1 className=" text-3xl font-medium leading-none">{head}</h1>
          <h1 className=" text-3xl leading-none">{number}</h1>
        </div>
        <div className="flex justify-between items-center text-[17px] mt-4 bg-black text-white rounded-lg py-3 px-5">
          <h3>{button}</h3>
          <PiArrowBendDownRightLight />
        </div>
      </div>
    </div>
  );
};

export default Discription;
