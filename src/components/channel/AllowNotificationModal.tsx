// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { device } from 'config/Globals';
import { handleBrowserNotification } from 'helpers/channel/allowNotification';

interface AllowNotificationModalProps {
  onModalClose: () => {};
}

const AllowNotificationModal: React.FC<AllowNotificationModalProps> = ({
  onModalClose,
}: AllowNotificationModalProps) => {
  const theme = useTheme();

  return (
    <ModalContainer theme={theme}>
      <ItemVV2 gap="16px">
        <ItemVV2
          gap="10px"
          alignItems="start"
        >
          <SpanV2
            fontSize="20px"
            fontWeight="500"
            color={theme.default.color}
          >
            Allow Notifications
          </SpanV2>
          <SpanV2
            fontSize="14px"
            fontWeigth="400"
            maxWidth="264px"
            textAlign="left"
            color={theme.default.descriptionTextColor}
          >
            We recommend enabling notifications for receiving updates from subscribed channels for a seamless
            experience.
          </SpanV2>
        </ItemVV2>
        <ItemHV2
          width="100%"
          justifyContent="space-between"
        >
          <ButtonV2
            padding="14px 0px"
            background="#D53A94"
            maxWidth="110px"
            color="#fff"
            borderRadius="8px"
            onClick={() => {
              handleBrowserNotification(onModalClose);
            }}
          >
            Allow
          </ButtonV2>
          <ButtonV2
            padding="14px 0px"
            background={theme.modalContentBackground}
            color={theme.default.descriptionTextColor}
            borderRadius="8px"
            maxWidth="110px"
            hoverBackground="none"
            onClick={() => onModalClose()}
          >
            Skip
          </ButtonV2>
        </ItemHV2>
      </ItemVV2>
    </ModalContainer>
  );
};

export default AllowNotificationModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  right: 20px;
  bottom: 20px;
  position: fixed;
  z-index: 99999999999;
  width: 340px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.modalContentBackground};
  padding: 16px 20px;

  @media (${device.mobileL}) {
    width: calc(100% - 80px);
  }
`;
