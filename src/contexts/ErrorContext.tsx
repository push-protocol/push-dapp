// React + Web3 Essentials
import { createContext, useState, FC, ReactNode } from 'react';

export const ErrorContext = createContext(null);

const ErrorContextProvider: FC<ReactNode> = ({ children }) => {
  const [authError, setAuthError] = useState<number>(undefined);

  return <ErrorContext.Provider value={{ authError, setAuthError }}>{children}</ErrorContext.Provider>;
};

export default ErrorContextProvider;
