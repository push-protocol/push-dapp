import React from "react";
import ReactGA from "react-ga";
import { ethers } from "ethers";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import hex2ascii from "hex2ascii";
import { addresses, abis, envConfig } from "@project/contracts";
import { useWeb3React } from "@web3-react/core";

import config from "config";
import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import NotificationToast from "components/NotificationToast";
import AliasVerificationodal from "components/AliasVerificationModal";
import Info from "segments/Info";
import SpamBox from "segments/spam";
import Feedbox from "segments/Feedbox";
import ViewChannels from "segments/ViewChannels";
import ChannelOwnerDashboard from "segments/ChannelOwnerDashboard";
import ChannelCreationDashboard from "segments/ChannelCreationDashboard";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import UsersDataStore from "singletons/UsersDataStore";
import { postReq } from "api";
import {
  setCoreReadProvider,
  setCoreWriteProvider,
  setCommunicatorReadProvider,
  setCommunicatorWriteProvider,
  setPushAdmin,
} from "redux/slices/contractSlice";
import {
  setUserChannelDetails,
  setCanVerify,
  setDelegatees,
} from "redux/slices/adminSlice";
import { addNewNotification, toggleToggler, resetState } from "redux/slices/notificationSlice";

export const ALLOWED_CORE_NETWORK = envConfig.coreContractChain; //chainId of network which we have deployed the core contract on
const CHANNEL_TAB = 1; //Default to 1 which is the channel tab

// Create Header
function Home() {
  ReactGA.pageview("/home");

  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();
  const {
    epnsReadProvider,
    epnsWriteProvider,
    epnsCommReadProvider,
  } = useSelector((state) => state.contracts);

  const onCoreNetwork = ALLOWED_CORE_NETWORK === chainId;
  const INITIAL_OPEN_TAB = CHANNEL_TAB; //if they are not on a core network.redirect then to the notifications page

  const [controlAt, setControlAt] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(false);
  const [aliasEthAccount, setAliasEthAccount] = React.useState(null);
  const [aliasVerified, setAliasVerified] = React.useState(null); // null means error, false means unverified and true means verified
  const [channelAdmin, setChannelAdmin] = React.useState(false);
  const [channelJson, setChannelJson] = React.useState([]);

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);
  const showNetworkToast = () => {
    showToast({
      notificationTitle: (
        <span style={{ color: "#e20880" }}> Invalid Network </span>
      ),
      notificationBody:
        "Please connect to the Kovan network to access channels",
    });
  };

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);
  // toast related section

  React.useEffect(() => {
    dispatch(resetState());
    setTimeout(() => dispatch(toggleToggler()), 300)
  }, [account]);

  /**
   * Logic to get channel alias and alias verification status as well as create instances of core and comunicator contract
   */
  React.useEffect(() => {
    (async function init() {
      const coreProvider = onCoreNetwork
        ? library
        : ethers.getDefaultProvider(ALLOWED_CORE_NETWORK, {
            etherscan: config.etherscanToken,
          });
      // if we are not on the core network then check for if this account is an alias for another channel
      if (!onCoreNetwork) {
        // get the eth address of the alias address, in order to properly render information about the channel
        const aliasEth = await postReq("/channels/get_eth_address", {
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
        if (aliasEth) {
          // if an alias exists, check if its verified.
          await postReq("/channels/get_alias_verification_status", {
            aliasAddress: account,
            op: "read",
          }).then(({ data }) => {
            // if it returns undefined then we need to let them know to verify their channel
            if (!data) {
              setAliasVerified(false);
              return;
            }
            const { status } = data;
            setAliasVerified(status || null);
            return data;
          });
        }
      }
      // if we are not on the core network then fetch if there is an alias address from the api
      // inititalise the read contract for the core network
      const coreContractInstance = new ethers.Contract(
        addresses.epnscore,
        abis.epnscore,
        coreProvider
      );
      // initialise the read contract for the communicator function
      const commAddress = onCoreNetwork
        ? addresses.epnsEthComm
        : addresses.epnsPolyComm;
      const commContractInstance = new ethers.Contract(
        commAddress,
        abis.epnsComm,
        library
      );
      dispatch(setCommunicatorReadProvider(commContractInstance));
      dispatch(setCoreReadProvider(coreContractInstance));
      // initialise the read contract for the communicator function
      if (!!(library && account)) {
        let signer = library.getSigner(account);
        const coreSignerInstance = new ethers.Contract(
          addresses.epnscore,
          abis.epnscore,
          signer
        );
        const communicatorSignerInstance = new ethers.Contract(
          commAddress,
          abis.epnsComm,
          signer
        );
        dispatch(setCoreWriteProvider(coreSignerInstance));
        dispatch(setCommunicatorWriteProvider(communicatorSignerInstance));
      }
    })();
  }, [account, chainId]);

  /**
   * When we instantiate the contract instances, fetch basic information about the user
   * Corresponding channel owned.
   */
  React.useEffect(() => {
    if (!epnsReadProvider || !epnsCommReadProvider) return;
    // Reset when account refreshes
    setChannelAdmin(false);
    dispatch(setUserChannelDetails(null));
    setAdminStatusLoaded(false);
    userClickedAt(INITIAL_OPEN_TAB);
    setChannelJson([]);
    // save push admin to global state
    epnsReadProvider.pushChannelAdmin().then((response) => {
      dispatch(setPushAdmin(response));
    });

    // EPNS Read Provider Set
    if (epnsReadProvider != null && epnsCommReadProvider != null) {
      // Instantiate Data Stores
      UsersDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider
      );
      ChannelsDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider
      );
      checkUserForChannelOwnership();
      fetchDelegators();
    }
  }, [epnsReadProvider, epnsCommReadProvider]);

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
  };

  // fetch all the channels who have delegated to this account
  const fetchDelegators = () => {
    postReq("/channels/delegatee/get_channels", {
      delegateAddress: account,
      op: "read",
    })
      .then(async ({ data: delegators }) => {
        // if there are actual delegators
        // fetch basic information abouot the channels and store it to state
        if (delegators && delegators.channelOwners) {
          const channelInformationPromise = [
            ...new Set([account, ...delegators.channelOwners])//make the accounts unique
          ].map((channelAddress) =>
            ChannelsDataStore.instance
              .getChannelJsonAsync(channelAddress)
              .then((res) => ({ ...res, address: channelAddress }))
              .catch(() => false)
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
          ownerAccount
        );
        dispatch(
          setUserChannelDetails({
            ...response,
            ...channelJson,
            subscribers: channelSubscribers,
          })
        );
        dispatch(setCanVerify(Boolean(verificationStatus)));
        setChannelJson(response);
        setChannelAdmin(true);
        setAdminStatusLoaded(true);
      })
      .catch((err) => {
        console.log(
          "There was an error [checkUserForChannelOwnership]:",
          err.message
        );
        setChannelAdmin(false);
        setAdminStatusLoaded(true);
      })
      .finally(() => {
        setAdminStatusLoaded(true);
      });
  };

  // Render
  return (
    <Container>
      <Controls>
        <ControlButton
          index={0}
          active={controlAt == 0 ? 1 : 0}
          border="#e20880"
          onClick={() => {
            userClickedAt(0);
          }}
        >
          <ControlImage
            src="./svg/feedbox.svg"
            active={controlAt == 0 ? 1 : 0}
          />
          <ControlText active={controlAt == 0 ? 1 : 0}>Inbox</ControlText>
        </ControlButton>

        <ControlButton
          index={1}
          active={controlAt == 1 ? 1 : 0}
          border="#35c5f3"
          onClick={() => {
            userClickedAt(1);
          }}
        >
          <ControlImage
            src="./svg/channel.svg"
            active={controlAt == 1 ? 1 : 0}
          />
          <ControlText active={controlAt == 1 ? 1 : 0}>Channels</ControlText>
        </ControlButton>

        <ControlButton
          index={2}
          active={controlAt == 2 ? 1 : 0}
          border="#674c9f"
          disabled={!adminStatusLoaded}
          onClick={() => {
            if (adminStatusLoaded) {
              // if youre not on kovan and you dont have a channel, you cannot create except on kovan, so throw error
              if (!channelAdmin && !onCoreNetwork) {
                return showNetworkToast();
              }
              if (channelAdmin && !aliasVerified && !onCoreNetwork) {
                return setModalOpen(true);
              }
              userClickedAt(2);
            }
          }}
        >
          {!adminStatusLoaded && (
            <Loader type="Oval" color="#674c9f" height={32} width={32} />
          )}
          {channelAdmin &&
            adminStatusLoaded &&
            (onCoreNetwork ? true : aliasVerified) && (
              <ControlChannelContainer>
                <ControlChannelImage
                  src={`${channelJson.icon}`}
                  active={controlAt == 2 ? 1 : 0}
                />
                <ControlChannelText active={controlAt == 2 ? 1 : 0}>
                  {channelJson.name}
                </ControlChannelText>
              </ControlChannelContainer>
            )}
          {channelAdmin &&
            adminStatusLoaded &&
            aliasVerified === false &&
            !onCoreNetwork && (
              <ControlChannelContainer>
                <ControlChannelImage
                  src={`${channelJson.icon}`}
                  active={controlAt == 2 ? 1 : 0}
                />
                <ControlChannelText active={controlAt == 2 ? 1 : 0}>
                  Verify channel alias
                </ControlChannelText>
              </ControlChannelContainer>
            )}
          {channelAdmin &&
            adminStatusLoaded &&
            aliasVerified === null &&
            !onCoreNetwork && (
              <ControlChannelContainer>
                <ControlChannelImage
                  src={`${channelJson.icon}`}
                  active={controlAt == 2 ? 1 : 0}
                />
                <ControlChannelText active={controlAt == 2 ? 1 : 0}>
                  Contact the admin
                </ControlChannelText>
              </ControlChannelContainer>
            )}
          {!channelAdmin && adminStatusLoaded && (
            <>
              <ControlImage
                src="./svg/channeladmin.svg"
                active={controlAt == 2 ? 1 : 0}
              />
              <ControlText active={controlAt == 2 ? 1 : 0}>
                Create Your Channel
              </ControlText>
            </>
          )}
        </ControlButton>

        <ControlButton
          index={3}
          active={controlAt == 3 ? 1 : 0}
          border="#e20880"
          onClick={() => {
            userClickedAt(3);
          }}
        >
          <ControlImage src="./svg/share.svg" active={controlAt == 3 ? 1 : 0} />
          <ControlText active={controlAt == 3 ? 1 : 0}>
            Receive Notifs
          </ControlText>
        </ControlButton>
      </Controls>
      <Interface>
        {controlAt == 0 && <Feedbox />}
        {controlAt == 1 && <ViewChannels />}
        {controlAt == 2 && adminStatusLoaded && <ChannelOwnerDashboard />}
        {controlAt == 3 && <Info />}
        {toast && (
          <NotificationToast notification={toast} clearToast={clearToast} />
        )}
        {modalOpen && (
          <AliasVerificationodal
            onClose={() => setModalOpen(false)}
            onSuccess={() => setAliasVerified(true)}
            verificationStatus={aliasVerified}
          />
        )}
      </Interface>
    </Container>
  );
}

// css style
const Container = styled.div`
  flex: 1;
  display: block;
  flex-direction: column;
  min-height: calc(100vh - 100px);
`;

const Controls = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ControlButton = styled.div`
  flex: 1 1 21%;
  height: 120px;
  min-width: 200px;
  background: #fff;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225, 225, 225);

  border-bottom: 10px solid rgb(180, 180, 180);
  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 10px solid
    ${(props) => (props.active ? props.border : "rgb(180,180,180)")};

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
`;

const ControlImage = styled.img`
  height: 30%;
  margin-right: 15px;
  filter: ${(props) => (props.active ? "brightness(1)" : "brightness(0)")};
  opacity: ${(props) => (props.active ? "1" : "0.25")};

  transition: transform 0.2s ease-out;
  ${(props) =>
    props.active &&
    css`
      transform: scale(3.5) translate(-20px, 0px);
      opacity: 0.4;
    `};
`;

const ControlText = styled.label`
  font-size: 16px;
  font-weight: 200;
  opacity: ${(props) => (props.active ? "1" : "0.75")};

  transition: transform 0.2s ease-out;
  ${(props) =>
    props.active &&
    css`
      transform: scale(1.3) translate(-10px, 0px);
    `};
`;

const ControlChannelContainer = styled.div`
  margin: 0px 20px;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const ControlChannelImage = styled.img`
  width: 20%;
  margin-bottom: 10px;
  transition: transform 0.2s ease-out;
  ${(props) =>
    props.active &&
    css`
      transform: scale(3.5) translate(-40px, 5px);
      opacity: 0.2;
      z-index: 1;
    `};
`;

const ControlChannelText = styled.label`
  font-size: 16px;
  font-weight: 300;
  opacity: ${(props) => (props.active ? "1" : "0.75")};
  transition: transform 0.2s ease-out;
  background: -webkit-linear-gradient(#db268a, #34c6f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
  ${(props) =>
    props.active &&
    css`
      transform: scale(1.1) translate(0px, -20px);
    `};
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid rgb(225, 225, 225);

  margin: 15px;
  overflow: hidden;
`;

// Export Default
export default Home;
