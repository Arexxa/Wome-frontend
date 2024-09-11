import React from "react";

import WomeGlobeSection from "../WomeGlobeSection";
import WomeEligibilitySection from "../WomeEligibilitySection";
import WomeMissionSection from "../WomeMissionSection";
import WomeBenefitSection from "../WomeBenefitSection";
import WomeTeamSection from "../WomeTeamSection";
import WomeRoadmapSection from "../WomeRoadmapSection";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="flex flex-col">
     
      <WomeGlobeSection />
      <WomeEligibilitySection />
      <WomeMissionSection />
      <WomeBenefitSection />
      <WomeTeamSection />
      <div className='desktop-bg-roadmap-footer'>
        <WomeRoadmapSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
