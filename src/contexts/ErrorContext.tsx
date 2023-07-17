// React + Web3 Essentials
import React, { createContext, useState } from 'react';

export const ErrorContext = createContext(null);

const ErrorContextProvider:React.FC<React.ReactNode> = ({ children }) => {
  const [authError, setAuthError] = useState<number>(undefined);
  
  return (
    <ErrorContext.Provider value={{ authError, setAuthError }}>
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorContextProvider;