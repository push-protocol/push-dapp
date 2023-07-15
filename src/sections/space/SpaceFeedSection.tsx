// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { useSpaceComponents } from 'hooks/useSpaceComponents';
import { Button } from 'primaries/SharedStyling';
import { ReactComponent as SpaceChatIcon } from 'assets/spaces/space-chat.svg'
import SpaceIcon from 'assets/spaces/Space-icon.svg'
import { Image } from 'components/SharedStyling';
import Avatar from '@mui/material/Avatar';
import { useWeb3React } from '@web3-react/core';
import { shortenText } from 'helpers/UtilityHelper';
import { SpaceContext } from 'contexts/SpaceContext';


export const SpaceFeedSection = () => {
  const { SpaceFeedComponent, SpaceInvitesComponent, CreateSpaceComponent } = useSpaceComponents();
  const { account } = useWeb3React();
  const { setSpaceId } = useContext(SpaceContext);


  const createSpace = () => {
    return <CreateSpaceComponent />
  }
  return (
    <SpaceCard>
      <SpaceHeader>

        <AvatarContainer>
             {/* <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" className='avatar' /> */}
        </AvatarContainer>

        <SpaceUser>
          {shortenText(account, 6)}
        </SpaceUser>



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
             <CreateSpaceComponent />
          </CreateDiv>

          <Image
            src={SpaceIcon}
            srcSet={SpaceIcon}
            width={'30px'}
          />
      </SpaceHeader>

    <div style={{marginTop: '30px'}}>
      <SpaceFeedComponent
        showTabs={true}
        orientation="vertical"
        width={550}
        height={'100%'}
        onBannerClickHandler={(spaceId: string) => {
          console.log('spaceId: ', spaceId);
          setSpaceId(spaceId)
        }}
      />
    </div>


        {/* <CreateSpaceComponent /> */}
      {/* <SpaceInvitesComponent /> */}
      </SpaceCard>
  );
};

const SpaceCard = styled.div`
  background: white;
  height: 100%;
  border-radius: 32px !important;
  padding: 20px !important;
`;

const SpaceHeader = styled.div`
  border: 1px solid #DCDCDF;
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
