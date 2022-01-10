import React, {useRef, useState} from 'react';
import { useClick, useClickAway } from 'react-use';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import Loader from 'react-loader-spinner';

import {Item, H2, H3, Span, Button, Input} from 'components/SharedStyling';

const ethers = require('ethers');


export default function AddDelegateModal({
    onClose,onSuccess, addDelegate
}) {

    const modalRef = useRef(null);
    const [mainAdress, setMainAddress] = useState('');
    const [loading, setLoading] = useState('');

    // Form signer and contract connection
    useClickAway(modalRef, onClose);

    const addDelegateFunction = () => {
        setLoading('loading')
        addDelegate(mainAdress)
        .then(async (tx) => {
            console.log(tx);
            setLoading("Transaction Sent!");

            setTimeout(() => {
                onSuccess();
                onClose();
            }, 2000);

        })
        .catch((err) => {
            console.log({
                err
            })
            setLoading('There was an error');
            setTimeout(() => {
                setLoading('')
            }, 2000)
        })
    };
    

    return (
        <Overlay>
            <AliasModal ref={modalRef}>
                <Item align="flex-start">
                    <H2 textTransform="uppercase" spacing="0.1em">
                    <Span weight="200">Add </Span><Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">Delegate</Span>
                    </H2>
                    <H3>Add an account who can send notifications on your behalf.</H3>
                </Item>
                <Item align="flex-start">
                    <CustomInput
                        required
                        placeholder="Enter the ethereum address"
                        radius="4px"
                        padding="12px"
                        border="1px solid #674c9f"
                        bg="#fff"
                        value={mainAdress}
                        onChange={(e) => {setMainAddress(e.target.value)}}
                    />
                </Item>
                <Item margin="15px 0px 0px 0px" flex="1" self="stretch" align="stretch">
                    <Button
                        bg='#e20880'
                        color='#fff'
                        flex="1"
                        radius="0px"
                        padding="20px 10px"
                        disabled={mainAdress.length !== 42}
                        onClick={addDelegateFunction}
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
                            value={loading ? loading : "Add Delegate"}
                        />
                    </Button>
                </Item>
            </AliasModal>
        </Overlay>
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
    padding: 20px 30px;
    background: white;
`;