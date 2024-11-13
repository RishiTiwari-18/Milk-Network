import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      if (scrollY > pageHeight * 0.20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed px-2 py-2 bg-white z-50 w-full flex justify-between items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className=" scale-[.7]">
        <svg class="w-[4.4rem] md:w-[6.3rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="63" height="27" fill="none" viewBox="0 0 63 27"><path fill="currentColor" d="M35.158 7.244h-4.963V27h4.963V7.244ZM42.731 0H37.47v27h5.262V0ZM63 27h-6.08l-4.833-8.232-2.083 2.35V27H45.04V0h4.963v15.32l6.535-8.076h5.93l-7.046 7.96L63 27ZM35.157 2.48a2.48 2.48 0 0 1-2.478 2.481 2.48 2.48 0 0 1-2.478-2.48A2.48 2.48 0 0 1 32.68 0a2.484 2.484 0 0 1 2.478 2.48ZM27.877 27h-4.962V15.054c0-1.24-.348-2.174-1.049-2.808-.572-.532-1.3-.797-2.171-.797-.872 0-1.6.252-2.172.756-.722.634-1.09 1.54-1.09 2.733v12.055h-4.962v-11.94c0-1.24-.354-2.173-1.062-2.807-.579-.532-1.314-.797-2.199-.797-.912 0-1.654.265-2.233.797-.708.634-1.062 1.567-1.062 2.808V27H0V7.244h4.813v1.82C6.127 7.7 7.768 7.018 9.735 7.018c2.274 0 4.017.831 5.228 2.501 1.593-1.67 3.56-2.501 5.91-2.501 2.069 0 3.689.58 4.846 1.745 1.437 1.438 2.158 3.312 2.158 5.615v12.62Z"></path></svg>
        </div>
        <div className=" w-1/2 flex justify-between px-2 items-center">
        <div className=" flex justify-between gap-6  items-center">
            {["Work", "Expertise", "Community", "Discover"].map((item,index) => (
                <a className='text-[17px]' href="#" key={index}>{item}</a>
            ))}
        </div>
        <a className='text-[17px]' href="#">Contact</a>
        </div>
    </nav>
  )
}

export default Nav