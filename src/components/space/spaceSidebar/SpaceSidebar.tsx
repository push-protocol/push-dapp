// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';
import Searchbar from './searchBar';
import SpaceCard from './spaceCard';

export const SpaceSidebar = () => {
  const { activeTab, setActiveTab } = useContext(SpaceLocalContext);
  const theme = useTheme();

  return (
    <ItemVV2
      flex={6}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Searchbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SpanV2
        fontWeight="700"
        fontSize="12px"
        textAlign="start"
        margin="0 0 13px 0"
        color={theme.default.secondaryColor}
      >
        {activeTab == 'spaces' ? 'SPACES' : 'REQUESTS'}
      </SpanV2>
      {activeTab == 'spaces' ? (
        <SpaceContainer>
          <SpaceCard
            name="adam.eth"
            description="Push Chat: The solution to centralized messaging"
            date="30 Apr"
            time="4:30 PM"
          />
          {/* <SpanV2
            color={theme.default.secondaryColor}
            fontSize="15px"
            fontWeight="400"
            margin="55px 0px 0px"
          >
            Get started by creating your space
          </SpanV2> */}
        </SpaceContainer>
      ) : (
        <SpaceContainer>
          <SpanV2
            fontWeight="600"
            fontSize="18px"
          >
            Requsts
          </SpanV2>
        </SpaceContainer>
      )}
    </ItemVV2>
  );
};

const SpaceContainer = styled(ItemVV2)`
  justify-content: flex-start;
`;
