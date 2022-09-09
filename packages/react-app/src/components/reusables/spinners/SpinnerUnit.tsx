import { ReactComponent as SpinnerSVG } from 'assets/reusables/spinners/spinner.svg';
import { Image, Item, Section } from 'components/SharedStyling';
import styled, { keyframes } from 'styled-components';

// Create Spinner
export default function Spinner() {
  return (
    <SpinLoader>
      <SpinnerSVG />
    </SpinLoader>
  );
}

const spinAnimation = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`;

const SpinLoader = styled(Item)`
  animation-name: ${spinAnimation};
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
