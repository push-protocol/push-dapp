import React from "react";
import styled from 'styled-components';

import ViewInfoItem from "components/ViewInfoItem";

import * as dotenv from "dotenv";
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
  background: ${props => props.theme.mainBg};
`

// Export Default
export default Info;
