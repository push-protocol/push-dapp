import React from 'react';
import styled, { FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { SpinnerSize, SpinnerVariant } from './Spinner.types';
import { getSpinnerSize, getSpinnerVariant, getSpinnerStrokeWidth } from './Spinner.utils';

export type SpinnerProps = {
  /* Additional prop from styled components to apply custom css to Spinner */
  css?: FlattenSimpleInterpolation;
  /* Sizes for the Spinner */
  size?: SpinnerSize;
  /* Variants for the Spinner */
  variant?: SpinnerVariant;
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<{ css?: FlattenSimpleInterpolation; size: SpinnerSize; variant: SpinnerVariant }>`
  position: relative;
  animation: ${spin} 1s linear infinite;
  border-radius: 50%;
  ${({ size, variant }) => ` 
    border-width: ${getSpinnerStrokeWidth(size)} ;
    border-style: solid;
    border-color: var(--components-spin-loader-spinner-${getSpinnerVariant(variant)})
    transparent transparent transparent;
    width: ${getSpinnerSize(size)};
    height: ${getSpinnerSize(size)};
    :before,:after {
      content: '';
      width: ${getSpinnerStrokeWidth(size)};
      height: ${getSpinnerStrokeWidth(size)};
      border-radius: 50%;
      background: var(--components-spin-loader-spinner-${getSpinnerVariant(variant)});
      position: absolute;
    }
    :before {
        top: 8.65%;
        left: 10%;
      }
    :after {
        top: 8.65%;
        right: 10%;
      }
    `}

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''};
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 'small', css, variant = 'default' }) => {
  return (
    <Container
      size={size}
      css={css}
      variant={variant}
    />
  );
};

Spinner.displayName = 'Spinner';

export { Spinner };
