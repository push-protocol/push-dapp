import styled, { useTheme } from 'styled-components';
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import ProgressBar from 'components/reusables/progress/ProgressBarUnit';
import GLOBALS from 'config/Globals';

export const InternalModalContent = ({ onClose, onConfirm, InnerComponentProps,children }) => {
  const { progress } = InnerComponentProps;
  const theme = useTheme();
  return (
    <Container>
      <ProgressBar
        percent={progress}
        color={GLOBALS.COLORS.PRIMARY_PINK}
      />
    </Container>
  );
};

const Container = styled.div`
  min-width: 25vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:${(props) => props.theme.default.secondaryBg};
  padding:20px;
`;
