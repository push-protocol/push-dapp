import GroupModalHeader from 'components/chat/w2wChat/groupChat/createGroup/GroupModalHeader';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button } from 'primaries/SharedStyling';


type ScheduleModalType = {
    handleClose: ()=>{};
    setSpaceModalState: ()=>{};
}

const ScheduleModal = ({
    handleClose,
    setSpaceModalState,
}:ScheduleModalType) => {

    const handlePrevious = () => {
        setSpaceModalState(1);
    }

    const DateSx = {
        "& .MuiTextField-root ":{
            background: 'red',
            width:'100%'
        },
        
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

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <ItemHV2>
                        <DemoContainer 
                        sx={{width:'100%'}}
                        components={['DatePicker']}>
                            <DatePicker 
                                sx={DateSx}
                                defaultValue={dayjs('2022-04-17')} 
                                format='ddd, MMM D'
                            />
                        </DemoContainer>
                        <DemoContainer sx={{width:'100%'}} components={['MobileTimePicker']}>
                            <DemoItem>
                                <MobileTimePicker sx={{width:'100%'}} defaultValue={dayjs('2022-04-17T15:30')} />
                            </DemoItem>
                        </DemoContainer>
                    </ItemHV2>
                </LocalizationProvider>

                <ItemVV2 margin="30px 0px 0px 0px">
                    <ScheduleButton>Schedule</ScheduleButton>
                </ItemVV2>
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
    padding:0px 25px;
`
const LabelContainer = styled(ItemHV2)`
  justify-content: space-between;
  margin-bottom: 6px;
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
