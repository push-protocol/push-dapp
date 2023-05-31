import { Content } from 'components/SharedStyling';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS, { device } from 'config/Globals';
import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as More } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import { ReactComponent as Info } from 'assets/chat/group-chat/info.svg';
import { ReactComponent as InfoDark } from 'assets/chat/group-chat/infodark.svg';
import SpaceTypeBar from '../spaceReusables/SpaceTypeBar';
import { SpaceGlobalContext, SpaceLocalContext } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import { Space } from 'types';
import { shortenText } from 'helpers/UtilityHelper';
import RequestBody from '../spaceReusables/RequestBody';
import { caip10ToWallet } from 'helpers/w2w';
import { useNavigate } from 'react-router';
import { SpaceInfoModalContent } from '../spaceModals/spaceInfoModal';
import { SpaceModule } from 'modules/space';
import useModalBlur, { MODAL_POSITION } from "hooks/useModalBlur";

const RequestBox = () => {

    const theme = useTheme();
    const { account } = useWeb3React();
    const navigate = useNavigate();
    const { userSpaces } = useContext(SpaceGlobalContext);
    const { selectedSpace, setSelectedSpace } = useContext(SpaceLocalContext);
    const [filteredUserData, setFilteredUserData] = useState<Space>();
    const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);

    const getUserData = (selectedSpace: string) => {
        const userDataFromSpaceId = userSpaces[account]?.spaces[selectedSpace];
        setFilteredUserData(userDataFromSpaceId);
    }

    const {
        isModalOpen: isSpaceInfoModalOpen,
        showModal: showSpaceInfoModal,
        ModalComponent: SpaceInfoModalComponent,
    } = useModalBlur();

    useEffect(() => {
        console.log("Space id changed", selectedSpace, typeof (selectedSpace));
        getUserData(selectedSpace);
    }, [selectedSpace])

    const goToRequests = () => {
        setSelectedSpace(null);
        // lastly, set navigation for dynamic linking
        navigate(`/space`);
    };


    return (
        <Container>
            <HeaderContainer borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.LARGE}>
                <ItemHV2
                    height="48px"
                    flex="initial"
                >
                    <TabletBackButton
                        margin="0px 5px 0px 0px"
                        color={theme.default.secondaryColor}
                        background="transparent"
                        hover="transparent"
                        hoverBackground="transparent"
                        onClick={goToRequests}

                    >
                        <MdOutlineArrowBackIos size={24} style={{ cursor: 'pointer' }} />
                    </TabletBackButton>

                    <ImageV2
                        height="48px"
                        width="48px"
                        alt="Profile Picture"
                        src={filteredUserData?.spaceImage}
                        borderRadius="100%"
                        overflow="hidden"
                        objectFit="cover"
                    />
                </ItemHV2>

                <SpanV2
                    flex="1"
                    margin="5px 10px"
                    fontWeight="400"
                    textAlign="start"
                >
                    {shortenText(caip10ToWallet(filteredUserData?.spaceCreator), 6)}
                </SpanV2>

                <MoreOptions onClick={() => !showMoreOptions ? setShowMoreOptions(true) : setShowMoreOptions(false)} >
                    <ItemHV2 padding="0px 11px 0px 0px">{theme.scheme == 'light' ? <More /> : <MoreDark />}</ItemHV2>
                    {showMoreOptions && (
                        <GroupInfo onClick={() => showSpaceInfoModal()}>
                            <ItemVV2 maxWidth="32px">{theme.scheme == 'light' ? <Info /> : <InfoDark />}</ItemVV2>
                            <SpanV2 color={theme.default.secondaryColor}>Space Info</SpanV2>
                        </GroupInfo>
                    )}
                </MoreOptions>
            </HeaderContainer>

            <SpaceInfoModalComponent InnerComponent={SpaceInfoModalContent} modalPadding='0px' modalPosition={MODAL_POSITION.ON_PARENT} />

            <BodyContainer>
                <RequestBody filteredUserData={filteredUserData} />
            </BodyContainer>

            <SpaceTypeBar />
        </Container>
    );
};

export default RequestBox;

const Container = styled(Content)`
  box-sizing: border-box;
  background: ${(props) => props.theme.chat.chatboxBg || 'transparent'};
  border-radius: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: stretch;
  text-align: center;
  font-weight: 400;
  justify-content: center;
  position: relative;
  padding:0px;
`;

const GroupInfo = styled(ItemHV2)`
  position: absolute;
  top: 32px;
  right: 15px;
  width: 200px;
  border: 1px solid ${(props) => props.theme.default.border};
  background-color: ${(props) => props.theme.default.bg};
  border-radius: 12px;
  justify-content: flex-start;
  gap: 9px;
  padding: 10px;
`;

const HeaderContainer = styled(ItemHV2)`
    position:absolute;
    align-items:center;
    justify-content:flex-start;
    top:10px;
    left:10px;
    color:${(props) => props.theme.default.color};
    background:${(props) => props.theme.default.bg};
    padding:6px;
    width: -webkit-fill-available;
    margin: 0px 10px;
    font-weight:500;
    z-index:1;

`

const BodyContainer = styled(ItemVV2)``

const FooterContainer = styled(ItemHV2)`


`

const TabletBackButton = styled(ButtonV2)`
  display: none;

  @media ${device.tablet} {
    display: initial;
  }
`;

const MoreOptions = styled.div`
  position: relative;
  height: 100%;
  max-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;