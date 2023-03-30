import styled from 'styled-components';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

type UserInfoType = {
  pfp: any;
  address: string;
  username: string;
  status: 'Calling' | 'Call Ended';
};

const UserInfo = ({ pfp, username, address, status }: UserInfoType) => {
  const shortnedAddress = address.substring(0, 8) + '...' + address.substring(address.length - 8);

  return (
    <Container>
      <PfpContainer>
        <ImageV2
          height="100%"
          alt={`Profile pic of ${username}`}
          src={pfp}
          objectFit="cover"
        />
      </PfpContainer>

      <InfoContainer>
        <ShortedAddress>{shortnedAddress}</ShortedAddress>
        <Status>{status}</Status>
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
  margin: 3% auto;
`;

const PfpContainer = styled(ItemVV2)`
  width: 5rem;
  height: 5rem;
  max-width: 5rem;
  margin: 0 1rem 0 0;
  border-radius: 100%;
  overflow: hidden;
`;

const InfoContainer = styled(ItemVV2)`
  align-items: flex-start;
`;

const ShortedAddress = styled(SpanV2)`
  color: #1e1e1e;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: left;
`;

const Status = styled(SpanV2)`
  color: #1e1e1e;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  text-align: left;
`;

export default UserInfo;
