// External Packages
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2 } from 'components/reusables/SharedStylingV2';

type MediaToggleButtonProps = {
  iconSrc: any;
  iconWidth: string;
  onClick: Function;
  backgroundColor?: string;
};

const MediaToggleButton = ({ iconSrc, iconWidth, onClick, backgroundColor}: MediaToggleButtonProps) => {
  return (
    <Button onClick={() => onClick()} bgColor={backgroundColor}>
      <Icon src={iconSrc} width={iconWidth} />
    </Button>
  );
};

const Button = styled(ButtonV2)`
  width: 2.875rem;
  max-width: 2.875rem;
  height: 2.75rem;
  background: ${(props) => props.bgColor || 'white'};
  hover-background: transparent;
  border-radius: 1rem;
  margin: 0 0.35rem;
`;

const Icon = styled(ImageV2)`
  width: ${(props) => props.width};
  cursor: pointer;
`;

export default MediaToggleButton;
