// React + Web3 Essentials
import React, { useContext, useEffect, useMemo, useState } from 'react';

// External Packages
import Skeleton from '@yisheng90/react-loading';
import axios from 'axios';
import { cloneDeep } from 'lodash';
import { GoVerified } from 'react-icons/go';
import { IoMdPeople } from 'react-icons/io';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast as toaster } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled, { css, useTheme } from 'styled-components';
import { useAccount, useDeviceWidthCheck } from 'hooks';

// Internal Compoonents
import * as PushAPI from '@pushprotocol/restapi';
import { Device } from 'assets/Device';
import MetaInfoDisplayer from 'components/MetaInfoDisplayer';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import {
  ButtonV2,
} from 'components/reusables/SharedStylingV2';
import RedCircleSvg from '../assets/RedCircle.svg';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { isAddressEqual, LOGO_FROM_CHAIN_ID, MaskedAliasChannels, shortenText } from 'helpers/UtilityHelper';
import useToast from 'hooks/useToast';
import { cacheChannelInfo } from 'redux/slices/channelSlice';
import { addNewWelcomeNotif, incrementStepIndex } from 'redux/slices/userJourneySlice';
import ChannelTutorial, { isChannelTutorialized } from 'segments/ChannelTutorial';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import NotificationToast from '../primaries/NotificationToast';
import { Image, ItemH, Span } from '../primaries/SharedStyling';
import InfoImage from '../assets/info.svg';
import ManageNotifSettingDropdown from './dropdowns/ManageNotifSettingDropdown';
import OptinNotifSettingDropdown from './dropdowns/OptinNotifSettingDropdown';
import { ImageV2 } from './reusables/SharedStylingV2';
import Tooltip from './reusables/tooltip/Tooltip';
import UpdateChannelTooltipContent from './UpdateChannelTooltipContent';
import VerifiedTooltipContent from "./VerifiedTooltipContent";

// Internal Configs
import { addresses, appConfig, CHAIN_DETAILS } from 'config';
import APP_PATHS from "config/AppPaths";
import { IPFSGateway } from 'helpers/IpfsHelper';

// Create Header
function ViewChannelItem({ channelObjectProp, loadTeaser, playTeaser, minimal, profileType }) {
  const dispatch = useDispatch();

  const themes = useTheme();

  const { run, stepIndex } = useSelector((state) => state.userJourney);
  const { userPushSDKInstance } = useSelector((state) => {
    return state.user;
  });
  const { epnsReadProvider, epnsWriteProvider, epnsCommReadProvider, pushAdminAddress, ZERO_ADDRESS } = useSelector(
    (state) => state.contracts
  );
  const { canVerify, channelDetails, coreChannelAdmin } = useSelector((state) => state.admin);
  const { channelsCache, CHANNEL_BLACKLIST, CHANNEL_ACTIVE_STATE, subscriptionStatus, userSettings: currentUserSettings } = useSelector((state) => state.channels);

  const { account, provider, chainId } = useAccount();

  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const [channelObject, setChannelObject] = React.useState(channelObjectProp);
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
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
  const isChannelActive = channelObject.activation_status;

  // Setup navigation
  const navigate = useNavigate();

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
      // console.log("Channel JSON !!!!!",channelJson);
      return channelJson;
    } catch (err) {
      console.error(err);
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
    if (!channelObject || !channelObject.channel || !userPushSDKInstance) return;

    setSubscriberCount(channelObject.subscriber_count);

    if (!channelObject.verified_status) {
      setLoading(false);
    } else {
      try {
        let verifierAddress = null;
        const response = await epnsReadProvider.channels(channelObject.channel);
        verifierAddress = response.verifiedBy;

        if (channelsCache[verifierAddress]) {
          setVerifierDetails(channelsCache[verifierAddress]);
        } else {
          let verifierAddrDetails = {};
          if (isAddressEqual(addresses?.pushChannelAdmin, verifierAddress)) {
            verifierAddrDetails = {
              name: "Push Admin",
              icon: "./logo192.png"
            };
          } else {
            verifierAddrDetails = await userPushSDKInstance.channel.info(convertAddressToAddrCaip(verifierAddress, appConfig.coreContractChain));
          }

          dispatch(
            cacheChannelInfo({
              address: verifierAddress,
              meta: verifierAddrDetails,
            })
          );
          setVerifierDetails(verifierAddrDetails);
        }
      } catch (error) {
        console.error("Error fetching channel information:", error);
      } finally {
        setLoading(false);
      }
    }

  }, [account, channelObject, userPushSDKInstance]);

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
    verifyingContract: epnsCommReadProvider?.address,
  };

  const generalToast = useToast();

  const userSettings = useMemo(() => {
    return cloneDeep(currentUserSettings);
  }, [currentUserSettings]);

  const formatAddress = (addressText) => {
    return addressText.length > 40 ? `${shortenText(addressText, 4, 6)}` : addressText;
  };

  const verifyChannel = () => {
    setvLoading(true);
    // post op
    epnsWriteProvider
      .verifyChannel(channelObject.channel)
      .then(async (tx) => {
        console.debug(tx);
        console.info('Transaction Sent!');

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
        console.info('Transaction Mined!');
        setIsVerified(true);
      })
      .catch((err) => {
        console.error('!!!Error verifyChannel() --> %o', err);
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
        console.debug(tx);
        console.info('Transaction Sent!');

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
        console.info('Transaction Mined!');
        setIsVerified(false);
      })
      .catch((err) => {
        console.error('!!!Error handleSendMessage() --> %o', err);
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
        console.debug(tx);
        console.info('Transaction Sent!');

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
        console.info('Transaction Mined!');
      })
      .catch((err) => {
        console.error('!!!Error handleSendMessage() --> %o', err);
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

  const copyToClipboard = (address) => {
    const url = generateChannelProfileLink(address, true);

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

  const generateChannelProfileLink = (address, attachhost) => {
    let url = `${APP_PATHS.Channels}/${address}`;

    if (attachhost) {
      let hostname = window.location.hostname;
      // if we are on localhost, attach the port
      if (hostname === 'localhost') {
        hostname = hostname + ':3000';
      }

      url = `${hostname}${url}`;
    }

    return url;
  }

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
      minimal={minimal}
      border={profileType == 'Profile' ? 'none' : `1px solid ${minimal ? 'transparent' : themes.default.border}`}
    >
      {isMobile && (
        <ChannelLogoContainer>
          <ChannelLogo minimal={minimal}>
            <ChannelLogoOuter>
              <ChannelLogoInner minimal={minimal}>
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

          {!minimal &&
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

                      <Span
                        onClick={() => {
                          navigate(generateChannelProfileLink(channelObject.channel, false))
                        }

                        }>{channelObject.name}</Span>
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
                              verifierIcon={verifierDetails?.icon}
                              verifierName={verifierDetails?.name}
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
                                src={`./svg/${CHAIN_DETAILS[+channelObject.alias_blockchain_id]?.label?.split(' ')[0]
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
          }
        </ChannelLogoContainer>
      )}

      {!isMobile && (
        <>
          <ChannelLogo
            minimal={minimal}
            onClick={() => {
              navigate(generateChannelProfileLink(channelObject.channel, false))
            }}
          >
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

      {!minimal &&
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

                    <Span onClick={() => {
                      navigate(generateChannelProfileLink(channelObject.channel, false))
                    }}
                    >{channelObject.name}</Span>


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
                              verifierIcon={verifierDetails?.icon}
                              verifierName={verifierDetails?.name}
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

                  {profileType === 'Profile' && (
                    <ChanneStateText active={isChannelActive}>
                      {isChannelActive === 0 && (
                        <ImageV2
                          width="12px"
                          src={RedCircleSvg}
                          margin="0 5px 2px 0px"
                          height="30px"
                        />
                      )}
                      {isChannelActive === 1 ? 'Active' : 'Deactivated'}
                    </ChanneStateText>
                  )}

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
      }

      {!!account && !!provider && !minimal && (
        <>
          <LineBreak />
          <ChannelActions>
            {loading && (
              <SkeletonButton>
                <Skeleton color={themes.interfaceSkeleton} />
              </SkeletonButton>
            )}

            {!loading && isPushAdmin && (profileType == "Channel") && (
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
            {!loading && (isPushAdmin || canVerify) && !isVerified && (profileType == "Channel") && (
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
            {!loading && (isPushAdmin || canUnverify) && isVerified && (profileType == "Channel") && (
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
                {isOwner && (
                  <>
                    {(profileType == "Profile") ? (
                      <DashboardButton onClick={() => navigate("/dashboard")}>
                        Go To Dashboard
                      </DashboardButton>
                    ) : (
                      <OwnerButton disabled>Owner</OwnerButton>
                    )}
                  </>
                )}
                {!isOwner && isChannelActive !== 0 && (
                  <OptinNotifSettingDropdown
                    channelDetail={channelObject}
                    setLoading={setTxInProgress}
                    onSuccessOptin={() => {
                      setSubscribed(true);
                      setSubscriberCount((prevSubscriberCount) => prevSubscriberCount + 1)
                    }}
                  >
                    <SubscribeButton
                      onClick={() => { }}
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
                  </OptinNotifSettingDropdown>
                )}
              </>
            )}
            {!loading && subscribed && isChannelActive !== 0 && (
              <>
                {/* {isOwner && <OwnerButton disabled>Owner</OwnerButton>} */}
                {isOwner && (
                  <>
                    {(profileType == "Profile") ? (
                      <DashboardButton onClick={() => navigate("/dashboard")}>
                        Go To Dashboard
                      </DashboardButton>
                    ) : (
                      <OwnerButton disabled>Owner</OwnerButton>
                    )}
                  </>
                )}

                {!isOwner && (
                  <ManageNotifSettingDropdown
                    centerOnMobile={true}
                    channelDetail={channelObject}
                    setSubscribed={setSubscribed}
                    userSetting={userSettings[channelObject.channel]}
                    setSubscriberCount={setSubscriberCount}
                    onSuccessOptout={() => {
                      setSubscribed(false);
                      setSubscriberCount((prevSubscriberCount) => prevSubscriberCount - 1)
                    }}
                  >
                    <UnsubscribeButton
                      onClick={() => { }}
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
                      <ActionTitle hideit={txInProgress}>Manage</ActionTitle>
                      <ImageV2
                        alt="arrow"
                        src="/svg/arrow.svg"
                        height="10px"
                        width="12px"
                      />
                    </UnsubscribeButton>
                  </ManageNotifSettingDropdown>
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
  // flex: 1;
  display: flex;
  flex-wrap: nowrap;
  border:${(props) => props.border};
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0px 5px;
  justify-content: center;
  padding: ${(props) => props.minimal ? '5px 0px' : '25px 10px'};
  align-self: stretch;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.minimal ? 'transparent' : props.theme.default.border};
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

const ChannelLogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const ChannelLogoInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: ${(props) => props.minimal ? '10px' : '20px'};
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ChannelLogoOuter = styled.div`
  padding-top: 100%;
  width: 100%;
  position: relative;
`;

const ChannelLogo = styled(ButtonV2)`
  max-width: 100px;
  min-width: 48px;
  flex: 1;
  margin: 5px;
  padding: ${props => props.minimal ? "5px" : "10px"};
  border: 1px solid ${(props) => props.theme.viewChannelIconBorder};
  background: transparent;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
    min-width: ${props => props.minimal ? "48px" : "100px"};
    max-width: ${props => props.minimal ? "48px" : "100px"};
    min-height: ${props => props.minimal ? "48px" : "100px"};
  }

  @media (max-width: 600px) {
    align-self: center;
  }
`;

const ChannelLogoContainer = styled.div`
  display: flex;
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
  flex: 0;
  // max-width: 250px;
  display: flex;
  justify-content: center;
  // justify-content: center;
  align-items: center;
  gap:24px;
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
  color: #fff;
  border-radius: 8px;
  padding: 0px;
  min-height: 36px;
  min-width: 108px;
`;

const UnsubscribeButton = styled(ChannelActionButton)`
  background: transparent;
  color: ${(props) => props.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 0px 8px 0px 16px;
  gap: 8px;
  min-height: 36px;
  min-width: 108px;
`;

const OwnerButton = styled(ChannelActionButton)`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
`;

const DashboardButton = styled(ChannelActionButton)`
  background: #e20880;
  border-radius: 8px;
  padding: 7px 14px;
  min-height: 36px;
  min-width: max-content;
`

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

const StateText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 8px;
  border-radius: 25px;
  height: 26px;
  background-color: pink;
  font-family: Strawford, Source Sans Pro;
`;

const ChanneStateText = styled(StateText)`
  color: #2dbd81;
  color: ${(props) => (props.active ? '#2DBD81' : '#E93636')};
  background-color: ${(props) => (props.active ? '#c6efd1' : '#FFD8D8')};
  margin-left: 10px;
  ${(props) =>
    props.active &&
    `
        &::before {
            width:16px;
            height:16px;
            background: #2DBD81;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }
    `}
`;

// Export Default
export default ViewChannelItem;
