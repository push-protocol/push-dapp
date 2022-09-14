import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { envConfig } from "@project/contracts";

import GLOBALS, { device } from "config/Globals";

import { Section } from "primaries/SharedStyling";

import NotificationToast from "primaries/NotificationToast";
import ChannelOwnerDashboard from "segments/ChannelOwnerDashboard";
import ChannelLoading from "components/ChannelLoading";


export const ALLOWED_CORE_NETWORK = envConfig.coreContractChain; //chainId of network which we have deployed the core contract on

// Create Header
function ChannelDashboardModule() {
  ReactGA.pageview("/channel_dashboard");



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

  //   // EPNS Read Provider Set
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
      <Interface>
        {adminStatusLoaded ? <ChannelOwnerDashboard /> : <ChannelLoading />}
        {toast && (
          <NotificationToast notification={toast} clearToast={clearToast} />
        )}
      </Interface>
    </Container>
  );
}

// css style

const Container = styled(Section)`
    align-items: stretch;
    align-self: stretch;
	background: ${(props) => props.theme.mainBg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.MID};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
  max-width: 1200px;
	position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
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
