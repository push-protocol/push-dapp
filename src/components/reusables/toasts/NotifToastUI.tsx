// React + Web3 Essentials
import React, { useContext } from "react";

// External Packages
import { chainNameType, NotificationItem } from "@pushprotocol/uiweb";
import styled, { useTheme } from "styled-components";
import { ToastContainer } from 'react-toastify';

// Internal Components
import { NotificationContext } from "contexts/NotificationContext";

// Interfaces
interface Props {
  payload: object
}

const NotifToastUI = ({ payload }) => {
  // get theme
  const theme = useTheme();

  // get notification context and set it
  const { notificationReceived, setNotificationRecieved } = useContext(NotificationContext);

  React.useEffect(() => {
    setNotificationRecieved(notificationReceived + 1);
  }, [])

  return (
    <NotificationItemExtended
      key={payload.data.sid} // any unique id
      notificationTitle={payload.notification.title}
      notificationBody={payload.notification.body}
      cta=''
      // cta={payload.data.cta ? `${window.location.hostname}/#/inbox` : ''}
      app={payload.data.app}
      icon={payload.data.icon}
      image={payload.data.aimg}
      url=''
      // url={`${window.location.hostname}:${window.location.port}/#/inbox`}
      theme={theme.scheme ? theme.scheme : 'light'}
      chainName={payload.data.chainName ? payload.data.chainName : 'ETH_TEST_KOVAN'}
    />
  )
}
export default NotifToastUI;

const NotificationItemExtended = styled(NotificationItem)`
  &&&.Toastify__toast-container {
    background: transparent !important;
  }
  .Toastify__toast {}
  .Toastify__toast-body {}
  .Toastify__progress-bar {}
`
  

const Container = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    background: transparent !important;
  }
  .Toastify__toast {}
  .Toastify__toast-body {}
  .Toastify__progress-bar {}
`;


// .NotifToastOverride {
//   background: transparent;
//   box-shadow: none;
// }

// .NotifToastOverride .notification__Container-inf3z5-9 {
//   margin: 0px;
// }
