import React from "react";
import ReactGA from "react-ga";
import styled,{useTheme} from "styled-components";
import { envConfig } from "@project/contracts";
import GLOBALS, { device } from "config/Globals";
import SendNotifications from "components/SendNotifications";
import { Section } from "primaries/SharedStyling";
import  { Navigate } from 'react-router-dom'


export const ALLOWED_CORE_NETWORK = envConfig.coreContractChain; //chainId of network which we have deployed the core contract on


// Create Header
function SendNotifsModule() {
  ReactGA.pageview("/channel_dashboard");


  const [controlAt, setControlAt] = React.useState(2);
  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(true);
  const [channelAdmin, setChannelAdmin] = React.useState(true);

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

 
  //   (async ()=>{
  //     if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider) return;
  //     // Reset when account refreshes
  //     setChannelAdmin(false);
  //     dispatch(setUserChannelDetails('unfetched'));
  //     setAdminStatusLoaded(false);
  //     userClickedAt(INITIAL_OPEN_TAB);
  //     setChannelJson([]);
  
  //     // EPNS Read Provider Set
  //     if (epnsReadProvider != null && epnsCommReadProvider != null) {
  //       await checkUserForAlias();
  //       await checkUserForChannelOwnership();
  //       fetchDelegators();
  //     }
  //   })()
  // }, [epnsReadProvider, epnsCommReadProvider, epnsWriteProvider]);

  // handle user action at control center
  // const userClickedAt = (controlIndex) => {
  //   setControlAt(controlIndex);
  // };

  // fetch all the channels who have delegated to this account
  // const fetchDelegators = () => {
  //   postReq("/channels/delegatee/getChannels", {
  //     delegateAddress: account,
  //     blockchain: blockchainName[chainId],
  //     op: "read",
  //   })
  //     .then(async ({ data: delegators }) => {
  //       // if there are actual delegators
  //       // fetch basic information abouot the channels and store it to state
  //       if (delegators && delegators.channelOwners) {
  //         const channelInformationPromise = [
  //           ...new Set([account, ...delegators.channelOwners])//make the accounts unique
  //         ].map((channelAddress) => {
  //           return ChannelsDataStore.instance
  //             .getChannelJsonAsync(channelAddress)
  //             .then((res) => ({ ...res, address: channelAddress }))
  //             .catch(() => false)
  //         }
  //         );
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

  // Check if a user is a channel or not
  // const checkUserForChannelOwnership = async () => {
  //   if (channelDetails != 'unfetched') return;
  //   if (!onCoreNetwork && aliasEthAccount == null) {
  //     setChannelAdmin(false);
  //     setAdminStatusLoaded(true);
  //     return;
  //   }
  //   // Check if account is admin or not and handle accordingly
  //   const ownerAccount = !onCoreNetwork ? aliasEthAccount : account;
  //   console.log(ownerAccount);
  //   EPNSCoreHelper.getChannelJsonFromUserAddress(ownerAccount, epnsReadProvider)
  //     .then(async (response) => {
  //       // if channel admin, then get if the channel is verified or not, then also fetch more details about the channel
  //       const verificationStatus = await epnsWriteProvider.getChannelVerfication(
  //           ownerAccount
  //         );
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
  //       setChannelJson(response);
  //       setChannelAdmin(true);
  //       setAdminStatusLoaded(true);
  //     })
  //     .catch((err) => {
  //       console.log(
  //         "There was an error [checkUserForChannelOwnership]:",
  //         err.message
  //       );
  //       setChannelAdmin(false);
  //       setAdminStatusLoaded(true);
  //     })
  //     .finally(() => {
  //       setAdminStatusLoaded(true);
  //     });
  // };

    // // Check if a user is a channel or not
    // const checkUserForAlias = async () => {
    //   // Check if account is admin or not and handle accordingly
    //   const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
    //   await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
    //     if (data) {
    //       setAliasEthAccount(data.channel);
    //       setAliasVerified(data.is_alias_verified);
    //     }
    //     return data;
    //   });
    // };

  // Render
  return (
    <Container>
      {controlAt === 2 && adminStatusLoaded ? 
        <>
        {/* redirect if not admin */}
        {!channelAdmin && <Navigate replace to="/dashboard" /> }
        {channelAdmin && <SendNotifications/>}
        </>
        : 
        <ChannelLoadingMessage>
          Channel details are being loaded, please wait…
        </ChannelLoadingMessage>
      }
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
const ChannelLoadingMessage = styled.div`
  width: 100%;
  padding: 40px;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  color: ${props => props.theme.color};
`


// Export Default
export default SendNotifsModule;