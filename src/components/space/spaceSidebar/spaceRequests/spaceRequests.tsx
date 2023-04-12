import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { SpaceGlobalContext, SpaceLocalContext, SpaceTabOption } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import SpaceCard from '../spaceCard/spaceCard';

export const SpaceRequests = () => {

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
        REQUESTS
      </SpanV2>
      <SpaceContainer>
          <SpanV2
            fontWeight="600"
            fontSize="18px"
          >
            Requsts
          </SpanV2>
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
