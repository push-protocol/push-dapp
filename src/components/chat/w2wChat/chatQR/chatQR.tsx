import React, { useContext, useEffect, useState } from "react";
import usePeer from "hooks/usePeer";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import CryptoHelper from 'helpers/CryptoHelper';
import LoaderSpinner, { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { useWeb3React } from "@web3-react/core";
import styled, { useTheme } from "styled-components";
import { AiOutlineClose, AiOutlineQrcode } from "react-icons/ai";
import { H2V2, ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";
import GLOBALS, { device } from "config/Globals";
import BlurBG from "components/reusables/blurs/BlurBG";
import { ChatUserContext } from "contexts/ChatUserContext";
import chatBoxImage from "../../../../assets/chat/chatBox.svg";

const ChatQR = ({
    type = LOADER_TYPE.STANDALONE,
    overlay = LOADER_OVERLAY.NORMAL,
    blur = 0,
    width = 'auto'
}) => {
    const theme = useTheme();
    const { account } = useWeb3React();
    const { createUserIfNecessary, displayQR, setDisplayQR, pgpPvtKey, connectedPeerID } = useContext(ChatUserContext);
    const [myPeer, myPeerID] = usePeer();
    const [qrCodeText, setQrCodeText] = useState('');
    const [loading, setLoading] = useState(true);
    const [encryptedKey, setEncryptedKey] = useState('');

    // console.log(myPeerID, myPeer, connectedPeerID.peerID);
    const generateQRCodeText = () => {
        const secret = CryptoHelper.makeid(10);
        const encryptedPvtKey = CryptoHelper.encryptWithAES(pgpPvtKey, secret);
        const qrCodeData = {
            aesSecret: secret,
            peerId: myPeerID,
            account: account
        }
        setQrCodeText(JSON.stringify(qrCodeData));
        setEncryptedKey(encryptedPvtKey);
        setLoading(false);
        // console.log(secret);
    }

    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={qrCodeText}
            style={{ borderRadius: "19px" }}
            size={200}
            bgColor={"#fff"}
            level={"H"}
            includeMargin={true}
            imageSettings={{
                src: "./icon.jpg",
                height: 56,
                width: 56,
                excavate: false
            }}
        />
    );


    useEffect(() => {
        if (!myPeerID) return;
        if (!pgpPvtKey) {
            createUserIfNecessary();
        }
        generateQRCodeText();
    }, [myPeerID]);

    useEffect(() => {
        if (!connectedPeerID.peerID) return;
        try {
            const conn = myPeer.connect(connectedPeerID.peerID);
            conn.on("open", () => {
                conn.send({ encryptedPgpKey: encryptedKey });
            });
        } catch (error) {
            console.log("got error", error);
        }
    }, [connectedPeerID.peerID]);

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

            {loading ? (
                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={60} />
            ) : (
                <>
                    {pgpPvtKey ? (
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
                                <CloseButton onClick={() => { setDisplayQR(!displayQR) }} style={{ color: theme.default.secondaryColor }} />
                            </CloseButtonContainer>

                            <QRContainer>
                                <TextContainer>

                                    <QRHeading
                                    >Set up Push Chat on your phone</QRHeading>
                                    <TextInfo >
                                        <p>1. Open an app using Push protocol</p>
                                        <p style={{ display: "flex" }}>2. Tap Push Chat
                                            <ChatBoxImage src={chatBoxImage} />
                                            or Sign in with Push Chat
                                        </p>
                                        <p>3. Tap Link Push Chat and point your phone to this code </p>
                                    </TextInfo>

                                    <div>
                                        <NoteText>
                                            <span style={{ color: "#E93636" }}>Note: </span>
                                            The QR code enables mobile app that supports Push Protocol to read and send messages. Only scan it with mobile apps you trust.
                                        </NoteText>
                                    </div>




                                </TextContainer>
                                <ItemHV2>
                                    {qrcode}
                                </ItemHV2>
                            </QRContainer>
                        </Container>
                    ) : (
                        null
                    )}
                </>
            )}




        </ItemVV2>
    );
};

export default ChatQR;

const Container = styled(ItemVV2)`
    width:856px; //for larger sizes 
    padding: 20px;
    
    //for smaller sizes < 768px
    @media ${device.tablet} {
        width:95%;
    }

    //for critical sizes 
    @media (min-width:1200px) and (max-width:1353px) {
        width:87%;
    }

    // this one is for when chat and inbox are displayed and screen size is less
    @media (min-width:769px) and (max-width:992px){
        width: 620px;
    }

    //this one is for when chat and sidebar are displayed together and screen size is very less for chat
    @media (min-width:993px) and (max-width:1199px){
        width:540px;
    }
    
`
const TextContainer = styled(ItemHV2)`
display:flex;
justify-content :center;
flex-direction:column;
align-items:baseline;
width:460px;

@media (max-width:1199px) {
    margin: 36px auto 0px auto ;
}

@media (max-width:1199px){
    justify-content: center;
    align-items:center;
}

`;


const QRHeading = styled.div`
font-size:28px;
text-align: left;
color: ${(props) => props.theme.default.color};
@media (max-width:1199px){
    padding-right: 40px; 
}
`

const TextInfo = styled.div`
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #657795;
    margin:10px 0px 0px 0px;
    padding-left: 7px;
`;

const NoteText = styled.p`
margin:0px;
font-family: 'Strawford';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height:19px;
color: #657795;
`

const CloseButtonContainer = styled.div`
    width:100%;
    text-align:end;
    text-align: end;

    @media (max-width:1199px){
        margin-bottom:30px;
    }
`;

const CloseButton = styled(AiOutlineClose)`
    cursor:pointer;
    font-size:20px;

`;

const ChatBoxImage = styled.img`
    height:18px;
    margin:0px 5px;
`

const QRContainer = styled(ItemVV2)`
    flex-direction:column-reverse;
    padding:0px;

    @media (min-width:1200px) and (max-width:1300px) {
        flex-direction:row;
        padding: 35px 20px 50px 10px;

    }

    @media (min-width:1300px){
        flex-direction:row;
        padding: 35px 30px 50px 30px;
    }

    @media(max-width:964px){
        flex-direction: column-reverse;
    }
`;