// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { useSpaceComponents } from 'hooks/useSpaceComponents';
import { Button } from 'primaries/SharedStyling';
import SpaceIcon from 'assets/spaces/Space-icon.svg';
import SpaceDark from 'assets/spaces/space-dark.svg';
import { Image } from 'components/SharedStyling';
import Avatar from '@mui/material/Avatar';
import { useWeb3React } from '@web3-react/core';
import { shortenText } from 'helpers/UtilityHelper';
import { SpaceContext } from 'contexts/SpaceContext';
import { device } from 'config/Globals';
import { useNavigate } from 'react-router-dom';

const NewButton = () => {
  return <button>create Space</button>;
};

export const SpaceFeedSection = ({ spaceid }) => {
  const { SpaceFeedComponent, SpaceInvitesComponent, CreateSpaceComponent } = useSpaceComponents();
  const { account } = useWeb3React();
  const { setSpaceId, spaceInvites } = useContext(SpaceContext);
  const theme = useTheme();

  React.useEffect(() => {
    if (spaceid) {
      setSpaceId(spaceid);
    }
  }, [spaceid]);

  let navigate = useNavigate();
  const handleSpaceId = (spaceId: string) => {
    setSpaceId(spaceId);
    navigate(`/space/${spaceId}`);
  };

  const createSpace = () => {
    return <CreateSpaceComponent />;
  };
  return (
    <SpaceCard>
      <SpaceHeader>
        <AvatarContainer>
          {/* <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" className='avatar' /> */}
        </AvatarContainer>

        <SpaceUser>{shortenText(account, 6)}</SpaceUser>

        {/* <Button
            bg='#D53A94'
            color='#fff'
            radius='12px'
            size='14px'
            margin='0px 14px 0px auto'
            onClick={createSpace}
          >
            <SpaceChatIcon style={{marginRight: '10px'}} />
            Create your Space
          </Button> */}
        <CreateDiv>
          <CreateSpaceComponent>{/* <NewButton /> */}</CreateSpaceComponent>
        </CreateDiv>

        <SpaceInvitesComponent>
          <div style={{ position: 'relative', marginRight: '10px', cursor: 'pointer' }}>
            <Image
              src={theme?.scheme == 'light' ? SpaceIcon : SpaceDark}
              srcSet={theme?.scheme == 'light' ? SpaceIcon : SpaceDark}
              width={'30px'}
            />
            {spaceInvites > 0 && <Badge>{spaceInvites}</Badge>}
          </div>
        </SpaceInvitesComponent>
      </SpaceHeader>

      <div style={{ marginTop: '30px' }}>
        <SpaceFeedComponent
          showTabs={true}
          orientation="vertical"
          // width={550}
          width={'100%'}
          height={'100%'}
          onBannerClickHandler={(spaceId: string) => {
            handleSpaceId(spaceId);
          }}
        />
      </div>

      {/* <CreateSpaceComponent /> */}
      {/* <SpaceInvitesComponent /> */}
    </SpaceCard>
  );
};

const SpaceCard = styled.div`
  background: ${({ theme }) => theme.default.bg};
  height: 100%;
  width: calc(100% - 440px);
  border-radius: 32px !important;
  padding: 20px !important;
  box-sizing: border-box !important;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const SpaceHeader = styled.div`
  border: 1px solid ${({ theme }) => theme.default.borderColor};
  background: ${({ theme }) => theme.chat.sendMesageBg};
  padding: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  background: red;
  border-radius: 100%;
  &. avatar {
    width: 48px !important;
    height: 48px !important;
  }
`;

const SpaceUser = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.342px;
  margin-left: 10px;
  color: ${({ theme }) => theme.spaceHostTextColor};
`;

const CreateDiv = styled.div`
  margin: 0px 14px 0px auto;
`;

const Badge = styled.div`
  position: absolute;
  top: 15px;
  left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 19px;
  width: 20px;
  border-radius: 8px;
  background: #d53a94;
  color: #ffffff;
`;
