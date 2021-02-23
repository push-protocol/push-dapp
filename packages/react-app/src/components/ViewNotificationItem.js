import React from "react";
import styled, { css } from 'styled-components';
import { Device } from 'assets/Device';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loader from 'react-loader-spinner';

import Skeleton from '@yisheng90/react-loading';

import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import { keccak256, arrayify, hashMessage, recoverPublicKey } from 'ethers/utils';
import moment from 'moment';

import EPNSCoreHelper from 'helpers/EPNSCoreHelper';

function ViewNotificationItem({ notificationObject }) {
  const { account, library } = useWeb3React();
  const [ notification, setNotification ] = React.useState(null);
  const [ subscribed, setSubscribed ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(true);

  const [ txInProgress, setTxInProgress ] = React.useState(false);


  React.useEffect(() => {
    notifications();
  }, [notificationObject]);

  // to set notifications
  const notifications = async () => {
    setNotification(notificationObject)
    setLoading(false);
  }

  // render
  return (
    <Container key={notificationObject.id}>
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
          {!loading &&
            <>
              <Pool>
                <br></br>
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

const ChannelTitle = styled.div`
  margin-bottom: 5px;
`

const ChannelTitleLink = styled.a`
  text-decoration: none;
  font-weight: 550;
  color: #e20880;
  font-size: 18px;
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
  margin: 0px 5px;
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

const Pool = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PoolShare = styled(ChannelMetaBox)`
  background: #674c9f;
`


// Export Default
export default ViewNotificationItem;
