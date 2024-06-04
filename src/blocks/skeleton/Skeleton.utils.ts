import { CSSProperties } from 'react';
import { getResponsiveCSS } from '../Blocks.utils';
import { SkeletonResponsiveProps, SkeletonCSSProps, SkeletonResponsiveCSSPropertiesData } from './Skeleton.types';
import { keyframes } from 'styled-components';

const getSkeletonResponsiveCSSProperties = (props: SkeletonResponsiveProps): SkeletonResponsiveCSSPropertiesData[] => [
  { propName: 'display', prop: props.display },
  { propName: 'height', prop: props.height },
  { propName: 'margin', prop: props.margin },
  { propName: 'max-height', prop: props.maxHeight },
  { propName: 'min-height', prop: props.minHeight },
  { propName: 'max-width', prop: props.maxWidth },
  { propName: 'min-width', prop: props.minWidth },
  { propName: 'padding', prop: props.padding },
  { propName: 'width', prop: props.width },
  { propName: 'border-radius', prop: props.borderRadius },
];

export const getSkeletonResponsiveCSS = (props: SkeletonResponsiveProps) => {
  const data = getSkeletonResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};

export const skeletonCSSPropsKeys: (keyof SkeletonCSSProps)[] = [
  'border',
  'borderRadius',
  'position',
  'boxShadow',
  'display',
  'height',
  'margin',
  'maxHeight',
  'minHeight',
  'maxWidth',
  'minWidth',
  'padding',
  'width',
  'borderRadius',
];

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
