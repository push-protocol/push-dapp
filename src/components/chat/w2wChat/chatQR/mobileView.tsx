// React + Web3 Essentials
import React, { useContext} from "react";
import { useWeb3React } from "@web3-react/core";
import { useClickAway } from "react-use";

// External Packages
import usePeer from "hooks/usePeer";
import { QRCodeCanvas } from "qrcode.react";
import styled, { useTheme } from "styled-components";
import { AiOutlineClose, AiOutlineMore } from 'react-icons/ai';

// Internal Compoonents
import CryptoHelper from 'helpers/CryptoHelper';
import { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";


// Internal Configs
import GLOBALS, { device } from "config/Globals";
import { ChatUserContext } from "contexts/ChatUserContext";
import chatBoxImage from "../../../../assets/chat/chatBox.svg";
import backgroundImage from "../../../../assets/chat/QRBackground.svg";

const MobileView = ({ onClose, onConfirm: createGroup, toastObject }) => {
    const theme = useTheme();
    const handleClose = () => {
        onClose();
    }
    const containerRef = React.useRef(null);
    useClickAway(containerRef, () => handleClose());


    return (

        <Container
            flex="initial"
            alignSelf={'center'}
            padding={GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
            border={`1px solid ${theme.default.border}`}
            background={theme.chatQRbg}
            ref={containerRef}

        >

            <CloseButtonContainer>
                <CloseButton onClick={() => { onClose() }} style={{ color: theme.default.color }} />
            </CloseButtonContainer>

            <Image src={backgroundImage} />

            <TextContainer>
                <TextHeading>Open Push Chat on your Computer</TextHeading>
                <TextContents>
                    <TextContent>Go to app.push.org on your computer</TextContent>
                    <TextContent>Open Push Chat and click on
                        <Settings style={{ color: theme.default.color }} />
                        next to your user profile</TextContent>
                    <TextContent style={{ marginTop: "5px" }}>Click on Link Mobile App and scan the code</TextContent>
                </TextContents>
            </TextContainer>

        </Container>

    );
};




export default MobileView;

const Container = styled(ItemVV2)`
    width:75%;
    padding: 10px 20px 20px 20px;
    @media ${device.tablet} {
        width:95%;
    }

    @media (min-width:1200px) and (max-width:1353px) {
        width:87%;
    }

    @media (min-width:866px) and (max-width:992px){
        width:65%;
    }
    
`


const CloseButtonContainer = styled.div`
    width:100%;
    text-align:end;
    text-align: end;
    padding-right:10px;

    @media (max-width:1199px){
        margin-bottom:20px;
    }
`;

const CloseButton = styled(AiOutlineClose)`
    cursor:pointer;
    font-size:20px;

`;

const Image = styled.img``;

const TextContainer = styled(ItemVV2)`
font-family: 'Strawford';
font-style: normal;
line-height: 140%;
`;
const TextHeading = styled.div`
font-weight: 500;
font-size: 18px;
line-height: 141%;
display: flex;
align-items: center;
text-align: center;
color: ${(props) => props.theme.default.color};

`;

const TextContents = styled.ol`
    padding-left:20px;
`;

const TextContent = styled.li`
font-weight: 400;
font-size: 15px;
line-height: 140%;
color: #657795;
`;

const Settings = styled(AiOutlineMore)`
  position: relative;
  width: 20.73px;
  height: 22px;
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  position: relative;
  top: 7px;
`;
