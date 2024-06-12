import { CSSProperties } from 'react';
import { keyframes } from 'styled-components';
import { getResponsiveCSS } from '../Blocks.utils';
import type { SkeletonResponsiveProps, SkeletonResponsiveCSSPropertiesData } from './Skeleton.types';

const getSkeletonResponsiveCSSProperties = (props: SkeletonResponsiveProps): SkeletonResponsiveCSSPropertiesData[] => [
  { propName: 'height', prop: props.height },
  { propName: 'margin', prop: props.margin },
  { propName: 'width', prop: props.width },
  { propName: 'border-radius', prop: props.borderRadius },
];

export const getSkeletonResponsiveCSS = (props: SkeletonResponsiveProps) => {
  const data = getSkeletonResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};

export const getSkeletonPulseAnimation = (
  startColor: CSSProperties['color'],
  endColor: CSSProperties['color']
) => keyframes`
  0% {
    background-color: ${startColor};
  }
  100% {
    background-color: ${endColor}
  }
`;
