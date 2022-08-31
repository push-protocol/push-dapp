import React from 'react';
import styled from "styled-components";

import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';

import { ModalInnerComponentType } from "hooks/useModal";

const AddSubgraphModalContent = ({onClose, onConfirm: addSubgraph}:ModalInnerComponentType)=>{
    const subgraphIdInputRef = React.useRef<HTMLInputElement>();
    const pollTimeInputRef = React.useRef<HTMLInputElement>();

    const addSubgraphHandler = ()=>{
        const pollTime = pollTimeInputRef?.current?.value;
        const subgraphId = subgraphIdInputRef?.current?.value;
        addSubgraph(pollTime, subgraphId);
        onClose();
    }

    return(
        <ModalContainer>
            <ModalHeader heading='Add Subgraph' subHeading='Enter subgraph ID and Poll time (at least 60 sec)'/>
            <ModalInput ref={subgraphIdInputRef} title="Subgraph ID" />
            <ModalInput ref={pollTimeInputRef} title="Poll Time (in seconds)" />
            <ModalConfirmButton text="Add Subgraph" onClick={addSubgraphHandler} />
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    width:30vw;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 6% 1%;
`

export default AddSubgraphModalContent;