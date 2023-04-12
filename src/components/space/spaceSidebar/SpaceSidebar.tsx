// React + Web3 Essentials
import React, { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';

// External Packages
import { useTheme } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

// Internal Components
import { ButtonV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';
import Searchbar from './searchBar/searcBar';
import { SpaceTabOption } from 'contexts';
import { SpaceInbox } from './spaceInbox';
import { SpaceRequests } from './spaceRequests';

export const SpaceSidebar = ({showCreateSpaceModal}) => {
  const { activeTab, setActiveTab } = useContext(SpaceLocalContext);

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
          >
            <ButtonV2
              alignSelf="stretch"
              background="#D53893"
              hoverBackground="transparent"
              borderRadius="50%"
              onClick={() => setActiveTab(SpaceTabOption.Requests)}
            >
              <AddIcon style={{ color: '#FFFFFF', fontSize: '24px', cursor: 'pointer' }} onClick={showCreateSpaceModal}/>
            </ButtonV2>
          </ItemVV2>
        </ItemHV2>
      )}
      {activeTab === SpaceTabOption.Spaces ? <SpaceInbox /> : <SpaceRequests />}
    </ItemVV2>
  );
};
