import React from "react";
import styled, { css } from 'styled-components';
import { Device } from 'assets/Device';

import Skeleton from '@yisheng90/react-loading';
import { IoMdPeople } from 'react-icons/io';
import { GiTwoCoins } from 'react-icons/gi';

import { useWeb3React } from '@web3-react/core'

import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import ChannelsDataStore, { ChannelEvents } from "singletons/ChannelsDataStore";
import UsersDataStore, { UserEvents } from "singletons/UsersDataStore";

// Create Header
function ViewChannelItem({ channelObject, isOwner, epnsReadProvider, epnsWriteProvide }) {
  const { account, library } = useWeb3React();

  const [ channelJson, setChannelJson ] = React.useState({});
  const [ subscribed, setSubscribed ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(true);


  React.useEffect(() => {
    fetchChannelJson();
  }, [account, channelObject]);

  // to fetch channels
  const fetchChannelJson = async () => {
    const channelJson = await ChannelsDataStore.instance.getChannelJsonAsync(channelObject.addr);
    const subscribed = await EPNSCoreHelper.getSubscribedStatus(account, channelObject.addr, epnsReadProvider);

    setChannelJson(channelJson);
    setLoading(false);
  }

  // render
  return (
    <Container key={channelObject.addr}>
      <ChannelLogo>
        <ChannelLogoOuter>
          <ChannelLogoInner>
          {loading &&
            <Skeleton color="#eee" width="100%" height="100%" />
          }
          {!loading &&
            <ChannelLogoImg src={`${channelJson.icon}`} />
          }
          </ChannelLogoInner>
        </ChannelLogoOuter>
      </ChannelLogo>

      <ChannelInfo>
        <ChannelTitle>
          {loading &&
            <Skeleton color="#eee" width="50%" height={24} />
          }
          {!loading &&
            <ChannelTitleLink href={channelJson.url} target="_blank" rel="nofollow">{channelJson.name}</ChannelTitleLink>
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
            <ChannelDescLabel>{channelJson.info}</ChannelDescLabel>
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
              <Subscribers>
                <IoMdPeople size={20} color="#ccc"/>
                <SubscribersCount>
                  {EPNSCoreHelper.formatBigNumberToMetric(channelObject.memberCount)}
                </SubscribersCount>
              </Subscribers>
              <Pool>
                <GiTwoCoins size={20} color="#ccc"/>
                <PoolShare>
                  {EPNSCoreHelper.formatBigNumberToMetric(channelObject.poolContribution, true) + " DAI"}
                </PoolShare>
              </Pool>
            </>
          }
        </ChannelMeta>
      </ChannelInfo>
      {!!account && !!library &&
        <>
          <LineBreak />
          <ChannelActions>
            {!loading && !subscribed &&
              <SubscribeButton></SubscribeButton>
            }
            {!loading && subscribed &&
              <>
              {isOwner &&
                <OwnerButton></OwnerButton>
              }
              {!isOwner &&
                <UnsubscribeButton></UnsubscribeButton>
              }
              </>
            }
          </ChannelActions>
        </>
      }
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
  max-width: 80px;
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
`

const ChannelActionButton = styled.button`

`

const SubscribeButton = styled(ChannelActionButton)`

`

const UnsubscribeButton = styled(ChannelActionButton)`

`

const OwnerButton = styled(ChannelActionButton)`

`

// Export Default
export default ViewChannelItem;
