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
import {ReactComponent as LiveSVG} from 'assets/space/Live.svg'
import { BsFillMicFill, BsPeople, BsShare } from 'react-icons/bs'
import { FiArrowLeft } from 'react-icons/fi';
import useMediaQuery from 'hooks/useMediaQuery';
import { SpaceLocalContext } from 'contexts';
import { device } from 'config/Globals';
import { useNavigate } from 'react-router';
import { Space } from 'types';
import { shortenText } from 'helpers/UtilityHelper';


const ActiveSpacesItem = ({SpaceList}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(device.tablet);

  return(
    <StackedItems theme={theme}>
    <ActiveSpaceItem>
      <CardItem>

      <TopItem>
        <DivItem>
          <P color='#fff' margin="0px 0px 0px 0px" size="28px" weight="500">0x123...45678’s Space</P>
        </DivItem>
        
        <ItemTop>
            <Settings />
        </ItemTop>
      </TopItem>

      <ListenerSection>
            <LiveSection>
                <Div><LiveSVG /></Div>
                <P size="14px" weight="500" margin='0px 10px' color='#ffff'>Live</P>
            </LiveSection>


            <LiveSection>
                <AvatarGroup>
                    <Image className="avatars__item" src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />

                    <Image className="avatars__item" src="https://randomuser.me/api/portraits/women/25.jpg" alt="" />

                    <Image className="avatars__item" src="https://randomuser.me/api/portraits/men/25.jpg" alt="" />
                </AvatarGroup>
                <P size="14px" weight="500" margin='0px 10px' color='#ffff'>+ 190 listeners</P>
            </LiveSection>
      </ListenerSection>
      </CardItem>
      


        <SpaceSection>
            {SpaceList?.map((item) => (
                <SpaceItem>
                    <SpaceImage src={item.image} alt="" />
                    
                    
                    <P size="14px" weight="500" margin='10px 0px 0px 0px' color={theme.default.color}>{item.name}</P>

                    <P size="14px" weight="400" margin='5px 0px 0px 0px' color={theme.default.secondaryColor}>{item.role}</P>
                </SpaceItem>
            ))}
        </SpaceSection>

        {isMobile ? 
        (<MobileRequestItem>
          <MobileRequest>
            <RequestSpan>
              <BsFillMicFill size={22} color='#D53A94' />
              <P size="14px" weight="500" color='#D53A94' margin="0px 8px">Speaking</P>
            </RequestSpan>
                  
              <RequestDiv>
                <BsPeople size={25} color={'#657795'} />
                <BsShare size={20} color={'#657795'}  />
              </RequestDiv>
          </MobileRequest>

          <MobileRequestButton><Button bg="transparent" border="1px solid #D53A94" color='#D53A94' size="14px" weight="500" radius="12px" padding="12px 32px" flex='1 !important' display='flex !important'>End Space</Button></MobileRequestButton>

          </MobileRequestItem>) : 
          (<ButtonDiv>
           <SpaceButton>Join this space</SpaceButton>
        </ButtonDiv>)}
    </ActiveSpaceItem>

    {!isMobile && (<RequestItem>
      <RequestSpan>
        <BsFillMicFill size={22} color='#D53A94' />
        <P size="14px" weight="500" color='#D53A94' margin="0px 8px">Speaking</P>
      </RequestSpan>
            
            <RequestDiv>
              <BsPeople size={25} color={'#657795'} />
              <BsShare size={20} color={'#657795'}  />
              <Button bg="transparent" border="1px solid #D53A94" color='#D53A94' size="14px" weight="500" radius="12px" padding="12px 32px">Leave</Button>
            </RequestDiv>
    </RequestItem>)}
    </StackedItems>
  )
}

export const ActiveSpaces =  ({currentSpace}:{currentSpace:Space}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(device.tablet);
  const { setSelectedSpace } = useContext(SpaceLocalContext);
  const navigate = useNavigate();


  
  const SpaceList = [
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/65.jpg',
        name: 'adam.eth',
        role: 'Co-host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Host'
    },
  ]

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

      <ActiveSpacesItem SpaceList={SpaceList} />   
    </ScrollView>) : 
    (<ActiveSpacesItem SpaceList={SpaceList} /> )}
    </>
  )
}

const StackedItems = styled.div`
  display: flex;
  flex-direction: column !important;
  width: 65%;
  gap: 10px 0px;
  margin: auto 0;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
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
`;

const RequestItem = styled.div`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.modalContentBackground};
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 8px 20px;
  border-radius: 16px;
  box-sizing: border-box;
`;

const RequestDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 16px;
  align-items: center;
`;

const RequestSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// const ActiveSpaceItem = styled(ItemVV2)`
const ActiveSpaceItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column !important;
  height: auto;
  background: ${(props) => props.theme.modalContentBackground};
  border-radius: 22px;
  overflow: hidden;
  @media (max-width: 768px) {
    border: 1px solid rgba(87, 93, 115, 0.2);
  }
`;

const Div = styled.div`
`;

const ButtonDiv = styled.div`
  padding: 23px 8px 8px 8px;
  box-sizing: border-box;

    @media (min-width: 768px) and (max-height: 780px) {
      padding: 13px 8px 8px 8px;
    }
`;

const LiveSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
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
`;

const ListenerSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MobileRequest = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const MobileRequestItem = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  padding: 10px;
  box-sizing: border-box;
`;

const MobileRequestButton = styled.div`
  margin-top: 10px;
  flex: 1;
  width: 100% !important;
  display: flex;
`;

const SpaceSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px 0px;
    margin-top: 20px;
    box-sizing: border-box;

    height: 20em;
    overflow-y: scroll;

    &&::-webkit-scrollbar {
        width: 4px;
      }
      &&::-webkit-scrollbar-thumb {
        background: #cf1c84; 
        border-radius: 10px;
      }

      @media (max-width: 768px) {
        padding: 8px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      @media (min-width: 768px) and (max-width: 1330px) {
         grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    
      @media (min-width: 768px) and (max-height: 780px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
`;

const SpaceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

const SpaceImage = styled.img`
    width: 4em;
    height: 4em;
    border-radius: 100%;
`;

const AvatarGroup = styled.div`
  display: flex;
  list-style-type: none;
  flex-direction: row;

  .avatars__item {
	  background-color: #d9d9d9;
	  border-radius: 100%;
	  display: block;
	  font-family: sans-serif;
	  font-size: 12px;
	  font-weight: 100;
	  height: 31px;
	  width: 31px;
	  line-height: 31px;
	  text-align: center;
	  transition: margin 0.1s ease-in-out;
	  overflow: hidden;
	 margin-left: -15px;
  
     &:first-child {
        z-index: 5;
        }
        &:nth-child(2) {
        z-index: 4;
        }
        &:nth-child(3) {
        z-index: 3;
        }
        &:nth-child(4) {
        z-index: 2;
        }
		&:nth-child(5) {
        z-index: 1;
        }
        &:last-child {z-index: 0}
        img{width:100%}
        }
        &:hover {
        .avatars__item {
             margin-right: 15px;
        }
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
`;

const SpaceButton = styled(Button)`
  width: 100%;
  padding: 12px 5px;
  background: #D53A94;
  border-radius: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  position: relative;
`;

const Settings = styled(AiOutlineMore)`
  width: 22.73px;
  height: 25px;
  cursor: pointer;
  color: white;
`;

const ScrollView = styled.div`
  @media (max-width: 768px) {
    width: 100vw !important;
    padding: 16px;
    box-sizing: border-box;
    background: ${(props) => props.theme.modalContentBackground};
  }
    
`;

const MobileTopView = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px;
`;