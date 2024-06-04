import { forwardRef } from 'react';
import styled from 'styled-components';

import { BlockWithoutStyleProp } from 'blocks/Blocks.types';
import { SkeletonCSSProps, SkeletonComponentProps } from './Skeleton.types';
import { getSkeletonPulseAnimation, getSkeletonResponsiveCSS, skeletonCSSPropsKeys } from './Skeleton.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';

export type SkeletonProps = SkeletonCSSProps & SkeletonComponentProps & BlockWithoutStyleProp<HTMLDivElement>;

const StyledSkeleton = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !skeletonCSSPropsKeys.includes(prop as keyof SkeletonCSSProps) && defaultValidatorFn(prop),
})<SkeletonProps>`
  /* Responsive props */
  ${(props) => getSkeletonResponsiveCSS(props)}

  /* Non-responsive props */
  box-shadow: ${({ boxShadow }) => boxShadow};
  border: ${({ border }) => border};
  position: ${({ position }) => position};

  /* Extra CSS prop */
  ${(props) => props.css || ''}

  /* Animation props */
  animation: ${({ startColor, endColor }) =>
    getSkeletonPulseAnimation(
      startColor ? getBlocksColor(startColor) : 'hsl(200, 20%, 80%)',
      endColor ? getBlocksColor(endColor) : 'hsl(200, 20%, 95%)'
    )} 1s linear infinite alternate;
`;

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ isLoading, children, ...rest }, ref) => {
  return (
    <>
      {isLoading ? (
        <StyledSkeleton
          {...rest}
          ref={ref}
        />
      ) : (
        children
      )}
    </>
  );
});

Skeleton.displayName = 'Skeleton';

export { Skeleton };
