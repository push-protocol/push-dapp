// React + Web3 Essentials
import React from 'react';
import ReactGA from 'react-ga';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import ChannelLoading from 'components/ChannelLoading';
import NotificationToast from 'primaries/NotificationToast';
import { Section } from 'primaries/SharedStyling';
import ChannelOwnerDashboard from 'segments/ChannelOwnerDashboard';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';

export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain; //chainId of network which we have deployed the core contract on

// Create Header
function ChannelDashboardModule() {
  ReactGA.pageview('/channel_dashboard');

  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(true);

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);
  // toast related section

  //   if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider || channelDetails !== 'unfetched')
  //     return;
  //   // Reset when account refreshes
  //   // dispatch(setUserChannelDetails('unfetched'));
  //   setAdminStatusLoaded(false);

  //   // Push (EPNS) Read Provider Set
  //   if (epnsReadProvider != null && epnsCommReadProvider != null) {
  //     if (!onCoreNetwork) await checkUserForEthAlias();
  //     else await checkUserForAlias();

  //     await checkUserForChannelOwnership();

  //     if (delegatees === null)
  //       fetchDelegators();
  //   }
  // }, [epnsReadProvider, epnsCommReadProvider, epnsWriteProvider, aliasEthAddr]);

  // // fetch all the channels who have delegated to this account
  // const fetchDelegators = () => {
  //   const channelAddressInCaip = convertAddressToAddrCaip(account, chainId);
  //   getReq(`/channels/_getUserDelegations/${channelAddressInCaip}`)
  //     .then(async ({ data: delegators }) => {
  //       // if there are actual delegators
  //       // fetch basic information abouot the channels and store it to state
  //       if (delegators && delegators.channelOwners) {
  //         const channelInformationPromise = [
  //           ...new Set([account, ...delegators.channelOwners]), //make the accounts unique
  //         ].map((channelAddress) => {
  //           return ChannelsDataStore.instance
  //             .getChannelJsonAsync(channelAddress)
  //             .then((res) => ({ ...res, address: channelAddress }))
  //             .catch(() => false);
  //         });
  //         const channelInformation = await Promise.all(
  //           channelInformationPromise
  //         );
  //         dispatch(setDelegatees(channelInformation.filter(Boolean)));
  //         // fetch the json information about this delegatee channel and add to global state
  //       } else {
  //         dispatch(setDelegatees([]));
  //       }
  //     })
  //     .catch(async (err) => {
  //       console.log({ err });
  //     });
  // };

  // // Check if a user is a channel or not
  // const checkUserForChannelOwnership = async () => {
  //   if (channelDetails != 'unfetched') return;
  //   if (!onCoreNetwork && aliasEthAddr == null) {
  //     setChannelAdmin(false);
  //     setAdminStatusLoaded(true);
  //     return;
  //   }
  //   // Check if account is admin or not and handle accordingly
  //   const ownerAccount = !onCoreNetwork ? aliasEthAddr : account;
  //   EPNSCoreHelper.getChannelJsonFromUserAddress(ownerAccount, epnsReadProvider)
  //     .then(async (response) => {
  //       // if channel admin, then get if the channel is verified or not, then also fetch more details about the channel
  //       const verificationStatus = await epnsWriteProvider.getChannelVerfication(
  //         ownerAccount
  //       );
  //       const channelJson = await epnsWriteProvider.channels(ownerAccount);
  //       const channelSubscribers = await ChannelsDataStore.instance.getChannelSubscribers(
  //         account
  //       );
  //       dispatch(
  //         setUserChannelDetails({
  //           ...response,
  //           ...channelJson,
  //           subscribers: channelSubscribers,
  //         })
  //       );
  //       dispatch(setCanVerify(Boolean(verificationStatus)));
  //       setAdminStatusLoaded(true);
  //     })
  //     .catch((err) => {
  //       console.log(
  //         "There was an error [checkUserForChannelOwnership]:",
  //         err.message
  //       );
  //       setAdminStatusLoaded(true);
  //     })
  //     .finally(() => {
  //       setAdminStatusLoaded(true);
  //     });
  // };

  // const checkUserForEthAlias = async () => {
  //   const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
  //   await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
  //     if (data) {
  //       dispatch(setAliasEthAddress(data.channel));
  //       dispatch(setAliasVerified(data.is_alias_verified));
  //       dispatch(setProcessingState(0));
  //     }
  //     return data;
  //   });
  // };

  // const checkUserForAlias = async () => {
  //   let { aliasAddress, isAliasVerified } = await ChannelsDataStore.instance.getChannelDetailsFromAddress(account);
  //   if (aliasAddress == "NULL") aliasAddress = null;

  //   if (aliasAddress)
  //     dispatch(setAliasAddress(aliasAddress));
  //   dispatch(setAliasVerified(isAliasVerified));
  //   dispatch(setProcessingState(0));
  // }

  // Render
  return (
    <Container>
      {adminStatusLoaded ? <ChannelOwnerDashboard /> : <ChannelLoading />}
      {toast && <NotificationToast notification={toast} clearToast={clearToast} />}
    </Container>
  );
}

// css style
const Container = styled(Section)`
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.HUGE} - ${GLOBALS.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.HUGE};
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
    );
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;

// Export Default
export default ChannelDashboardModule;
