import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'components/SharedStyling';
import React from 'react';
import styled, { useTheme } from 'styled-components';

const EditChannelButtons = ({closeEditChannel,editChannel,pushDeposited}) => {
    const theme = useTheme();
    return (
        <Container>
            <ButtonContainer>
                <CancelButtons 
                    onClick={closeEditChannel}
                    style={{
                    background:theme.default.bg,
                    color:theme.logoBtnColor,
                    border:"1px solid",
                    }}>Cancel
                </CancelButtons>
                

                {pushDeposited ? ( 
                    <FooterButtons onClick={editChannel}>
                        Save Changes
                    </FooterButtons>) 
                    : (
                    <FooterButtons >
                        Deposit Push
                    </FooterButtons>
                )}


            </ButtonContainer>
        </Container>
    );
};

export default EditChannelButtons;

const Container = styled(ItemVV2)`
    width:100%;
    align-items: end;
    margin-top:35px;

`

const ButtonContainer = styled(ItemHV2)`
    justify-content: end;

    @media (max-width:425px){
        flex-direction:column-reverse;
    }

`;

const FooterButtons = styled(Button)`
font-family: 'Strawford';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
display: flex;
border-radius: 15px;
align-items: center;
text-align: center;
background: #CF1C84;
color:#fff;
padding: 16px 27px;
width: 10rem;

@media (min-width:425px) and (max-width:600px) {
    font-size: 15px;
    padding: 12px 12px;
    width: 7rem;
}

@media (max-width:425px){
    width: -webkit-fill-available;
}

`;

const CancelButtons = styled(FooterButtons)`
    margin-right:20px;
    @media (max-width:425px){
        margin-right:0px;
        margin-top:10px;
    }
`