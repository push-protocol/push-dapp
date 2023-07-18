// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { useSpaceComponents } from 'hooks/useSpaceComponents';
import { Button } from 'primaries/SharedStyling';
import SpaceIcon from 'assets/spaces/Space-icon.svg';
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

export const SpaceFeedSection = ({spaceid}) => {
  const { SpaceFeedComponent, SpaceInvitesComponent, CreateSpaceComponent } = useSpaceComponents();
  const { account } = useWeb3React();
  const { setSpaceId, spaceInvites } = useContext(SpaceContext);

  React.useEffect(() => {
    if (spaceid) {
      setSpaceId(spaceid)
    }
  }, [spaceid])
  

  let navigate = useNavigate();

  const handleSpaceId = (spaceId: string) =>{
    setSpaceId(spaceId);
    console.log(spaceId);
    navigate(`/space/${spaceId}`)
  }
  
  return (
    <SpaceCard>
      <SpaceHeader>
        <AvatarContainer>
          {/* <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" className='avatar' /> */}
        </AvatarContainer>

        <SpaceUser>{shortenText(account, 6)}</SpaceUser>

        <CreateDiv>
          <CreateSpaceComponent>
              {/* <NewButton /> */}
          </CreateSpaceComponent>
        </CreateDiv>

        <SpaceInvitesComponent>
          <SpaceInviteDiv>
            <Image
              src={SpaceIcon}
              srcSet={SpaceIcon}
              width={'30px'}
            />
            {spaceInvites > 0 && <Badge>{spaceInvites}</Badge>}
          </SpaceInviteDiv>
        </SpaceInvitesComponent>
      </SpaceHeader>

      <FeedItem>
        <SpaceFeedComponent
          showTabs={true}
          orientation="vertical"
          // width={550}
          width={'100%'}
          height={'100%'}
          onBannerClickHandler={(spaceId: string) => {
            handleSpaceId(spaceId)
          }}
        />
      </FeedItem>

      {/* <CreateSpaceComponent /> */}
      {/* <SpaceInvitesComponent /> */}
    </SpaceCard>
  );
};

const SpaceCard = styled.div`
  background: white;
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
  border: 1px solid #dcdcdf;
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

const SpaceInviteDiv = styled.div`
  position: relative;
  margin-right: 10px; 
  cursor: pointer;
`;

const FeedItem = styled.div`
    margin-top: 30px;
    overflow-y: scroll;
    max-height: 100%; //overflow for feed items itself
    // max-height: 500px; //overflow for feed items itself
    // margin-bottom: 70px;
    box-sizing: border-box !important;
`;
