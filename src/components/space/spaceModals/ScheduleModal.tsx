import GroupModalHeader from 'components/chat/w2wChat/groupChat/createGroup/GroupModalHeader';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button } from 'primaries/SharedStyling';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CustomDatePicker from 'components/reusables/DatePicker/CustomDatePicker';
import CustomTimePicker from 'components/reusables/DatePicker/CustomTimePicker';



const ScheduleModal = ({
    handleClose,
    setSpaceModalState,
    dateValue,
    setDateValue,
    timeValue,
    setTimeValue
}) => {

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
            <GroupModalHeader
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
