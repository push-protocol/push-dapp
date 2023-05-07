// React + Web3 Essentials
import React,{useContext} from 'react';

// External Packages
import styled,{useTheme} from 'styled-components';
import { useWeb3React } from '@web3-react/core';

// Internal Components
import SpaceRequestCard from './SpaceRequestCard';

// Internal Configs
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { SpaceGlobalContext} from 'contexts';

export const SpaceRequests = () => {

  const theme = useTheme();
  const { account } = useWeb3React();
  const { userSpaces } = useContext(SpaceGlobalContext);
  
  return (
    <>
      <SpanV2
        fontWeight="700"
        fontSize="12px"
        textAlign="start"
        margin="0 0 13px 0"
        color={theme.default.secondaryColor}
        letterSpacing='0.12em'
      >
        SPACE REQUESTS
      </SpanV2>


      <SpaceContainer>

        {!Object.keys(userSpaces[account]?.spaces || {}).length ? (
          <SpanV2
            color={theme.default.secondaryColor}
            fontSize="15px"
            fontWeight="400"
            margin="55px 0px 0px"
          >
          You don't have any request yet. Start a new space by using the + button
          </SpanV2>
        ) :
          (Object.keys(userSpaces[account]?.spaces).map((key) => (
            <SpaceRequestCard spaceData={userSpaces[account]?.spaces[key]} key={userSpaces[account]?.spaceRequests[key].spaceId} />
          )))}

      </SpaceContainer>


    </>
  );
};

const SpaceContainer = styled(ItemVV2)`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 85px;
  flex-flow: column;

  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`;
