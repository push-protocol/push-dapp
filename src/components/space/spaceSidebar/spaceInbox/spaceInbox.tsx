import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { SpaceGlobalContext, SpaceLocalContext, SpaceTabOption } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import SpaceCard from '../../spaceReusables/SpaceCard';

export const SpaceInbox = () => {
  const { account } = useWeb3React();
  const { userSpaces } = useContext(SpaceGlobalContext);
  const theme = useTheme();
  return (
    <>
      <SpanV2
        fontWeight="700"
        fontSize="12px"
        textAlign="start"
        margin="0 0 13px 0"
        color={theme.default.secondaryColor}
      >
        SPACES
      </SpanV2>
      <SpaceContainer>
        {!Object.keys(userSpaces[account]?.spaces || {}).length ? (
          <SpanV2
            color={theme.default.secondaryColor}
            fontSize="15px"
            fontWeight="400"
            margin="55px 0px 0px"
          >
            Get started by creating your space
          </SpanV2>
        ) : (
          Object.keys(userSpaces[account]?.spaces).map((key) => (
            <SpaceCardContainer key={userSpaces[account]?.spaces[key].spaceId}>
              <SpaceCard
                spaceData={userSpaces[account]?.spaces[key]}
                borderRadius="17px"
                isSidebarCard={true}
              />
            </SpaceCardContainer>
          ))
        )}
      </SpaceContainer>
    </>
  );
};

const SpaceContainer = styled(ItemVV2)`
  cursor: pointer;
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 85px;
  flex-flow: column;
  padding-right: 3px;

  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
  }
`;

const SpaceCardContainer = styled(ItemVV2)`
  margin-bottom: 10px;
`;
