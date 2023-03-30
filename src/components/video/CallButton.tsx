// External Packages
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2 } from 'components/reusables/SharedStylingV2';


type CallButtonProps = {
  bgColor: string;
  iconSrc: any;
  onClick: () => void;
};

const CallButton = ({ bgColor, iconSrc, onClick }: CallButtonProps) => {
  return (
    <Button color={bgColor} onClick={onClick}>
      <Icon
        src={iconSrc}
      />
    </Button>
  );
};

const Button = styled(ButtonV2)`
  width: 4.56rem;
  max-width: 4.56rem;
  height: 2.75rem;
  background: ${(props) => props.color};
  hover-background: transparent;
  border-radius: 1rem;
  margin: 0 0.35rem;
`;

const Icon = styled(ImageV2)`
  width: 22px;
  cursor: pointer;
`;

export default CallButton;
