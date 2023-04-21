// React + Web3 Essentials
import React, { useState } from 'react';

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

export const ActiveSpaces = () => {
  const theme = useTheme();
  
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

  return (
    <StackedItems>
    <ActiveSpaceItem theme={theme}>
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
      


      <DivCard>
        <SpaceSection>
            {SpaceList?.map((item) => (
                <SpaceItem>
                    <SpaceImage src={item.image} alt="" />
                    
                    
                    <P size="14px" weight="500" margin='10px 0px 0px 0px' color={theme.default.color}>{item.name}</P>

                    <P size="14px" weight="400" margin='5px 0px 0px 0px' color={theme.default.secondaryColor}>{item.role}</P>
                </SpaceItem>
            ))}
        </SpaceSection>

        <SpaceButton>Join this space</SpaceButton>
      </DivCard>
    </ActiveSpaceItem>

    <RequestItem>
      <RequestSpan>
        <BsFillMicFill size={22} color='#D53A94' />
        <P size="14px" weight="500" color='#D53A94' margin="0px 8px">Speaking</P>
      </RequestSpan>
            
            <RequestDiv>
              <BsPeople size={25} color={'#657795'} />
              <BsShare size={20} color={'#657795'}  />
              <Button bg="transparent" border="1px solid #D53A94" color='#D53A94' size="14px" weight="500" radius="12px" padding="12px 32px">Leave</Button>
            </RequestDiv>
    </RequestItem>
    </StackedItems>
  )
}

const StackedItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  // align-items: center;
  // justify-content: center;
  gap: 10px 0px;
  margin: auto 0;
  height: auto;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 1330px) {
      width: 95%;
    }
  
    @media (min-width: 768px) and (max-height: 780px) {
      width: 95%;
      position: relative;
      justify-content: inherit;
      height: 400px;
      overflow: hidden;
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
`;

const RequestSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// const ActiveSpaceItem = styled(ItemVV2)`
const ActiveSpaceItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column !important;
  margin: auto auto;
  height: auto;
  background: ${(props) => props.theme.modalContentBackground};
  border-radius: 22px;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 768px) {
    width: auto;
    border: 1px solid rgba(87, 93, 115, 0.2);
  }

  // @media (min-width: 768px) and (max-width: 1330px) {
  //   width: 95%;
  // }

  // @media (min-width: 768px) and (max-height: 780px) {
  //   width: 95%;
  //   position: relative;
  //   justify-content: inherit;
  //   height: 400px;
  //   overflow: hidden;
  // }
`;

const Div = styled.div`
`;

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 8px 8px 8px;
  box-sizing: border-box;

    @media (min-width: 768px) and (max-height: 780px) {
      padding: 13px 0px 0px 0px;
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

const SpaceSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px 0px;

    max-height: 25em;
    overflow-y: scroll;

    &&::-webkit-scrollbar {
        width: 4px;
      }
      &&::-webkit-scrollbar-thumb {
        background: #cf1c84; 
        border-radius: 10px;
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
  margin-top: 30px;
  padding: 12px 5px;
  background: #D53A94;
  border-radius: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  position: relative;

  @media (min-width: 768px) and (max-height: 780px) {
         margin-top: 0px;
         margin: 0 8px;
         width: 95%;
         position: absolute;
         bottom: 8px;
    }
`;

const Settings = styled(AiOutlineMore)`
  width: 22.73px;
  height: 25px;
  cursor: pointer;
  color: white;
  // transition: 400ms;
`;