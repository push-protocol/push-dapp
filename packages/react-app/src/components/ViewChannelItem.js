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

import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import ChannelsDataStore, { ChannelEvents } from "singletons/ChannelsDataStore";
import UsersDataStore, { UserEvents } from "singletons/UsersDataStore";

// Create Header
function ViewChannelItem({ channelObject, isOwner, epnsReadProvider, epnsWriteProvide }) {
  const { account, library } = useWeb3React();

  const [ channelJson, setChannelJson ] = React.useState({});
  const [ subscribed, setSubscribed ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(true);

  const [ txInProgress, setTxInProgress ] = React.useState(false);


  React.useEffect(() => {
    fetchChannelJson();
    registerCallbacks();
  }, [account, channelObject]);

  // to fetch channels
  const fetchChannelJson = async () => {
    const channelJson = await ChannelsDataStore.instance.getChannelJsonAsync(channelObject.addr);
    const subs = await EPNSCoreHelper.getSubscribedStatus(account, channelObject.addr, epnsReadProvider);
    setSubscribed(subs);

    setChannelJson(channelJson);
    setLoading(false);
  }

  // to register callbacks
  const registerCallbacks = () => {
    UsersDataStore.instance.addCallbacks(
      UserEvents.SUBSCRIBED,
      "FromViewChannelItem",
      () => {
        setSubscribed(true);
        channelObject.memberCount = channelObject.memberCount.add(1);
      }
    );

    UsersDataStore.instance.addCallbacks(
      UserEvents.UNSUBSCRIBED,
      "FromViewChannelItem",
      () => {
        setSubscribed(false);
        channelObject.memberCount = channelObject.memberCount.sub(1);
      }
    );

    ChannelsDataStore.instance.addCallbacks(
      ChannelEvents.SUBSCRIBER_ANY_CHANNEL,
      "FromViewChannelItem",
      (channel, user) => {
        if (channel === channelObject.addr) {
          channelObject.memberCount = channelObject.memberCount.add(1);
        }
      }
    );

    ChannelsDataStore.instance.addCallbacks(
      ChannelEvents.UNSUBSCRIBER_ANY_CHANNEL,
      "FromViewChannelItem",
      (channel, user) => {
        if (channel === channelObject.addr) {
          channelObject.memberCount = channelObject.memberCount.sub(1);
        }
      }
    );
  }

  // to subscribe
  const subscribe = async () => {
    // Check if public key is broadcasted or not
    const userMeta = await UsersDataStore.instance.getUserMetaAsync();
    if (!userMeta.publicKeyRegistered) {
      const msg = "Sign to enable Secrets! (Encrypted Messages)\n Read more: https://epns.io/secret-messages";

      // Sign a message and extract public key
      library
        .getSigner(account)
        .signMessage(msg)
        .then(async signature => {
          const publicKey = recoverPublicKey(arrayify(hashMessage(msg)), signature);
          const formattedPubKey = publicKey.slice(0, 2) + publicKey.slice(4);

          subscribeAction(formattedPubKey);
        })
        .catch(error => {
          // Show toast as well
          toast.dark('Skipped for now... Encrypted messages will require this!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          subscribeAction(false);
        })
    }
    else {
      subscribeAction(false);
    }
  }

  const subscribeAction = async (withPublicKey) => {
    setTxInProgress(true);

    let sendWithTxPromise;

    if (withPublicKey) {
      sendWithTxPromise = epnsWriteProvide.subscribeWithPublicKey(channelObject.addr, withPublicKey);
    }
    else {
      sendWithTxPromise = epnsWriteProvide.subscribe(channelObject.addr);
    }

    sendWithTxPromise
      .then(async tx => {

        let txToast = toast.dark(<LoaderToast msg="Waiting for Confirmation..." color="#35c5f3"/>, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        try {
          await library.waitForTransaction(tx.hash);

          toast.update(txToast, {
            render: "Transaction Completed!",
            type: toast.TYPE.SUCCESS,
            autoClose: 5000
          });

          setTxInProgress(false);
        }
        catch(e) {
          toast.update(txToast, {
            render: "Transaction Failed! (" + e.name + ")",
            type: toast.TYPE.ERROR,
            autoClose: 5000
          });

          setTxInProgress(false);
        }
      })
      .catch(err => {
        toast.dark('Transaction Cancelled!', {
          position: "bottom-right",
          type: toast.TYPE.ERROR,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTxInProgress(false);
      })
  }

  const unsubscribeAction = async () => {
    setTxInProgress(true);

    let sendWithTxPromise = epnsWriteProvide.unsubscribe(channelObject.addr);

    sendWithTxPromise
      .then(async tx => {

        let txToast = toast.dark(<LoaderToast msg="Waiting for Confirmation..." color="#35c5f3"/>, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        try {
          await library.waitForTransaction(tx.hash);

          toast.update(txToast, {
            render: "Transaction Completed!",
            type: toast.TYPE.SUCCESS,
            autoClose: 5000
          });

          setTxInProgress(false);
        }
        catch(e) {
          toast.update(txToast, {
            render: "Transaction Failed! (" + e.name + ")",
            type: toast.TYPE.ERROR,
            autoClose: 5000
          });

          setTxInProgress(false);
        }
      })
      .catch(err => {
        toast.dark('Transaction Cancelled!', {
          position: "bottom-right",
          type: toast.TYPE.ERROR,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTxInProgress(false);
      })
  }

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <Loader
       type="Oval"
       color={color}
       height={30}
       width={30}
      />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  )

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
            {loading &&
              <SkeletonButton>
                <Skeleton />
              </SkeletonButton>
            }
            {!loading && !subscribed &&
              <SubscribeButton onClick={subscribe} disabled={txInProgress}>
                {txInProgress &&
                  <ActionLoader>
                    <Loader
                     type="Oval"
                     color="#FFF"
                     height={16}
                     width={16}
                    />
                  </ActionLoader>
                }
                <ActionTitle hideit={txInProgress}>Subscribe</ActionTitle>
              </SubscribeButton>
            }
            {!loading && subscribed &&
              <>
              {isOwner &&
                <OwnerButton disabled>Owner</OwnerButton>
              }
              {!isOwner &&
                <UnsubscribeButton onClick={unsubscribeAction} disabled={txInProgress}>
                  {txInProgress &&
                    <ActionLoader>
                      <Loader
                       type="Oval"
                       color="#FFF"
                       height={16}
                       width={16}
                      />
                    </ActionLoader>
                  }
                  <ActionTitle hideit={txInProgress}>Unsubscribe</ActionTitle>
                </UnsubscribeButton>
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
export default ViewChannelItem;
