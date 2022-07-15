import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { envConfig } from "@project/contracts";
import { useWeb3React } from "@web3-react/core";

import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import NotificationToast from "primaries/NotificationToast";
import ChannelOwnerDashboard from "segments/ChannelOwnerDashboard";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import { postReq } from "api";
import {
  setPushAdmin,
} from "redux/slices/contractSlice";
import {
  setUserChannelDetails,
  setCanVerify,
  setDelegatees,
} from "redux/slices/adminSlice";

export const ALLOWED_CORE_NETWORK = envConfig.coreContractChain; //chainId of network which we have deployed the core contract on

const blockchainName = {
  1: "ETH_MAINNET",
  137: "POLYGON_MAINNET",
  42: "ETH_TEST_KOVAN",
  80001: "POLYGON_TEST_MUMBAI",
};

// Create Header
function ChannelDashboardPage() {
  ReactGA.pageview("/channel_dashboard");

  const dispatch = useDispatch();
  const { account, chainId } = useWeb3React();
  const {
    epnsReadProvider,
    epnsWriteProvider,
    epnsCommReadProvider,
  } = useSelector((state) => state.contracts);

  const { delegatees } = useSelector((state) => state.admin);

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(false);
  const [aliasEthAccount, setAliasEthAccount] = React.useState(null);

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

  /**
   * When we instantiate the contract instances, fetch basic information about the user
   * Corresponding channel owned.
   */
  React.useEffect(async () => {
    if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider) return;
    // Reset when account refreshes
    dispatch(setUserChannelDetails(null));
    setAdminStatusLoaded(false);
    // save push admin to global state
    epnsReadProvider.pushChannelAdmin()
      .then((response) => {
        dispatch(setPushAdmin(response));
      })
      .catch(err => {
        console.log({ err })
      });

    // EPNS Read Provider Set
    if (epnsReadProvider != null && epnsCommReadProvider != null) {
      await checkUserForAlias();
      await checkUserForChannelOwnership();

      if (delegatees === null)
        fetchDelegators();
    }
  }, [epnsReadProvider, epnsCommReadProvider, epnsWriteProvider]);

  // fetch all the channels who have delegated to this account
  const fetchDelegators = () => {
    postReq("/channels/delegatee/get_channels", {
      delegateAddress: account,
      blockchain: blockchainName[chainId],
      op: "read",
    })
      .then(async ({ data: delegators }) => {
        // if there are actual delegators
        // fetch basic information abouot the channels and store it to state
        if (delegators && delegators.channelOwners) {
          const channelInformationPromise = [
            ...new Set([account, ...delegators.channelOwners])//make the accounts unique
          ].map((channelAddress) => {
            return ChannelsDataStore.instance
              .getChannelJsonAsync(channelAddress)
              .then((res) => ({ ...res, address: channelAddress }))
              .catch(() => false)
          }
          );
          const channelInformation = await Promise.all(
            channelInformationPromise
          );
          dispatch(setDelegatees(channelInformation.filter(Boolean)));
          // fetch the json information about this delegatee channel and add to global state
        } else {
          dispatch(setDelegatees([]));
        }
      })
      .catch(async (err) => {
        console.log({ err });
      });
  };

  // Check if a user is a channel or not
  const checkUserForChannelOwnership = async () => {
    if (!onCoreNetwork && aliasEthAccount == null) {
      setAdminStatusLoaded(true);
      return;
    }
    // Check if account is admin or not and handle accordingly
    const ownerAccount = !onCoreNetwork ? aliasEthAccount : account;
    EPNSCoreHelper.getChannelJsonFromUserAddress(ownerAccount, epnsReadProvider)
      .then(async (response) => {
        // if channel admin, then get if the channel is verified or not, then also fetch more details about the channel
        const verificationStatus = await epnsWriteProvider.getChannelVerfication(
            ownerAccount
          );
        const channelJson = await epnsWriteProvider.channels(ownerAccount);
        const channelSubscribers = await ChannelsDataStore.instance.getChannelSubscribers(
          account
        );
        dispatch(
          setUserChannelDetails({
            ...response,
            ...channelJson,
            subscribers: channelSubscribers,
          })
        );
        dispatch(setCanVerify(Boolean(verificationStatus)));
        setAdminStatusLoaded(true);
      })
      .catch((err) => {
        console.log(
          "There was an error [checkUserForChannelOwnership]:",
          err.message
        );
        setAdminStatusLoaded(true);
      })
      .finally(() => {
        setAdminStatusLoaded(true);
      });
  };

  // Check if a user is a channel or not
  const checkUserForAlias = async () => {
    // Check if account is admin or not and handle accordingly
    await postReq("/channels/get_eth_address", {
      aliasAddress: account,
      op: "read",
    }).then(({ data }) => {
      console.log({ data });
      const ethAccount = data;
      if (ethAccount) {
        setAliasEthAccount(ethAccount.ethAddress);
      }
      return data;
    });
  };

  // Render
  return (
    <Container>
      <Interface>
        {adminStatusLoaded ? 
            <ChannelOwnerDashboard />
          : 
            <ChannelLoadingMessage>
              Channel details are being loaded, please wait…
            </ChannelLoadingMessage>
        }
        {toast && (
          <NotificationToast notification={toast} clearToast={clearToast} />
        )}
      </Interface>
    </Container>
  );
}

// css style
const ChannelLoadingMessage = styled.div`
width: 100%;
/* background-color: red; */
padding: 40px;
font-size: 1.5em;
font-weight: 300;
text-align: center;
color: ${props => props.theme.color};
`

const Container = styled.div`
  flex: 1;
  display: block;
  flex-direction: column;
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;

// Export Default
export default ChannelDashboardPage;