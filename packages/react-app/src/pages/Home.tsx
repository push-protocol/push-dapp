import React from "react";
import styled, { css } from 'styled-components';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

import ChannelPreview from 'components/ChannelPreview';

// Create Header
function Home({ setBadgeCount, bellPressed }) {
  const { active, error, account, library, chainId } = useWeb3React();

  const [controlAt, setControlAt] = React.useState(0);
  const [channelAdmin, setChannelAdmin] = React.useState(false);

  React.useEffect(() => {
    // Reset when account refreshes
    setChannelAdmin(false);
    userClickedAt(0);

    // Other stuff as well

  }, [account]);

  // Revert to Feedbox on bell pressed
  React.useEffect(() => {
    setControlAt(0);
  }, [bellPressed]);

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
  }

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
          onClick={() => {
            userClickedAt(2)
          }}
        >
          {channelAdmin &&
            <ChannelPreview />
          }
          {!channelAdmin &&
            <>
              <ControlImage src="./svg/channeladmin.svg" active={controlAt == 2 ? 1 : 0}/>
              <ControlText active={controlAt == 2 ? 1 : 0}>Create Your Channel</ControlText>
            </>
          }
        </ControlButton>
      </Controls>
      <Interface>
      </Interface>
    </Container>
  );
}

// css styles
const Container = styled.div`
  flex: 1;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
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
  flex: 1 1 25%;
  height: 120px;
  min-width: 240px;
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
    transform: scale(1.5) translate(-10px, 0px);
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
