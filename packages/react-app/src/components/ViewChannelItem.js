import React from "react";
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'

import { useWeb3React } from '@web3-react/core'

// Create Header
function ViewChannelItem({ channelObject, epnsReadProvider, epnsWriteProvide }) {
  const { account, library } = useWeb3React();

  React.useEffect(() => {

  }, [account]);

  // to create blockies

  return (
    <Container>
      <ChannelLogo src={}>

    </Container>
  );
}

// css styles
const Container = styled.div`

`

// Export Default
export default ViewChannelItem;
