import React from 'react';
import GroupModalHeader from 'components/chat/w2wChat/groupChat/createGroup/GroupModalHeader';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import styled, { useTheme } from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from 'primaries/SharedStyling';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const CustomTimePicker = ({
    timeValue,
    setTimeValue
}) => {

    const DateSx = {
        "& .MuiTextField-root ": {
            background: 'red',
            width: '100%'
        },

    }

    const themes = useTheme();

    const theme = createTheme({
        components: {
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        
                    },
                }
            },
            
        },
        palette: {
            mode: themes.materialUIMode,
        },
    });


    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );


    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };


    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ItemHV2>
                    <DemoContainer sx={{ width: '100%',paddingTop:"0px" }} components={['MobileTimePicker']}>
                            <MobileTimePicker 
                            sx={{ width: '100%' }} 
                            value={timeValue}
                            onChange={(newValue) => setTimeValue(newValue)}
                            />
                    </DemoContainer>
                </ItemHV2>
            </LocalizationProvider>
        </ThemeProvider>

    );
};

export default CustomTimePicker;