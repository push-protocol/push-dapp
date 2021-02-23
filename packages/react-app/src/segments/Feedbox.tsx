import React from "react";
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";
import { BigNumber, bigNumberify, formatEther } from 'ethers/utils'
import { useQuery, gql } from '@apollo/client';

import ViewNotificationItem from "components/ViewNotificationItem";
import NotificationToast from "components/NotificationToast";
import hex2ascii from 'hex2ascii'

// Create Header
function Feedbox({ epnsReadProvider }) {

  const { account, library } = useWeb3React();

  const [notifications, setNotifications] = React.useState([]);

  const [toast, showToast] = React.useState(null);

  const [page, setPage] = React.useState(0);
  const [paginatedNotifications, setPaginatedNotifications] = React.useState([]);

  const notificationsPerPage = 20;
  const notificationsVisited = page * notificationsPerPage;

  //define query
  const GET_NOTIFICATIONS = gql`
  {
    notifications(where:{userAddress:"${account}"}, orderBy: indexBlock, orderDirection: desc)
    {
        id
        userAddress
        channelAddress
        notificationTitle
        notificationBody
        dataType
        dataSecret
        dataASub
        dataAMsg
        dataACta
        dataAImg
        dataATime
        indexTimestamp
        indexBlock
    }
  }
`;

  //useQuery react hook exposed by Apollo fetches query results and stores in data
  const { loading, error, data } = useQuery(GET_NOTIFICATIONS);

  const clearToast = () => showToast(null);

  //set notitifications
  React.useEffect(() => {
    if (!loading && !error && data && data.notifications) {
      setNotifications(data.notifications);
    }
  }, [loading, error, data, epnsReadProvider]);

  React.useEffect(() => {
    if (epnsReadProvider) {
      return subscribe()
    }
  }, [epnsReadProvider]);

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast()
    }
  }, [toast]);

  //update paginatedNotifications array when scrolled till the end
  React.useEffect(() => {
    if(notifications){
      setPaginatedNotifications(prev => [...prev, ...notifications.slice(notificationsVisited, notificationsVisited + notificationsPerPage)])
      console.log("🚀 ~ file: Feedbox.tsx ~ line 31 ~ Feedbox ~ paginatedNotifications", paginatedNotifications)
    }
  }, [notifications, page]);

  //function to handle infinity scroll
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  };
  
  const subscribe = () => {
    if (account) {
      return newNotification(onReceive);
    }
  };

  //handle new notification
  const onReceive = async notification => {
    showToast(notification);
    setNotifications(notifications => [notification].concat(notifications));
  };

  //subscribe to SendNotification
  const newNotification = (fn) => {
    const event = 'SendNotification'

    //callback function for listener
    const cb = async (
      eventChannelAddress: string,
      eventUserAddress: string,
      identityHex: string
    ) => {
      const userAddress = account
      const identity = hex2ascii(identityHex)
      const notificationId = identity
        .concat('+')
        .concat(eventChannelAddress)
        .concat('+')
        .concat(eventUserAddress)
        .toLocaleLowerCase()
      const ipfsId = identity.split('+')[1]

      // Form Gateway URL
      const url = "https://ipfs.io/ipfs/" + ipfsId;
      fetch(url)
        .then(result => result.json())
        .then(result => {
      const ipfsNotification = result
      const notification = {
        id: notificationId,
        userAddress: eventUserAddress,
        channelAddress: eventChannelAddress,
        indexTimestamp: Date.now() / 1000, // todo
        notificationTitle: ipfsNotification.notification.title,
        notificationBody: ipfsNotification.notification.body,
        ...ipfsNotification.data,
      }
      if (ipfsNotification.data.type === '1') {
        const isSubscribed = 
        epnsReadProvider.memberExists(
          userAddress,
          eventChannelAddress
        )
        .then(isSubscribed => {
          if (isSubscribed) {
            fn(notification)
          }
        })
      } else if (userAddress === eventUserAddress) {
        fn(notification)
      }
      })
      .catch(err => {
        console.log("!!!Error, getting new notification data from ipfs --> %o", err);
      });
    }
    epnsReadProvider.on(event, cb)
    return epnsReadProvider.off.bind(epnsReadProvider, event, cb)
  }

  // Render
  return (
    <>
    <Container>
    {loading &&
        <ContainerInfo>
          <Loader
           type="Oval"
           color="#35c5f3"
           height={40}
           width={40}
          />
        </ContainerInfo>
      }
      {!loading &&
      <Items id="scrollstyle-secondary" onScroll = {handleScroll}>
          {Object.keys(paginatedNotifications).map(index => {  
            return (
            <ViewNotificationItem
              key={paginatedNotifications[index].id}
              notificationObject={paginatedNotifications[index]}
            />)
            })
          }
        </Items>
      }
    {
     toast && 
     <NotificationToast
       notification={toast}
       clearToast = {clearToast}
      />
    }
    </Container>
    </>
  );
}


const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`
// css styles
const Container = styled.div`
display: flex;
  flex: 1;
  flex-direction: column;

  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-height: 100vh;

  // padding: 20px;
  // font-size: 16px;
  // display: flex;
  // font-weight: 200;
  // align-content: center;
  // align-items: center;
  // justify-content: center;
  // width: 100%;
  // min-height: 40vh;
`

const ContainerInfo = styled.div`
  padding: 20px;
`

// Export Default
export default Feedbox;
