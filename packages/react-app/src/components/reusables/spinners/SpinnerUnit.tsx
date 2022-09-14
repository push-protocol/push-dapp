import { ReactComponent as SpinnerSVG } from 'assets/reusables/spinners/spinner.svg';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import styled, { keyframes } from 'styled-components';

// Create Spinner
export default function Spinner() {
  return (
    <SpinLoader flex="initial">
      <SpinnerSVG />
    </SpinLoader>
  );
}

const spinAnimation = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`;

const SpinLoader = styled(ItemVV2)`
  animation-name: ${spinAnimation};
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
