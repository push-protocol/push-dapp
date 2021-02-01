import React from "react";
import styled, { css } from 'styled-components';

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";
import { BigNumber, bigNumberify, formatEther } from 'ethers/utils'
import ViewNotificationItem from "components/ViewNotificationItem";
import { subscribe } from "graphql";

const gr = require('graphql-request')
const { request, gql } = gr;

const ipfs = require('ipfs-api')()

// Create Header
function Feedbox({ epnsReadProvider }) {

  const { account, library } = useWeb3React();
  const [contract, setContract] = React.useState({});


  const [notifications, setNotifications] = React.useState([]);
  const [userInterestInfo, setUserInterestInfo] = React.useState(null);

  React.useEffect(() => {
    if (!!account && !!library) {
    }
  }, [account, library]);

  React.useEffect(() => {
    if (epnsReadProvider) {
      console.log("🚀 ~ file: Feedbox.tsx ~ line 20 ~ Feedbox ~ epnsReadProvider", epnsReadProvider)
      // const contractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, library);
      // console.log("🚀 ~ file: Feedbox.tsx ~ line 28 ~ React.useEffect ~ contractInstance", contractInstance)
      // setContract(contractInstance);
      // console.log("🚀 ~ file: Feedbox.tsx ~ line 22 ~ Feedbox ~ contract", contract)
      getNotifications();

      return subscribe()
    }

  }, [epnsReadProvider]);

  const subscribe = () => {
    if (account) {
      return newNotification(onReceive);
    }
  };

  const onReceive = async notification => {
    // showToast(notification);
    setNotifications(notifications => [notification].concat(notifications));
  };

  const newNotification = (fn) => {
    const event = 'SendNotification'
    console.log("🚀 ~ file: Feedbox.tsx ~ line 22 ~ Feedbox ~ contract", contract)



    const cb = async (
      eventChannelAddress: string,
      eventUserAddress: string,
      identityHex: string
    ) => {
      const userAddress = account
      const identity = identityHex
      // const identity = hex2ascii(identityHex)
      const notificationId = identity
        .concat('+')
        .concat(eventChannelAddress)
        .concat('+')
        .concat(eventUserAddress)
        .toLocaleLowerCase()
      const ipfsId = identity.split('+')[1]
      const ipfsNotification = JSON.parse(await ipfs.cat(ipfsId))
      const notification = {
        id: notificationId,
        userAddress: eventUserAddress,
        channelAddress: eventChannelAddress,
        indexTimestamp: Date.now() / 1000, // todo
        ...ipfsNotification.notification,
        ...ipfsNotification.data,
      }
      if (ipfsNotification.data.type === '1') {
        // broadcast
        // if (userAddress === eventUserAddress) return; // do not notify sender?
        const isSubscribed = await epnsReadProvider.memberExists(
          userAddress,
          eventChannelAddress
        )
        if (isSubscribed) {
          fn(notification)
        }
      } else if (userAddress === eventUserAddress) {
        fn(notification)
      }
    }
    epnsReadProvider.on(event, cb)
    return epnsReadProvider.off.bind(epnsReadProvider, event, cb)
  }

  const getNotifications = async() => {
    const subGraphUrl = "https://api.thegraph.com/subgraphs/name/aiswaryawalter/epns-proxy"
    console.log("🚀 ~ file: Feedbox.tsx ~ line 18 ~ Feedbox ~ account", account)


    const query = gql`{
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
    }`

    request(subGraphUrl, query)
      .then(async (datas) => {
        console.log("🚀 ~ file: Feedbox.tsx ~ line 112 ~ .then ~ datas", datas)
        setNotifications(datas.notifications);
      })
  }

  // Render
  return (
    <Container>{
    <Items id="scrollstyle-secondary">
        {Object.keys(notifications).map(index => {
          return (
          <ViewNotificationItem
            key={notifications[index].id}
            notificationObject={notifications[index]}
          />)
        })
        }
    </Items>}
    </Container>
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
  padding: 20px;
  font-size: 16px;
  display: flex;
  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
`

const InterestInfo = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
`

const InterestRow = styled.div`
  margin: 5px;
  padding: 5px;
  border-bottom: 1px solid #eee;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.span`
  font-weight: 600;
`

const Msg = styled.span`
  padding: 2px 10px;
  margin: 0px 10px;
  font-size: 12px;
  border-radius: 10px;
  color: #000;

  ${props => props.theme === 'block' && css`
    background: #e20880;
    color: #FFF;
    font-size: 14px;
    margin: 10px 0px;
    font-weight: 600;
  `};

  ${props => props.theme === 'primary' && css`
    background: #e2088011;
  `};

  ${props => props.theme === 'secondary' && css`
    background: #35c5f311;
  `};

  ${props => props.theme === 'third' && css`
    background: #674c9f11;
  `};
`


// Export Default
export default Feedbox;
