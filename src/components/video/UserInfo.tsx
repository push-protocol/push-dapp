// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';
import { shortenText } from 'helpers/UtilityHelper';

// Internal Configs
import { device } from 'config/Globals';

type UserInfoType = {
  pfp: any;
  address: string;
  username: string;
  status: 'Calling' | 'Call Ended' | 'Incoming Video Call';
  containerStyles?: {};
  fontColor?: string;
  source?: string;
};


const UserInfo = ({ pfp, username, address, status, containerStyles, fontColor, source }: UserInfoType) => {
  const { web3NameList }:AppContextType=React.useContext(AppContext);
  const web3Name=web3NameList[address]
  const shortnedAddress = shortenText(address,5);

  return (
    <Container style={containerStyles}>
      <PfpContainer source={source}>
        <ImageV2
          height="100%"
          alt={`Profile pic of ${username}`}
          src={pfp}
          objectFit="cover"
        />
      </PfpContainer>


      <InfoContainer source={source}>
        <ShortedAddress color={fontColor}>{web3Name ? web3Name : shortnedAddress}</ShortedAddress>
        <Status color={fontColor}>{status}</Status>
      </InfoContainer>
    </Container>
  );
};

const Container = styled(ItemHV2)`
  width: fit-content;
  max-width: fit-content;
  height: 5.1rem;
  max-height: 5.1rem;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto 1rem auto;
  // background: red !important;

  @media ${device.mobileL} {
    height: 2.95rem;
    max-height: 2.95rem;
    min-height: 2.95rem;
    justify-content: flex-start;
    margin: 3% 0;
  }
`;

const PfpContainer = styled(ItemVV2)`
  width: ${props => props.source === "minimized" ? "4rem" : "5rem"};
  height: ${props => props.source === "minimized" ? "4rem" : "5rem"};
  max-width: ${props => props.source === "minimized" ? "4rem" : "5rem"};
  margin: 0 1rem 0 0;
  border-radius: 100%;
  overflow: hidden;
  align-self: center;

  @media ${device.mobileL} {
    width: 2.875rem;
    height: 2.875rem;
    max-width: 2.875rem;
    margin: ${props => props.source === "minimized" ? "0.8rem 1rem auto 0.2rem" : "1.5rem 1rem auto 0.2rem"};
  }

  @media ${device.mobileS} {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    margin: 1.5rem 0.5rem auto 0rem;
  }
`;

const InfoContainer = styled(ItemVV2)`
  align-items: flex-start;
  width: fit-content;
  max-width: fit-content;
  @media ${device.mobileL} {
    margin-top: ${props => props.source === "minimized" ? "0.8rem" : "1.5rem"};
  }
`;

const ShortedAddress = styled(SpanV2)`
  color: ${(props) => props.color || props.theme.vcUserInfoText};
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: left;

  @media ${device.mobileL} {
    font-size: 1rem;
    font-weight: 600;
  }

  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
`;

const Status = styled(SpanV2)`
  color: ${(props) => props.color || props.theme.vcUserInfoText};
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  text-align: left;

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
`;

export default UserInfo;
