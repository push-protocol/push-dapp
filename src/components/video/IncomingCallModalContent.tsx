import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { ModalInnerComponentType } from "hooks/useModal";
import styled from "styled-components";

const IncomingCallModalContent = ({ onConfirm, onClose }: ModalInnerComponentType) => {
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled(ItemVV2)`
    background: linear-gradient(179.97deg, rgba(255, 255, 255, 0.6) 0.02%, rgba(236, 233, 250, 0.6) 123.25%);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    width: 10vw;
    height: 50vh;
`

export default IncomingCallModalContent;