// React + Web3 Essentials
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// External Packages
import styled from 'styled-components';
import Draggable from 'react-draggable';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as Space } from 'assets/space/space.svg';
import { ReactComponent as Close } from 'assets/space/close.svg';
import { ReactComponent as Check } from 'assets/space/check.svg';
import { shortenText } from 'helpers/UtilityHelper';
import { spaces } from 'services/space/spaceList';
import { SpaceGlobalContext } from 'contexts';

// Internal Configs
import { device } from 'config/Globals';

const SpaceWidget = () => {
  const [exitOption, setExitOption] = useState<boolean>(false);
  const { setUserSpaceId } = useContext(SpaceGlobalContext);
  const { pathname } = useLocation();
  const selectedSpace = spaces[0];

  const exitSpace = () => {
    setUserSpaceId('');
  };

  return (
    <Draggable>
      <WidgetContainer
        bottom={pathname.split('/')[2]?.includes('chatid') ? '138px' : '20px'}
        right={pathname.split('/')[2]?.includes('chatid') ? '47px' : '20px'}
      >
        {!exitOption ? (
          <>
            <WidgetData>
              <SpanV2
                color="#F5F5F5"
                fontSize="15px"
                fontWeight="500"
              >
                {shortenText(selectedSpace?.spaceCreator, 6)}'s Space
              </SpanV2>
              <Close
                style={{ cursor: 'pointer' }}
                onClick={() => setExitOption(true)}
              />
            </WidgetData>
            <WidgetData>
              <ItemHV2 justifyContent="flex-start">
                <Space />
                <SpanV2
                  color="#F5F5F5"
                  fontSize="14px"
                  fontWeight="500"
                >
                  Live
                </SpanV2>
              </ItemHV2>
              <ItemHV2 justifyContent="flex-end">
                {selectedSpace?.members?.slice(0, 3).map((member, index) => {
                  return (
                    <ItemVV2
                      width="31px"
                      height="31px"
                      maxWidth="31px"
                      borderRadius="100%"
                      overflow="hidden"
                      margin="0px 0px 0px -18px"
                      zIndex={4 - index}
                      key={index}
                    >
                      <ImageV2
                        height="100%"
                        objectFit="cover"
                        src={member?.image}
                        alt="Member Image"
                      />
                    </ItemVV2>
                  );
                })}
                <SpanV2
                  color="#FFFFFF"
                  fontSize="14px"
                  fontWeight="500"
                  margin="0px 0px 0px 3px"
                >
                  +190
                </SpanV2>
              </ItemHV2>
            </WidgetData>
          </>
        ) : (
          <WarningContainer>
            <SpanV2
              fontSize="15px"
              fontWeight="500"
              color="#F5F5F5"
            >
              Do you want to leave this space?
            </SpanV2>
            <ItemHV2 justifyContent="flex-end">
              <Check
                style={{ marginRight: '12px', cursor: 'pointer' }}
                onClick={() => exitSpace()}
              />
              <Close
                style={{ cursor: 'pointer' }}
                onClick={() => setExitOption(false)}
              />
            </ItemHV2>
          </WarningContainer>
        )}
      </WidgetContainer>
    </Draggable>
  );
};

const WarningContainer = styled(ItemHV2)`
  height: 100%;
  min-height: 50px;
  justify-content: space-between;
  align-items: center;
`;

const WidgetContainer = styled.div`
  min-height: 50px;
  width: 317px;
  padding: 8px 16px;
  border-radius: 17px;
  background: linear-gradient(87.17deg, #b6a0f5 0%, #f46ef7 57.29%, #ff95d5 100%);
  position: fixed;
  right: ${(props) => props.right || '47px'};
  bottom: ${(props) => props.bottom || '84px'};
  z-index: 1001;
  cursor: pointer;
  @media (${device.mobileL}) {
    right: 20px;
  }
`;

const WidgetData = styled(ItemHV2)`
  justify-content: space-between;
`;

export default SpaceWidget;
