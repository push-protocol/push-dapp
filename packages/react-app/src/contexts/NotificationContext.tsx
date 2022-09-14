import React, { createContext, useState } from 'react';

export const NotificationContext = createContext({
  notificationReceived: 0,
  setNotificationRecieved: (value: number) => {}
});

const NotificationContextProvider = (props) => {
  const [notificationReceived, setNotificationRecieved] = useState(null);
  
  return (
    <NotificationContext.Provider value={{ notificationReceived, setNotificationRecieved }}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContextProvider;