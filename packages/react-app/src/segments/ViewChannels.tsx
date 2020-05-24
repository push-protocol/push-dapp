import React from "react";
import styled, { css } from 'styled-components';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

// Create Header
function ViewChannels() {
  React.useEffect(() => {

  });

  // to create blockies

  return (
    <Container>
      Coming in Version 0.2!
    </Container>
  );
}

// css styles
const Container = styled.div`
  font-size: 32px;
  color: #DDD;
  display: flex;
  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`

// Export Default
export default ViewChannels;
