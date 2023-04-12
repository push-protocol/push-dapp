import GroupModalHeader from 'components/chat/w2wChat/groupChat/createGroup/GroupModalHeader';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import React from 'react';
import styled, { useTheme } from 'styled-components';

const ScheduleModal = ({
    handleClose,
    setSpaceModalState,
}) => {

    const handlePrevious = () => {
        setSpaceModalState(1);
    }


    const theme = useTheme();

    return (
        <Container>
            <GroupModalHeader
                title="Schedule your Space"
                handleClose={handleClose}
                handlePrevious={handlePrevious}
            />

            <DateContainer>
                <LabelContainer>
                    <SpanV2
                        color={theme.modalHeadingColor}
                        fontWeight={500}
                        fontSize="18px"
                    >
                        Select date and time
                    </SpanV2>
                </LabelContainer>


            </DateContainer>




        </Container>
    );
};

export default ScheduleModal;

const Container = styled.div`
    width: 475px;
    padding:0px 12px;

`
const DateContainer = styled(ItemVV2)`
    margin-top:45px;
`
const LabelContainer = styled(ItemHV2)`
  justify-content: space-between;
  margin-bottom: 6px;
  @media ${device.mobileL} {
    min-width: 300px;
  }
`;

