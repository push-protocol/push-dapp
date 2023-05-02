// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import { ReactComponent as MoreLight } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as CheckCircle } from 'assets/space/CheckCircle.svg'
import { ReactComponent as XCircle } from 'assets/space/XCircle.svg'
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import Dropdown from 'components/Dropdown';
import { Button, P } from 'primaries/SharedStyling';
import { shortenText } from 'helpers/UtilityHelper';
import { useDeviceWidthCheck } from 'hooks';

type DropdownValueType = {
    id: number|string,
    title: string,
    function: () => void,
}

type MembersType={
    image:string,
    isAdmin:boolean,
    publicKey:string,
    wallet:string,
}

type IOptionType = {
    button : string,
    dropdownOptions: DropdownValueType[],
    id:string,
    members:MembersType[],
    title:string,
    Acceptfunction?:()=>void,
    Declinefunction?:()=>void,
}

type IOptionsDataType = {
    optionData:IOptionType
}

const MenuOptions = ({
    optionData
}:IOptionsDataType) => {

    const [selectedWalletAddress, setSelectedWalletAddress] = useState(null);
    const [dropdownheight, setDropDownHeight] = useState(0);

    const dropdownRef = React.useRef<any>(null);
    useClickAway(dropdownRef, () => setSelectedWalletAddress(null));
    const theme = useTheme();

    //this is for request section where we have two svgs
    const acceptRequest = optionData?.Acceptfunction;
    const declineRequest = optionData?.Declinefunction;


    const dropdownValues = optionData?.dropdownOptions;

    const handleHeight = (id) => {
        const containerHeight = document.getElementById(id?.wallet)?.getBoundingClientRect();
        console.log("containerHeight",containerHeight)
        setDropDownHeight(containerHeight?.top);
    };

    const isMobile = useDeviceWidthCheck(600);

    return (
        <Container>
            {optionData.id !== 'requests' && <FilledButton> {optionData.button} </FilledButton>}

            <MembersContainer>
                {optionData?.members?.map((member) => {
                    return (
                        <Members key={member.wallet} id={member.wallet}>
                            <ItemHV2 position='relative' width='auto' padding='8px 16px 8px 8px' background={ selectedWalletAddress === member.wallet && theme.chat.snapFocusBg} borderRadius='16px' margin='10px 0 0 0'>
                                <Image src={member?.image}></Image>
                                <P flex='1' color={theme.modalProfileTextColor} margin="0px 20px" size="17px" weight="500">{shortenText(member?.wallet, 5, 5)}</P>


                                {optionData.id === 'requests' ? (
                                    <div>
                                        <XCircle style={{cursor:'pointer'}} width={isMobile ? '30px' : '48px'} onClick={declineRequest} />
                                        <CheckCircle style={{cursor:'pointer'}} width={isMobile ? '30px' : '48px'} onClick={acceptRequest} />
                                    </div>
                                ) : (
                                    <ItemVV2
                                        maxWidth="4px"
                                        padding="0 20px 0 0"
                                        onClick={() => {
                                            handleHeight(member);
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
                                    style={{
                                        top:dropdownheight>550 ? '-84%' : '15%'
                                    }}
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
    max-height: 300px;
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
//   right:26px;
//   top:40%;
  right:10px;
  top:0%;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.default.border};
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
`;