// React + Web3 Essentials
import React, { useContext } from "react";

// External Packages
import { NotificationItem } from "@pushprotocol/uiweb";
import styled, { useTheme } from "styled-components";
import { ToastContainer } from 'react-toastify';

// Internal Components
import { NotificationContext } from "contexts/NotificationContext";
import { NotificationEvent } from "@pushprotocol/restapi/src/lib/pushstream/pushStreamTypes";

// Interfaces
interface Props {
  payload: object
}

const NotifToastUI = ({ payload }: { payload: NotificationEvent }) => {
  // get theme
  const theme = useTheme();

  // get notification context and set it
  const { notificationReceived, setNotificationRecieved } = useContext(NotificationContext);

  React.useEffect(() => {
    setNotificationRecieved(notificationReceived + 1);
  }, [])

  return (
    <NotificationItemExtended
      key={payload.notifID} // any unique id
      notificationTitle={payload.message.notification.title}
      notificationBody={payload.message.notification.body}
      cta=''
      // cta={payload.data.cta ? `${window.location.hostname}/#/inbox` : ''}
      app={payload.channel.name}
      icon={payload.channel.icon}
      image={payload.message.payload.embed}
      url=''
      // url={`${window.location.hostname}:${window.location.port}/#/inbox`}
      theme={theme.scheme ? theme.scheme : 'light'}
      chainName={payload.source ? payload.source as any : 'ETH_TEST_GOERLI'}
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
