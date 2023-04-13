import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { SpaceGlobalContext, SpaceLocalContext, SpaceTabOption } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import SpaceCard from '../spaceCard/spaceCard';
import SpaceRequestCard from './SpaceRequestCard';

export const SpaceRequests = () => {

  const theme = useTheme();
  const { account } = useWeb3React();
  const { userSpaces } = useContext(SpaceGlobalContext);
  console.log(userSpaces)

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
            <SpaceRequestCard spaceData={userSpaces[account]?.spaces[key]}/>
          )))}
      </SpaceContainer>


    </>
  );
};

const SpaceContainer = styled(ItemVV2)`
  margin-top: 0px;
  display: flex;
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
    background: ${(props) => props.theme.default.secondaryBg || '#000000'};
  }
`;
