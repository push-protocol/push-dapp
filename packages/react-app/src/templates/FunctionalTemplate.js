import React from "react";
import styled, { css } from 'styled-components';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

// Create Header
function Templater() {
  const [openFlag, setOpenFlag] = React.useState(false);

  React.useEffect(() => {

  });

  // to create blockies

  return (
    <Container>
      What's my purpose!
    </Container>
  );
}

// css styles
const Container = styled.div`

`

// Export Default
export default Templater;
