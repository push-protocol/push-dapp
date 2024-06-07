import { type FC } from 'react';
import styled from 'styled-components';

import type { SkeletonProps } from './Skeleton.types';
import { getSkeletonPulseAnimation, getSkeletonResponsiveCSS } from './Skeleton.utils';
import { skeletonCSSPropsKeys } from './Skeleton.constants';

const StyledSkeleton = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !skeletonCSSPropsKeys.includes(prop as keyof SkeletonProps) && defaultValidatorFn(prop),
})<SkeletonProps>`
  /* Responsive props */
  ${(props) => getSkeletonResponsiveCSS(props)}

  /* Extra CSS prop */
  ${(props) => props.css || ''}

  /* Animation props */
  animation: ${getSkeletonPulseAnimation('hsl(200, 20%, 80%)', 'hsl(200, 20%, 95%)')} 1s linear infinite alternate;

  /* Hide children */
  & > * {
    visibility: hidden !important;
  }
`;

const Skeleton: FC<SkeletonProps> = ({ isLoading, children, ...rest }) => {
  if (!isLoading) return children;

  return (
    <StyledSkeleton
      aria-hidden="true"
      tabIndex={-1}
      {...rest}
    >
      {children}
    </StyledSkeleton>
  );
};

Skeleton.displayName = 'Skeleton';

export { Skeleton };
