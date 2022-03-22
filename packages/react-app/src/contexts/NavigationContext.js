import React, { createContext, useState } from "react";

export const NavigationContext = createContext({});

const NavigationContextProvider = (props) => {
    const [navigationSetup, setNavigationSetup] = useState(null);

    return (
        <NavigationContext.Provider
            value={{ navigationSetup, setNavigationSetup }}
        >
            {props.children}
        </NavigationContext.Provider>
    );
};

export default NavigationContextProvider;
