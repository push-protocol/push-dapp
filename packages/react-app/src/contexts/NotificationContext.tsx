import React, { createContext, useState } from 'react';

export const NotificationContext = React.createContext({
    aliasVerified: null,
    setAliasVerified: (value: any) => {}
});

const NotificationContextProvider = (props) => {
    const [aliasVerified, setAliasVerified] = useState(null);

    return (
        <NotificationContext.Provider value={{aliasVerified, setAliasVerified}}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider