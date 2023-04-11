// React + Web3 Essentials
import React, { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled, { useTheme } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

// Internal Components
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';
import { SpaceGlobalContext } from 'contexts';
import Searchbar from './searchBar/searcBar';
import SpaceCard from './spaceCard/spaceCard';
import { SpaceTabOption } from 'contexts';

export const SpaceSidebar = () => {
  const { account } = useWeb3React();
  const { activeTab, setActiveTab } = useContext(SpaceLocalContext);
  const { userSpaces } = useContext(SpaceGlobalContext);
  const theme = useTheme();

  return (
    <ItemVV2
      flex={6}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {activeTab === SpaceTabOption.Spaces && (
        <ItemHV2
          justifyContent="space-between"
          width="100%"
          flex="initial"
        >
          <Searchbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ItemVV2
            flex="initial"
            margin="0px 0px 0px 10px"
            alignItems="center"
            width="48px"
            height="48px"
            top="10px"
            right="0px"
            display={activeTab === SpaceTabOption.Requests ? 'none' : 'flex'}
          >
            <ButtonV2
              alignSelf="stretch"
              background="#D53893"
              hoverBackground="transparent"
              borderRadius="50%"
              onClick={() => setActiveTab(SpaceTabOption.Requests)}
            >
              <AddIcon style={{ color: '#FFFFFF', fontSize: '24px', cursor: 'pointer' }} />
            </ButtonV2>
          </ItemVV2>
        </ItemHV2>
      )}
      <SpanV2
        fontWeight="700"
        fontSize="12px"
        textAlign="start"
        margin="0 0 13px 0"
        color={theme.default.secondaryColor}
      >
        {activeTab === SpaceTabOption.Spaces ? 'SPACES' : 'REQUESTS'}
      </SpanV2>
      {activeTab === SpaceTabOption.Spaces ? (
        <SpaceContainer>
          {userSpaces[account].spaces['1'].map((space, index) => {
            return (
              <SpaceCard
                name="adam.eth"
                description="Push Chat: The solution to centralized messaging"
                date="30 Apr"
                time="4:30 PM"
                spaceData={space}
              />
             );
          })}  

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