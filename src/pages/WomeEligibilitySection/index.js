import React, { useEffect, useState } from 'react';
import '../../assets/styles/WomeEligibilitySection.css';
import { useEligibility } from './contexts/EligibilityContext';

function WomeEligibilitySection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [address, setAddress] = useState('');


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

  const header = "CHECK YOUR ELIGIBILITY";
  const subHeader = "Want to know if you're eligible for the World Of Meme Airdrop? Paste your Solana address and press the 'Check' button";
  const paraGraph = "Not eligible? Stay tuned for the next phase of airdrops.";

  const { checkAddress, checkResult, loading } = useEligibility();

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <section id="eligibilitySection" className={`${isMobile ? 'mobile-bg-eligibility' : 'desktop-bg-eligibility'}`}>
      <div className={`z-10 w-full flex flex-wrap justify-center content-center xxl:my-[20rem] xl:my-[10rem] my-[10rem] xs:my-[5rem]`}>
        <div className={`w-[75%] xxl:w-[70%] xl:w-[60%] lg:w-[85%] md:w-[90%] xs:w-[95%] flex flex-col justify-center items-center bg-[rgba(0,0,0,0.8)] rounded-2xl shadow gap-10 xs:gap-10  p-4 xs:px-2 xs:pt-10  sm:p-6 md:p-8 lg:px-[3rem] lg:py-[4rem] lg:gap-[2.5rem] xl:px-[4rem] xl:py-[8rem] xl:gap-[2.5rem] xxl:px-[6rem] xxl:py-[9rem] xxl:gap-[4rem]`}>
          <span className={`Librestile text-[#ec79ff] text-[42px]/[56.66px] xs:text-xl xxl:text-[52px]/[56.66px] font-normal`}>
            {header}
          </span>
          <span className={`Montserrat text-white md:text-[19px]/[32px] lg:text-[20px]/[32px] xs:text-xs xxl:text-[30px]/[32px] font-medium`}>
            Want to know if you're eligible for the World Of Meme Airdrop? {!isMobile ? <br></br> : ''}  Paste your Solana address and press the 'Check' button
          </span>
          <div className="w-full flex flex-wrap flex-col content-start bg-white rounded-3xl shadow xs:p-8 sm:p-6 md:p-8 xl:p-[3rem] xxl:p-[4rem] md:gap-[0.95rem] lg:gap-[1.25rem] xl:gap-[1.75rem] xxl:gap-[2.25rem]">
            <span className={`text-left Montserrat  xxl:text-[25px]/[35px] lg:text-[20px]/[32px] md:text-[15px] xs:text-[11px] xs:pl-2 xs:pb-2 xxl:pl-4 font-medium`}>
              {paraGraph}
            </span>
            <form className="w-full flex justify-around xs:flex-col md:flex-col lg:flex-row items-center gap-4 xl:gap-8 xxl:gap-10" onSubmit={(e) => e.preventDefault()}>   
              <div className="relative w-full lg:w-[80%] xl:w-[80%] xxl:w-[80%]">
                <input 
                  type="text"  
                  value={address}
                  onChange={handleAddressChange}
                  id="walletAddress"
                  className="bg-gray-50 border-4 border-[##e9e9e9] text-gray-900 xxl:text-[25px]/[35px] xl:text-[23px]/[35px] lg:text-[18px]/[22px] md:text-[18px]/[20px] text-sm xs:text-xs rounded-[60px] focus:outline-transparent focus:border-[#ec79ff] focus:ring-[#ec79ff] focus:ring-2  block w-full ps-10 p-2 xs:ps-4 lg:p-3 lg:pl-10 xl:p-2 xl:pl-10 xxl:p-6 xxl:pl-20" 
                  placeholder="Wallet Address" 
                  required 
                />
              </div>
              <button
                type="button"
                onClick={() => checkAddress(address)}
                className="w-[180px] xs:w-[150px] xl:w-[260px] xxl:w-[300px] text-center py-3 px-[24px] xl:py-4 xxl:py-8 xxl:px-[40px] text-sm xs:text-xs md:text-[18px]/[20px] lg:text-[18px]/[22px] xxl:text-[25px] font-medium text-white rounded-full airdrop-btn"
                disabled={loading}
              >
                <span>{loading ? 'CHECKING...' : 'CHECK'}</span>
              </button>
            </form>
            {checkResult && (
              <div className="mt-4">
                {checkResult.status === 200 ? (
                  checkResult.valid ? (
                    <div className="text-green-500">You are eligible for the airdrop!</div>
                  ) : (
                    <div className="text-red-500">You are not eligible for the airdrop.</div>
                  )
                ) : (
                  <div className="text-red-500">Error: {checkResult.transaction.detail}</div>
                )}
              </div>
            )}
          </div>  
        </div>  
      </div>
    </section>
  );
}

export default WomeEligibilitySection;
