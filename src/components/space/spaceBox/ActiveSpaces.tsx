// React + Web3 Essentials
import React, { useContext,useRef, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
// Internal Components
import { Button } from 'components/SharedStyling';
import { AiOutlineMore } from 'react-icons/ai'
import { P } from 'primaries/SharedStyling';
import {ReactComponent as LiveSVG} from 'assets/space/Live.svg'
import { BsHandIndex,BsMic, BsPeople, BsShare } from 'react-icons/bs'
import { FiArrowLeft, FiMicOff } from 'react-icons/fi';
import useMediaQuery from 'hooks/useMediaQuery';
import { SpaceLocalContext } from 'contexts';
import { device } from 'config/Globals';
import { useNavigate } from 'react-router';
import { Space } from 'types';
import { shortenText } from 'helpers/UtilityHelper';
import { useClickAway } from 'react-use';



interface SpaceListType {
  image: string;
  name: string;
  role: string;
  requestedAt?: boolean;
}

type ActiveSpacesType = {
   SpaceList: SpaceListType[];
   currentSpace: Space;
   space: boolean;
   joinSpace: ()=>void;
   leaveSpace: ()=>void;
};

const ActiveSpacesItem = ({SpaceList, currentSpace, space, joinSpace, leaveSpace}: ActiveSpacesType) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(device.tablet);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modal, setModal] = useState(null);
  const containerRef = React.useRef(null);

  const closeModal = () => {
    setShowModal(false);
  }
  useClickAway(containerRef, () => closeModal())

  const toggleModal = (data,i) => {
    setShowModal(!showModal);
    setModal(data);
    
  }

  return(
    <StackedItems theme={theme} ref={containerRef}>
    <ActiveSpaceItem>
      <CardItem>

      <TopItem>
        <DivItem>
          <P color='#fff' margin="0px 0px 0px 0px" size="28px" weight="500">{shortenText(currentSpace?.spaceCreator,5,5)}’s Space</P>
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
            {SpaceList?.map((item, i) => (
                <SpaceItem onClick={()=>toggleModal(item, i)}>
                    <SpaceImage src={item.image} alt="" />

                    {showModal && modal === item ? 
                        (<ModalContainer
                          style={{
                            background: theme.default.bg,
                            borderColor: theme.LinkMobileAppBorder,
                            color: theme.textcolor,
                          }}
                        >
                          <ModalText>Assign co-host</ModalText>
                          <ModalText>Assign Speaker</ModalText>
                        </ModalContainer>
                      ) : null}
                    
                    <P size="14px" weight="500" margin='10px 0px 0px 0px' color={theme.default.color}>{item.name}</P>

                    {!item?.requestedAt && (<SpaceDiv>
                    <P size="14px" weight="400"  margin='0px 0px 0px 0px' color={theme.default.secondaryColor}>{item.role}</P>
                    {item?.role == 'Co-host' || item?.role == 'Host' && (<FiMicOff color='#E93636' size={12}/>)}
                    </SpaceDiv> )}

                    {item.requestedAt && (<SpaceDiv>
                      <P size="14px" weight="400"  margin='0px 0px 0px 0px' color={'#D53A94'}>Requested</P>
                      <BsHandIndex color='#D53A94' size={12}/>
                    </SpaceDiv>)} 
                </SpaceItem>
            ))}
        </SpaceSection>

       

        {isMobile && space &&  
        (<MobileRequestItem>
          <MobileRequest>
            <RequestSpan>

              <BsMic size={22} color='#657795' />
              <P size="14px" weight="500" color='#D53A94' margin="0px 8px">Request</P>
            </RequestSpan>
                  
              <RequestDiv>
                <BsPeople size={25} color={'#657795'} />
                <BsShare size={20} color={'#657795'}  />
              </RequestDiv>
          </MobileRequest>

          <MobileRequestButton><Button bg="transparent" border="1px solid #D53A94" color='#D53A94' size="14px" weight="500" radius="12px" padding="12px 32px" flex='1 !important' display='flex !important' onClick={()=>leaveSpace()}>End Space</Button></MobileRequestButton>

          </MobileRequestItem>)} 

          {!space && (<ButtonDiv onClick={()=>joinSpace()}>
           <SpaceButton>Join this space</SpaceButton>
        </ButtonDiv>)}
    </ActiveSpaceItem>

    {!isMobile && space && (<RequestItem>
      <RequestSpan>
        {/* This displays when the current user is the one speaking */}
        {/* <BsFillMicFill size={22} color='#D53A94' />
        <P size="14px" weight="500" color='#D53A94' margin="0px 8px">Speaking</P> */}

        {/* This displays when the current user joins and want to request to speak*/}
        <BsMic size={22} color={theme.vcCrossIconColor} />
        <P size="14px" weight="500" color={theme.modalHeadingColor} margin="0px 8px">Request</P>

        {/* This displays when the current user joins and want to request to speak, and the request has been sent*/}
        {/* <BsFillCheckCircleFill size={22} color={'#30CC8B'} />
        <P size="14px" weight="500" color={theme.modalHeadingColor} margin="0px 8px">Request Sent</P> */}
      </RequestSpan>
            
            <RequestDiv>
              <BsPeople size={25} color={'#657795'} />
              <BsShare size={20} color={'#657795'}  />
              <Button bg="transparent" border="1px solid #D53A94" color='#D53A94' size="14px" weight="500" radius="12px" padding="12px 32px" onClick={()=>leaveSpace()}>Leave</Button>
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
  const [space, setSpace] = useState<boolean>(false);
  const joinSpace = () => {
      setSpace(true);
  }

  const leaveSpace = () => {
    setSpace(false);
}


  // spacelist will be the members under the currentSpace props when populated
  const SpaceList:SpaceListType[] = [
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
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener',
        requestedAt: true
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: '0x123...45678',
        role: 'Listener'
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

      <ActiveSpacesItem SpaceList={SpaceList} currentSpace={currentSpace} space={space} joinSpace={joinSpace} leaveSpace={leaveSpace} />   
    </ScrollView>) : 
    (<ActiveSpacesItem SpaceList={SpaceList} currentSpace={currentSpace} space={space} joinSpace={joinSpace} leaveSpace={leaveSpace} /> )}
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
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 30px;
  gap: 9px;
  width: fit-content;
  z-index:100;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  cursor:pointer;
  position: absolute;
  top: 70px;
  border: ${(props) => props.theme.space.modalBorder};

  @media (max-width: 768px) {
    padding: 8px 8px;
  }

`;

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

  padding: 20px 10px 10px 10px;
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
    margin-top: 10px;
    box-sizing: border-box;

    // height: 20em;
    height: 30em;
    overflow-y: scroll;
    padding: 8px;

    &&::-webkit-scrollbar {
        width: 4px;
      }
      &&::-webkit-scrollbar-thumb {
        background: #cf1c84; 
        border-radius: 10px;
      }

      @media (max-width: 768px) {
        padding: 8px;
        height: 20em;
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
  position: relative;
`;

const SpaceImage = styled.img`
    width: 52px;
    height: 52px;
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
    width: 100% !important;
    height: 100% !important;
    padding: 0px;
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

const SpaceDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  gap: 0 5px;
  align-items: center;
  margin: 5px 0px 0px 0px;
`;

const ModalText = styled.p`
font-family: 'Strawford';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
margin: 8px 0px;
color: ${(props) => props.theme.nav.color};
white-space: nowrap;
// color: #657795;
`;