// React + Web3 Essentials
import React from 'react';

// External Packages
import { useTheme } from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Internal Components
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

interface ITimePicker{
    timeValue:Dayjs;
    setTimeValue:(timeValue:Dayjs)=>void;
}

const CustomTimePicker = ({
    timeValue,
    setTimeValue
}:ITimePicker) => {

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