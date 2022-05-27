import React, { createContext, useState } from 'react'

export interface NavigationContextInterface {
  navigationSetup: unknown;
  setNavigationSetup: (unknown) => void;
}

const initialState = {
  navigationSetup: null,
  setNavigationSetup: () => {}
};

export const NavigationContext = createContext<NavigationContextInterface>(initialState);


const NavigationContextProvider = (props) => {
  const [navigationSetup, setNavigationSetup] = useState(null);
  
  return (
    <NavigationContext.Provider value={{ navigationSetup, setNavigationSetup }}>
      {props.children}
    </NavigationContext.Provider>
  )
}

export default NavigationContextProvider;