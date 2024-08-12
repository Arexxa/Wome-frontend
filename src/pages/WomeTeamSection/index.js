import React, { useEffect, useState, useRef } from 'react';
import '../../assets/styles/WomeTeamSection.css';
import FirstIcon from "../../assets/images/team_first_icon.svg";
import SecondIcon from "../../assets/images/team_second_icon.svg";
import ThirdIcon from "../../assets/images/team_third_icon.svg";
import ForthIcon from "../../assets/images/team_forth_icon.svg";
import FifthIcon from "../../assets/images/team_fifth_icon.svg";
import SixthIcon from "../../assets/images/team_sixth_icon.svg";
import purpleMask from "../../assets/images/team_purple_mask.svg"
import blueMask from "../../assets/images/team_blue_mask.svg"

function WomeBenefitSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setVisible] = useState(false);
  const teamDekstopRef = useRef();
  const teamTabRef = useRef();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 640;
  const is2K = width >= 2560;
//   const isTabMin = width >= 640;
  const isTabMax = width <= 1023;
//   console.log(isTab)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      if (isTabMax){
        observer.observe(teamTabRef.current);
      } else {
        observer.observe(teamDekstopRef.current);
      }
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      observer.disconnect();
    };
  }, [width]);

  return (
    <section className={`${isMobile ? 'mobile-bg' : 'desktop-bg-team'}`}>

        {/* OTHER THAN TAB */}
        <div className={`${isTabMax ? 'hidden' : 'block'} w-full flex flex-col justify-center relative lg:mb-[10rem] xl:mb-[15rem]`}>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={blueMask} 
                    className='h-[100%] absolute left-0 bottom-[-0%]' 
                    alt='globe'
                />
            </div>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={purpleMask} 
                    className='h-[160%] absolute left-0 bottom-[-75%]' 
                    alt='globe'
                />

            </div>
                <span className={`Librestile text-white  xl:text-[60px]/[82px] lg:text-[42px]/[56.66px] md:text-[50px]/[40px] font-normal pb-10 xxl:pb-0 xxl:mb-[15vh]`}>
                    MEET THE TEAM
                </span> 

            <div ref={teamDekstopRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''} flex flex-row justify-center h-auto w-[100%] pt-10 gap-12 lg:gap-1 xl:gap-5 z-10`}>
                <div className={'flex flex-col items-center justify-center lg:w-[200px] xl:w-[250px] xxl:w-[300px]'}>
                    <img 
                        src={FirstIcon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white lg:text-[17px]/[25px] xl:text-[25px]/[32px] xxl:text-[28px]/[38px] font-bold pt-3`}>
                       JUN Shinto
                    </span>
                    <span className={`Montserrat text-white lg:text-[16px]/[25px] xl:text-[22px]/[40.50px] xxl:text-[26px]/[38px] font-medium pt-3`}>
                        Motion Graphics<br></br>& 3D Specialist
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-center lg:w-[200px] xl:w-[250px] xxl:w-[300px]'}>
                    <img 
                        src={SecondIcon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white lg:text-[17px]/[25px] xl:text-[25px]/[32px] xxl:text-[28px]/[38px] font-bold pt-3`}>
                       JD
                    </span>
                    <span className={`Montserrat text-white lg:text-[16px]/[25px] xl:text-[22px]/[40.50px] xxl:text-[26px]/[38px] font-medium pt-3`}>
                        Brand &<br></br>Marketing
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-center lg:w-[200px] xl:w-[250px] xxl:w-[300px]'}>
                    <img 
                        src={ThirdIcon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white lg:text-[17px]/[25px] xl:text-[25px]/[32px] xxl:text-[28px]/[38px] font-bold pt-3`}>
                       STEVE HOBBS
                    </span>
                    <span className={`Montserrat text-white lg:text-[16px]/[25px] xl:text-[22px]/[40.50px] xxl:text-[26px]/[38px] font-medium pt-3`}>
                        Chief<br></br>Innovation Officer
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-center lg:w-[200px] xl:w-[250px] xxl:w-[300px]'}>
                    <img 
                        src={ForthIcon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white lg:text-[17px]/[25px] xl:text-[25px]/[32px] xxl:text-[28px]/[38px] font-bold pt-3`}>
                       Durjana
                    </span>
                    <span className={`Montserrat text-white lg:text-[16px]/[25px] xl:text-[22px]/[40.50px] xxl:text-[26px]/[38px] font-medium pt-3`}>
                        Visual <br></br>Development Artist
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-center lg:w-[200px] xl:w-[250px] xxl:w-[300px]'}>
                    <img 
                        src={FifthIcon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white lg:text-[17px]/[25px] xl:text-[25px]/[32px] xxl:text-[28px]/[38px] font-bold pt-3`}>
                       Pandamonium
                    </span>
                    <span className={`Montserrat text-white lg:text-[16px]/[25px] xl:text-[22px]/[40.50px] xxl:text-[26px]/[38px] font-medium pt-3`}>
                        Web3<br></br>Partnerships
                    </span>
                </div>
                <div className={'flex flex-col items-center justify-center lg:w-[200px] xl:w-[250px] xxl:w-[300px]'}>
                    <img 
                        src={SixthIcon} 
                        className='xl:w-[100%] lg:w-[80%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white lg:text-[17px]/[25px] xl:text-[25px]/[32px] xxl:text-[28px]/[38px] font-bold pt-3`}>
                       0xRobert
                    </span>
                    <span className={`Montserrat text-white lg:text-[16px]/[25px] xl:text-[22px]/[40.50px] xxl:text-[26px]/[38px] font-medium pt-3`}>
                        Head Of<br></br>Development
                    </span>
                </div>
            </div>
        </div> 

        {/* TAB VIEW */}
        <div className={`${isTabMax ? 'block' : 'hidden'} w-full flex flex-col justify-start relative mt-[1.5rem] mb-[7rem]`}>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={blueMask} 
                    className='h-[60%] absolute left-0 bottom-[-0%]' 
                    alt='globe'
                />

            </div>
            <div className="absolute z-5 h-[100%] w-full">
                <img 
                    src={purpleMask} 
                    className='h-[100%] absolute left-0 bottom-[-45%]' 
                    alt='globe'
                />

            </div>
                <span className={`Librestile text-white md:text-[50px]/[40px] xs:text-[25px]/[30px] font-normal pb-10`}>
                    MEET THE TEAM
                </span> 

            <div ref={teamTabRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''} grid grid-flow-col md:grid-cols-3 xs:grid-cols-2 grid-rows-2 justify-items-center h-auto w-[100%] pt-10 px-5 gap-10 xs:px-8 xs:gap-5 xs:pt-0 z-10`}>
                <div className={'col-start-1 row-start-1 flex flex-col items-center justify-center w-[200px] xs:w-[180px]'}>
                    <img 
                        src={FirstIcon} 
                        className='w-[80%] xs:w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[20px]/[25px] xs:text-[15px]/[20px] font-bold pt-3 xs:pt-0`}>
                       JUN Shinto
                    </span>
                    <span className={`Montserrat text-white text-[18px]/[25px] xs:text-[13px]/[15px] font-medium pt-3 xs:pt-2`}>
                        Motion Graphics<br></br>& 3D Specialist
                    </span>
                </div>
                <div className={'col-start-2 row-start-1 flex flex-col items-center justify-center w-[200px]'}>
                    <img 
                        src={SecondIcon} 
                        className='w-[80%] xs:w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[20px]/[25px] xs:text-[15px]/[20px] font-bold pt-3 xs:pt-0`}>
                       JD
                    </span>
                    <span className={`Montserrat text-white text-[18px]/[25px] xs:text-[13px]/[15px] font-medium pt-3 xs:pt-2`}>
                        Brand & Marketing <br></br><br></br>
                    </span>
                </div>
                <div className={'md:col-start-3 md:row-start-1 xs:col-start-1 xs:row-start-2 flex flex-col items-center justify-center w-[200px]'}>
                    <img 
                        src={ThirdIcon} 
                        className='w-[80%] xs:w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[20px]/[25px] xs:text-[15px]/[20px] font-bold pt-3 xs:pt-0`}>
                       STEVE HOBBS
                    </span>
                    <span className={`Montserrat text-white text-[18px]/[25px] xs:text-[13px]/[15px] font-medium pt-3 xs:pt-2`}>
                        Chief<br></br>Innovation Officer
                    </span>
                </div>
                <div className={'md:col-start-1 md:row-start-2 xs:col-start-2 xs:row-start-2 flex flex-col items-center justify-center w-[200px]'}>
                    <img 
                        src={ForthIcon} 
                        className='w-[80%] xs:w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[20px]/[25px] xs:text-[15px]/[20px] font-bold pt-3 xs:pt-0`}>
                       Durjana
                    </span>
                    <span className={`Montserrat text-white text-[18px]/[25px] xs:text-[13px]/[15px] font-medium pt-3 xs:pt-2`}>
                        Visual <br></br>Development Artist
                    </span>
                </div>
                <div className={'md:col-start-2 md:row-start-2 xs:col-start-1 xs:row-start-3 flex flex-col items-center justify-center w-[200px]'}>
                    <img 
                        src={FifthIcon} 
                        className='w-[80%] xs:w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[20px]/[25px] xs:text-[15px]/[20px] font-bold pt-3 xs:pt-0`}>
                       Pandamonium
                    </span>
                    <span className={`Montserrat text-white text-[18px]/[25px] xs:text-[13px]/[15px] font-medium pt-3 xs:pt-2`}>
                        Web3<br></br>Partnerships
                    </span>
                </div>
                <div className={'md:col-start-3 md:row-start-2 xs:col-start-2 xs:row-start-3 flex flex-col items-center justify-center w-[200px]'}>
                    <img 
                        src={SixthIcon} 
                        className='w-[80%] xs:w-[50%]' 
                        alt='globe'
                    />
                    <span className={`Montserrat text-white text-[20px]/[25px] xs:text-[15px]/[20px] font-bold pt-3 xs:pt-0`}>
                       0xRobert
                    </span>
                    <span className={`Montserrat text-white text-[18px]/[25px] xs:text-[13px]/[15px] font-medium pt-3 xs:pt-2`}>
                        Head Of<br></br>Development
                    </span>
                </div>
            </div>
        </div> 

    </section>
   
  );
}

export default WomeBenefitSection;
