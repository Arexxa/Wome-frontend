import React, { useEffect, useState } from 'react';
import '../../assets/styles/WomeMissionSection.css';
import BlackHole from "../../assets/images/back_blackhole.svg";
import MemeWorld from "../../assets/images/mission_meme_world.svg";
import FirstICon from "../../assets/images/mission_meme_world_icon1.svg";
import SecondICon from "../../assets/images/mission_meme_wolrd_icon2.svg";
import ThirdICon from "../../assets/images/mission_meme_world_icon3.svg";
import ForthIcon from "../../assets/images/mission_meme_world_icon4.svg";
import purpleMask from "../../assets/images/mission_purple_mask.svg"

function WomeMissionSection() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 640;
  const is2K = width >= 2560;

  return (
    <section className={`desktop-bg-mission relative`}>
      <div className="absolute z-5 h-[100%] w-full">
        <img 
            src={purpleMask} 
            className='h-[100%] absolute left-0 top-[20%]' 
            alt='globe'
        />
      </div>
      <div className={`flex flex-wrap justify-center content-start pt-10 xxl:pb-0 lg:pb-10 md:pb-10 xs:pb-10 xs:pt-5 relative z-10`}>
          <div className="w-[75%] flex flex-col justify-center content-start pt-6">
              <span className={`Librestile text-white xl:text-[78px]/[56.66px] lg:text-[42px]/[56.66px] md:text-[42px]/[56.66px] xs:text-[32px]/[46px] font-normal`}>
                  OUR MISSION?
              </span>
              <span className={`Librestile text-white xl:text-[40px]/[50.66px] lg:text-[20px]/[28px] font-normal xl:pt-8 lg:pt-3 xs:pt-6`}>
                  THE WORLD'S FIRST<br></br> OMNI-CHAIN MEMEVERSE
              </span> 
          </div>  
      </div>
      <div className={`relative w-full flex flex-wrap justify-center content-start`}>
      {/* <div className='absolute h-screen max-h-screen w-full top-0'> */}
      <img 
        src={BlackHole}
        className='w-[50%] xxl:w-[45%] xl:w-[38%] lg:w-[45%] md:w-[90%] xs:w-[100%] z-0' 
        alt='globe'
      />
      <img 
        src={MemeWorld} 
        className={`w-[50%] xxl:w-[45%] xl:w-[38%] lg:w-[50%] md:w-[90%] xs:w-[100%] z-20 absolute`} 
        alt='globe'
      />
      <img 
        src={FirstICon} 
        className={`w-[25%] xl:w-[20%] lg:w-[23%] md:w-[45%] xs:w-[45%] z-10 absolute xxl:top-[14%] xxl:left-[28%] xl:top-[12%] xl:left-[31%] lg:top-[16%] lg:left-[26%] md:top-[125px] md:left-[20px] xs:top-[70px] xs:left-[0px]`}
        alt='globe'
      />
      <img 
        src={SecondICon} 
        className={`w-[25%] xl:w-[20%] lg:w-[23%] md:w-[45%] xs:w-[45%] z-10 absolute xxl:top-[8%] xxl:right-[28%] xl:top-[4%] xl:right-[29%] lg:top-[9%] lg:right-[25%] md:top-[80px] md:right-[30px] xs:top-[45px] xs:right-[10px]`}
        alt='globe'
      />
      <img 
        src={ThirdICon} 
        className={`w-[25%] xl:w-[20%] lg:w-[23%] md:w-[45%] xs:w-[45%] z-10 absolute xxl:bottom-[0%] xxl:left-[29%] xl:bottom-[-7%] xl:left-[30%] lg:bottom-[-13%] lg:left-[26%] md:bottom-[-30px] md:left-[50px] xs:bottom-[0px] xs:left-[10px]`}
        alt='globe'
      />
      <img 
        src={ForthIcon} 
        className={`w-[25%] xl:w-[20%] lg:w-[23%] md:w-[45%] xs:w-[45%] z-10 absolute xxl:bottom-[0%] xxl:right-[29%] xl:bottom-[-5%] xl:right-[30%] lg:bottom-[-11%] lg:right-[27%] md:bottom-[-10px] md:right-[60px] xs:bottom-[0px] xs:right-[20px]`}
        alt='globe'
      />
      {/* </div> */}
      </div>
    </section>
   
  );
}

export default WomeMissionSection;
