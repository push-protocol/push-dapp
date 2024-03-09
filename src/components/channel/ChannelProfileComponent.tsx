import { ItemH } from 'components/SharedStyling';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import styled, { useTheme } from 'styled-components';
import Skeleton from '@yisheng90/react-loading';
import { Image, Span } from 'primaries/SharedStyling';
import { appConfig } from 'config';
import { LOGO_FROM_CHAIN_ID, MaskedAliasChannels, shortenText } from 'helpers/UtilityHelper';
import { ButtonV2 } from 'components/reusables/SharedStylingV2';
import { IPFSGateway } from 'helpers/IpfsHelper';
import axios from 'axios';
import MetaInfoDisplayer from 'components/MetaInfoDisplayer';
import OptinNotifSettingDropdown from 'components/dropdowns/OptinNotifSettingDropdown';


const ChannelProfileComponent = ({
    channelID,
    channelDetails
}) => {

    const themes = useTheme();
    const { channels, page, ZERO_ADDRESS } = useSelector((state: any) => state.channels);

    const [isLoading, setIsLoading] = useState(false);
    const [channelIcon, setChannelIcon] = React.useState('');
    const [channelObjectFromHash, setChannelObjectFromHash] = React.useState({});
    const [copyText, setCopyText] = React.useState(channelDetails?.channel);
    const [txInProgress, setTxInProgress] = React.useState(false);

    useEffect(() => {

        // Getting Channel Icon from Channel IPFS Hash
        if (channelDetails) {
            (async () => {
                if (!channelDetails.ipfshash) return;

                const IPFS_GATEWAY = IPFSGateway;
                const url = IPFS_GATEWAY + channelDetails.ipfshash;
                const response = await axios.get(url);
                if (response.data) setChannelObjectFromHash(response.data);
                if (response.data.icon) setChannelIcon(response.data.icon);
            })()
        }

    }, [channelDetails]);

    const formatAddress = (addressText) => {
        return addressText.length > 40 ? `${shortenText(addressText, 4, 6)}` : addressText;
    };

    const copyToClipboard = (address) => {
        // const url = generateChannelProfileLink(address, true);
    
        // fallback for non navigator browser support
        if (navigator && navigator.clipboard) {
          navigator.clipboard.writeText(address);
        } else {
          const el = document.createElement('textarea');
          el.value = address;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
        }
      };



    return (
        <Container>

            <ChannelLogo>
                <ChannelLogoOuter>
                    <ChannelLogoInner>
                        {isLoading ? (
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

            <ChannelInfo>

                <ChannelTitle>
                    {isLoading || !channelDetails ? (
                        <Skeleton
                            color={themes.interfaceSkeleton}
                            width="50%"
                            height={24}
                        />
                    ) : (
                        <ChannelTitleLink>
                            <Span style={{ display: 'flex', alignItems: 'center' }}>
                                {/* ToolTip for Channel Changed warning */}
                                {/* {showChannelChangedWarning && (
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
                            )} */}

                                <Span>{channelDetails.name}</Span>


                                {/* {isVerified == 1 && (
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
                            )} */}
                                {channelDetails && channelDetails?.channel && (
                                    <Span padding="0 0 0 5px">
                                        <Image
                                            src={`./svg/Ethereum.svg`}
                                            alt="Ethereum"
                                            width="20px"
                                            height="20px"
                                        />
                                    </Span>
                                )}
                                {channelDetails &&
                                    channelDetails?.alias_address != null &&
                                    channelDetails?.alias_address != 'NULL' &&
                                    appConfig.allowedNetworks.includes(+channelDetails?.alias_blockchain_id) &&
                                    !MaskedAliasChannels[+channelDetails?.alias_blockchain_id][channelDetails?.channel] && (
                                        <Span padding="0 0 0 5px">
                                            <Image
                                                src={`./svg/${LOGO_FROM_CHAIN_ID[+channelDetails.alias_blockchain_id]}`}
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

                <ChannelDesc>
                    {isLoading ? (
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
                        <ChannelDescLabel>{channelDetails.info}</ChannelDescLabel>
                    )}
                </ChannelDesc>

                <ChannelMeta>
                    {isLoading ? (
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
                                    text={channelDetails.subscriber_count}
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
                                        copyToClipboard(channelDetails.channel);
                                        setCopyText('copied');
                                    }}
                                    onMouseEnter={() => {
                                        setCopyText('click to copy');
                                    }}
                                    onMouseLeave={() => {
                                        setCopyText(channelDetails.channel);
                                    }}
                                />

                                {/* {isChannelTutorialized(channelObject.channel) && (
                                    <ChannelTutorial
                                        addr={channelObject.channel}
                                        bgColor={themes.viewChannelSearchBg}
                                        loadTeaser={loadTeaser}
                                        playTeaser={playTeaser}
                                    />
                                )} */}
                            </ItemBody>
                        </ItemH>
                    )}
                </ChannelMeta>

            </ChannelInfo>

            {/* {!loading && !subscribed && (
              <>
                {isOwner && <OwnerButton disabled>Owner</OwnerButton>}
                {!isOwner && (
                  <OptinNotifSettingDropdown 
                    channelDetail={channelDetails} 
                    setLoading={setTxInProgress}
                    onSuccessOptin={() => {
                      setSubscribed(true);
                      setSubscriberCount((prevSubscriberCount) => prevSubscriberCount + 1)
                    }}
                  >
                    <SubscribeButton
                      onClick={() => {}}
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
            )} */}




        </Container>
    );
};

export default ChannelProfileComponent;

const Container = styled.div`
//   flex: 1;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.minimal ? 'transparent' : props.theme.default.border};
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

const ChannelLogoInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius:20px;
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
  padding: 10px;
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
    min-width: 100px;
    max-width: 100px;
  }

  @media (max-width: 600px) {
    align-self: center;
  }
`;

const ChannelLogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
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

const SkeletonWrapper = styled.div`
  overflow: hidden;
  width: ${(props) => props.atW + '%' || '100%'};
  height: ${(props) => props.atH}px;
  border-radius: ${(props) => props.borderRadius || 10}px;
  margin-bottom: ${(props) => props.marginBottom || 5}px;
  margin-right: ${(props) => props.marginRight || 0}px;
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

const OwnerButton = styled(ChannelActionButton)`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
`;
