import React, { useEffect, useState } from 'react';

const Nav2 = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed px-2 py-3 z-50 w-full flex justify-between items-center transition-transform duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
    <div className=" scale-[.7]">
    </div>
    <div className=" w-1/2 max-sm:w-fit flex justify-between px-2 items-center">
    <a href="#" className=' sm:hidden'>menu</a>
    <div className=" flex justify-between gap-6 px-4 max-sm:hidden items-center">
        {["Work", "Expertise", "Community", "Discover"].map((item,index) => (
            <a className='text-[17px]' href="#" key={index}>{item}</a>
        ))}
    </div>
    <a className='text-[17px] max-sm:hidden' href="#">Contact</a>
    </div>
</nav>
  )
}

export default Nav2
