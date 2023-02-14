import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import {
    Button,
    Content,
    FormSubmision,
    H3,
    Input,
    Item,
    ItemH,
    P,
    Section,
    Span,
    TextField,
} from 'primaries/SharedStyling';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { isAllFilledAndValid } from 'helpers/InputValidation';
import { isValidUrl } from 'helpers/ValidationHelper';

const EditChannelForms = ({
    channelName,
    setChannelName,
    channelInfo,
    setChannelInfo,
    channelURL,
    setChannelURL,
    editChannel,
    errorInfo,
    setErrorInfo
}) => {

    const theme = useTheme();
    // const [errorInfo, setErrorInfo] = useState<{name:string, description:string, address:string, url:string}>({name: '',description: '', address: '', url: ''});
    // const [urlDetails,setUrlDetails] = useState(channelURL);


    const ErrorMessage = ({ message }) => {
        return (
            <Item display='flex' align='center' self='flex-start' direction='row' margin='7px 0px'>
                <AiFillExclamationCircle color='red' size='20' />
                <Span
                    size="14px"
                    weight="400"
                    margin="0px 5px"
                    color={'red'}>
                    {message}
                </Span>
            </Item>
        )
    }

    const handleUrlChange = (e)=>{
        const response = e.target.value;
        if (!isValidUrl(response)) {
            setErrorInfo(x => ({
              ...x,
              url: 'Channel URL is invalid! Please enter a valid url!',
            }));
            setChannelURL(response);
        }else{
            setErrorInfo('');
            setChannelURL(response);
        }


    }

    return (
        <Container>
            <Form onSubmit={editChannel} >
                <FormContainer>

                    <Item
                        margin="5px 0px 0px 0px"
                        flex="1"
                        self="stretch"
                        align="stretch"
                    >
                        <Label style={{ color: theme.editChannelPrimaryText }}>Channel Name</Label>
                        <Item
                            margin="7px 0px 0px 0px"
                            flex="1"
                            self="stretch"
                            align="stretch"
                            // border={theme.textAreaBorderColor}
                            radius="12px"
                        >
                            <Input
                                required
                                maxlength="40"
                                flex="1"
                                padding="13px 13px 14px 16px"
                                weight="400"
                                size="15px"
                                bg={theme.editChannelInputbg}
                                color={theme.editChannelPrimaryText}
                                border={theme.textAreaBorderColor}
                                focusBorder={theme.textAreaFocusBorder}
                                radius="12px"
                                height="25px"
                                value={channelName}
                                onChange={(e) => {
                                    setChannelName(e.target.value);
                                }}
                            />
                        </Item>

                    </Item>

                    {errorInfo?.name && (<ErrorMessage message={errorInfo?.name} />)}

                    <Item
                        margin="22px 0px 0px 00px"
                        flex="1"
                        self="stretch"
                        align="stretch"
                    // style={{ marginTop: `${chainDetails === coreChainId ? '30px' : '30px'}`, position: 'relative' }}
                    >
                        <Item
                            display="flex"
                            direction="row"
                            align="center"
                            flex="1"
                            self="stretch"
                            justify="space-between"
                        >
                            <Label style={{ color: theme.editChannelPrimaryText }}>Channel Description</Label>
                            <Span
                                color={theme.editChannelSecondaryText}
                                size="18px"
                                margin="0px 10px 0px 0px"
                                weight="500"
                            >
                                {250 - channelInfo.length}
                            </Span>
                        </Item>
                        <TextField
                            required
                            rows="4"
                            maxlength="250"
                            padding="12px 16px"
                            weight="400"
                            size="15px"
                            resize="none"
                            overflow="hidden"
                            line-height="140%"
                            margin="10px 0px 0px 0px"
                            border={theme.textAreaBorderColor}
                            focusBorder={theme.textAreaFocusBorder}
                            radius="12px"
                            bg={theme.editChannelInputbg}
                            color={theme.editChannelPrimaryText}
                            value={channelInfo}
                            onChange={(e) => {
                                setChannelInfo(e.target.value.slice(0, 250));
                            }}
                            autocomplete="off"
                        />
                    </Item>
                    {errorInfo?.description && (<ErrorMessage message={errorInfo?.description} />)}

                    <Item
                        margin="20px 0px 0px 0px"
                        flex="1"
                        self="stretch"
                        align="stretch"
                    >
                        <Label style={{ color: theme.editChannelPrimaryText }}>Channel Website URL</Label>
                        <Input
                            required
                            maxlength="40"
                            flex="1"
                            padding="12px 16px"
                            weight="400"
                            size="15px"
                            bg={theme.editChannelInputbg}
                            color={theme.editChannelPrimaryText}
                            height="25px"
                            margin="7px 0px 0px 0px"
                            border={theme.textAreaBorderColor}
                            focusBorder={theme.textAreaFocusBorder}
                            radius="12px"
                            value={channelURL}
                            // value={urlDetails}
                            onChange={(e) => {
                                handleUrlChange(e);
                                // setChannelURL(e.target.value);
                            }}
                        />
                    </Item>
                    {errorInfo?.url && (<ErrorMessage message={errorInfo?.url} />)}

                </FormContainer>
            </Form>
        </Container>
    );
};

export default EditChannelForms;

const Container = styled(Section)`
    display:block;

    @media (max-width:425px){
        margin:28px 0px 0px 0px;
    }

    @media (max-width:600px){
        margin:18px 0px 0px 0px;
    }
`;

const Form = styled(FormSubmision)`
    height:inherit;
`

const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`;

const FormContainer = styled(Item)`
width:100%;
align-items:flex-start;
font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`;

// const DropdownStyledParent = styled.div`
//   margin-top: 7px;
//   flex: 1;
//   .is-open {
//     margin-bottom: 110px;
//   }
// `;

// const DropdownStyled = styled(Dropdown)`
//   .Dropdown-control {
//     background-color: white;
//     color: #000;
//     border: 1px solid #bac4d6;
//     border-radius: 12px;
//     flex: 1;
//     outline: none;
//     height: 50px;
//     display: flex;
//     align-items: center;
//   }
//   .Dropdown-arrow {
//     top: 20px;
//     bottom: 0;
//     border-color: #f #000 #000;
//   }
//   .Dropdown-menu {
//     border-color: #bac4d6;
//     border-radius: 12px;
//     padding: 0.5rem 0;
//     .is-selected {
//       background-color: #fff;
//       color: #d00775;
//     }
//   }

//   .Dropdown-option {
//     background-color: #fff;
//     color: #000;
//     padding: 0.8rem 2rem;
//   }
//   .Dropdown-option:hover {
//     background-color: #fff;
//     color: #d00775;
//   }
// `;