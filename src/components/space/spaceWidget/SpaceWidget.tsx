// React + Web3 Essentials
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as Space } from 'assets/space/space.svg';
import { ReactComponent as Close } from 'assets/space/close.svg';
import { ReactComponent as Check } from 'assets/space/check.svg';
import { shortenText } from 'helpers/UtilityHelper';
import { SpaceGlobalContext } from 'contexts';
import { SpaceMembersIndicator } from '../spaceReusables';

// Internal Configs
import { device } from 'config/Globals';

const SpaceWidget = () => {
  const [exitOption, setExitOption] = useState<boolean>(false);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { account } = useWeb3React();
  const { joinedSpaceId, setJoinedSpaceId, userSpaces } = useContext(SpaceGlobalContext);
  const { pathname } = useLocation();
  const selectedSpace = userSpaces[account]?.spaces[joinedSpaceId];
  const ref = React.useRef();

  const exitSpace = () => {
    setJoinedSpaceId('');
  };

  // Monitor changes to position state and update DOM
  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  return (
    <WidgetContainer
      ref={ref}
      bottomMarginFor={pathname.split('/')[1] === 'chat' && pathname.split('/')[2] ? 'chat' : 'other'}
      rightMarginFor={pathname.split('/')[1] === 'chat' && pathname.split('/')[2] ? 'chat' : 'other'}
      onMouseMove={onMouseMove}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
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
              onClick={() => {
                setExitOption(true);
                console.log('clicked close');
              }}
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
            <ItemHV2
              justifyContent="flex-end"
              margin="4px 0 0 0"
            >
              <SpaceMembersIndicator spaceMembers={selectedSpace?.members} />
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
  right: ${(props) => (props.rightMarginFor === 'chat' ? '47px' : '20px')};
  bottom: ${(props) => (props.bottomMarginFor === 'chat' ? '145px' : '20px')};
  z-index: 1001;
  cursor: pointer;
  @media (${device.tablet}) {
    right: ${(props) => (props.rightMarginFor === 'chat' ? '65px' : '40px')};
    bottom: ${(props) => (props.bottomMarginFor === 'chat' ? '120px' : '40px')};
  }
  @media (${device.mobileL}) {
    right: ${(props) => (props.rightMarginFor === 'chat' ? '20px' : '20px')};
    bottom: ${(props) => (props.bottomMarginFor === 'chat' ? '118px' : '40px')};
  }
`;

const WidgetData = styled(ItemHV2)`
  justify-content: space-between;
`;

export default SpaceWidget;
