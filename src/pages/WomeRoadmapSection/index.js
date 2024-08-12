import React, { useEffect, useState, useRef } from 'react';
import { FaDatabase, FaLock, FaRocket  } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import '../../assets/styles/WomeRoadmapSection.css';
import Planet from "../../assets/images/roadmap_planet.png";
import Crypto from "../../assets/images/roadmap_crypto_icon.svg"
import meme1 from "../../assets/images/roadmap_meme1.svg"
import meme2 from "../../assets/images/roadmap_meme2.svg"
import meme3 from "../../assets/images/roadmap_meme3.svg"
import meme4 from "../../assets/images/roadmap_meme4.svg"
import blueMask from "../../assets/images/roadmap_blue_mask.svg"
import purpleMask1 from "../../assets/images/roadmap_purple_mask_1.svg"
import purpleMask2 from "../../assets/images/roadmap_purple_mask_2.svg"

function WomeRoadmapSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setVisible] = useState(false);
  const roadMapPlanetRef = useRef();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(roadMapPlanetRef.current);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 640;
  const is2K = width >= 2560;

  return (
    <section className={`lg:h-[auto] md:h-[80vh] xs:h-[65vh] lg:mt-0 md:mt-[1.5rem] xs:mt-[1.5rem]`}>
        <div className="w-full flex flex-col justify-center relative">
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={blueMask} 
                    className='h-[100%] absolute right-0 top-[-20%]' 
                    alt='globe'
                />
            </div>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={purpleMask1} 
                    className='lg:h-[100%] xs:h-[100%] md:h-[60%] absolute left-0 top-[30%] xs:top-[80%]' 
                    alt='globe'
                />
            </div>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={purpleMask2} 
                    className='xs:h-[80%] md:h-[60%] lg:h-[80%] absolute right-0 xs:top-[45%] md:top-[35%] lg:top-[45%]' 
                    alt='globe'
                />
            </div>
            <div className={`relative h-screen xs:h-[100%] w-full flex flex-wrap justify-center content-start pt-10 xs:pt-0`}>
                <span className={`Librestile text-white lg:text-[50px]/[55px] md:text-[50px]/[55px] xs:text-[32px]/[38px] font-normal pl-10 xs:mb-[20rem] md:ml-0 lg:ml-[10rem]`}>
                    ROADMAP
                </span> 
                <div className={`flex flex-wrap justify-center items-center lg:content-center xs:content-start max-h-screen xs:h-[80vh] absolute lg:top-0 md:top-[20%] xs:top-[10%] lg:w-[90%] xl:w-[67%] md:w-[100%] xs:w-[100%] md:mt-0 lg:mt-[5rem]`}>
                    <img 
                        ref={roadMapPlanetRef}
                        src={Planet} 
                        className={`h-fit xs:h-[70%] z-0`}
                        alt='globe'
                    />
                    {/* JUPITER BULLET POINT */}
                    <div className={`fadeIn ${isVisible ? 'is-visible' : ''} absolute xs:top-[10%] xs:right-[-50%] md:top-[10%] md:right-[0%] lg:top-[10%] lg:right-[10%] xl:top-[10%] xl:right-[20%] xxl:top-[10%] xxl:right-[25%] flex flex-col items-start justify-center`}>
                    <div className={`flex flex-wrap justify-start items-center gap-5 xs:gap-2`}>
                        <GoPaperAirplane className="text-white xs:h-[10px] lg:h-[10px] xl:h-[20px]" />
                        <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                        Partnerships & Collaborations
                        </span>
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-5 xs:gap-2'>
                        <GoPaperAirplane className="text-white xs:h-[10px] lg:h-[10px] xl:h-[20px]" />
                        <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                            Extensive Marketing
                        </span>
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-5 xs:gap-2'>
                        <GoPaperAirplane className="text-white xs:h-[10px] lg:h-[10px] xl:h-[20px]" />
                        <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                        World Of Meme Pre-sale
                        </span>
                    </div>
                    <div className='flex flex-wrap justify-start items-center xl:pl-9 lg:pl-10 md:pl-11 xs:pl-5'>
                        <img 
                            src={meme1} 
                            className='xxl:w-[20%] xl:w-[15%] lg:w-[10%] md:w-[10%] xs:w-[7%] pt-2' 
                            alt='globe'
                        />
                        <img 
                            src={meme2} 
                            className='xxl:w-[20%] xl:w-[15%] lg:w-[10%] md:w-[10%] xs:w-[7%] pt-2' 
                            alt='globe'
                        />
                        <img 
                            src={meme3} 
                            className='xxl:w-[20%] xl:w-[15%] lg:w-[10%] md:w-[10%] xs:w-[7%] pt-2' 
                            alt='globe'
                        />
                        <img 
                            src={meme4} 
                            className='xxl:w-[20%] xl:w-[15%] lg:w-[10%] md:w-[10%] xs:w-[7%] pt-2' 
                            alt='globe'
                        />
                    </div>
                    </div>

                    {/* SATURN BULLET POINT */}
                    <div className={`fadeIn ${isVisible ? 'is-visible' : ''} absolute xs:top-[35%] xs:left-[10%] md:top-[53%] md:left-[10%] lg:top-[50%] lg:left-[20%] xl:top-[50%] xl:left-[15%] xxl:top-[50%] xxl:left-[15%] flex flex-col items-start justify-center`}>
                        <div className='flex flex-wrap justify-start items-center gap-5 xs:gap-2'>
                            <FaDatabase className="text-white xs:h-[10px] lg:h-[15px] xl:h-[20px]" />
                            <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                                Token Genesis
                            </span>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-5 xs:gap-2'>
                            <FaLock className="text-white xs:h-[10px] lg:h-[15px] xl:h-[20px]" />
                            <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                                Stake & Earn
                            </span>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-5 xs:gap-2'>
                            <FaRocket className="text-white xs:h-[10px] lg:h-[15px] xl:h-[20px]" />
                            <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                                MVP Launch
                            </span>
                        </div>
                    </div>

                    {/* EARTH BULLET POINT */}
                    <div className={`fadeIn ${isVisible ? 'is-visible' : ''} absolute xs:bottom-[38%] xs:left-[15%] md:bottom-[10%] md:left-[30%] lg:bottom-[5%] lg:left-[30%] xl:bottom-[7%] xl:left-[25%] xxl:bottom-[5%] xxl:left-[35%] flex flex-col items-start justify-center`}>
                        <div className='flex flex-wrap justify-start items-center gap-5 xxl:gap-8 xs:gap-2'>
                            <GoPaperAirplane className="text-white xs:h-[10px] lg:h-[10px] xl:h-[20px] xxl:h-[30px]" />
                            <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                                Tier-1 CEX Listings
                            </span>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-5 xxl:gap-8 xs:gap-2'>
                            <GoPaperAirplane className="text-white xs:h-[10px] lg:h-[10px] xl:h-[20px] xxl:h-[30px]" />
                            <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                                Alpha & Beta Launches
                            </span>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-5 xxl:gap-8 xs:gap-2'>
                            <GoPaperAirplane className="text-white xs:h-[10px] lg:h-[10px] xl:h-[20px] xxl:h-[30px]" />
                            <span className={`Montserrat text-white xxl:text-[35px]/[45px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] xs:text-[11px]/[15px] font-semibold pl-2 xs:pl-0`}>
                                Continued Development
                            </span>
                        </div>
                        <img 
                            src={Crypto} 
                            className='xxl:w-[75%] lg:w-[45%] md:w-[40%] xs:w-[40%] pt-2 pl-10 xxl:pl-16 xs:pl-8' 
                            alt='globe'
                        />
                    </div>
                </div>
            </div>
        </div> 
    </section>
   
  );
}

export default WomeRoadmapSection;
