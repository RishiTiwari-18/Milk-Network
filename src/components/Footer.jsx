import React from "react";

const Footer = () => {
  const linksData = [
    {
      title: "Socials",
      subLinks: [
        "LinkedIn",
        "Instagram",
        "Facebook",
        "X",
        "Behance",
        "Vimo",
        "Medium",
        "YouTube",
      ],
    },
    {
      title: "Company",
      subLinks: ["Work", "Experience", "Community", "Discover", "Contact"],
    },
    {
      title: "Offices",
      subLinks: ["Jeddah", "Riyadh", "Cairo"],
    },
  ];
  return (
    <div className=" h-[112vh] w-full ">
      <div className=" flex max-sm:flex-col max-sm:items-start px-4 max-sm:px-1  py-7 border-b border-zinc-200 h-fit items-center justify-between">
        <h1 className=" text-[20vw] max-sm:leading-none max-sm:text-[180px] leading-3 tracking-tighter font-bold text-[#dfdfdf] md:hover:text-[#33333347] ease-linear duration-150">
          milk
        </h1>
        <div className=" w-1/2 max-sm:mt-10 max-sm:px-2 max-sm:w-full ">
          <h1 className="text-4xl max-sm:text-2xl">Milk Network TM</h1>
          <h1 className="text-4xl max-sm:text-2xl">is a brand development</h1>
          <h1 className="text-4xl max-sm:text-2xl">
            firm that works in thought
          </h1>
          <h1 className="text-4xl max-sm:text-2xl">and in action:</h1>
          <h1 className="text-4xl max-sm:text-2xl mt-4">
            hello@milknetwork.com
          </h1>
        </div>
      </div>
      <div className=" flex pt-16 max-sm:pt-10  max-sm:flex-col justify-between">
        <div className=" px-7 max-sm:mb-10 max-sm:px-3">
          <h3 className="text-zinc-400 mb-8 max-sm:mb-4">Newsletter</h3>
          <input
            type="text"
            className=" bg-zinc-100 py-4 w-[300px] max-sm:w-full px-4 rounded-lg"
            placeholder="Enter Your Email"
          />
          <p className=" text-[16.6px] font-normal mt-2 w-[70%]">
            By subscribing you agree with our Privacy Policy
          </p>
        </div>
        <div className="linkbox w-1/2 max-sm:w-full max-sm:grid-cols-2 max-sm:px-3 grid grid-cols-3 gap-4">
          {linksData.map((linkGroup, index) => (
            <div key={index}>
              <h2 className="text-zinc-400 mb-8 max-sm:mb-6 text-[16.6px]">
                {linkGroup.title}
              </h2>
              <ul>
                {linkGroup.subLinks.map((subLink, subIndex) => (
                  <li className="text-[21px] max-sm:text-xl" key={subIndex}>
                    {subLink}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-28 flex max-sm:flex-col max-sm:mt-20 max-sm:gap-1 px-5 max-sm:px-3 max-sm:py-3 justify-between">
        <h3 className=" text-[17px] text-zinc-400">
          © 2024 Milk Network. All right reserved
        </h3>
        <h3 className=" text-[17px] text-zinc-400 w-1/2">
          Terms, Privacy Policy
        </h3>
      </div>
    </div>
  );
};

export default Footer;
