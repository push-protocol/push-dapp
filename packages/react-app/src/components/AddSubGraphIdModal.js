import React, { useRef, useState } from "react";
import styled, {ThemeProvider, useTheme} from "styled-components";
import Loader from "react-loader-spinner";
import { useClickAway } from "react-use";
import {
  Item,
  H3,
  Span,
  Button,
  H2,
  Input
} from "primaries/SharedStyling";
const ethers = require("ethers");

export default function AddSubGraphIdModal({
onClose, onSuccess, addSubGraphDetails
}) {

    const themes = useTheme();
    const modalRef = useRef(null);
    const [subGraphId, setSubGraphId] = useState('');
    const [pollTime, setPollTime] = useState('');
    const [loading, setLoading] = useState('');

    // Form signer and contract connection
    useClickAway(modalRef, () => onClose(loading !== ''));

    const addSubGraphDetailsSubmit = async () => {
        if (pollTime == '' || subGraphId == '') {
            setLoading('Fields are empty! Retry');
            setTimeout(() => {
                setLoading('')
            }, 2000);
            return;
        } else if (pollTime < 60) {
            setLoading('Poll Time must be at least 60 sec');
            setTimeout(() => {
                setLoading('')
            }, 2000);
            return;
        }
        try {
            setLoading('loading');

            const input = pollTime + "+" + subGraphId;

            // Prepare Identity bytes
            const identityBytes = ethers.utils.toUtf8Bytes(input);

            addSubGraphDetails(identityBytes)
                .then(async (tx) => {
                    console.log(tx);
                    setLoading("Transaction Sent!");

                    setTimeout(() => {
                        onSuccess();
                        onClose();
                    }, 2000);
                }).catch((err) => {
                    console.log(err);
                    setLoading('There was an error');
                    setTimeout(() => {
                        setLoading('')
                    }, 2000);
                    onClose();
                })
        } catch (err) {
            console.log(err)
            setLoading('There was an error');
            setTimeout(() => {
                setLoading('')
            }, 2000);
            onClose();
        }
    };
    
    return (
    <ThemeProvider theme={themes}>
      <Overlay>
        <AliasModal ref={modalRef} background={themes}>
            <Item align="flex-start">
                <H2 textTransform="uppercase" spacing="0.1em">
                <Span weight="200" color={themes.color}>Add </Span><Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">SubGraph</Span>
                </H2>
                <H3 color={themes.color}>Enter SubGraph Id and Poll Time (at least 60 sec)</H3>
            </Item>
            <Item align="flex-start">
                <CustomInput
                    required
                    placeholder="Enter SubGraph Id"
                    radius="4px"
                    padding="12px"
                    border="1px solid #674c9f"
                    bg="#fff"
                    value={subGraphId}
                    onChange={(e) => {setSubGraphId(e.target.value)}}
                />
            </Item>
            <Item align="flex-start">
                <CustomInput
                    required
                    type="number"
                    min="60"
                    placeholder="Enter Poll Time (in seconds)"
                    radius="4px"
                    padding="12px"
                    border="1px solid #674c9f"
                    bg="#fff"
                    value={pollTime}
                    onChange={(e) => {setPollTime(e.target.value)}}
                />
            </Item>
            <Item margin="15px 0px 0px 0px" flex="1" self="stretch" align="stretch">
                <Button
                    bg='#e20880'
                    color='#fff'
                    flex="1"
                    disabled={loading != ''}
                    radius="0px"
                    padding="20px 20px"
                    onClick={addSubGraphDetailsSubmit}
                >
                    { loading && <Loader
                        type="Oval"
                        color="#FFF"
                        height={16}
                        width={16}
                        />
                    }
                    <StyledInput
                        cursor="hand"
                        textTransform="uppercase"
                        color="#fff" weight="400"
                        size="0.8em" spacing="0.2em"
                        value={loading ? loading : "Add Subgraph Details"}
                    />
                </Button>
            </Item>
        </AliasModal>
      </Overlay>
    </ThemeProvider>
)
}

const StyledInput = styled(Input)`
width: 100%;
text-align: center;
caret-color: transparent;
`

const CustomInput = styled(Input)`
box-sizing: border-box;
width: 100%;
margin: 20px 0px;
`;

const Overlay = styled.div`
top: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.85);
height: 100%;
width: 100%;
z-index: 1000;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
overflow-y: scroll;
`;

const AliasModal = styled.div`
padding: 20px 25px;
background: ${props => props.background.mainBg};
`;
