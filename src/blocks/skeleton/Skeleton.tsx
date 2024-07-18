import { type FC } from 'react';
import styled from 'styled-components';

import { SkeletonProps } from './Skeleton.types';
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
  animation: ${getSkeletonPulseAnimation(
    'var(--components-skeleton-loader-gradient-light)',
    'var(--components-skeleton-loader-gradient-dark)'
  )}
    1s infinite alternate-reverse;

  /* Hide children */
  & > * {
    visibility: hidden !important;
  }
`;

const Skeleton: FC<SkeletonProps> = ({ borderRadius = 'radius-xxs', children, isLoading, ...rest }) => {
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
