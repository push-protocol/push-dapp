// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { Space } from 'types';
import { shortenText } from 'helpers/UtilityHelper';

// Internal Configs
import { ImageV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS from 'config/Globals';
import { Spaces, UserSpaces } from 'types';
import { SpaceLocalContext } from 'contexts';


const SpaceRequestCard = (
    { spaceData,
    }: {
        spaceData: Space
    }
) => {

    const theme = useTheme();

    const [selected, setSelected] = useState(false);

    const {setSelectedSpace} = useContext(SpaceLocalContext);


    return (
        <SpaceSnapContainer
            padding="10px 7px 10px 10px"
            margin="5px 5px 5px 0"
            alignSelf="stretch"
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
            background={selected ? theme.space.snapFocusBg : 'transparent'}
            theme={theme}
            onClick={()=>setSelectedSpace(spaceData?.spaceInformation?.spaceId)}
        >

            <ItemHV2
                width="48px"
                maxWidth="48px"
                maxheight="48px"
                height="48px"
                borderRadius="100%"
                overflow="hidden"
                margin="0"
            >
                <ImageV2
                    alt="Profile"
                    src={spaceData?.spaceInformation?.spaceImage}
                />
            </ItemHV2>

            <InfoContainer>
                <HeadTextSection>
                    <PrimaryText>
                        {shortenText(spaceData?.spaceInformation?.spaceCreator, 6, 6)}
                    </PrimaryText>
                    <SecondaryText>
                        {spaceData?.spaceInformation?.scheduleAt ?? ' 4:30PM'}
                    </SecondaryText>
                </HeadTextSection>

                <SecondaryTextMessage>
                    {spaceData?.spaceInformation?.spaceName?.length > 27 ? spaceData?.spaceInformation?.spaceName?.slice(0, 27) + '...' : spaceData?.spaceInformation?.spaceName}
                </SecondaryTextMessage>
            </InfoContainer>

        </SpaceSnapContainer>


    );
};

export default SpaceRequestCard;

const SpaceSnapContainer = styled(ItemHV2)`
  flex:unset;
  font-family: 'Strawford';
  font-style: normal;
  &:hover{
    background: ${(props) => props.theme.space.snapFocusBg}};
  }
`;


const InfoContainer = styled(ItemVV2)`
    align-items: baseline;
    display:flex;
    flex-direction: column;

    margin:0px 0px 0 11px;
    gap: 4px;
`

const HeadTextSection = styled(ItemHV2)`

`

const PrimaryText = styled.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: -0.019em;
    color:${(props) => props.theme.default.color};
    flex:1;
`

const SecondaryText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme.default.secondaryColor};
    
    margin:0px;
`
const SecondaryTextMessage = styled(SecondaryText)`
    font-weight: 400;
    font-size: 15px;
`