import React from 'react';
import styled from "styled-components";

import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';

import { ModalInnerComponentType } from "hooks/useModal";

const AddDelegateModalContent = ({onConfirm : addDelegate}:ModalInnerComponentType)=>{
    const delegateAddressInputRef = React.useRef<HTMLInputElement>();

    const addDelegateHandler = ()=>{
        const delegateAddress = delegateAddressInputRef?.current?.value;
        addDelegate(delegateAddress)
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
        });
    }

    return(
        <ModalContainer>
            <ModalHeader heading='Add Delegate' subHeading='Add an account who can send notifications on behalf of the channel'/>
            <ModalInput ref={delegateAddressInputRef} title="Delegate Address" />
            <ModalConfirmButton text="Add Delegate" onClick={addDelegateHandler} />
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 6% 1%;
`

export default AddDelegateModalContent;