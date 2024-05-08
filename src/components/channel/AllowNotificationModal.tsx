import { SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import styled, { useTheme } from 'styled-components';

const AllowNotificationModal = () => {
  const theme = useTheme();
  return (
    <ModalContainer theme={theme}>
      <SpanV2>Allow Notifications</SpanV2>
      <SpanV2>
        We recommend enabling notifications for receiving updates from subscribed channels for a seamless experience.
      </SpanV2>
    </ModalContainer>
  );
};

export default AllowNotificationModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: ${(props) => props.theme.modalContentBackground};
  border-radius: 24px;
  padding: 24px;
  @media (${device.laptop}) {
    width: 50vw;
  }
  @media (${device.mobileL}) {
    width: 95vw;
  }
`;
