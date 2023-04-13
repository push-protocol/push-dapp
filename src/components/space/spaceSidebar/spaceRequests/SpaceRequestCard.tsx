import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Image from "assets/space/push-space.svg";
import GLOBALS from 'config/Globals';
import { Space } from 'types';
import { shortenText } from 'helpers/UtilityHelper';

const SpaceRequestCard = (
    { spaceData }: { spaceData: Space }
) => {

    const theme = useTheme();

    const [selected, setSelected] = useState(false);

    return (
        <Container>
            <ChatSnapContainer
                padding="10px"
                margin="5px 5px 5px 0"
                borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
                //   onClick={onClick}
                background={selected ? theme.chat.snapFocusBg : 'transparent'}
                hover={theme.chat.snapFocusBg}
                hoverBackground={selected ? theme.chat.snapFocusBg : 'transparent'}
            >

                <ProfileContainer>
                    <ItemVV2
                        width="48px"
                        maxWidth="48px"
                        borderRadius="100%"
                        overflow="hidden"
                        margin="0 5px 0 0"
                    >
                        <ImageV2
                            alt="Profile"
                            src={spaceData?.spaceImage}
                        />
                    </ItemVV2>
                </ProfileContainer>

                <InfoContainer>
                    <HeadTextSection>
                        <PrimaryText>
                            {shortenText(spaceData?.spaceCreator, 6, 6)}
                        </PrimaryText>
                        <SecondaryText>
                            {spaceData?.scheduleAt ?? ' 4:30PM'}
                        </SecondaryText>
                    </HeadTextSection>

                    <SecondaryText>
                        {spaceData?.spaceName?.length > 27 ? spaceData?.spaceName?.slice(0, 27) + '...' : spaceData?.spaceName}
                    </SecondaryText>
                </InfoContainer>

            </ChatSnapContainer>


        </Container>
    );
};

export default SpaceRequestCard;

const Container = styled.div`
    font-family: 'Strawford';
    font-style: normal;
    display: flex;
    width: 100%;

    &:hover{

    }

`
const ChatSnapContainer = styled(ButtonV2)`
  flex-direction: row;
  align-self: stretch;
`;


const ProfileContainer = styled(ItemVV2)`
    max-height: 48px;
    align-self: center;
    justify-content: flex-start;
`

const InfoContainer = styled(ItemVV2)`
    flex: 8;
    align-items: baseline;
    margin:0px 11px;
    gap: 4px;
`

const HeadTextSection = styled(ItemHV2)`

`

const PrimaryText = styled.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: -0.019em;
    color:${(props)=>props.theme.default.color};
    flex:1;
`

const SecondaryText = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    color: ${(props)=>props.theme.default.secondaryColor};
    
    margin:0px;
`