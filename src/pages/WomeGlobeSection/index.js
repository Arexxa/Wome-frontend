import React, { useEffect, useState } from 'react';
import '../../assets/styles/WomeGlobeSection.css';
import GlobeGif from "../../assets/video/globeupdated100.gif";
import GlobeGif150 from "../../assets/video/globeupdated150.gif";
import AirDrop from "../../assets/images/globe_airdrop2.png";
import Icon1 from "../../assets/images/globe_icon1.svg";
import Icon2 from "../../assets/images/globe_icon2.svg";
import Icon3 from "../../assets/images/globe_icon3.svg";
import Navbar from "../../components/Navbar";
import purpleMask from "../../assets/images/globe_purple_mask.svg"

function WomeGlobeSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [airdropHover, setAirdropHover] = useState(false);

  const airDropClick = () => {
    document.getElementById("eligibilitySection").scrollIntoView({behavior: "smooth"})
  }

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
    <div className={`${isMobile ? 'mobile-bg' : 'desktop-bg'} h-screen xs:h-[90vh]`}>
      <section>
        <Navbar />
      </section>
      <section className={``}>
        {!isMobile ? (
          <>
            <div className='animation-container relative h-screen w-full'>
              <div className='absolute flex justify-center'>
                <img 
                  src={`${is2K ? GlobeGif150 : GlobeGif}`} 
                  className='relative z-10 md:mb-[10rem] lg:mb-0 md:w-[90%] lg:w-[70%] xl:w-[90%] xxl:w-[90%]' 
                  alt='globe'
                />
              </div>
              <div className="slide-text">
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
              </div>
              <div className={`${airdropHover ? '' : 'floating'} z-10 w-full flex justify-end absolute md:bottom-[20%] md:right-[5%] lg:bottom-[15%] lg:right-[10%] xl:bottom-[15%] xl:right-[10%] xxl:bottom-[15%] xxl:right-[10%]`}>
                <img 
                  src={AirDrop} 
                  className={`${airdropHover ? 'transition ease-out scale-105 -translate-y-2' : ''} justify-self-end w-[20%] md:w-[20%] lg:w-[10%] xl:w-[10%] xxl:w-[10%] hover:cursor-pointer transition ease-out hover:scale-105 hover:-translate-y-2`}
                  alt='airdrop'
                  onMouseEnter = {() => {setAirdropHover(true)}}
                  onMouseLeave = {() => {setAirdropHover(false)}}
                  onTouchStart = {() => {setAirdropHover(true)}}
                  onTouchEnd = {() => {setAirdropHover(false)}}
                  onClick={airDropClick}
                />
                <a href="#eligibilitySection">
                  <img 
                    src={Icon1} 
                    className={`${airdropHover ? 'transition ease-out -translate-y-1 scale-105' : ''} justify-self-end absolute z-15 w-[3%] md:w-[3%] lg:w-[1.5%] xl:w-[1.5%] xxl:w-[1.5%] md:bottom-[6%] md:right-[13%] lg:bottom-[6%] lg:right-[6.9%] xl:bottom-[6%] xl:right-[6.9%] xxl:bottom-[6%] xxl:right-[6.9%]`}
                    alt='meme1' 
                    onMouseEnter = {() => {setAirdropHover(true)}}
                    onMouseLeave = {() => {setAirdropHover(false)}}
                    onTouchStart = {() => {setAirdropHover(true)}}
                    onTouchEnd = {() => {setAirdropHover(false)}}
                  />
                </a>
                <a href="#eligibilitySection">
                 <img 
                  src={Icon2} 
                  className={`${airdropHover ? 'transition ease-out -translate-y-1 scale-105' : ''} justify-self-end absolute z-15 w-[3%] md:w-[3%] lg:w-[1.5%] xl:w-[1.5%] xxl:w-[1.5%] md:bottom-[6%] md:right-[8.5%] lg:bottom-[6%] lg:right-[4.4%] xl:bottom-[6%] xl:right-[4.4%] xxl:bottom-[6%] xxl:right-[4.4%]`}
                  alt='meme2' 
                  onMouseEnter = {() => {setAirdropHover(true)}}
                  onMouseLeave = {() => {setAirdropHover(false)}}
                  onTouchStart = {() => {setAirdropHover(true)}}
                  onTouchEnd = {() => {setAirdropHover(false)}}
                />
                </a>
                <a href="#eligibilitySection">
                  <img 
                    src={Icon3} 
                    className={`${airdropHover ? 'transition ease-out -translate-y-1 scale-105' : ''} justify-self-end absolute z-15 w-[3%] md:w-[3.5%] lg:w-[2%] xl:w-[2%] xxl:w-[2%] md:bottom-[6%] md:right-[4%] lg:bottom-[6%] lg:right-[1.7%] xl:bottom-[6%] xl:right-[1.7%] xxl:bottom-[6%] xxl:right-[1.7%]`} 
                    alt='meme3' 
                    onMouseEnter = {() => {setAirdropHover(true)}}
                    onMouseLeave = {() => {setAirdropHover(false)}}
                    onTouchStart = {() => {setAirdropHover(true)}}
                    onTouchEnd = {() => {setAirdropHover(false)}}
                  />
                </a>
              </div>
              <div className={`${airdropHover ? '' : 'hidden'} z-5 w-full flex justify-end absolute md:bottom-[-10%] md:right-[-24%] lg:bottom-[-15%] lg:right-[-10%] xl:bottom-[-17%] xl:right-[-5%] xxl:bottom-[-19%] xxl:right-[-5%]`}>
                <img 
                  src={purpleMask} 
                  className='w-[100%] md:w-[80%] lg:w-[50%] xl:w-[40%] xxl:w-[40%]' 
                  alt='globe' 
                />
              </div>
            </div>
            {/* <div className='text-content'>
              <div className='relative'>
                <div className='my-12 xs:px-4'>
                  <div className='helloworld-text sm:text-[40px] md:text-[6.125rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] md:h-[8rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[14rem]'>
                    Hello World
                  </div>
                  <div className='Montserrat font-medium xs:text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] md:leading-[28px] lg:leading-[32px] xl:leading-[34.13px] text-[#AAAAAA]'>
                    Welcome to a memeverse experience for the masses.
                  </div>
                  <div className='pt-4 Montserrat font-medium xs:text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px] md:leading-[20px] lg:leading-[22px] xl:leading-[24.38px] text-[#AAAAAA]'>
                    Begin your journey into the World Of Meme with us.
                  </div>
                </div>
              </div>
            </div> */}
          </>
        ):(
          <>
            <div className='min-h-screen mt-[15vh] relative'>
              <img 
                src={`${is2K ? GlobeGif150 : GlobeGif}`} 
                className='relative z-10' 
                alt='globe' 
              />
              <div className="slide-text absolute top-[20%]">
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
              </div>
              <div className={`${airdropHover ? '' : 'floating'} z-20 w-[75%] flex justify-end absolute bottom-[40%] right-[5%]`}>
                <img 
                  src={AirDrop} 
                  className={`${airdropHover ? 'transition ease-out scale-105 -translate-y-2' : ''} justify-self-end w-[30%] hover:cursor-pointer transition ease-out hover:scale-105 hover:-translate-y-2`}
                  alt='airdrop'
                  onTouchStart = {() => {setAirdropHover(true)}}
                  onTouchEnd = {() => {setAirdropHover(false)}}
                  onClick={airDropClick}
                />
                <a href="#eligibilitySection">
                  <img 
                    src={Icon1} 
                    className={`${airdropHover ? 'transition ease-out -translate-y-1 scale-105' : ''} justify-self-end absolute z-15 w-[5.5%] bottom-[7%] right-[20%]`}
                    alt='meme1' 
                    onTouchStart = {() => {setAirdropHover(true)}}
                    onTouchEnd = {() => {setAirdropHover(false)}}
                  />
                </a>
                <a href="#eligibilitySection">
                 <img 
                  src={Icon2} 
                  className={`${airdropHover ? 'transition ease-out -translate-y-1 scale-105' : ''} justify-self-end absolute z-15 w-[5.5%] bottom-[7%] right-[12.5%]`}
                  alt='meme2' 
                  onTouchStart = {() => {setAirdropHover(true)}}
                  onTouchEnd = {() => {setAirdropHover(false)}}
                />
                </a>
                <a href="#eligibilitySection">
                  <img 
                    src={Icon3} 
                    className={`${airdropHover ? 'transition ease-out -translate-y-1 scale-105' : ''} justify-self-end absolute z-15 w-[6%] bottom-[7%] right-[5%]`} 
                    alt='meme3' 
                    onTouchStart = {() => {setAirdropHover(true)}}
                    onTouchEnd = {() => {setAirdropHover(false)}}
                  />
                </a>
            </div>
            <div className={`${airdropHover ? '' : 'hidden'} z-5 w-full flex justify-end absolute bottom-[21%] right-[-24%]`}>
              <img 
                src={purpleMask} 
                className='w-[80%]' 
                alt='globe' 
              />
            </div>
            </div>
          </>
        )}
      </section>
    </div>
   
  );
}

export default WomeGlobeSection;
