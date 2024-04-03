// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { device } from 'config/Globals';

import Lock from 'assets/Lock.png';

const EndToEnd = () => {
  return (
    <Container>
      <Image src={Lock} />
      <Text>End-to-end encrypted</Text>
    </Container>
  );
};

const Container = styled(ItemHV2)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5vw;
  max-width: 12.5vw;
  height: 2.3rem;
  max-height: 2.3rem;
  background-color: ${(props) => props.theme.default.bg};
  border-radius: 14px;
  margin: 2rem auto 0 auto;
`;

const Image = styled.img`
  width: 0.75rem;
  height: 1rem;
  margin: 1% 0 1.1% 3.5%;
`;

const Text = styled.div`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  text-align: center;
  color: #657795;
  width: 10vw;
  max-width: 10vw;
  margin: 1% 1% 1% 0;
`;

export default EndToEnd;
