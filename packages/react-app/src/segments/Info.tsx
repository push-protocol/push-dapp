import React from "react";
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'

import { useWeb3React } from '@web3-react/core'

import ViewInfoItem from "components/ViewInfoItem";

import * as dotenv from "dotenv";
dotenv.config();

// Other Information section
function  Info() {
  const { account, library } = useWeb3React();

  const [controlAt, setControlAt] = React.useState(0);

  return (
    <Container>
      <InfoBox>
        <ViewInfoItem/>
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

const ContainerInfo = styled.div`
  padding: 20px;
`
const InfoBox = styled.div`
  display: block;
  align-self: stretch;
  background: ${props => props.theme.mainBg};
`


// Export Default
export default  Info;
