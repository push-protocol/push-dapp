// React + Web3 Essentials
import React from 'react';

// External Packages
import { useTheme } from 'styled-components';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Internal Components
import { ItemHV2 } from 'components/reusables/SharedStylingV2';

interface IDatePicker{
    dateValue:Dayjs;
    setDateValue:(dateValue:Dayjs)=>void;
}


const CustomDatePicker = ({
    dateValue,
    setDateValue
}:IDatePicker) => {

    const themes = useTheme();

    const theme = createTheme({
        components: {
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        paddingTop: '0px'
                    },
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        width: '100%'
                    }
                }
            }

        },
        palette: {
            mode: themes.materialUIMode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ItemHV2>


                    <DemoContainer
                        sx={{ width: '100%', paddingTop: "0px" }}
                        components={['MobileDatePicker']}
                    >
                        <MobileDatePicker
                            orientation='landscape'
                            format='ddd, MMM D'
                            disablePast={true}
                            value={dateValue}
                            onChange={(newValue) => setDateValue(newValue)}
                        />

                    </DemoContainer>

                </ItemHV2>
            </LocalizationProvider>
        </ThemeProvider>

    );
};

export default CustomDatePicker;