import GroupModalHeader from 'components/chat/w2wChat/groupChat/createGroup/GroupModalHeader';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Clear } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import { displayDefaultUser } from 'helpers/w2w/user';
import { ethers } from 'ethers';
import { appConfig } from 'config';
import { User } from 'types/chat';
import * as w2wChatHelper from 'helpers/w2w';
import * as PushAPI from "@pushprotocol/restapi";
import { useWeb3React } from '@web3-react/core';
import MemberListContainer from 'components/chat/w2wChat/groupChat/createGroup/MemberListContainer';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ReactComponent as AddDark } from 'assets/chat/group-chat/adddark.svg';
import { ReactComponent as AddLight } from 'assets/chat/group-chat/addlight.svg';
import useToast from 'hooks/useToast';
import { MdError } from 'react-icons/md';
import { ReactComponent as MoreLight } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import DisplayWallets from 'components/DisplayWallets';
import { Button } from 'primaries/SharedStyling';

const InviteMembersModal = ({
    handleClose,
    setSpaceModalState,
    memberList,
    setMemberList
}) => {

    const theme = useTheme();

    const handlePrevious = ()=>{
        setSpaceModalState(1);
    }

    

    return (
        <Container>
            <GroupModalHeader
                title="Invite Members"
                handleClose={handleClose}
                handlePrevious={handlePrevious}
            />

           

            <ItemHV2
                margin="25px 0px 0px 0px"
            >
                <LabelContainer>
                    <SpanV2
                    color={theme.modalHeadingColor}
                    fontWeight={500}
                    fontSize="18px"
                    >
                        Invite people to your space
                    </SpanV2>
                    <SpanV2
                    color={theme.modalSecondaryTextColor}
                    fontWeight={400}
                    fontSize="14px"
                    >
                        {`0${memberList.length} / 04 members`}
                    </SpanV2>
                </LabelContainer>

                <DisplayWallets memberList={memberList} setMemberList={setMemberList} spaces={true}/>

            </ItemHV2>

            <Footer>
                <InviteButton>Send Invite</InviteButton>
               <FooterText>Skip</FooterText>
            </Footer>
        </Container>
    );
};

export default InviteMembersModal;

const Container = styled.div`
    width: 475px;
    padding:0px 12px;

    @media(max-width:600px){
        width: 350px;
        padding:0px;
    }

`

const LabelContainer = styled(ItemHV2)`
  justify-content: space-between;
  margin-bottom: 6px;
  @media ${device.mobileL} {
    min-width: 300px;
  }
`;

const Footer = styled(ItemHV2)`
    gap: 28px;
    margin-top:25px;
`

const InviteButton = styled(Button)`
    background: #D53A94;
    border-radius: 15px;
    width: 345px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    padding:16px;

    @media(max-width:600px){
        width: 224px;
    }


`

const FooterText = styled.p`
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #D53A94;
    width: 72px;
    justify-content: end;
    flex:1;
`