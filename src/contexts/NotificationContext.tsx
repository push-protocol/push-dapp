// React + Web3 Essentials
import { createContext, useState, FC, ReactNode } from 'react';

export const NotificationContext = createContext({
  notificationReceived: 0,
  setNotificationRecieved: (value: number) => {},
});

const NotificationContextProvider: FC<ReactNode> = ({ children }) => {
  const [notificationReceived, setNotificationRecieved] = useState<number>(0);

  return (
    <NotificationContext.Provider value={{ notificationReceived, setNotificationRecieved }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
