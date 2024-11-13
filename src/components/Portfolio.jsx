import React from "react";
import { FaCircle } from "react-icons/fa6";
import Discription from "./Discription";
const Portfolio = () => {
  const portfolioData = [
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/Communication_Showreel_Thumbnail_Final_6882eb90e5.gif",
      title: "Milk Network Grow Brands - Campaign Edition",
      some: "Campaign",
      year: "(2024)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/240501_Moc_Wayfinding_Web_Media_02_45b7a21401.webp",
      title: "MoC Environmental and Way-finding",
      some: "Way-finding",
      year: "(2021)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/240128_Thamanya_Logo_11_1954fb6e78.webp",
      title: "Thmanyah",
      some: "Visual Identity",
      year: "(2023)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/Trita_Logo_01_c71d1eeb49.webp",
      title: "The Royal Institute of Traditional Arts",
      some: "Visual Identity, Web Design",
      year: "(2021)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/Cover_2_copy_79f43981c7.webp",
      title: "Saudi Lime",
      some: "Strategy, Visual Identity, Communication",
      year: "(2022)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/Thumbnail_copy_70ffc96f9f.webp",
      title: "Cultural Talents Tournament",
      some: "Visual Identity, Naming",
      year: "(2022)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/Core_Fitness_d26e907971.webp",
      title: "Core Fitness",
      some: "Way-finding",
      year: "(2020)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/00_Cover_da55171b65.webp",
      title: "The Fast-Traveling Camel | Nana",
      some: "Strategy, Re-branding, Communication",
      year: "(2022)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/00_Cover_copy_9186ab4156.jpg",
      title: "Boost",
      some: "Strategy, Naming, Re-branding",
      year: "(2020)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/00_Cover_copy_9da39e6ecb.webp",
      title: "Desar",
      some: "Strategy, Re-branding, Packaging",
      year: "(2022)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/009_copy_292b10a1de.webp",
      title: "Lamb",
      some: "Visual Identity, Packaging",
      year: "(2023)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/01_Cover_aaaee6715e.webp",
      title: "Saudi Venture Capital",
      some: "Editorial",
      year: "(2021)",
    },
    {
      image: "https://strapi-cms-3mz0.onrender.com/uploads/09_c3e0651ad2.webp",
      title: "Nana Launching- Everyday Struggle",
      some: "Communication, Campaign",
      year: "(2022)",
    },
    {
      image:
        "https://strapi-cms-3mz0.onrender.com/uploads/DSC_03698_1_e582bcc614.webp",
      title: "King Salman Charter for Architecture and Urbanism Award",
      some: "Communication, Strategy, Visual Identity",
      year: "(2022)",
    },
  ];

  return (
    <div className="">
      <div className=" border-t h-[30vh] px-5 py-4 w-full flex justify-between border-zinc-200">
          <h3 className="flex gap-2 h-fit items-center"><FaCircle /> Portfolio</h3>
          <div className=" flex w-[50%] justify-between">
          <h1 className=" w-[50%] text-4xl">
          We help brands grow and tell their stories to the world.</h1>
          <h1 className="text-4xl">_14</h1>
          </div>
      </div>
      <div className="grid grid-cols-4 gap-3 gap-y-14 p-5 hover: group">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`h-[80vh] ${
              index === 3 || index === 4 || index === 9 || index === 10
                ? "col-span-1"
                : "col-span-2"
            }`}
          >
            <div className="overflow-hidden rounded-lg ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="mt-5 leading-[18px]">
              <h3>{item.title}</h3>
              <p>{item.some}</p>
              <span>{item.year}</span>
            </div>
          </div>
        ))}
      </div>

      <Discription head={"Works"} number={"_38"} button={"Discover all works"} />
    </div>
  );
};

export default Portfolio;
