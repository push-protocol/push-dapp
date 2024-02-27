// React + Web3 Essentials
import React from "react";

// External Packages
import { useDispatch, useSelector } from "react-redux";
import { useClickAway } from "react-use";
import styled from "styled-components";

// Internal Compoonents
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import ChannelLoading from "components/ChannelLoading";
import { ScrollItem } from "./ViewChannels";

// Internal Configs
import { ItemHV2, SpanV2 } from "components/reusables/SharedStylingV2";
import { appConfig } from "config";
import { device } from "config/Globals";

// Constants
const NOTIFICATIONS_PER_PAGE = 20;

// Create Header
const ChannelProfile = ({ channelID }) => {
  const dispatch = useDispatch();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const modalRef = React.useRef(null);
  useClickAway(modalRef, () => showFilter && setShowFilter(false));

  // toast related section
  const [loading, setLoading] = React.useState(false);

  // Render
  return (
    <Container>
      <ChannelLoading />
      
      <ScrollItem>
        
      </ScrollItem>
    </Container>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
`;

const NotifsOuter = styled.div`
  margin: 25px 0px;
`;

const Notifs = styled.div`
  align-self: stretch;
  flex: 1;
`;

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

const SnapSection = styled(ItemHV2)`
  max-height:28px;
  margin-top:20px;
  border-radius: 12px;
  border: 1px solid #D4DCEA;
  background: #FFF;
  border: 1px solid ${(props) => props.theme.default.border};
  background:${(props) => props.theme.default.bg};
  padding: 12px 16px;
  align-items: center;
  gap: 16px;

  @media ${device.tablet} {
    gap: 9px;  
    margin-right:10px;
  }

  @media (max-width:525px) {
    max-height:50px;
  }
`

const InstallText = styled(ItemHV2)`
  @media ${device.tablet} {
    flex-direction:column;  
    align-items: baseline;
    display: block;
    align-self: auto;
  }
  
`

const CloseButton = styled(Close)`
  cursor:pointer;
  height:20px;
  width:20px;
  


`

const InstallPushSnap = styled(SpanV2)`
  cursor:pointer;
  font-size:14px;
  font-weight:500;
  color:#D53A94;

  &:hover{
    text-decoration:underline;
    text-underline-position: under;
  }
`

// Export Default
export default ChannelProfile;