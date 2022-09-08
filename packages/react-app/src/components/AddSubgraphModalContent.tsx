import React from 'react';
import styled from "styled-components";

import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';

import { ModalInnerComponentType } from "hooks/useModal";
import { useClickAway } from 'react-use';
import { MdCheckCircle, MdError } from 'react-icons/md';

const AddSubgraphModalContent = ({onClose, onConfirm: addSubgraph, toastObject}:ModalInnerComponentType)=>{
    const subgraphIdInputRef = React.useRef<HTMLInputElement>();
    const pollTimeInputRef = React.useRef<HTMLInputElement>();

    const [isLoading, setIsLoading] = React.useState(false);

    const handleClose = () => !isLoading && onClose();

    // to close the modal upon a click on backdrop
    const containerRef = React.useRef(null);
    useClickAway(containerRef, () => handleClose())

    const addSubgraphHandler = () => {
        const pollTime = pollTimeInputRef?.current?.value;
        const subgraphId = subgraphIdInputRef?.current?.value;

        setIsLoading(true);


        if (pollTime == '' || subgraphId == '') {
            toastObject.showToast("");
            toastObject.updateToast("Transaction Failed", "Fields are empty! Retry", "ERROR", (size) => <MdError size={size} color="red" />)
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
            return;
        } else if (parseInt(pollTime) < 60) {
            toastObject.showToast("");
            toastObject.updateToast("Transaction Failed", "Poll Time must be at least 60 sec", "ERROR", (size) => <MdError size={size} color="red" />)
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
            return;
        }


        addSubgraph(pollTime, subgraphId)
        .then(async (tx) => {
            console.log(tx);
           
  
            toastObject.showToast("");
            toastObject.updateToast("Subgraph Added", "Subgraph has been added successfully", "SUCCESS", (size) => <MdCheckCircle size={size} color="green" />)
            onClose();
          }).catch((err) => {
            console.log(err);
  
            toastObject.showToast("");
            toastObject.updateToast("Transaction Failed", "Adding a subgraph failed.", "ERROR", (size) => <MdError size={size} color="red" />)
          }).finally(()=>{
            setIsLoading(false);
        });
    }

    return(
        <ModalContainer ref={containerRef}>
            <ModalHeader heading='Add Subgraph' subHeading='Enter subgraph ID and Poll time (at least 60 sec)'/>
            <ModalInput ref={subgraphIdInputRef} title="Subgraph ID" />
            <ModalInput ref={pollTimeInputRef} title="Poll Time (in seconds)" />
            <ModalConfirmButton text="Add Subgraph" onClick={addSubgraphHandler} isLoading={isLoading} />
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