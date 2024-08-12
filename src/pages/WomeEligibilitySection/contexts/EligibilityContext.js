import React, { createContext, useState, useContext } from 'react';

const EligibilityContext = createContext();

export const useEligibility = () => {
  return useContext(EligibilityContext);
};

export const EligibilityProvider = ({ children }) => {
  const [checkResult, setCheckResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkAddress = async (address) => {
    setLoading(true);
    try {
      const response = await fetch(`https://wome-backend-production.up.railway.app/api/check-address?address=${address}`);
      const result = await response.json();
      setCheckResult(result);
    } catch (error) {
      console.error('Error checking address:', error);
      setCheckResult({ status: 500, transaction: { message: 'Error', detail: error.message } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <EligibilityContext.Provider value={{ checkAddress, checkResult, loading }}>
      {children}
    </EligibilityContext.Provider>
  );
};
