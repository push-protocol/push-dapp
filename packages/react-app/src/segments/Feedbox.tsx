import React from "react";
import styled, { css } from 'styled-components';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

// Create Header
function Feedbox() {
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
  padding: 20px;
  font-size: 4vh;
  color: #DDD;
  display: flex;
  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`

// Export Default
export default Feedbox;
