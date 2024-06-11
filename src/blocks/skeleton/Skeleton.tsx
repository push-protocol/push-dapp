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

const Skeleton: FC<SkeletonProps> = ({ borderRadius = 'r2', children, isLoading, ...rest }) => {
  if (!isLoading) return children;

  return (
    <StyledSkeleton
      /* This component will be hidden from screen readers */
      aria-hidden="true"
      /* The component will not be included in the tab order */
      tabIndex={-1}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </StyledSkeleton>
  );
};

Skeleton.displayName = 'Skeleton';

export { Skeleton };