// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
// Internal Components
import { ImageV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'components/SharedStyling';
import { AiOutlineCalendar, AiOutlineMore } from 'react-icons/ai'
import { P } from 'primaries/SharedStyling';
import {ReactComponent as ScheduledSpaceSVG} from 'assets/space/ScheduledSpace.svg'
import {ReactComponent as EmailSVG} from 'assets/space/Email.svg'
import {ReactComponent as LensterSVG} from 'assets/space/Lenster.svg'
import {ReactComponent as TwitterSVG} from 'assets/space/Twitter.svg'
import {ReactComponent as LinkSVG} from 'assets/space/Link.svg'
import { Space } from 'types';
import { shortenText } from 'helpers/UtilityHelper';
import { device } from 'config/Globals';
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router';
import useMediaQuery from 'hooks/useMediaQuery';
import { SpaceLocalContext } from 'contexts';


const SpaceItem = ({currentSpace, step, setStep}) => {
  const theme = useTheme();

  return(
    <ScheduledItem theme={theme}>
          <CardItem>

          <TopItem>
            <DivItem>
              <Image src={currentSpace.spaceImage}></Image>
              <P color='#fff' margin="0px 20px" size="17px" weight="500">{shortenText(currentSpace?.spaceCreator,5,5)}</P>
              <SpanV2 background='rgba(255, 255, 255, 0.2)' color='#ffff' borderRadius="8px" fontSize="12px" fontWeight="500" padding="8px">Host</SpanV2>
            </DivItem>
            
          
          
          <ItemTop>
            <ButtonItem radius='8px' bg='transparent' color='#fff' border='1px solid white' margin='0 10px 0 0'style={{whiteSpace:'nowrap'}}>Edit Space</ButtonItem>
            <Settings />
          </ItemTop>

          </TopItem>

          <Div>
            <P color='#fff' margin="50px 0px 5px 0px" size="28px" weight="500">{shortenText(currentSpace?.spaceCreator,5,5)}’s Space</P>
            <P color='#fff' margin="0px 0px" size="16px" weight="400">{currentSpace.spaceName}</P>

          <DateSection>
            <Div><AiOutlineCalendar color='#fff' size={25} /></Div>
            <P size="14px" weight="500" margin='0px 10px' color='#ffff'>{currentSpace?.scheduleAt ?? '30 Apr 4:30PM'}</P>
          </DateSection>

          </Div>
          </CardItem>
          


          <DivCard step={step}>
            <Div>
                <ScheduledSpaceSVG />
            </Div>
            
            {step === 1 && (<><P size="16px" weight="500" margin='10px 0px 5px 0px' color={theme.snackbarBorderText}>
              Your space is scheduled. 
            </P>
            <P size="16px" weight="500" margin='0px 10px' color={theme.snackbarBorderText}>
              Share and let people know when to join!
            </P></>)}

          

            {step === 2 && (<P size="16px" weight="500" margin='10px 10px 0px 10px' color={theme.snackbarBorderText}>
              This space will go live on 5 Apr at 9:00 AM
            </P>)}

            {step === 3 && (<P size="16px" weight="500" margin='10px 10px' color={theme.snackbarBorderText}>
              It’s time to start your space
            </P>)}

            <SpaceLink>

            {step === 2 && (<SpaceDiv>
              <ButtonDiv margin="20px 0px 0px 0px">Remind Me</ButtonDiv>
            </SpaceDiv>)}

            {step === 3 && (<SpaceDiv>
              <ButtonDiv padding="16px 54px" margin="0px 0px 0px 0px">Start this space</ButtonDiv>
            </SpaceDiv>)}
            

            {(step === 1 || step === 2) && (<LinkSection>
              <LinkDiv>
                <LinkIcon><TwitterSVG className='svg' /></LinkIcon>
                <P size="12px" weight="200" margin='10px 0px' color={theme.snackbarBorderText}>Twitter</P>
              </LinkDiv>

              <LinkDiv>
                <LinkIcon><LensterSVG  className='svg' /></LinkIcon>
                <P size="12px" weight="200" margin='10px 0px' color={theme.snackbarBorderText}>Lenster</P>
              </LinkDiv>

              <LinkDiv>
                <LinkIcon><LinkSVG  className='svg' /></LinkIcon>
                <P size="12px" weight="200" margin='10px 0px' color={theme.snackbarBorderText}>Copy Link</P>
              </LinkDiv>

              <LinkDiv>
                <LinkIcon><EmailSVG  className='svg' /></LinkIcon>
                <P size="12px" weight="200" margin='10px 0px' color={theme.snackbarBorderText}>Email</P>
              </LinkDiv>
            </LinkSection>)}

            </SpaceLink>
          </DivCard>
        </ScheduledItem>
  )
}

export const ScheduledSpace = ({currentSpace}:{currentSpace:Space}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { setSelectedSpace } = useContext(SpaceLocalContext);
  const isMobile = useMediaQuery(device.tablet);

  const goToSpaces = () => {
    setSelectedSpace(null);

    // lastly, set navigation for dynamic linking
    navigate(`/space`);
  };


  return (
    <>{isMobile ? (<ScrollView isMobile={isMobile}>
      <MobileTopView onClick={()=>goToSpaces()}>
        <Div><FiArrowLeft size={25} color={theme.snackbarBorderText} /></Div>
        <P color={theme.snackbarBorderText} margin="0px 20px" size="19px" weight="500">{shortenText(currentSpace?.spaceCreator,5,5)}’s Space</P>
      </MobileTopView>

      <SpaceItem currentSpace={currentSpace} step={step} setStep={setStep} />   
    </ScrollView>) : 
    (<SpaceItem currentSpace={currentSpace} step={step} setStep={setStep} /> )}
    </>
  )
}

// const ScheduledItem = styled(ItemVV2)`
const ScheduledItem = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column !important;
  margin: auto auto;
  height: auto;
  background: ${(props) => props.theme.modalContentBackground};
  border-radius: 22px;
  // flex: 0 !important;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 768px) {
    width: auto;
    border: 1px solid rgba(87, 93, 115, 0.2);
  }

  @media (min-width: 768px) and (max-width: 1330px) {
    width: 95%;
  }

  @media (min-width: 768px) and (max-height: 780px) {
    width: 95%;
    position: relative;
    justify-content: inherit;
    height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    // flex: auto !important;
  }
`;

const Div = styled.div`
`;

const ButtonDiv = styled.div`
  align-items: stretch !important;
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 16px 0px;
  font-size: 16px;
  color: #fff;
  background: #D53A94;
  border-radius: 15px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

`;

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 0 57px 0px;
  padding: ${(props) => props.step === 3 ? "63px 0 97px 0" : (props) => props.step === 2 ? "36px 0 56px 0px" : "43px 0 67px 0"};


`;

const DateSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6px;
`;

const SpaceLink = styled.div`
  display: flex;
  flex-direction: column;
  // margin-top: 20px;
`;

const SpaceDiv = styled.div`
  padding: 0 6px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
`;

const LinkIcon = styled.div`
  background: ${(props) => props.theme.space.spaceIcon};
  padding: 15px;
  border-radius: 14px;

  .svg {
    display: block;
  }
`;

const CardItem = styled.div`
  background: linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%);
  padding: 16px 24px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 22px;
`;

const DivItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const TopItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1330px) {
    flex-direction: column;
  }
`;
const ButtonItem = styled(Button)`
  @media (max-width: 768px) {
    flex:1;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1330px) {
    flex:1;
    width: 100%;
  }
`;
const ItemTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    flex:1;
    width: 100%;
    margin-top: 10px;
  }
  
  @media (min-width: 768px) and (max-width: 1330px) {
    flex:1;
    width: 100%;
    margin-top: 10px;
  }
`;

const Image = styled.img`
  width: 3.5em;
  border-radius: 100%; 
`

const Settings = styled(AiOutlineMore)`
  width: 27px;
  height: 30px;
  cursor: pointer;
  color: white;
  // transition: 400ms;
`;

const MobileTopView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px;
`;

const ScrollView = styled.div`
  @media (max-width: 768px) {
    padding: 16px;
    box-sizing: border-box;
    background: ${(props) => props.theme.modalContentBackground};
  }
    
`;
