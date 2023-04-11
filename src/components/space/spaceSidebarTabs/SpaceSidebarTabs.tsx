// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';
import { SpaceTabOption } from 'contexts';

// Internal Configs
import GLOBALS from 'config/Globals';

export const SpaceSidebarTabs = () => {
  const { activeTab, setActiveTab } = useContext(SpaceLocalContext);
  const theme = useTheme();
  return (
    <ItemVV2 justifyContent="flex-start">
      {/* Header */}
      <ItemVV2 flex="initial">
        <ItemHV2>
          {/* Set active and onCLick to customize tab */}
          {Object.keys(SpaceTabOption).map((option) => {
            return (
              <TabButton
                active={activeTab == SpaceTabOption[option] ? true : false}
                background="transparent"
                hoverBackground="transparent"
                color={theme.default.color}
                flex="1"
                padding="10px 10px 20px 10px"
                onClick={() => {
                  setActiveTab(SpaceTabOption[option]);
                }}
              >
                <ItemHV2 alignItems="center">
                  <SpanV2
                    fontSize="16px"
                    fontWeight="400"
                    color={activeTab === SpaceTabOption[option] ? GLOBALS.COLORS.PRIMARY_PINK : 'inherit'}
                  >
                    {option}
                  </SpanV2>
                  {SpaceTabOption[option] === SpaceTabOption.Requests&& (
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
                  )}
                </ItemHV2>
              </TabButton>
            );
          })}
        </ItemHV2>
      </ItemVV2>
    </ItemVV2>
  );
};

const TabButton = styled(ButtonV2)`
  border-bottom: 2px solid ${(props) => (props.active ? GLOBALS.COLORS.PRIMARY_PINK : props.theme.default.border)};
  pointer: hand;
`;
