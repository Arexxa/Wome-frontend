import React, { useEffect, useState, useRef } from 'react';
import '../../assets/styles/WomeBenefitSection.css';
import FirstICon from "../../assets/images/benefit_first_icon.svg";
import SecondICon from "../../assets/images/benefit_second_icon.svg";
import ThirdICon from "../../assets/images/benefit_third_icon.svg";
import ForthIcon from "../../assets/images/benefit_forth_icon.svg";
import purpleMask from "../../assets/images/benefit_purple_mask.svg"

function WomeBenefitSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setVisible] = useState(false);
  const benefitTabRef = useRef();
  const benefitDesktopRef = useRef();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 640;
  const is2K = width >= 2560;
//   const isTabMin = width >= 640;
  const isTabMax = width <= 1023;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      if (isTabMax){
        observer.observe(benefitTabRef.current);
      } else {
        observer.observe(benefitDesktopRef.current);
      }
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      observer.disconnect();
    };
  }, [width]);

  return (
    <section className={`${isMobile ? 'mobile-bg' : 'desktop-bg-benefit'}`}>

        {/* OTHER THAN TAB */}
        <div className={`${isTabMax ? 'hidden' : 'block'} w-full flex flex-col justify-center relative lg:mb-[10rem] xl:mb-[15rem]`}>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={purpleMask} 
                    className='xl:h-[160%] lg:h-[120%] absolute right-0 xl:top-[-40%] lg:top-[-20%]' 
                    alt='globe'
                />

            </div>
            <span className={`Librestile text-white xl:text-[60px]/[82px] lg:text-[42px]/[56.66px] md:text-[36px]/[50px] font-normal mt-[20vh] pb-10 z-10 xxl:pb-0 xxl:mb-[15vh]`}>
                ENTER A MEMEVERSE OF<br></br> ENDLESS POSSIBILITIES
            </span> 

            <div ref={benefitDesktopRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''} flex flex-row justify-center h-auto w-[100%] pt-10 gap-8 lg:gap-1 lg:px-10 xl:px-0 xl:gap-20 xxl:gap-40 z-10`}>
                <div className={'flex flex-col items-center justify-between xxl:w-[400px] xl:w-[350px]'}>
                    <img 
                        src={FirstICon} 
                        className='xxl:w-[100%] xl:w-[90%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white xxl:text-[28px]/[38px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] font-bold pt-5`}>
                        PC & Mobile Friendly<br></br>Metaverse Experience
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-between xxl:w-[400px] xl:w-[350px]'}>
                    <img 
                        src={SecondICon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white xxl:text-[28px]/[38px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] font-bold pt-5`}>
                        Interact and Find<br></br>Your Squad
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-center xxl:w-[400px] xl:w-[350px]'}>
                    <img 
                        src={ThirdICon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white xxl:text-[28px]/[38px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] font-bold pt-5`}>
                        Rep your community with<br></br>Token-specific Avatars
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-center xxl:w-[400px] xl:w-[350px]'}>
                    <img 
                        src={ForthIcon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white xxl:text-[28px]/[38px] xl:text-[24px]/[38px] lg:text-[17px]/[25px] font-bold pt-5`}>
                        Advertise & Burns <br></br>
                    </span>
                </div>
            </div>
        </div>

        {/* TAB VIEW */}
        <div className={`${isTabMax ? 'block' : 'hidden'} w-full flex flex-col md:justify-start relative xs:justify-start mt-[5rem] md:mb-[10rem] xs:mb-[5rem]`}>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={purpleMask} 
                    className='h-[120%] xs:h-[80%] absolute right-0 top-[-20%]' 
                    alt='globe'
                />

            </div>
            <span className={`Librestile text-white md:text-[36px]/[50px] xs:text-[19px]/[30px] font-normal pb-10 z-10`}>
                ENTER A MEMEVERSE OF<br></br> ENDLESS POSSIBILITIES
            </span> 

            <div ref={benefitTabRef}  className={`fade-in-section ${isVisible ? 'is-visible' : ''} grid grid-flow-col grid-cols-2 grid-rows-2 flex flex-row justify-center h-auto w-[100%] pt-10 gap-4 z-10 xs:px-8 xs:gap-4 xs:pt-0`}>
                <div className={'col-start-1 row-start-1 flex flex-col items-center justify-center'}>
                    <img 
                        src={FirstICon} 
                        className='w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[17px]/[25px] xs:text-[14px]/[20px] font-bold pt-3`}>
                        PC & Mobile Friendly<br></br>Metaverse Experience
                    </span>
                </div>
                <div className={'col-start-2 row-start-1 flex flex-col items-center justify-center'}>
                    <img 
                        src={SecondICon} 
                        className='w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[17px]/[25px] xs:text-[14px]/[20px] font-bold pt-3`}>
                        Interact and Find<br></br>Your Squad
                    </span>
                </div>
                <div className={'col-start-1 row-start-2 flex flex-col items-center justify-center'}>
                    <img 
                        src={ThirdICon} 
                        className='w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[17px]/[25px] xs:text-[14px]/[20px] font-bold pt-3`}>
                        Rep your community with {isMobile ? '' : <br></br>} Token-specific Avatars
                    </span>
                </div>
                <div className={'col-start-2 row-start-2 flex flex-col items-center justify-center'}>
                    <img 
                        src={ForthIcon} 
                        className='w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[17px]/[25px] xs:text-[14px]/[20px] font-bold pt-3`}>
                        Advertise & Burns <br></br>
                    </span>
                </div>
            </div>
        </div> 
    </section>
   
  );
}

export default WomeBenefitSection;
