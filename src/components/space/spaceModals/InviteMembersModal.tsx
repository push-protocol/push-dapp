//React
import React from 'react';

//External packages
import styled, { useTheme } from 'styled-components';

//Internal packages
import ModalHeader from 'components/ModalHeader';
import { ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import SearchWallets from 'components/searchAndAddMembers/SearchWallets';
import { Button } from 'primaries/SharedStyling';
import { User } from 'types/chat';


type InviteMembersModalType = {
    handleClose : ()=>{};
    memberList:Array<User>;
    setSpaceModalState: ()=>{}
    setMemberList: ()=>{};
  };

const InviteMembersModal = ({
    handleClose,
    setSpaceModalState,
    memberList,
    setMemberList
}:InviteMembersModalType) => {

    const theme = useTheme();

    const handlePrevious = ()=>{
        setSpaceModalState(1);
    }

    

    return (
        <Container>
            <ModalHeader
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

                <SearchWallets memberList={memberList} setMemberList={setMemberList} spaces={true}/>

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