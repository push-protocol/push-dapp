import React from "react";
import styled, { css } from 'styled-components';
import { Device } from 'assets/Device';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loader from 'react-loader-spinner';

import Skeleton from '@yisheng90/react-loading';
import { IoMdPeople } from 'react-icons/io';
import { GiTwoCoins } from 'react-icons/gi';

import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import { keccak256, arrayify, hashMessage, recoverPublicKey } from 'ethers/utils';
import moment from 'moment';

import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import ChannelsDataStore, { ChannelEvents } from "singletons/ChannelsDataStore";
import UsersDataStore, { UserEvents } from "singletons/UsersDataStore";

// Create Header
function ViewNotificationItem({ notificationObject }) {
  const { account, library } = useWeb3React();
  const [ notification, setNotification ] = React.useState(null);
  const [ subscribed, setSubscribed ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(true);

  const [ txInProgress, setTxInProgress ] = React.useState(false);


  React.useEffect(() => {
    fetchNotification();
  }, [notificationObject]);

  // to fetch channels
  const fetchNotification = async () => {
    
    setNotification(notificationObject)
    setLoading(false);
  }

  // render
  return (
    <Container key={notificationObject.id}>
      <ChannelInfo>
        <ChannelTitle>
          {loading &&
            <Skeleton color="#eee" width="50%" height={24} />
          }
          {!loading &&
            <ChannelTitleLink>{notification.notificationTitle}</ChannelTitleLink>
          }
        </ChannelTitle>

        <ChannelDesc>
          {loading &&
            <>
              <SkeletonWrapper atH={5} atW={100}>
                <Skeleton color="#eee" width="100%" height={5} />
              </SkeletonWrapper>

              <SkeletonWrapper atH={5} atW={100}>
                <Skeleton color="#eee" width="100%" height={5} />
              </SkeletonWrapper>

              <SkeletonWrapper atH={5} atW={100}>
                <Skeleton color="#eee" width="40%" height={5} />
              </SkeletonWrapper>
            </>
          }
          {!loading &&
            <ChannelDescLabel>{notification.notificationBody}</ChannelDescLabel>
          }
        </ChannelDesc>

        <ChannelMeta>
          {loading &&
            <>
              <SkeletonWrapper atH={10} atW={30} marginBottom="0">
                <Skeleton />
              </SkeletonWrapper>
            </>
          }
          {!loading &&
            <>
              <Pool>
                <PoolShare>
                  {moment
                  .unix(notification.indexTimestamp)
                  .local()
                  .format('YYYY-MM-DD h:mm:ss a')}
                </PoolShare>
              </Pool>
            </>
          }
        </ChannelMeta>
</ChannelInfo>
    </Container>
  );
}

// css styles
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  background: #fff;
  border-radius: 10px;
  border: 1px solid rgb(237, 237, 237);

  margin: 15px 0px;
  justify-content: center;
  padding: 10px;
`

const SkeletonWrapper = styled.div`
  overflow: hidden;
  width: ${props => props.atW + '%' || '100%'};
  height: ${props => props.atH}px;
  border-radius: ${props => props.borderRadius || 10}px;
  margin-bottom: ${props => props.marginBottom || 5}px;
  margin-right: ${props => props.marginRight || 0}px;
`

const ChannelLogo = styled.div`
  max-width: 100px;
  min-width: 32px;
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 2px solid #fafafa;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`

const ChannelLogoOuter = styled.div`
  padding-top: 100%;
  position: relative;
`

const ChannelLogoInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChannelLogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`

const ChannelInfo = styled.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 120px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;
`

const ChannelTitle = styled.div`
  margin-bottom: 5px;
`

const ChannelTitleLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }
`

const ChannelDesc = styled.div`
  flex: 1;
  display: flex;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 400;
  flex-direction: column;
`

const ChannelDescLabel = styled.label`
  flex: 1;
`

const ChannelMeta = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
`

const ChannelMetaBox = styled.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`

const Subscribers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SubscribersCount = styled(ChannelMetaBox)`
  background: #35c4f3;
`

const Pool = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PoolShare = styled(ChannelMetaBox)`
  background: #674c9f;
`

const LineBreak = styled.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${Device.tablet} {
    display: block;
  }
`

const ChannelActions = styled.div`
  margin: 5px;
  flex-grow: 1;
  max-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChannelActionButton = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${ props => props.disabled && css`
    &:hover {
      opacity: 1;
      cursor: default;
      pointer: default;
    }
    &:active {
      opacity: 1;
      cursor: default;
      pointer: default;
    }
  `}
`

const ActionTitle = styled.span`
  ${ props => props.hideit && css`
    visibility: hidden;
  `};
`

const ActionLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkeletonButton = styled.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`

const SubscribeButton = styled(ChannelActionButton)`
  background: #e20880;
`

const UnsubscribeButton = styled(ChannelActionButton)`
  background: #674c9f;
`

const OwnerButton = styled(ChannelActionButton)`
  background: #35c5f3;
`

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`

const ToasterMsg = styled.div`
  margin: 0px 10px;
`

// Export Default
export default ViewNotificationItem;
