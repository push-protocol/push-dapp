// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext, useEffect, useMemo, useState } from 'react';

// External Packages
import moment from 'moment';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Internal Compoonents
import { Item } from 'components/SharedStyling';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import useToast from 'hooks/useToast';
import { Section } from 'primaries/SharedStyling';
import { MdCheckCircle, MdError } from 'react-icons/md';
// import ChannelsDataStore from 'singletons/ChannelsDataStore';
import RedCircleSvg from '../assets/RedCircle.svg?react';
import AddDelegateModalContent from './AddDelegateModalContent';
import ChannelSettings from './ChannelSettings';
import { AddDelegateButton, ManageSettingsButton } from './channel/ChannelButtons';
import ChannelInfoHeader from './channel/ChannelInfoHeader';
import ChannelInfoList from './channel/ChannelInfoList';

// Internal Configs
import APP_PATHS from 'config/AppPaths';
import { device } from 'config/Globals';
import { appConfig } from 'config/index.js';
import { AppContext } from 'contexts/AppContext';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { getDateFromTimestamp, nextDaysDateFromTimestamp, timeRemaining } from 'helpers/TimerHelper';
import { CHANNEL_TYPE } from 'helpers/UtilityHelper';
import { Button } from 'blocks';

const DATE_FORMAT = 'DD MMM, YYYY';

export default function ChannelDetails({ isChannelExpired, setIsChannelExpired, showEditChannel, destroyChannel }) {
  const { account, chainId, wallet } = useAccount();
  const {
    delegatees,
    channelDetails,
    canVerify,
    aliasDetails: { isAliasVerified, aliasAddrFromContract },
  } = useSelector((state) => state.admin);
  const { channelSettings } = useSelector((state) => state.channels);
  const { userPushSDKInstance } = useSelector((state) => {
    return state.user;
  });
  const { handleConnectWalletAndEnableProfile } = useContext(AppContext);
  const { CHANNEL_ACTIVE_STATE, CHANNNEL_DEACTIVATED_STATE } = useSelector((state) => state.channels);
  const { processingState } = useSelector((state) => state.channelCreation);
  const [verifyingChannel, setVerifyingChannel] = useState([]);
  const [creationDate, setCreationDate] = useState('');
  let { channelState } = channelDetails;
  if (!channelState) channelState = channelDetails['activation_status'];
  const channelIsActive = channelState === CHANNEL_ACTIVE_STATE;
  const channelIsDeactivated = channelState === CHANNNEL_DEACTIVATED_STATE;

  const CORE_CHAIN_ID = appConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  const [delegateeList, setDelegateeList] = useState([account]);
  const [channelAddress, setChannelAddress] = useState(undefined);
  const { epnsCommWriteProvider } = useSelector((state) => state.contracts);

  const navigate = useNavigate();

  const {
    isModalOpen: isAddDelegateModalOpen,
    showModal: showAddDelegateModal,
    ModalComponent: AddDelegateModalComponent,
  } = useModalBlur();

  const addDelegateToast = useToast();

  const handleDelegateModal = async () => {
    if (!userPushSDKInstance.signer) {
      await handleConnectWalletAndEnableProfile({ wallet });
    }
    showAddDelegateModal();
  };

  const addDelegate = async (walletAddress) => {
    return userPushSDKInstance.channel.delegate.add(convertAddressToAddrCaip(walletAddress, chainId));
  };

  // BEGIN CHANGE
  // Added this inline if-else condition because of a bug that when connecting to amoy, the channelDetails.expiryType is undefined, so the toString() is throwing an exception
  const channelExpiryDate = channelDetails.expiryTime
    ? getDateFromTimestamp(channelDetails.expiryTime?.toString() * 1000)
    : '';
  const isChannelNotExpired = channelDetails.expiryTime
    ? timeRemaining(channelDetails.expiryTime?.toString() * 1000)
    : true;
  const channelAutomaticExpiryDate = channelDetails.expiryTime
    ? nextDaysDateFromTimestamp(channelDetails.expiryTime?.toString() * 1000, 14)
    : '';
  // END CHANGE

  useEffect(() => {
    if (channelDetails.channelType != CHANNEL_TYPE['TIMEBOUND']) return;
    if (!isChannelNotExpired) setIsChannelExpired(true);
  }, [isChannelNotExpired]);

  useEffect(() => {
    if (!channelDetails || !canVerify) return;
    (async function () {
      // let channelJson = await ChannelsDataStore.getInstance().getChannelJsonAsync(channelDetails.verifiedBy);
      // setVerifyingChannel(channelJson);
    })();
  }, [channelDetails, canVerify]);

  useEffect(() => {
    if (!channelDetails || !onCoreNetwork) return;
    (async function () {
      const bn = channelDetails.channelStartBlock.toString();

      // using ethers jsonRpcProvider instead of library bcz channels are created on only core chain, that's why block can be fetched from that only
      const block = await new ethers.providers.JsonRpcProvider(appConfig.coreRPC).getBlock(+bn);
      const date = moment(block.timestamp * 1000); //convert from millisecs
      setCreationDate(date.format(DATE_FORMAT));
    })();
  }, [channelDetails]);

  useEffect(() => {
    if (!account) return;
    if (!delegatees || !delegatees.length) {
      setChannelAddress(account);
    } else {
      // default the channel address to the first one on the list which should be that of the user if they have a channel
      if (onCoreNetwork) setChannelAddress(delegatees[0].channel);
      else setChannelAddress(delegatees[0].alias_address);
    }
  }, [delegatees, account]);

  useEffect(() => {
    if (account) {
      (async () => {
        try {
          const channelAddressinCAIP = convertAddressToAddrCaip(account, chainId);
          const channelDelegates = await userPushSDKInstance.channel.delegate.get({ channel: channelAddressinCAIP });
          if (channelDelegates) {
            const delegateeList = channelDelegates.map((delegate) => delegate);
            delegateeList.unshift(account);
            setDelegateeList(delegateeList);
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [account, chainId]);

  const removeDelegate = async (walletAddress) => {
    let userPushInstance = userPushSDKInstance;
    if (!userPushInstance.signer) {
      userPushInstance = await handleConnectWalletAndEnableProfile({ wallet });
      if (!userPushInstance) {
        return;
      }
    }

    return userPushInstance.channel.delegate.remove(convertAddressToAddrCaip(walletAddress, chainId));
  };

  const navigateToNotifSettings = () => {
    navigate(APP_PATHS.ChannelSettings);
  };

  return (
    <ItemVV2>
      <AdaptiveMobileItemHV22
        justifyContent="flex-start"
        alignSelf="stretch"
      >
        <ImageSection src={channelDetails.icon}></ImageSection>

        <AdaptiveMobileItemVV2
          alignItems="flex-start"
          padding="5px 0px"
        >
          <ChannelName>
            {channelDetails.name}
            {canVerify && <VerifyImage src="/verify.png"></VerifyImage>}
          </ChannelName>

          <AdaptiveMobileItemVV2
            alignItems="flex-start"
            flex="initial"
            padding="5px 0px"
          >
            {(onCoreNetwork && aliasAddrFromContract && !isAliasVerified) || (!onCoreNetwork && !isAliasVerified) ? (
              <AliasStateText>Alias Network Setup Pending</AliasStateText>
            ) : (
              <AdaptiveMobileItemHV2 justifyContent="flex-start">
                <Subscribers>
                  <img
                    style={{ width: '15px' }}
                    src="/subcount.svg"
                    alt="subscount"
                  ></img>
                  <SubscribersCount>{channelDetails.subscriber_count}</SubscribersCount>
                </Subscribers>
                <ChanneStateText active={channelIsActive}>
                  {channelIsDeactivated && (
                    <ImageV2
                      width="12px"
                      src={RedCircleSvg}
                      margin="0 5px 2px 0px"
                      height="30px"
                    />
                  )}
                  {channelIsActive ? 'Active' : channelIsDeactivated ? 'Deactivated' : 'Blocked'}
                </ChanneStateText>
                {channelDetails.channelType == CHANNEL_TYPE['TIMEBOUND'] && !isChannelExpired && (
                  <ItemHV2
                    background="#C5EFD1"
                    flex="0"
                    borderRadius="25px"
                    margin="0 0 10px 10px"
                    height="30px"
                  >
                    <ImageV2
                      width="16px"
                      src="svg/ExpiresTimer.svg"
                      alt="expiryTimer"
                      padding="0 6px 0 9px"
                    />
                    <SpanV2
                      color="#30CC8B"
                      fontWeight="600"
                      padding="0 9px 0 0"
                    >
                      Expires on {channelExpiryDate}
                    </SpanV2>
                  </ItemHV2>
                )}
                {channelDetails.channelType == CHANNEL_TYPE['TIMEBOUND'] && isChannelExpired && (
                  <ItemHV2
                    background="#FFD8D8"
                    flex="0"
                    borderRadius="25px"
                    margin="0 0 10px 10px"
                    height="30px"
                  >
                    <ImageV2
                      width="16px"
                      src="svg/ExpiredTimer.svg"
                      alt="expiryTimer"
                      padding="0 6px 0 9px"
                    />
                    <SpanV2
                      color="#E93636"
                      fontWeight="600"
                      padding="0 9px 0 0"
                    >
                      Expired on {channelExpiryDate}
                    </SpanV2>
                  </ItemHV2>
                )}
              </AdaptiveMobileItemHV2>
            )}

            {creationDate && <Date>Created {creationDate}</Date>}
          </AdaptiveMobileItemVV2>
        </AdaptiveMobileItemVV2>
      </AdaptiveMobileItemHV22>

      {isMobile && (
        <ItemHV2
          zIndex="1"
          padding="0 0 15px 0"
          alignSelf="center"
          display="flex"
          gap="8px"
        >
          {!isChannelExpired && onCoreNetwork && (
            <Button
              onClick={showEditChannel}
              size="small"
              variant="outline"
            >
              Edit Channel
            </Button>
          )}
          {!isChannelExpired && <ChannelSettings />}
          {isChannelExpired && onCoreNetwork && (
            <Button
              onClick={destroyChannel}
              size="small"
              variant="danger"
            >
              Delete Channel
            </Button>
          )}
        </ItemHV2>
      )}

      {isChannelExpired && (
        <ItemVV2 alignItems="flex-start">
          <SectionDes margin="25px 0 0 0">
            <SpanV2 color="#D53A94">Note:</SpanV2> Channel will auto delete on{' '}
            <SpanV2 fontWeight="600">{channelAutomaticExpiryDate}</SpanV2>
          </SectionDes>
        </ItemVV2>
      )}

      <ItemVV2 alignItems="flex-start">
        <SectionDes>{channelDetails.info}</SectionDes>
      </ItemVV2>

      {canVerify && (
        <AdaptiveMobileItemVV2
          alignItems="flex-start"
          padding="5px 0px"
        >
          <SectionDate>
            <Verified>
              <span>verified by:</span>
              <VerifyingIcon src={verifyingChannel.icon}></VerifyingIcon>
              <VerifyingName>{verifyingChannel.name}</VerifyingName>
            </Verified>
          </SectionDate>
        </AdaptiveMobileItemVV2>
      )}

      {processingState === 0 && (
        <ItemVV2>
          <Section>
            <DelegateContainer
              flex="5"
              minWidth="280px"
              self="stretch"
              align="stretch"
              margin="10px 0px 30px 0px"
              radius={'20px'}
              border="1px solid #D4DCEA"
            >
              <ChannelInfoHeader
                title="Notification Settings"
                description="Customize notification preferences for users"
                Button={<ManageSettingsButton onClick={navigateToNotifSettings} />}
              />
              <ChannelInfoList
                account={account}
                isAddress={false}
                items={channelSettings[account]}
                isLoading={false}
                onClickEmptyListButton={navigateToNotifSettings}
                emptyListButtonTitle="Add Setting"
              />
            </DelegateContainer>
          </Section>
          <Section>
            <DelegateContainer
              flex="5"
              minWidth="280px"
              self="stretch"
              align="stretch"
              margin="10px 0px 30px 0px"
              radius={'20px'}
              border="1px solid #D4DCEA"
            >
              <ChannelInfoHeader
                title="Channel Delegates"
                description="Delegates can send notifications on behalf of the channel"
                Button={<AddDelegateButton onClick={handleDelegateModal} />}
              />
              <ChannelInfoList
                account={account}
                isAddress={true}
                items={delegateeList}
                isLoading={false}
                addressDropdownOptions={[
                  {
                    text: 'Remove',
                    onClick: removeDelegate,
                    icon: <MdRemoveCircleOutline />,
                  },
                ]}
              />
            </DelegateContainer>
          </Section>
        </ItemVV2>
      )}
      {/* modal to add a delegate */}
      <AddDelegateModalComponent
        InnerComponent={AddDelegateModalContent}
        onConfirm={addDelegate}
        toastObject={addDelegateToast}
        modalPosition={MODAL_POSITION.ON_ROOT}
      />
    </ItemVV2>
  );
}

const AdaptiveMobileItemVV2 = styled(ItemVV2)`
  @media (max-width: 767px) {
    align-items: center;
  }
`;

const AdaptiveMobileItemHV2 = styled(ItemHV2)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const AdaptiveMobileItemHV22 = styled(ItemHV2)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const ImageSection = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${device.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`;

const VerifyImage = styled.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`;

const VerifyingIcon = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`;

const VerifyingName = styled.div``;

const Subscribers = styled.div`
  width: 58px;
  height: 26px;
  background: #ffdbf0;
  color: #cf1c84;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px;
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
  font-family: FK Grotesk Neu, Source Sans Pro;
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

const AliasStateText = styled(StateText)`
  color: #e3b61c;
  background-color: #e9eec4;
  &::before {
    width: 16px;
    height: 16px;
    background: #e3b61c;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
  }
`;

const SubscribersCount = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  // color: #657795;
  color: ${(props) => props.theme.default.secondaryColor};
  margin-top: 10px;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

const Verified = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`;

const ChannelName = styled.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  margin-top: 12px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  text-align: center;
  color: ${(props) => props.theme.color};
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
  }
`;

const SectionDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: normal;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const SectionDes = styled.div`
  text-transform: none;
  font-family: FK Grotesk Neu, Source Sans Pro;
  // color: #657795;
  color: ${(props) => props.theme.default.secondaryColor};
  margin: ${(props) => (props.margin ? props.margin : '24px 0px')};
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
    font-weight: 300;
    margin-top: 10px;
    width: 100%;
    margin: 10px 0px 10px 0px;
    padding: 0 0 0 0;
  }
`;

const DelegateContainer = styled(Item)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${(props) => props.theme.default.borderColor};
`;
