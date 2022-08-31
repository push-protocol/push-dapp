import React from 'react';
import styled from "styled-components";

import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';

import { ModalInnerComponentType } from "hooks/useModal";

const RemoveDelegateModalContent = ({onConfirm: removeDelegate, onClose}:ModalInnerComponentType)=>{
    const delegateAddressInputRef = React.useRef<HTMLInputElement>();

    const removeDelegateHandler = ()=>{
        const delegateAddress = delegateAddressInputRef?.current?.value;
        removeDelegate(delegateAddress);
        onClose();
    }

    return(
        <ModalContainer>
            <ModalHeader heading='Remove Delegate' subHeading='Remove an account who can send notifications on behalf of the channel'/>
            <ModalInput ref={delegateAddressInputRef} title="Delegate Address" />
            <ModalConfirmButton text="Remove Delegate" onClick={removeDelegateHandler} />
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 6% 1%;
`

export default RemoveDelegateModalContent;