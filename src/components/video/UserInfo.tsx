// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { device } from 'config/Globals';

type UserInfoType = {
  pfp: any;
  address: string;
  username: string;
  status: 'Calling' | 'Call Ended' | 'Incoming Video Call';
  containerStyles?: {};
  fontColor?: string;
};

const UserInfo = ({ pfp, username, address, status, containerStyles, fontColor }: UserInfoType) => {
  const shortnedAddress = address.substring(0, 8) + '...' + address.substring(address.length - 8);

  return (
    <Container style={containerStyles}>
      <PfpContainer>
        <ImageV2
          height="100%"
          alt={`Profile pic of ${username}`}
          src={pfp}
          objectFit="cover"
        />
      </PfpContainer>

      <InfoContainer>
        <ShortedAddress color={fontColor}>{shortnedAddress}</ShortedAddress>
        <Status color={fontColor}>{status}</Status>
      </InfoContainer>
    </Container>
  );
};

const Container = styled(ItemHV2)`
  width: fit-content;
  max-width: fit-content;
  min-width: fit-content;
  height: 5.1rem;
  max-height: 5.1rem;
  min-height: 5.1rem;
  align-items: center;
  justify-content: center;
  margin: 2% auto 1% auto;

  @media ${device.mobileL} {
    height: 2.95rem;
    max-height: 2.95rem;
    min-height: 2.95rem;
    justify-content: flex-start;
    margin: 3% 0;
  }
`;

const PfpContainer = styled(ItemVV2)`
  width: 3rem;
  height: 3rem;
  max-width: 3rem;
  margin: 0 1rem 0 0;
  border-radius: 100%;
  overflow: hidden;
  align-self: center;

  @media ${device.mobileL} {
    width: 2.875rem;
    height: 2.875rem;
    max-width: 2.875rem;
    margin: auto 1rem auto 0.3rem;
  }

  @media ${device.mobileS} {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    margin: auto 0.5rem auto 0rem;
  }
`;

const InfoContainer = styled(ItemVV2)`
  align-items: flex-start;
  width: fit-content;
  max-width: fit-content;
`;

const ShortedAddress = styled(SpanV2)`
  color: ${(props) => props.color || props.theme.vcUserInfoText};
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: left;

  @media ${device.mobileL} {
    font-size: 0.93rem;
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
    font-size: 1rem;
  }

  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
`;

export default UserInfo;
