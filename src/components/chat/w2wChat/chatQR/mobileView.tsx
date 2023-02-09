import BlurBG from 'components/reusables/blurs/BlurBG';
import { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS, { device } from 'config/Globals';
import { ChatUserContext } from 'contexts/ChatUserContext';
import React, { useContext } from 'react';
import { AiOutlineClose, AiOutlineMore } from 'react-icons/ai';
import styled, { useTheme } from 'styled-components';
import backgroundImage from "../../../../assets/chat/QRBackground.svg";

const MobileView = ({
    type = LOADER_TYPE.STANDALONE,
    overlay = LOADER_OVERLAY.NORMAL,
    blur = 0,
    width = 'auto'
}) => {

    const { createUserIfNecessary, displayQR, setDisplayQR, pgpPvtKey, connectedPeerID } = useContext(ChatUserContext);
    const theme = useTheme();

    return (
        <ItemVV2
            position={overlay == LOADER_OVERLAY.ONTOP ? 'absolute' : 'relative'}
            alignSelf={overlay == LOADER_OVERLAY.ONTOP ? 'stretch' : 'center'}
            flex="initial"
            top="0"
            right="0"
            bottom="0"
            left="0"
            zIndex="1000"
            padding="15px"
            onClick={() => { setDisplayQR(!displayQR) }}
        >
            {overlay === LOADER_OVERLAY.ONTOP && <BlurBG blur={blur} />}

            <Container
                flex="initial"
                alignSelf={type == LOADER_TYPE.SEAMLESS ? 'auto' : 'center'}
                // width={type == LOADER_TYPE.STANDALONE_MINIMAL ? 'auto' : width}
                padding={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
                borderRadius={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                border={type == LOADER_TYPE.SEAMLESS ? 'transparent' : `1px solid ${theme.default.border}`}
                background={theme.chatQRbg}

            >

                <CloseButtonContainer>
                    <CloseButton onClick={() => { setDisplayQR(!displayQR) }} style={{ color: theme.default.color }} />
                </CloseButtonContainer>

                <Image src={backgroundImage} />

                <TextContainer>
                    <TextHeading>Open Push Chat on your Computer</TextHeading>
                    <TextContents>
                            <TextContent>Go to app.push.org on your computer</TextContent>
                            <TextContent>Open Push Chat and click on  
                                <Settings style={{color:theme.default.color}}/>
                                next to your user profile</TextContent>
                            <TextContent style={{marginTop:"5px"}}>Click on Link Mobile App and scan the code</TextContent>
                    </TextContents>
                </TextContainer>

            </Container>




        </ItemVV2>
    );
};

export default MobileView;

const Container = styled(ItemVV2)`
    width:75%;
    padding: 10px 7px 20px 20px;
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
color: ${(props)=>props.theme.default.color};

`;

const TextContents = styled.ol`

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
