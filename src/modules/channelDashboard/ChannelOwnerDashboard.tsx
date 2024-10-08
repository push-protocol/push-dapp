// React + Web3 Essentials
import { useEffect, useState, useContext } from 'react';

// External Packages
import { useDispatch, useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { MdError } from 'react-icons/md';

// Internal Compoonents
import AliasProcessing from 'components/AliasProcessing';
import ChannelDetails from 'components/ChannelDetails';
import ChannelLoading from 'components/ChannelLoading';
import ChannelSettings from 'components/ChannelSettings';
import CreateChannelModule from '../createChannel/CreateChannelModule';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'blocks';
import { getAliasFromChannelDetails } from 'helpers/UtilityHelper';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import {
  setAliasAddress,
  setAliasAddressFromContract,
  setAliasChainId,
  setAliasVerified,
  setUserChannelDetails,
} from 'redux/slices/adminSlice';
import { setProcessingState } from 'redux/slices/channelCreationSlice';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import useToast from 'hooks/useToast';

// Internal Configs
import { appConfig } from 'config/index.js';
import EditChannel from 'modules/editChannel/EditChannel';
import useModalBlur from 'hooks/useModalBlur';
import { AppContext } from 'contexts/AppContext';
import { CreateChannel } from 'modules/createChannel';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { getChannelDetails } from 'queries';

// Constants
// interval after which alias details api will be called, in seconds
const ALIAS_API_CALL_INTERVAL: number = 10;

// interval id for calling search api
let intervalID = null;

// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const theme = useTheme();
  const { account, chainId, wallet } = useAccount();
  const {
    channelDetails,
    delegatees,
    aliasDetails: { aliasAddr, aliasEthAddr, isAliasVerified, aliasAddrFromContract },
  } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);
  const { epnsWriteProvider } = useSelector((state: any) => state.contracts);
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const { handleConnectWalletAndEnableProfile } = useContext(AppContext);

  const isChannelDetails = channelDetails && channelDetails !== 'unfetched';

  const destroyChannelToast = useToast();

  const dispatch = useDispatch();

  const [isChannelExpired, setIsChannelExpired] = useState<boolean>(false);
  const [channelDetailsLoading, setChannelDetailsLoading] = useState<boolean>(true);
  const [editChannel, setEditChannel] = useState<boolean>(false);

  const CORE_CHAIN_ID: number = appConfig.coreContractChain;
  const onCoreNetwork: boolean = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  useEffect(() => {
    if (!onCoreNetwork || !channelDetails || aliasAddrFromContract || channelDetails === 'unfetched') return;

    const aliasDetails = getAliasFromChannelDetails(channelDetails);
    if (aliasDetails) {
      const { address: aliasAddress, chainId: aliasChainId } = aliasDetails;
      dispatch(setAliasAddressFromContract(aliasAddress));
      dispatch(setAliasChainId(aliasChainId));
      // dispatch(setAliasAddress(aliasAddress));
    } else {
      dispatch(setProcessingState(0));
      // setChannelDetailsLoading(false);
    }
  }, [channelDetails, aliasAddrFromContract]);

  const fetchChannelDetails = async (address: string) => {
    let { alias_address = null, is_alias_verified = null } = await getChannelDetails({
      userPushSDKInstance,
      address: address,
    }).then((response) => response);
    if (alias_address == 'NULL') alias_address = null;

    return { aliasAddress: alias_address, aliasVerified: is_alias_verified };
  };

  useEffect(() => {
    if (!onCoreNetwork || !aliasAddrFromContract || processingState === 0) return;

    intervalID = setInterval(async () => {
      const { aliasAddress, aliasVerified } = await fetchChannelDetails(account);
      if (aliasAddress) {
        dispatch(setAliasAddress(aliasAddress));
        if (aliasVerified) {
          // setChannelDetailsLoading(false);
          dispatch(setAliasVerified(true));
          dispatch(setProcessingState(0));
        } else {
          // setChannelDetailsLoading(false);
          dispatch(setProcessingState(2));
          dispatch(setAliasVerified(false));
        }
      } else {
        if (processingState != 0 && processingState != 1) dispatch(setProcessingState(1));
        // setChannelDetailsLoading(false);
      }
    }, ALIAS_API_CALL_INTERVAL * 1000);
  }, [aliasAddrFromContract]);

  if (aliasAddr !== null) {
    clearInterval(intervalID);
  }

  const destroyChannel = async () => {
    try {
      destroyChannelToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
      const tx = await epnsWriteProvider.destroyTimeBoundChannel(account, {
        gasLimit: 1000000,
      });

      console.debug(tx);
      console.debug('Check: ' + account);
      await tx.wait();
      destroyChannelToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: `Successfully deleted the channel`,
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="green"
          />
        ),
      });
      dispatch(setUserChannelDetails(null));
    } catch (err) {
      console.error(err);
      if (err.code == 'ACTION_REJECTED') {
        // EIP-1193 userRejectedRequest error
        destroyChannelToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `User denied message signature.`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      } else {
        destroyChannelToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in deleting the channel`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      }
    }
  };

  const showEditChannel = () => {
    // if (!userPushSDKInstance.signer) {
    //   handleConnectWalletAndEnableProfile({wallet});
    //   return;
    // }
    setEditChannel(true);
  };

  const closeEditChannel = () => {
    setEditChannel(false);
  };

  //here the useModal hook is used to display Upload Logo Modal
  const {
    isModalOpen: isUploadLogoModalOpen,
    showModal: displayUplaodLogoModal,
    ModalComponent: UploadLogoComponent,
  } = useModalBlur();

  return (
    <ItemHV2>
      {(channelDetails === 'unfetched' || processingState === null) && <ChannelLoading />}

      {channelDetails !== 'unfetched' && (
        <ItemVV2
          justifyContent={processingState === 0 && 'flex-start'}
          height="fit-content"
        >
          {/* display the create channel page if there are no details */}
          {/* {!channelDetails && processingState === 0 && <CreateChannelModule />} */}
          {!channelDetails && processingState === 0 && <CreateChannel />}

          {isChannelDetails && processingState !== null && (
            <Container>
              {editChannel ? (
                <EditChannel
                  closeEditChannel={closeEditChannel}
                  UploadLogoComponent={UploadLogoComponent}
                  displayUplaodLogoModal={displayUplaodLogoModal}
                  isUploadLogoModalOpen={isUploadLogoModalOpen}
                />
              ) : (
                <>
                  {channelDetails && !isMobile && (
                    <ItemHV2
                      zIndex="1"
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
                  {channelDetails ? (
                    <ChannelDetails
                      isChannelExpired={isChannelExpired}
                      setIsChannelExpired={setIsChannelExpired}
                      showEditChannel={showEditChannel}
                      destroyChannel={destroyChannel}
                    />
                  ) : (
                    ''
                  )}
                </>
              )}
            </Container>
          )}

          {/* processing box */}
          {processingState !== 0 && processingState !== null && isChannelDetails && !editChannel && (
            <>
              <AliasProcessing
                aliasEthAccount={aliasEthAddr}
                setAliasVerified={setAliasVerified}
              />
            </>
          )}
        </ItemVV2>
      )}
    </ItemHV2>
  );
};

export default ChannelOwnerDashboard;

const Container = styled(ItemVV2)`
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}
    ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.HUGE} - ${GLOBALS.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;
