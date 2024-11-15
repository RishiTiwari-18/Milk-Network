import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const ref = useRef(null);
  const textAnimationRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const textElement = textAnimationRef.current;

    const typed = new Typed(textElement, {
      strings: [
        "Businesses",
        "Brands",
        "People",
        "Ideas",
        "Community",
        "Products",
        "Talents",
        "PartnerShips",
        "Knowledge",
        "Dreams",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1200,
      startDelay: 1000,
      loop: true,
    });

    // Media query to check if the device width is larger than 768px (you can adjust this as needed)
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.to(element, {
        scale: 3.35,
        borderRadius: "4px",
        scrollTrigger: {
          trigger: element.parentNode,
          start: "top top",
          end: "300% top",
          scrub: true,
          pin: true,
        },
      });
    }

    return () => {
      typed.destroy();
      if (isDesktop) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div className="h-full w-full flex px-5 py-6 max-sm:px-3 relative">
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-[8.5vw] leading-[7vw] max-sm:absolute max-sm:text-[54px] tracking-tight">
            We Grow
          </h1>
          <div className="flex h-fit leading-[110px] items-center
           max-sm:leading-[120px]">
            <div className="text-[8.5vw] max-sm:text-[54px]">_</div>
            <h1
              ref={textAnimationRef}
              className="textAnimation z-10 text-[8.5vw] tracking-tight
               max-sm:text-[54px]"
            ></h1>
          </div>
        </div>
        <h2 className=" text-[42px] tracking-tight font-bold max-sm:hidden">milk</h2>
      </div>
      <div className="w-1/2 border-l px-7 pb-16 border-zinc-200 flex flex-col justify-between">
        <span></span>
        <h1 className="text-4xl w-3/4 tracking-tight max-sm:absolute max-sm:w-[97%] max-sm:left-0 max-sm:bottom-16 max-sm:text-[26px] max-sm:ml-3 max-sm:leading-8 ">
          Milk Network™️ is a brand development firm that works in thought and
          in action.
        </h1>
      </div>

      <motion.div
        ref={ref}
        className="absolute z-30 inset-0 m-auto h-[29%] w-[29%] max-sm:h-[40%] max-sm:w-[92%] overflow-hidden rounded-[10px]"
      >
        <video
          className="w-full h-full object-cover object-center border-none"
          autoPlay
          muted
          loop
          src="https://strapi-cms-3mz0.onrender.com/uploads/240123_Milk_Video_2024_Low_V2_8abec16071.mp4"
        ></video>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
