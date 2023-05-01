import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Button, P } from 'primaries/SharedStyling';
import { shortenText } from 'helpers/UtilityHelper';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';

// Internal Components
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import { ReactComponent as MoreLight } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as CheckCircle } from 'assets/space/CheckCircle.svg'
import { ReactComponent as XCircle } from 'assets/space/XCircle.svg'
import Dropdown from 'components/Dropdown';
import { useClickAway } from 'react-use';
import MemberData from './MemberData';
import { useDeviceWidthCheck } from 'hooks';

const MenuOptions = ({
    optionData
}) => {

    const [selectedWalletAddress, setSelectedWalletAddress] = useState(null);
    const [dropdownheight, setDropDownHeight] = useState(0);

    const dropdownRef = React.useRef<any>(null);
    useClickAway(dropdownRef, () => setSelectedWalletAddress(null));
    const theme = useTheme();

    //this is for request section where we have two svgs
    const acceptRequest = optionData?.Acceptfunction;
    const declineRequest = optionData?.Declinefunction;


    const dropdownValues = optionData?.dropdownOptions;

    // const handleHeight = () => {
    //     const containerHeight = document.getElementById(member?.wallet)?.getBoundingClientRect();
    //     setDropDownHeight(containerHeight?.top);
    // };

    const isMobile = useDeviceWidthCheck(600);

    return (
        <Container>
            {optionData.id !== 'requests' && <FilledButton> {optionData.button} </FilledButton>}

            <MembersContainer>
                {optionData?.members?.map((member) => {
                    return (
                        <Members key={member.wallet} id={member.wallet}>
                            <ItemHV2 position='unset' width='auto' padding='8px 16px 8px 8px' background={theme.chat.snapFocusBg} borderRadius='16px' margin='10px 0 0 0'>
                                <Image src={member?.image}></Image>
                                <P flex='1' color={theme.modalProfileTextColor} margin="0px 20px" size="17px" weight="500">{shortenText(member?.wallet, 5, 5)}</P>


                                {optionData.id === 'requests' ? (
                                    <div>
                                        <XCircle width={isMobile ? '30px' : '48px'} onClick={declineRequest} />
                                        <CheckCircle width={isMobile ? '30px' : '48px'} onClick={acceptRequest} />
                                    </div>
                                ) : (
                                    <ItemVV2
                                        maxWidth="4px"
                                        padding="0 20px 0 0"
                                        onClick={() => {
                                            // handleHeight();
                                            setSelectedWalletAddress(member.wallet)
                                        }
                                        }
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {theme.scheme == 'light' ? <MoreLight /> : <MoreDark />}
                                    </ItemVV2>


                                )}

                                {(selectedWalletAddress === member.wallet) && (
                                    <DropdownContainer
                                        key={member.wallet}
                                        ref={dropdownRef}>
                                        <Dropdown
                                            dropdownValues={dropdownValues}
                                            hoverBGColor={theme.chat.snapFocusBg}
                                        />
                                    </DropdownContainer>
                                )}



                            </ItemHV2>

                        </Members>
                    )
                })}
            </MembersContainer>

        </Container>
    );
};

export default MenuOptions;

const Container = styled.div`
    width: 100%;
    margin:18px 0 0 0 ;
`

const FilledButton = styled(Button)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width:100%;
    background: #D53A94;
    border-radius: 12px;
    margin-bottom: 7px ;
`

const MembersContainer = styled.div`
    overflow-Y: scroll;
    max-height: 150px;
    &&::-webkit-scrollbar {
        width: 4px;
    }
    &&::-webkit-scrollbar-thumb {
        background: #cf1c84;
        border-radius: 10px;
    }
`

const Members = styled.div`
    position: unset;
    
`

const Image = styled.img`
  width: 48px;
  border-radius: 100%; 
`

const DropdownContainer = styled(ItemVV2)`
  position: absolute;
  right:26px;
  top:50%;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.default.border};
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
`;