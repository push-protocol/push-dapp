// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';
import { shortenText } from 'helpers/UtilityHelper';
import { VideoCallContext } from 'contexts/VideoCallContext';
import Lock from 'assets/chat/group-chat/lockdark.svg';
import { device } from 'config/Globals';

export const OnConnectingVideoCall = () => {
  const { videoCallData, incomingCallUserData } = useContext(VideoCallContext);
  const { web3NameList }: AppContextType = React.useContext(AppContext);
  const web3Name = web3NameList[videoCallData.incoming[0].address];
  const shortnedAddress = shortenText(videoCallData.incoming[0].address, 5);
  const theme=useTheme();

  return (
    <ConnectingContainer>
      <EncryptionMessage>
        <Image src={Lock} />
        End-to-end encrypted
      </EncryptionMessage>
      <PfpContainer>
        <ImageV2
          height="100%"
          alt={`Profile pic of ${web3Name ? web3Name : shortnedAddress}`}
          src={incomingCallUserData?.profilePicture}
          objectFit="cover"
        />
      </PfpContainer>
      <SpanV2 fontSize="16px" fontWeight="500" color={theme.default.secondaryColor} margin="8px 0px 0px">Connecting...</SpanV2>
      <NameBadgeContainer>
        <NameBadge>{web3Name ? web3Name : shortnedAddress}</NameBadge>
      </NameBadgeContainer>
    </ConnectingContainer>
  );
};

const ConnectingContainer = styled(ItemVV2)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.chat.snapFocusBg};
  position: relative;
`;

const PfpContainer = styled.div`
  width: 107px;
  height: 107px;
  max-width: 107px;
  border-radius: 100%;
  overflow: hidden;
  align-self: center;
`;

const NameBadgeContainer = styled(ItemHV2)`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;
const Image = styled.img`
  width: 10px;
  margin-right: 12px;
  position: relative;
  bottom: -1px;
`;

const EncryptionMessage = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.default.secondaryColor};
  max-width: 556px;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  background-color: ${(props) => props.theme.default.bg};
  padding: 10px 15px;
  border-radius: 14px;
  text-align: center;
  max-height: 37px;
  position: absolute;
  top: 24px;
  @media ${device.mobileL}{
    font-size: 12px;
  }
`;

const NameBadge = styled(SpanV2)`
  padding: 3px 8px;
  border-radius: 8px;
  background: rgba(46, 49, 59, 0.75);
  color: #fff;
  z-index: 3;
`;
