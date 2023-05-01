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

const MenuOptions = ({
    memberData
}) => {

    const [selectedWalletAddress, setSelectedWalletAddress] = useState(null);

    const dropdownRef = React.useRef<any>(null);
    useClickAway(dropdownRef, () => setSelectedWalletAddress(null));

    const theme = useTheme();
    const dropdownValues = memberData?.dropdownOptions;

    //this is when the section is requests
    const acceptRequest = memberData?.Acceptfunction;
    const declineRequest = memberData?.Declinefunction;


    return (
        <Container>
            <FilledButton> {memberData.button} </FilledButton>

            <MembersContainer>
                {memberData?.members?.map((member) => {

                    if (memberData.id === 'requests') {
                        console.log("request section", memberData);
                    }

                    return (
                        <Members>
                            <ItemHV2 position='relative' width='auto' padding='8px 16px 8px 8px' background={theme.chat.snapFocusBg} borderRadius='16px' margin='10px 0 0 0'>
                                <Image src={member?.image}></Image>
                                <P flex='1' color='#000' margin="0px 20px" size="17px" weight="500">{shortenText(member?.wallet, 5, 5)}</P>


                                {memberData.id === 'requests' ? (
                                    <div>
                                        <XCircle onClick={declineRequest} />
                                        <CheckCircle onClick={acceptRequest} />
                                    </div>
                                ) : (
                                    <ItemVV2
                                        maxWidth="4px"
                                        padding="0 20px 0 0"
                                        onClick={() => setSelectedWalletAddress(member.wallet)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {theme.scheme == 'light' ? <MoreLight /> : <MoreDark />}
                                    </ItemVV2>
                                )}

                            </ItemHV2>

                            {(selectedWalletAddress === member.wallet) && (
                                <DropdownContainer ref={dropdownRef}>
                                    <Dropdown
                                        dropdownValues={dropdownValues}
                                        hoverBGColor={theme.chat.snapFocusBg}
                                    />
                                </DropdownContainer>
                            )}

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
    overflow: scroll;
    max-height: 200px;
`

const Members = styled.div`
    position: relative;
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
  border: 1px solid #E5E8F7;
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
//   @media ${device.mobileL} {
//     left: 27%;
//   }
//   @media (min-width: 426px) and (max-width: 1150px) {
//     left: 48%;
//   }
`;