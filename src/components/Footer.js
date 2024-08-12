import React, { useEffect, useState, useRef } from 'react';
import { FaXTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 640;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [width]);

  return (
    <footer className='text-center relative bottom-0 w-full xs:h-[20vh] md:h-[20vh] lg:h-[30vh] flex flex-col items-center justify-center'>
      {/* <span className='Montserrat text-white text-[14px]/[22px] font-normal text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam nunc, tristique vestibulum ante vel,<br></br> lobortis aliquam urna. Quisque condimentum, mi et blandit ultricies, urna felis pharetra orci, id tristique turpis<br></br> mi sed dolor.
      </span> */}
      
      <div className="flex justify-center items-end xl:mt-[10rem] lg:mt-[5rem] md:mt-[3rem] xs:mt-[0] p-5 xs:p-2 w-[80%] border-b-2">
        <button
          type="button"
          className="p-2 me-3 xs:me-1 text-sm font-medium text-white focus:outline-none transition ease-in-out delay-50 hover:scale-125"
        >
          <a href='https://x.com/WOMEonSOL' target='_blank'>
          {isMobile ? <FaXTwitter  size={20} /> : <FaXTwitter  size={25} />}
          </a>
        </button>
        <button
          type="button"
          className="p-2 me-3 xs:me-1 text-sm font-medium text-white focus:outline-none transition ease-in-out delay-50 hover:scale-125"
        >
          <a href='https://www.instagram.com/wome.sol?igsh=d2VsM3Z1MGg1dnlo' target='_blank'>
            {isMobile ? <FaInstagram  size={20} /> : <FaInstagram  size={25} />}
          </a>
        </button>
        <button
          type="button"
          className="p-2 me-3 xs:me-1 text-sm font-medium text-white focus:outline-none transition ease-in-out delay-50 hover:scale-125"
        >
          <a href='https://t.me/Worldofmemesol' target='_blank'>
          {isMobile ? <FaTelegramPlane  size={20} /> : <FaTelegramPlane  size={25} />}
          </a>
        </button>
      </div>
      <span className='Montserrat text-white xs:text-[11px]/[15px] text-[14px]/[22px] font-medium text-white p-5 xs:p-2 mb-4 xs:mb-0 xs:mt-2'>
      Copyright © 2024 World of MEME
      </span>
    </footer>
  )
}

export default Footer;
