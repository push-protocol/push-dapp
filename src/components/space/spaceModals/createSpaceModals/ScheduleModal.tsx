// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';

// Internal Components
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Button} from 'primaries/SharedStyling';
import ModalHeader from 'components/ModalHeader';
import CustomDatePicker from 'components/reusables/DatePicker/CustomDatePicker';
import CustomTimePicker from 'components/reusables/DatePicker/CustomTimePicker';

// Internal Configs
import { device } from 'config/Globals';

interface IScheduleModal{
    handleClose:boolean;
    setSpaceModalState:(spaceModalState:number)=>void;
    dateValue:Dayjs;
    setDateValue:(dateValue:Dayjs)=>void;
    timeValue:Dayjs;
    setTimeValue:(timeValue:Dayjs)=>void;
}

type ScheduleModalType = {
    handleClose: ()=>{};
    setSpaceModalState: ()=>{};
}

const ScheduleModal = ({
    handleClose,
    setSpaceModalState,
    dateValue,
    setDateValue,
    timeValue,
    setTimeValue
}:IScheduleModal) => {

    const handlePrevious = () => {
        setSpaceModalState(1);
    }

    const theme = useTheme();
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };


    return (
        <Container>
            <ModalHeader
                title="Schedule your Space"
                handleClose={handleClose}
                handlePrevious={handlePrevious}
            />

            <BodyContainer>
                <DateContainer>
                    <LabelContainer>
                        <SpanV2
                            color={theme.modalHeadingColor}
                            fontWeight={500}
                            fontSize="18px"
                        >
                            Select date
                        </SpanV2>
                    </LabelContainer>

                    <CustomDatePicker 
                    dateValue={dateValue}
                    setDateValue={setDateValue}
                    />



                </DateContainer>

                <TimeContainer>

                    <LabelContainer>
                        <SpanV2
                            color={theme.modalHeadingColor}
                            fontWeight={500}
                            fontSize="18px"
                        >
                            Select time
                        </SpanV2>
                    </LabelContainer>

                    <CustomTimePicker 
                    timeValue={timeValue}
                    setTimeValue={setTimeValue}
                    />
                </TimeContainer>

                <ItemVV2 margin="30px 0px 0px 0px">
                    <ScheduleButton>Schedule</ScheduleButton>
                </ItemVV2>

            </BodyContainer>









        </Container>
    );
};

export default ScheduleModal;

const Container = styled.div`
    width: 475px;
    padding:0px 12px;

    @media (max-width:400px){
        width:300px;
        padding:0px;
    }

    @media (max-width:600px){
        width:350px;
        padding:0px;
    }

`

const BodyContainer = styled(ItemVV2)`
    padding:0px 25px;
    @media (max-width:600px){
        padding:0px;
    }
`

const DateContainer = styled(ItemVV2)`
    margin-top:45px;
   
`

const TimeContainer = styled(ItemVV2)`
    margin-top:20px;
   
`

const LabelContainer = styled(ItemHV2)`
  justify-content: space-between;
  margin: 10px 0px;
  @media ${device.mobileL} {
    min-width: 300px;
  }
`;


const ScheduleButton = styled(Button)`
    width: 100%;
    background: #D53A94;
    border-radius: 15px;
    padding:16px;
`
