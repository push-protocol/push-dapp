import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useContext, useEffect, useState } from 'react';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';
import { Button, P } from 'primaries/SharedStyling';
import ModalHeader from 'components/ModalHeader';
import { SpaceGlobalContext, SpaceLocalContext } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import MenuOptions from './MenuOptions';
import { shortenText } from 'helpers/UtilityHelper';
import { H2V2 } from 'components/reusables/SharedStylingV2';

const MemberMenuModal = ({ onClose }) => {
    const { account } = useWeb3React();
    const { selectedSpace } = useContext(SpaceLocalContext);
    const { userSpaces } = useContext(SpaceGlobalContext);
    const [currentSpace, setCurrentSpace] = useState(null);
    const theme = useTheme();
    const [optionSelected, setOptionSelected] = useState("Co-hosts");

    useEffect(() => {
        if (!selectedSpace) {
            setCurrentSpace(null);
            return;
        }
        setCurrentSpace(userSpaces[account]?.spaces[selectedSpace]);
    }, [selectedSpace]);


    const containerRef = React.useRef(null);
    useClickAway(containerRef, () => onClose());



    const assignCoHost = () => {
        console.log("Assigned Co-Host");
    }

    const removeCoHost = () => {
        console.log("Removed Co-Host");
    }

    const removeSpeaker = () => {
        console.log("Removed Speaker");
    }

    const assignSpeaker = () => {
        console.log("Assigned Speaker");
    }

    const acceptRequest = () => {
        console.log("Accepted Request");
    }

    const declineRequest = () => {
        console.log("Declined Request");
    }

    const memberOptions = {
        ['Co-hosts']: {
            id: 'co_hosts',
            title: 'Co-hosts',
            button: 'Invite Co-hosts',
            members: currentSpace?.members,
            dropdownOptions: [
                {
                    id: 'remove_co_host',
                    title: 'Remove Co-host',
                    function: () => removeCoHost(),
                }
            ]
        },
        ['Speakers']: {
            id: 'speakers',
            title: 'Speakers',
            button: 'Invite Speakers',
            members: currentSpace?.members,
            dropdownOptions: [
                {
                    id: 'assign_co_host',
                    title: 'Assign co-Host',
                    function: () => assignCoHost(),
                }, {
                    id: 'remove_speaker',
                    title: 'Remove Speaker',
                    function: () => removeSpeaker(),
                }
            ]
        },
        ['Requests']: {
            id: 'requests',
            title: 'Requests',
            button: 'Invite Requests',
            members: currentSpace?.pendingMembers,
            Declinefunction: () => declineRequest(),
            Acceptfunction: () => acceptRequest(),
        },
        ['Listeners']: {
            id: 'listeners',
            title: 'Listeners',
            button: 'Invite Listeners',
            members: currentSpace?.members,
            dropdownOptions: [
                {
                    id: 'accept_request',
                    title: 'Assign Co-Host',
                    function: () => assignCoHost(),
                }, {
                    id: 'assign_speaker',
                    title: 'Assign Speaker',
                    function: () => assignSpeaker(),
                }
            ]
        }

    }

    return (
        <Container ref={containerRef}>
            <ModalHeader title='Members' handleClose={onClose} />

            <BodyContainer>
                <ItemHV2 width='100%' padding='8px'>
                    <Image src={currentSpace?.spaceImage}></Image>
                    <P flex='1' color={theme.modalProfileTextColor} margin="0px 20px" size="17px" weight="500">{shortenText(currentSpace?.spaceCreator, 5, 5)}</P>
                    <SpanV2 background='#F3D7FA' color='#D53A94' borderRadius="8px" fontSize="12px" fontWeight="500" padding="8px">Host</SpanV2>
                </ItemHV2>

                <ItemHV2>

                    {Object.keys(memberOptions).map((member) => {
                        return (
                            <OuterContainer
                                style={{ borderBottom: optionSelected === member ? '2px solid #D53A94' : '2px solid #E4E8EF' }}
                            >
                                <Options fontWeight={optionSelected === member ? '500' : '400'} color={optionSelected === member ? '#D53A94' : '#657795'} onClick={() => setOptionSelected(member)}>
                                    {member}
                                </Options>
                            </OuterContainer>

                        )
                    })}

                </ItemHV2>

                <ItemVV2>
                    <MenuOptions memberData={memberOptions[optionSelected]} />
                </ItemVV2>

            </BodyContainer>







        </Container>
    );
};

export default MemberMenuModal;

const Container = styled.div`
    margin:11px 0px;
    width:475px;
    // min-height:390px;
    padding:15px;
    padding-right:20px;

`

const BodyContainer = styled.div`
    margin:32px 15px 0px 15px;
`

const Image = styled.img`
  width: 3.5em;
  border-radius: 100%; 
`

const HostButton = styled(Button)`
    background: #F3D7FA;
    border-radius: 8px;
`

const OuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    gap: 10px;
    flex:1;
    cursor: pointer;
    border-bottom: 1px solid #D53A94;
`

const Options = styled(H2V2)`
    font-family: 'Strawford';
    font-style: normal;
    font-size: 18px;
    line-height: 141%;
    display: flex;
    align-items: center;
    text-align: center;
`