import { useContext } from 'react';
// External Packages
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { device } from 'config/Globals';

type CallButtonProps = {
  buttonStyles: {};
  iconSrc: any;
  onClick: () => void;
};

const CallButton = ({ buttonStyles, iconSrc, onClick }: CallButtonProps) => {

  return (
    <Button
      onClick={onClick}
      style={buttonStyles}
    >
      <Icon src={iconSrc} />
    </Button>
  );
};

const Button = styled(ButtonV2)`
  width: 4.56rem;
  max-width: 4.56rem;
  height: 2.75rem;
  hover-background: transparent;
  border-radius: 1rem;
  margin: 0 0.35rem;

  @media ${device.mobileL} {
    width: 3.375rem;
    max-width: 3.375rem;
    height: 2.75rem;
    border-radius: 0.75rem;
  }

  @media ${device.mobileM} {
    margin: 0 0.2rem;
  }
`;

const Icon = styled(ImageV2)`
  width: 22px;
  cursor: pointer;
  @media ${device.mobileL} {
    width: 22px;
  }
`;

export default CallButton;
