// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';

// Internal Configs
import GLOBALS from 'config/Globals';

export const SpaceSidebarTabs = () => {
  const { activeTab, setActiveTab } = useContext(SpaceLocalContext);
  const theme = useTheme();

  return (
    <ItemVV2 justifyContent="flex-start">
      {/* Header */}
      {activeTab == 'spaces' || activeTab == 'requests' ? (
        <ItemVV2 flex="initial">
          <ItemHV2>
            {/* Set active and onCLick to customize tab */}
            <TabButton
              active={activeTab == 'spaces' ? true : false}
              background="transparent"
              hoverBackground="transparent"
              color={theme.default.color}
              flex="1"
              padding="10px 10px 20px 10px"
              onClick={() => {
                setActiveTab('spaces');
              }}
            >
              <SpanV2
                fontSize="16px"
                fontWeight="400"
                color={activeTab === 'spaces' ? GLOBALS.COLORS.PRIMARY_PINK : 'inherit'}
              >
                Spaces
              </SpanV2>
            </TabButton>

            <TabButton
              active={activeTab == 'requests' ? true : false}
              background="transparent"
              hoverBackground="transparent"
              color={theme.default.color}
              flex="1"
              padding="10px 10px 20px 10px"
              onClick={() => {
                setActiveTab('requests');
              }}
            >
              <ItemHV2 alignItems="center">
                <SpanV2
                  flex="initial"
                  fontSize="16px"
                  fontWeight="400"
                  color={activeTab === 'requests' ? GLOBALS.COLORS.PRIMARY_PINK : 'inherit'}
                  margin="0px 4px"
                >
                  Requests
                </SpanV2>
                <SpanV2
                  background={GLOBALS.COLORS.PRIMARY_PINK}
                  color={GLOBALS.COLORS.WHITE}
                  padding="2px 8px"
                  margin="0px 4px"
                  fontSize="12px"
                  borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                >
                  {5}
                </SpanV2>
              </ItemHV2>
            </TabButton>
          </ItemHV2>
        </ItemVV2>
      ) : null}
    </ItemVV2>
  );
};

const TabButton = styled(ButtonV2)`
  border-bottom: 2px solid ${(props) => (props.active ? GLOBALS.COLORS.PRIMARY_PINK : props.theme.default.border)};
  pointer: hand;
`;