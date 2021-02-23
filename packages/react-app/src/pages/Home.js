import React from "react";
import ReactGA from 'react-ga';

import styled, { css } from 'styled-components';

import { addresses, abis } from "@project/contracts";
import { useWeb3React } from '@web3-react/core'
import { ethers } from "ethers";

import Loader from 'react-loader-spinner'

import EPNSCoreHelper from 'helpers/EPNSCoreHelper';

import Feedbox from 'segments/Feedbox';
import ViewChannels from 'segments/ViewChannels';
import Info from "segments/Info";
import ChannelOwnerDashboard from 'segments/ChannelOwnerDashboard';
import ChannelCreationDashboard from 'segments/ChannelCreationDashboard';

import ChannelsDataStore, { ChannelEvents } from "singletons/ChannelsDataStore";
import UsersDataStore, { UserEvents } from "singletons/UsersDataStore";


// Create Header
function Home({ setBadgeCount, bellPressed }) {
  ReactGA.pageview('/home');

  const { active, error, account, library, chainId } = useWeb3React();

  const [epnsReadProvider, setEpnsReadProvider] = React.useState(null);
  const [epnsWriteProvider, setEpnsWriteProvider] = React.useState(null);

  const [controlAt, setControlAt] = React.useState(0);
  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(false);
  const [channelAdmin, setChannelAdmin] = React.useState(false);
  const [channelJson, setChannelJson] = React.useState([]);



  React.useEffect(() => {
    const contractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, library);
    setEpnsReadProvider(contractInstance);

    if (!!(library && account)) {
      let signer = library.getSigner(account);
      const signerInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);
      setEpnsWriteProvider(signerInstance);
    }

  }, [account]);

  React.useEffect(() => {
    // Reset when account refreshes
    setChannelAdmin(false);
    setAdminStatusLoaded(false);
    userClickedAt(1);
    setChannelJson([]);

    // EPNS Read Provider Set
    if (epnsReadProvider != null) {
      // Instantiate Data Stores
      UsersDataStore.instance.init(account, epnsReadProvider);
      ChannelsDataStore.instance.init(account, epnsReadProvider);

      checkUserForChannelRights();
    }

  }, [epnsReadProvider]);


  // Revert to Feedbox on bell pressed
  React.useEffect(() => {
    setControlAt(0);
  }, [bellPressed]);

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
  }

  //Start Listening...
  const listenerForChannelRights = async () => {
    ChannelsDataStore.instance.addCallbacks(
      ChannelEvents.ADD_CHANNEL_SELF,
      "FromCreateChannel",
      () => {
        checkUserForChannelRights();
      }
    );
  }

  // Check if a user is a channel or not
  const checkUserForChannelRights = async () => {
    // Check if account is admin or not and handle accordingly
    EPNSCoreHelper.getChannelJsonFromUserAddress(account, epnsReadProvider)
      .then(response => {
        console.log(response);
        setChannelJson(response);
        setChannelAdmin(true);
        setAdminStatusLoaded(true);
      })
      .catch(e => {
        setChannelAdmin(false);
        setAdminStatusLoaded(true);
      });

    // Start listening
    listenerForChannelRights();
  }

  // Render
  return (
    <Container>
      <Controls>
        <ControlButton index={0} active={controlAt == 0 ? 1 : 0} border="#e20880"
          onClick={() => {
            userClickedAt(0)
          }}
        >
          <ControlImage src="./svg/feedbox.svg" active={controlAt == 0 ? 1 : 0} />
          <ControlText active={controlAt == 0 ? 1 : 0}>Feedbox</ControlText>
        </ControlButton>

        <ControlButton index={1} active={controlAt == 1 ? 1 : 0} border="#35c5f3"
          onClick={() => {
            userClickedAt(1)
          }}
        >
          <ControlImage src="./svg/channel.svg" active={controlAt == 1 ? 1 : 0}/>
          <ControlText active={controlAt == 1 ? 1 : 0}>Channels</ControlText>
        </ControlButton>

        <ControlButton index={2} active={controlAt == 2 ? 1 : 0} border="#674c9f"
          disabled={!adminStatusLoaded}
          onClick={() => {
            if (adminStatusLoaded) {
              userClickedAt(2)
            }
          }}
        >
          {!adminStatusLoaded &&
            <Loader
               type="Oval"
               color="#674c9f"
               height={32}
               width={32}
            />
          }
          {channelAdmin && adminStatusLoaded &&
            <ControlChannelContainer>
              <ControlChannelImage src={`${channelJson.icon}`} active={controlAt == 2 ? 1 : 0}/>
              <ControlChannelText active={controlAt == 2 ? 1 : 0}>{channelJson.name}</ControlChannelText>
            </ControlChannelContainer>
          }
          {!channelAdmin && adminStatusLoaded &&
            <>
              <ControlImage src="./svg/channeladmin.svg" active={controlAt == 2 ? 1 : 0}/>
              <ControlText active={controlAt == 2 ? 1 : 0}>Create Your Channel</ControlText>
            </>
          }
        </ControlButton>

        <ControlButton index={3} active={controlAt == 3 ? 1 : 0} border="#e20880"
          onClick={() => {
            userClickedAt(3)
          }}
        >
          <ControlImage src="./svg/share.svg" active={controlAt == 3 ? 1 : 0} />
          <ControlText active={controlAt == 3 ? 1 : 0}>Receive Notifs</ControlText>
        </ControlButton>
      </Controls>
      <Interface>
        {controlAt == 0 &&
          <Feedbox
            epnsReadProvider={epnsReadProvider}
          />
        }
        {controlAt == 1 &&
          <ViewChannels
            epnsReadProvider={epnsReadProvider}
            epnsWriteProvide={epnsWriteProvider}
          />
        }
        {controlAt == 2 && !channelAdmin && adminStatusLoaded &&
          <ChannelCreationDashboard />
        }
        {controlAt == 2 && channelAdmin && adminStatusLoaded &&
          <ChannelOwnerDashboard />
        }
        {controlAt == 3 &&
          <Info/>
        }
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
`

const Controls = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ControlButton = styled.div`
  flex: 1 1 21%;
  height: 120px;
  min-width: 200px;
  background: #fff;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225,225,225);

  border-bottom: 10px solid rgb(180,180,180);
  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 10px solid ${(props) => props.active ? props.border : "rgb(180,180,180)"};

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
`

const ControlImage = styled.img`
  height: 30%;
  margin-right: 15px;
  filter: ${(props) => props.active ? "brightness(1)" : "brightness(0)"};
  opacity: ${(props) => props.active ? "1" : "0.25"};

  transition: transform .2s ease-out;
  ${ props => props.active && css`
    transform: scale(3.5) translate(-20px, 0px);
    opacity: 0.4;
  `};
`

const ControlText = styled.label`
  font-size: 16px;
  font-weight: 200;
  opacity: ${(props) => props.active ? "1" : "0.75"};

  transition: transform .2s ease-out;
  ${ props => props.active && css`
    transform: scale(1.3) translate(-10px, 0px);
  `};
`

const ControlChannelContainer = styled.div`
  margin: 0px 20px;
  flex-direction: column;
  align-items: center;
  display: flex;
`

const ControlChannelImage = styled.img`
    width: 20%;
    margin-bottom: 10px;
    transition: transform .2s ease-out;
    ${ props => props.active && css`
      transform: scale(3.5) translate(-40px, 5px);
      opacity: 0.2;
      z-index: 1;
    `};
`

const ControlChannelText = styled.label`
  font-size: 16px;
  font-weight: 300;
  opacity: ${(props) => props.active ? "1" : "0.75"};
  transition: transform .2s ease-out;
  background: -webkit-linear-gradient(#db268a, #34c6f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
  ${ props => props.active && css`
    transform: scale(1.1) translate(0px, -20px);
  `};

`

const Interface = styled.div`
  flex: 1;
  display: flex;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid rgb(225,225,225);

  margin: 15px;
  overflow: hidden;
`

// Export Default
export default Home;
