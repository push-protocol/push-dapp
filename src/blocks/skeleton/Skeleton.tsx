import { type FC } from 'react';
import styled from 'styled-components';

import { useBlocksTheme } from '../Blocks.hooks';
import { ModeProp } from '../Blocks.types';
import { SkeletonProps } from './Skeleton.types';
import { getSkeletonPulseAnimation, getSkeletonResponsiveCSS } from './Skeleton.utils';
import { skeletonCSSPropsKeys } from './Skeleton.constants';
import { getBlocksColor } from 'blocks/Blocks.utils';

const StyledSkeleton = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !skeletonCSSPropsKeys.includes(prop as keyof SkeletonProps) && defaultValidatorFn(prop),
})<SkeletonProps & ModeProp>`
  /* Responsive props */
  ${(props) => getSkeletonResponsiveCSS(props)}

  /* Extra CSS prop */
  ${(props) => props.css || ''}

  /* Animation props */
  animation: ${({ mode }) =>
    getSkeletonPulseAnimation(
      getBlocksColor(mode, { dark: 'gray-600', light: 'gray-200' }),
      getBlocksColor(mode, { dark: 'gray-700', light: 'gray-300' })
    )}
    1s infinite alternate-reverse;

  /* Hide children */
  & > * {
    visibility: hidden !important;
  }
`;

const Skeleton: FC<SkeletonProps> = ({ borderRadius = 'r2', children, isLoading, ...rest }) => {
  const { mode } = useBlocksTheme();

  if (!isLoading) return children;

  return (
    <StyledSkeleton
      /* This component will be hidden from screen readers */
      aria-hidden="true"
      /* The component will not be included in the tab order */
      tabIndex={-1}
      borderRadius={borderRadius}
      mode={mode}
      {...rest}
    >
      {children}
    </StyledSkeleton>
  );
};

Skeleton.displayName = 'Skeleton';

export { Skeleton };
