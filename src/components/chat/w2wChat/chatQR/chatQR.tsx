// React + Web3 Essentials
import React, { useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useClickAway } from "react-use";

// External Packages
import usePeer from "hooks/usePeer";
import { QRCodeCanvas } from "qrcode.react";
import styled, { useTheme } from "styled-components";
import { AiOutlineClose, } from "react-icons/ai";

// Internal Compoonents
import CryptoHelper from 'helpers/CryptoHelper';
import LoaderSpinner, { LOADER_SPINNER_TYPE,LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";


// Internal Configs
import GLOBALS, { device } from "config/Globals";
import { ChatUserContext } from "contexts/ChatUserContext";
import chatBoxImage from "../../../../assets/chat/chatBox.svg";

const ChatQR = ({ onClose, onConfirm: createGroup, toastObject }) => {
    const theme = useTheme();
    const { account } = useWeb3React();
    const { createUserIfNecessary, connectedPeerID,connectedUser } = useContext(ChatUserContext);
    const [myPeer, myPeerID] = usePeer();
    const [qrCodeText, setQrCodeText] = useState('');
    const [loading, setLoading] = useState(true);
    const [encryptedKey, setEncryptedKey] = useState('');
    const [pgpPvtKey,setPgpPvtKey] = useState(connectedUser?.privateKey);

    const handleClose = () => {
        onClose();
    }

    const containerRef = React.useRef(null);
    useClickAway(containerRef, () => handleClose());

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
        <>
            {loading ? (
                    <LoaderSpinner type={LOADER_TYPE.STANDALONE} spinnerSize={60} />
            ) : (
                <>
                    {pgpPvtKey ? (
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
                                <CloseButton onClick={() => { onClose() }} style={{ color: theme.default.secondaryColor }} />
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
        </>
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
        width:100%;
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