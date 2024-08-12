import React from 'react';
import { EligibilityProvider } from '../WomeEligibilitySection/contexts/EligibilityContext';

const AppContextProviders = ({ children }) => {
  return (
    <EligibilityProvider>
      {children}
    </EligibilityProvider>
  );
};

export default AppContextProviders;
