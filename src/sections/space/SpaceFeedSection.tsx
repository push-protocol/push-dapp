// React + Web3 Essentials
import React, { useContext, useMemo, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import SpaceIcon from 'assets/spaces/Space-icon.svg';
import SpaceDark from 'assets/spaces/space-dark.svg';
import { ReactComponent as AddSpace } from 'assets/spaces/add-space.svg';
import { Image } from 'components/SharedStyling';
import { ImageV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import { SpaceContext } from 'contexts/SpaceContext';
import { device } from 'config/Globals';
import { useNavigate } from 'react-router-dom';
import { SpaceComponentContext } from 'contexts/SpaceComponentsContext';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import useMediaQuery from 'hooks/useMediaQuery';
import { appConfig } from 'config';


// External imports
import * as PushAPI from '@pushprotocol/restapi';
import { AppContext } from 'contexts/AppContext';


const SpaceFeedSection = ({ spaceid }) => {
  const { SpaceFeedComponent, SpaceInvitesComponent, CreateSpaceComponent } = useContext(SpaceComponentContext);
  const { account } = useAccount();
  const { spaceId ,setSpaceId, spaceInvites } = useContext(SpaceContext);
  const { connectedUser } = useContext(AppContext);
  const theme = useTheme();

  const isMobile = useMediaQuery(device.mobileL);

  React.useEffect(() => {
    if (spaceid) {
      setSpaceId(spaceid);
    }
  }, [spaceid]);

  let navigate = useNavigate();

  const handleSpaceId = (spaceId: string) => {
    setSpaceId(spaceId);
    // console.log(spaceId);
    navigate(`/spaces/${spaceId}`);
  };

  // crossChecking this
  
  // React.useEffect(() => {
  //   (async () => {
  //     const feed = await PushAPI.space.requests({
  //       account,
  //       env: appConfig.appEnv,
  //     });
  //     // setSpaceInvites(feed?.length);
  //   })();
  // }, [spaceId]);


  return (
    <SpaceCard>
      <SpaceHeader>
        <ItemVV2
          width="48px"
          maxWidth="48px"
          borderRadius="100%"
          overflow="hidden"
          margin="0 5px 0 0"
        >
          <ImageV2
            alt="Profile"
            src={connectedUser?.profilePicture}
          />
        </ItemVV2>

        <SpaceUser>{shortenText(account, 6)}</SpaceUser>

        <CreateDiv>
          {isMobile ? (
            <CreateSpaceComponent>
              <AddSpace />
            </CreateSpaceComponent>
          ) : (
            <CreateSpaceComponent />
          )}
        </CreateDiv>

        <SpaceInvitesComponent>
          <SpaceInviteDiv>
            <Image
              src={theme?.scheme == 'light' ? SpaceIcon : SpaceDark}
              srcSet={theme?.scheme == 'light' ? SpaceIcon : SpaceDark}
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
          width={isMobile ? 360 : '100%'}
          height={'100%'}
          onBannerClickHandler={(spaceId: string) => {
            handleSpaceId(spaceId);
          }}
        />
      </FeedItem>
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

  @media ${device.mobileL} {
    padding: 5px !important;
    border-radius: 15px !important;
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
  
  @media ${device.mobileL}{
    padding-top:5px;
  }
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

export default SpaceFeedSection;
