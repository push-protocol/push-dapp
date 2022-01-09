import React from "react";
import styled, { css } from 'styled-components';

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";
import { toast } from 'react-toastify';
import moment from 'moment';

function NotificationToast({ notification, clearToast }) {

  // toast customize
  const LoaderToast = ({color }) => (
      <Toaster>
      <div>{notification.notificationTitle}</div>
      <div>{notification.notificationBody}</div>
      </Toaster>
  )
 
  // Render
  return (
    <NotificationWrapper>{
    toast.dark(<LoaderToast onClick={clearToast} color="#35c5f3"/>, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
    }
    </NotificationWrapper>
  );
}

const NotificationWrapper = styled.div`
  display: none;
`;

const Toaster = styled.div`
  align-items: center;
  margin: 0px 10px;
`

const ToasterMsg = styled.div`
  margin: 0px 10px;
`

const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`



// Export Default
export default NotificationToast;
