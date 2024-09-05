import React from 'react';
import styled, { FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { SpinnerSize, SpinnerVariant } from './Spinner.types';
import { getSpinnerSize, getSpinnerColor } from './Spinner.utils';
import { Ellipse } from '../icons';
export type SpinnerProps = {
  /* Additional prop from styled components to apply custom css to Spinner */
  css?: FlattenSimpleInterpolation;
  /* Sizes for the Spinner */
  size?: SpinnerSize;
  /* Variants for the Spinner */
  variant?: SpinnerVariant;
};
const spin = keyframes`
 from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;
const Container = styled.div<{ css?: FlattenSimpleInterpolation; size: SpinnerSize; variant?: SpinnerVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  ${({ size }) => ` 
    width: ${getSpinnerSize(size)}px;
    height: ${getSpinnerSize(size)}px;
  `}
  ${({ variant }) => ` 
    ${
      variant
        ? `
            [role='img'] {
              color: var(--${getSpinnerColor(variant)});
              }
          `
        : ''
    }
  `}
  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''};
`;
const Spinner: React.FC<SpinnerProps> = ({ size = 'small', css, variant }) => {
  return (
    <Container
      size={size}
      css={css}
      variant={variant}
      role="spinner"
    >
      <Ellipse size={getSpinnerSize(size)} />
    </Container>
  );
};
Spinner.displayName = 'Spinner';
export { Spinner };
