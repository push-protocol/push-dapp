// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React, { useEffect } from 'react';

// External Packages
import Skeleton from '@yisheng90/react-loading';
import { GoVerified } from 'react-icons/go';
import { IoMdPeople } from 'react-icons/io';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toast as toaster } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled, { css, useTheme } from 'styled-components';
import axios from 'axios';

// Internal Compoonents
import * as PushAPI from '@pushprotocol/restapi';
import { Device } from 'assets/Device';
import MetaInfoDisplayer from 'components/MetaInfoDisplayer';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import useToast from 'hooks/useToast';
import { cacheChannelInfo, updateSubscriptionStatus } from 'redux/slices/channelSlice';
import { addNewWelcomeNotif, incrementStepIndex } from 'redux/slices/userJourneySlice';
import ChannelTutorial, { isChannelTutorialized } from 'segments/ChannelTutorial';
import NotificationToast from '../primaries/NotificationToast';
import { Image, ItemH, Span } from '../primaries/SharedStyling';
import { LOGO_FROM_CHAIN_ID, MaskedAliasChannels, shortenText } from 'helpers/UtilityHelper';
import ChannelsDataStore from 'singletons/ChannelsDataStore';

// Internal Configs
import { appConfig, CHAIN_DETAILS } from 'config';
import Tooltip from './reusables/tooltip/Tooltip';
import UpdateChannelTooltipContent from './UpdateChannelTooltipContent';
import InfoImage from '../assets/info.svg';
import VerifiedTooltipContent from "./VerifiedTooltipContent";
import { IPFSGateway } from 'helpers/IpfsHelper';
import { useDeviceWidthCheck } from 'hooks';

// Create Header
function ViewChannelItem({ channelObjectProp, loadTeaser, playTeaser }) {
  const dispatch = useDispatch();

  const themes = useTheme();

  const { run, stepIndex } = useSelector((state) => state.userJourney);

  const { epnsReadProvider, epnsWriteProvider, epnsCommReadProvider, pushAdminAddress, ZERO_ADDRESS } = useSelector(
    (state) => state.contracts
  );
  const { canVerify } = useSelector((state) => state.admin);
  const { channelsCache, CHANNEL_BLACKLIST, subscriptionStatus } = useSelector((state) => state.channels);
  const { account, library, chainId } = useWeb3React();

  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const [channelObject, setChannelObject] = React.useState(channelObjectProp);
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [subscriberCount, setSubscriberCount] = React.useState(0);
  const [isPushAdmin, setIsPushAdmin] = React.useState(false);
  const [vLoading, setvLoading] = React.useState(false);
  const [bLoading, setBLoading] = React.useState(false);
  const [txInProgress, setTxInProgress] = React.useState(false);
  const [canUnverify, setCanUnverify] = React.useState(false);
  const [verifierDetails, setVerifierDetails] = React.useState(null);
  const [copyText, setCopyText] = React.useState(channelObject.channel);
  const [tooltTipHeight, setToolTipheight] = React.useState(0);
  const [channelIcon, setChannelIcon] = React.useState('');
  const [channelObjectFromHash, setChannelObjectFromHash] = React.useState({});
  const [channelObjectStartBlock, setChannelObjectStartBlock] = React.useState({});
  const [showChannelChangedWarning, setShowChannelChangedWarning] = React.useState(false);
  const isVerified = channelObject.verified_status;
  const isBlocked = channelObject.blocked;
  const isMobile = useDeviceWidthCheck(600);
  const mobileToolTip = useDeviceWidthCheck(500);

  // ------ toast related section
  const isChannelBlacklisted = CHANNEL_BLACKLIST.includes(channelObject.channel);
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  useEffect(() => {
    setSubscribed(subscriptionStatus[channelObject.channel]);
  }, [subscriptionStatus]);

  useEffect(() => {
    setIsPushAdmin(pushAdminAddress == account);
  }, [pushAdminAddress, account]);

  const fetchChannelJsonWithBlock = async () => {
    try {
      const channelJson = await ChannelsDataStore.instance.getChannelJsonStartBlockAsync(channelObject.channel);
      return channelJson;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    if (!channelObject.ipfshash) return;

    const IPFS_GATEWAY = IPFSGateway;
    const url = IPFS_GATEWAY + channelObject.ipfshash;
    const response = await axios.get(url);

    if (response.data) setChannelObjectFromHash(response.data);
    if (response.data.icon) setChannelIcon(response.data.icon);
  }, [channelObject]);

  useEffect(async () => {
    if (!channelObject.channel) return;

    const channelJsonStartBlock = await fetchChannelJsonWithBlock();
    if (channelJsonStartBlock) setChannelObjectStartBlock(channelJsonStartBlock);
  }, [channelObject.channel]);

  useEffect(() => {
    if (channelObjectFromHash && channelObjectStartBlock) {
      if (Object.keys(channelObjectFromHash).length == 0 || Object.keys(channelObjectStartBlock).length == 0) return;

      let isChanged = false;
      const propertiesToBeChecked = ['name', 'icon', 'info'];
      propertiesToBeChecked.forEach((property) => {
        if (channelObjectFromHash[property] != channelObjectStartBlock[property]) isChanged = true;
      });

      setShowChannelChangedWarning(isChanged);
    }
  }, [channelObjectFromHash, channelObjectStartBlock]);

  useEffect(async () => {
    if (!channelObject || !channelObject.channel) return;

    setSubscriberCount(channelObject.subscriber_count);

    if (!channelObject.verified_status) {
      setLoading(false);
    } else {
      let verifierAddress = null;
      await epnsReadProvider.channels(channelObject.channel).then((response) => {
        verifierAddress = response.verifiedBy;
      });

      if (channelsCache[verifierAddress]) {
        setVerifierDetails(channelsCache[verifierAddress]);
      } else {
        const verifierAddrDetails = await PushAPI.channels.getChannel({
          channel: convertAddressToAddrCaip(verifierAddress, appConfig.coreContractChain),
          env: appConfig.appEnv,
        });
        dispatch(
          cacheChannelInfo({
            address: verifierAddress,
            meta: verifierAddrDetails,
          })
        );
        setVerifierDetails(verifierAddrDetails);
      }
      setLoading(false);
    }
  }, [account, channelObject]);

  let isOwner;
  if (!onCoreNetwork) {
    isOwner = channelObject.alias_address == account;
  } else {
    isOwner = channelObject.channel == account;
  }

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);
  // ------ toast related section

  const EPNS_DOMAIN = {
    name: 'EPNS COMM V1',
    chainId: chainId,
    verifyingContract: epnsCommReadProvider.address,
  };

  const generalToast = useToast();

  // to subscribe
  const subscribe = async () => {
    console.log('click executed');
    subscribeAction(false);
  };

  const formatAddress = (addressText) => {
    return addressText.length > 40 ? `${shortenText(addressText, 4, 6)}` : addressText;
  };

  const verifyChannel = () => {
    setvLoading(true);
    // post op
    epnsWriteProvider
      .verifyChannel(channelObject.channel)
      .then(async (tx) => {
        console.log(tx);
        console.log('Transaction Sent!');

        generalToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Transaction Sent!',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });

        await tx.wait(1);
        console.log('Transaction Mined!');
        setIsVerified(true);
      })
      .catch((err) => {
        console.log('!!!Error verifyChannel() --> %o', err);
        generalToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error verifying the channel`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      })
      .finally(() => {
        setvLoading(false);
      });
  };

  const unverifyChannel = () => {
    setvLoading(true);
    epnsWriteProvider
      .unverifyChannel(channelObject.channel)
      .then(async (tx) => {
        console.log(tx);
        console.log('Transaction Sent!');

        generalToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Transaction Sent!',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });

        await tx.wait(1);
        console.log('Transaction Mined!');
        setIsVerified(false);
      })
      .catch((err) => {
        console.log('!!!Error handleSendMessage() --> %o', err);
        generalToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error unverifying the channel`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      });
    setvLoading(false);
  };

  const blockChannel = () => {
    setBLoading(true);
    epnsWriteProvider
      .blockChannel(channelObject.channel)
      .then(async (tx) => {
        console.log(tx);
        console.log('Transaction Sent!');

        generalToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Transaction Sent!',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });

        await tx.wait(1);
        console.log('Transaction Mined!');
      })
      .catch((err) => {
        console.log('!!!Error handleSendMessage() --> %o', err);
        generalToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error blocking the channel`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      })
      .finally(() => {
        // post op
        setBLoading(false);
        setIsBlocked(true);
      });
  };

  const subscribeToast = useToast();
  const subscribeAction = async () => {
    setTxInProgress(true);
    try {
      let channelAddress = channelObject.channel;
      if (!onCoreNetwork) {
        channelAddress = channelObject.alias_address;
      }

      subscribeToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

      if (run) {
        const type = {
          Subscribe: [
            { name: 'channel', type: 'address' },
            { name: 'subscriber', type: 'address' },
            { name: 'action', type: 'string' },
          ],
        };

        const message = {
          channel: channelAddress,
          subscriber: account,
          action: 'Subscribe',
        };

        await library.getSigner(account)._signTypedData(EPNS_DOMAIN, type, message);

        console.log('in run');
        subscribeToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Successfully opted into channel !',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });

        dispatch(
          addNewWelcomeNotif({
            cta: '',
            title: channelObject.info,
            message: `Welcome to ${channelObject.name} Channel. From now onwards, you'll be getting notifications from this channel`,
            icon: channelIcon,
            url: channelObject.url,
            sid: '',
            app: channelObject.name,
            image: '',
          })
        );
        setTxInProgress(false);
        setSubscribed(true);
        if (stepIndex === 5) {
          console.log('this is working');
          dispatch(incrementStepIndex());
        }
        return;
      }

      const _signer = await library.getSigner(account);
      await PushAPI.channels.subscribe({
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId), // channel address in CAIP
        userAddress: convertAddressToAddrCaip(account, chainId), // user address in CAIP
        onSuccess: () => {
          dispatch(updateSubscriptionStatus({ channelAddress: channelObject.channel, status: true }));
          setSubscribed(true);
          setSubscriberCount(subscriberCount + 1);

          subscribeToast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Successfully opted into channel !',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });
        },
        onError: () => {
          console.error('opt in error');
          subscribeToast.showMessageToast({
            toastTitle: 'Error',
            toastMessage: `There was an error opting into channel`,
            toastType: 'ERROR',
            getToastIcon: (size) => (
              <MdError
                size={size}
                color="red"
              />
            ),
          });
        },
        env: appConfig.pushNodesEnv,
      });
    } catch (err) {
      subscribeToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `There was an error opting into channel ( ${err.message} )`,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });

      console.log(err);
    } finally {
      setTxInProgress(false);
    }
  };

  const copyToClipboard = (address) => {
    let hostname = window.location.hostname;
    // if we are on localhost, attach the port
    if (hostname === 'localhost') {
      hostname = hostname + ':3000';
    }
    const url = `${hostname}/channels?channel=${address}`;
    // fallback for non navigator browser support
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(url);
    } else {
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };

  const unsubscribeToast = useToast();
  const unsubscribeAction = async () => {
    try {
      let channelAddress = channelObject.channel;
      if (!onCoreNetwork) {
        channelAddress = channelObject.alias_address;
      }

      unsubscribeToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

      const _signer = await library.getSigner(account);
      await PushAPI.channels.unsubscribe({
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId), // channel address in CAIP
        userAddress: convertAddressToAddrCaip(account, chainId), // user address in CAIP
        onSuccess: () => {
          dispatch(updateSubscriptionStatus({ channelAddress: channelObject.channel, status: false }));
          setSubscribed(false);
          setSubscriberCount(subscriberCount - 1);

          unsubscribeToast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Successfully opted out of channel !',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });
        },
        onError: () => {
          console.error('opt out error');
          unsubscribeToast.showMessageToast({
            toastTitle: 'Error',
            toastMessage: `There was an error opting out of channel`,
            toastType: 'ERROR',
            getToastIcon: (size) => (
              <MdError
                size={size}
                color="red"
              />
            ),
          });
        },
        env: appConfig.pushNodesEnv,
      });
    } catch (err) {
      unsubscribeToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `There was an error opting out of channel ( ${err.message} )`,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });

      console.log(err);
    } finally {
      setTxInProgress(false);
    }
  };

  const correctChannelTitleLink = () => {
    const channelLink = CTA_OVERRIDE_CACHE[channelObject.channel] || channelObject.url;
    if (/(?:http|https):\/\//i.test(channelLink)) {
      window.open(channelLink, '_blank', 'noopener,noreferrer');
    } else {
      window.open(`https://${channelLink}`, '_blank', 'noopener,noreferrer');
    }
  };
  const CTA_OVERRIDE_CACHE = {
    '0xb1676B5Ab63F01F154bb9938F5e8999d9Da5444B': 'https://boardroom.io/',
    '0x7DA9A33d15413F499299687cC9d81DE84684E28E': 'https://rmm.realtoken.network/dashboard',
    '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be': 'https://shapeshift.com',
  };
  if (isBlocked) return <></>;
  if (isChannelBlacklisted) return <></>;

  const handleHeight = (e) => {
    const containerHeight = document.getElementById(channelObject?.channel)?.getBoundingClientRect();
    setToolTipheight(containerHeight?.top);
  };

  // render
  return (
    <Container
      key={channelObject.channel}
      id={channelObject.channel}
    >
      {isMobile && (
        <ChannelLogoContainer>
          <ChannelLogo>
            <ChannelLogoOuter>
              <ChannelLogoInner>
                {loading ? (
                  <Skeleton
                    color={themes.interfaceSkeleton}
                    height="100%"
                  />
                ) : (
                  <ChannelLogoImg src={`${channelIcon}`} />
                )}
              </ChannelLogoInner>
            </ChannelLogoOuter>
          </ChannelLogo>

          <ChannelTitle>
            {loading ? (
              <Skeleton
                color={themes.interfaceSkeleton}
                width="50%"
                height={24}
              />
            ) : (
              <ChannelTitleLink>
                <ChannelTitleSpan>
                  <Span>
                    {showChannelChangedWarning && (
                      <Tooltip
                        wrapperProps={{
                          width: 'fit-content',
                          maxWidth: 'fit-content',
                          minWidth: 'fit-content',
                          // zIndex: "10",
                        }}
                        placementProps={
                          tooltTipHeight < 250
                            ? {
                                background: 'none',
                                // bottom: "25px",
                                top: '20px',
                                // right: "-175px",
                                left: mobileToolTip ? '-100px' : '5px',
                              }
                            : {
                                background: 'none',
                                bottom: '25px',
                                // top: "20px",
                                // right: "-175px",
                                left: mobileToolTip ? '-100px' : '5px',
                              }
                        }
                        tooltipContent={
                          <UpdateChannelTooltipContent
                            height={tooltTipHeight}
                            channelName={channelObjectStartBlock.name}
                            channelDescription={channelObjectStartBlock.info}
                            channelLogoSrc={channelObjectStartBlock.icon}
                          />
                        }
                      >
                        <div
                          onMouseEnter={() => {
                            handleHeight(channelObject.channel);
                          }}
                        >
                          <ImageInfo src={InfoImage} />
                        </div>
                      </Tooltip>
                    )}

                    <Span onClick={() => correctChannelTitleLink()}>{channelObject.name}</Span>
                  </Span>

                  {isVerified == 1 && (
                    <Span
                      margin="3px 5px 0px"
                      style={{ display: 'flex' }}
                    >
                      <Tooltip
                        // tooltip should be disabled if the verifier details are falsy
                        // isDisabled={!verifierDetails}
                        wrapperProps={{
                          width: 'fit-content',
                          maxWidth: 'fit-content',
                          minWidth: 'fit-content',
                        }}
                        placementProps={
                          tooltTipHeight < 160
                            ? {
                                background: 'none',
                                top: '20px', // for lower displaying
                                left: '7px',
                              }
                            : {
                                background: 'none',
                                bottom: '28px', // above display
                                left: '7px',
                              }
                        }
                        tooltipContent={
                          <VerifiedTooltipContent
                            height={tooltTipHeight}
                            verifierIcon={verifierDetails.icon}
                            verifierName={verifierDetails.name}
                          />
                        }
                      >
                        {/* TODO: HAS TO BE CHANGED TO A i icon */}
                        <div
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={() => {
                            handleHeight(channelObject.channel);
                          }}
                        >
                          <GoVerified
                            size={18}
                            color={themes.viewChannelVerifiedBadge}
                          />
                        </div>
                      </Tooltip>

                      {channelObject && channelObject?.channel && (
                        <Span padding="0 0 0 5px">
                          <Image
                            src={`./svg/Ethereum.svg`}
                            alt="Ethereum"
                            width="20px"
                            height="20px"
                          />
                        </Span>
                      )}
                      {channelObject &&
                        channelObject?.alias_address != null &&
                        channelObject?.alias_address != 'NULL' &&
                        appConfig.allowedNetworks.includes(+channelObject?.alias_blockchain_id) &&
                        !MaskedAliasChannels[+channelObject?.alias_blockchain_id][channelObject?.channel] && (
                          <Span padding="0 0 0 5px">
                            <Image
                              src={`./svg/${
                                CHAIN_DETAILS[+channelObject.alias_blockchain_id]?.label?.split(' ')[0]
                              }.svg`}
                              alt="Polygon"
                              width="20px"
                              height="20px"
                            />
                          </Span>
                        )}
                    </Span>
                  )}
                </ChannelTitleSpan>
              </ChannelTitleLink>
            )}
          </ChannelTitle>
        </ChannelLogoContainer>
      )}

      {!isMobile && (
        <>
          <ChannelLogo>
            <ChannelLogoOuter>
              <ChannelLogoInner>
                {loading ? (
                  <Skeleton
                    color={themes.interfaceSkeleton}
                    height="100%"
                  />
                ) : (
                  <ChannelLogoImg src={`${channelIcon}`} />
                )}
              </ChannelLogoInner>
            </ChannelLogoOuter>
          </ChannelLogo>
        </>
      )}

      <ChannelInfo>
        {!isMobile && (
          <ChannelTitle>
            {loading ? (
              <Skeleton
                color={themes.interfaceSkeleton}
                width="50%"
                height={24}
              />
            ) : (
              <ChannelTitleLink>
                <Span style={{ display: 'flex', alignItems: 'center' }}>
                  {showChannelChangedWarning && (
                    <Tooltip
                      wrapperProps={{
                        width: 'fit-content',
                        maxWidth: 'fit-content',
                        minWidth: 'fit-content',
                        // zIndex: "10",
                      }}
                      placementProps={
                        tooltTipHeight < 250
                          ? {
                              background: 'none',
                              // bottom: "25px",
                              top: '20px',
                              // right: "-175px",
                              left: '5px',
                            }
                          : {
                              background: 'none',
                              bottom: '25px',
                              // top: "20px",
                              // right: "-175px",
                              left: '5px',
                            }
                      }
                      tooltipContent={
                        <UpdateChannelTooltipContent
                          height={tooltTipHeight}
                          channelName={channelObjectStartBlock.name}
                          channelDescription={channelObjectStartBlock.info}
                          channelLogoSrc={channelObjectStartBlock.icon}
                        />
                      }
                    >
                      <div
                        onMouseEnter={() => {
                          handleHeight(channelObject.channel);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <ImageInfo src={InfoImage} />
                      </div>
                    </Tooltip>
                  )}

                  <Span onClick={() => correctChannelTitleLink()}>{channelObject.name}</Span>

                  
                  {isVerified == 1 && (
                    <Span
                    margin="3px 5px 0px"
                    style={{ display: 'flex' }}
                  >
                      <Tooltip
                        wrapperProps={{
                          width: 'fit-content',
                          maxWidth: 'fit-content',
                          minWidth: 'fit-content',
                        }}
                        placementProps={
                          tooltTipHeight < 160
                            ? {
                                background: 'none',
                                top: '20px', // for lower displaying
                                left: '7px',
                              }
                            : {
                                background: 'none',
                                bottom: '28px', // above display
                                left: '7px',
                              }
                        }
                        tooltipContent={
                          <VerifiedTooltipContent
                            height={tooltTipHeight}
                            verifierIcon={verifierDetails.icon}
                            verifierName={verifierDetails.name}
                          />
                        }
                      >
                        {/* TODO: HAS TO BE CHANGED TO A i icon */}
                        <div
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={() => {
                            handleHeight(channelObject.channel);
                          }}
                        >
                          <GoVerified
                            size={18}
                            color={themes.viewChannelVerifiedBadge}
                          />
                        </div>
                      </Tooltip>
                    </Span>
                  )}
                  {channelObject && channelObject?.channel && (
                    <Span padding="0 0 0 5px">
                      <Image
                        src={`./svg/Ethereum.svg`}
                        alt="Ethereum"
                        width="20px"
                        height="20px"
                      />
                    </Span>
                  )}
                  {channelObject &&
                    channelObject?.alias_address != null &&
                    channelObject?.alias_address != 'NULL' &&
                    appConfig.allowedNetworks.includes(+channelObject?.alias_blockchain_id) &&
                    !MaskedAliasChannels[+channelObject?.alias_blockchain_id][channelObject?.channel] && (
                      <Span padding="0 0 0 5px">
                        <Image
                          src={`./svg/${LOGO_FROM_CHAIN_ID[+channelObject.alias_blockchain_id]}`}
                          alt="Alias Chain Logo"
                          width="20px"
                          height="20px"
                        />
                      </Span>
                    )}
                </Span>
              </ChannelTitleLink>
            )}
          </ChannelTitle>
        )}

        <ChannelDesc>
          {loading ? (
            <>
              <SkeletonWrapper
                atH={5}
                atW={100}
              >
                <Skeleton
                  color={themes.interfaceSkeleton}
                  width="100%"
                  height={5}
                />
              </SkeletonWrapper>

              <SkeletonWrapper
                atH={5}
                atW={100}
              >
                <Skeleton
                  color={themes.interfaceSkeleton}
                  width="100%"
                  height={5}
                />
              </SkeletonWrapper>

              <SkeletonWrapper
                atH={5}
                atW={100}
              >
                <Skeleton
                  color={themes.interfaceSkeleton}
                  width="40%"
                  height={5}
                />
              </SkeletonWrapper>
            </>
          ) : (
            <ChannelDescLabel>{channelObject.info}</ChannelDescLabel>
          )}
        </ChannelDesc>

        <ChannelMeta>
          {loading ? (
            <>
              <SkeletonWrapper
                atH={10}
                atW={30}
                marginBottom="0"
              >
                <Skeleton color={themes.interfaceSkeleton} />
              </SkeletonWrapper>
            </>
          ) : (
            <ItemH
              align="center"
              justify="flex-start"
              margin="0px -5px"
            >
              <ItemBody>
                <MetaInfoDisplayer
                  externalIcon={
                    <Image
                      src="./svg/users.svg"
                      alt="users"
                      width="14px"
                      height="14px"
                    />
                  }
                  internalIcon={null}
                  text={subscriberCount}
                  padding="5.3px 10px"
                  bgColor={themes.viewChannelSecondaryBG}
                  color={themes.viewChannelSecondaryText}
                />

                <MetaInfoDisplayer
                  text={formatAddress(copyText)}
                  bgColor={themes.viewChannelSearchBg}
                  padding="6px 16px"
                  color={themes.viewChannelPrimaryText}
                  onClick={() => {
                    copyToClipboard(channelObject.channel);
                    setCopyText('copied');
                  }}
                  onMouseEnter={() => {
                    setCopyText('click to copy');
                  }}
                  onMouseLeave={() => {
                    setCopyText(channelObject.channel);
                  }}
                />

                {isChannelTutorialized(channelObject.channel) && (
                  <ChannelTutorial
                    addr={channelObject.channel}
                    bgColor={themes.viewChannelSearchBg}
                    loadTeaser={loadTeaser}
                    playTeaser={playTeaser}
                  />
                )}
              </ItemBody>
            </ItemH>
          )}
        </ChannelMeta>
      </ChannelInfo>
      {!!account && !!library && (
        <>
          <LineBreak />
          <ChannelActions>
            {loading && (
              <SkeletonButton>
                <Skeleton color={themes.interfaceSkeleton} />
              </SkeletonButton>
            )}
            {!loading && isPushAdmin && (
              <SubscribeButton
                onClick={blockChannel}
                disabled={bLoading}
              >
                {bLoading && (
                  <ActionLoader>
                    <LoaderSpinner
                      type={LOADER_TYPE.SEAMLESS}
                      spinnerSize={16}
                      spinnerColor="#FFF"
                    />
                  </ActionLoader>
                )}
                <ActionTitle hideit={bLoading}>Block channel</ActionTitle>
              </SubscribeButton>
            )}
            {!loading && (isPushAdmin || canVerify) && !isVerified && (
              <SubscribeButton
                onClick={verifyChannel}
                disabled={vLoading}
              >
                {vLoading && (
                  <ActionLoader>
                    <LoaderSpinner
                      type={LOADER_TYPE.SEAMLESS}
                      spinnerSize={16}
                      spinnerColor="#FFF"
                    />
                  </ActionLoader>
                )}
                <ActionTitle hideit={vLoading}>Verify Channel</ActionTitle>
              </SubscribeButton>
            )}
            {!loading && (isPushAdmin || canUnverify) && isVerified && (
              <UnsubscribeButton
                onClick={unverifyChannel}
                disabled={vLoading}
              >
                {vLoading && (
                  <ActionLoader>
                    <LoaderSpinner
                      type={LOADER_TYPE.SEAMLESS}
                      spinnerSize={16}
                      spinnerColor="#FFF"
                    />
                  </ActionLoader>
                )}
                <ActionTitle hideit={vLoading}>Unverify Channel</ActionTitle>
              </UnsubscribeButton>
            )}
            {!loading && !subscribed && (
              <>
                {isOwner && <OwnerButton disabled>Owner</OwnerButton>}
                {!isOwner && (
                  <SubscribeButton
                    onClick={subscribe}
                    disabled={txInProgress}
                    className="optin"
                  >
                    {txInProgress && (
                      <ActionLoader>
                        <LoaderSpinner
                          type={LOADER_TYPE.SEAMLESS}
                          spinnerSize={16}
                          spinnerColor="#FFF"
                        />
                      </ActionLoader>
                    )}
                    <ActionTitle hideit={txInProgress}>Opt-In</ActionTitle>
                  </SubscribeButton>
                )}
              </>
            )}
            {!loading && subscribed && (
              <>
                {isOwner && <OwnerButton disabled>Owner</OwnerButton>}
                {!isOwner && (
                  <UnsubscribeButton
                    onClick={unsubscribeAction}
                    disabled={txInProgress}
                  >
                    {txInProgress && (
                      <ActionLoader>
                        <LoaderSpinner
                          type={LOADER_TYPE.SEAMLESS}
                          spinnerSize={16}
                          spinnerColor="#FFF"
                        />
                      </ActionLoader>
                    )}
                    <ActionTitle hideit={txInProgress}>Opt-out</ActionTitle>
                  </UnsubscribeButton>
                )}
              </>
            )}
          </ChannelActions>
        </>
      )}
      {toast && (
        <NotificationToast
          notification={toast}
          clearToast={clearToast}
        />
      )}
    </Container>
  );
}

const FlexBox = styled.div`
  display: flex;
`;

const ColumnFlex = styled(FlexBox)`
  flex-direction: column;
`;
// css styles
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.theme.default.border};
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0px 5px;
  justify-content: center;
  padding: 25px 10px;

  align-self: stretch;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.default.border};
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

const SkeletonWrapper = styled.div`
  overflow: hidden;
  width: ${(props) => props.atW + '%' || '100%'};
  height: ${(props) => props.atH}px;
  border-radius: ${(props) => props.borderRadius || 10}px;
  margin-bottom: ${(props) => props.marginBottom || 5}px;
  margin-right: ${(props) => props.marginRight || 0}px;
`;

const ChannelLogoContainer = styled.div`
  display: flex;
`;

const ChannelLogo = styled.div`
  max-width: 100px;
  min-width: 32px;
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.viewChannelIconBorder};
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  @media (max-width: 768px) {
    align-self: center;
    min-width: 100px;
    min-height: 100px;
  }

  @media (max-width: 600px) {
    align-self: center;
    min-width: 78px;
    min-height: 78px;
  }
`;

const ChannelLogoOuter = styled.div`
  padding-top: 100%;
  position: relative;
`;

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
  @media (max-width: 600px) {
    width: 78px;
    height: 78px;
  }
`;

const ChannelLogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const ImageInfo = styled.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const ChannelInfo = styled.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 240px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;

  @media (max-width: 480px) {
    min-width: 210px;
  }
`;

const ChannelName = styled.div`
  word-break: break-word;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ChannelTitle = styled(ItemH)`
  padding: 5px 10px 5px 0px;
  position: relative;
  justify-content: flex-start;
  margin: 0;
  flex: initial;
  align-items: center;
  @media (max-width: 768px) {
    align-self: center;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    flex: 5;
    padding-left: 5px;
  }
`;

const ChannelTitleLink = styled.a`
  text-decoration: none;
  display: flex;
  flex: inherit;
  align-item: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }

  & > span > span {
    font-weight: 500;
    color: ${(props) => props.theme.viewChannelLink};
    font-size: 18px;
    cursor: pointer;
  }

  & > span > span {
    vertical-align: middle;
  }
`;

const ChannelTitleSpan = styled(Span)`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    align-items: baseline;
    flex-direction: column;
  }
  & > span > span {
    font-weight: 500;
    color: ${(props) => props.theme.viewChannelLink};
    font-size: 18px;
    cursor: pointer;
  }
`;

const VerifiedBy = styled.span`
  color: #ec008c;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const VerifierIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 4px;
`;

const VerifierName = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme.color};
  font-size: 16px;
  letter-spacing: 0em;
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const ChannelDesc = styled.div`
  flex: 1;
  display: flex;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.75);
  padding: 5px 0px 10px 0px;
  font-weight: 400;
  flex-direction: column;
  color: ${(props) => props.theme.color};
  @media (max-width: 768px) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 600px) {
    align-self: flex-start;
    text-align: left;
  }
`;

const ChannelDescLabel = styled.label`
  flex: 1;
  line-height: 165%;
  color: ${(props) => props.theme.viewChannelPrimaryTextColor};
`;

const ChannelMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0px;
  font-size: 13px;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const ItemBody = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-self: center;
    justify-content: center;
  }
`;

const ChannelMetaBox = styled.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  display: flex;
  border-radius: 10px;
  font-size: 11px;
  gap: 3px;
`;

const Subscribers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${Device.laptopL} {
    padding-top: 1rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-self: center;
    text-align: center;
    align-items: center;
  }
`;

const SubscribersCount = styled(ChannelMetaBox)`
  background: ${(props) => props.theme.viewChannelSecondaryBG};
  transition: 300ms;
`;

const Pool = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PoolShare = styled(ChannelMetaBox)`
  background: #674c9f;
`;

const LineBreak = styled.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${Device.tablet} {
    display: block;
  }
`;

const ChannelActions = styled.div`
  margin: 5px;
  flex-grow: 1;
  // max-width: 250px;
  display: flex;
  justify-content: flex-end;
  // justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

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
  ${(props) =>
    props.disabled &&
    css`
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
`;

const ActionTitle = styled.span`
  font-weight: 500;
  font-size: 14px;

  ${(props) =>
    props.hideit &&
    css`
      visibility: hidden;
    `};
`;

const ActionLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

const SubscribeButton = styled(ChannelActionButton)`
  background: #e20880;
  border-radius: 8px;
  padding: 9px 15px;
  min-width: 80px;
  @media (max-width: 768px) {
    padding: 9px 30px;
  }
`;

const UnsubscribeButton = styled(ChannelActionButton)`
  background: transparent;
  color: ${(props) => props.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 9px 15px;
  min-width: 80px;
  @media (max-width: 768px) {
    padding: 9px 30px;
  }
`;

const OwnerButton = styled(ChannelActionButton)`
  background: #35c5f3;
`;

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

// Export Default
export default ViewChannelItem;
