// React + Web3 Essentials
import React from "react";

// External Packages
import styled from 'styled-components';
import * as dotenv from "dotenv";

// Internal Components
import ViewInfoItem from "components/ViewInfoItem";

dotenv.config();

// Other Information section
function Info() {

  return (
    <Container>
      <InfoBox>
        <ViewInfoItem />
      </InfoBox>
    </Container>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;

  max-height: 80vh;
`

const InfoBox = styled.div`
  display: block;
  align-self: stretch;
`

// Export Default
export default Info;
