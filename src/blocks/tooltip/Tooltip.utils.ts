import { keyframes } from 'styled-components';
import { getResponsiveCSS } from '../Blocks.utils';
import type { TooltipResponsiveCSSPropertiesData, TooltipResponsiveProps, TooltipProps } from './Tooltip.types';

const getTooltipResponsiveCSSProperties = (props: TooltipResponsiveProps): TooltipResponsiveCSSPropertiesData[] => [
  { propName: 'height', prop: props.height },
  { propName: 'max-height', prop: props.maxHeight },
  { propName: 'min-height', prop: props.minHeight },
  { propName: 'max-width', prop: props.maxWidth },
  { propName: 'min-width', prop: props.minWidth },
  { propName: 'width', prop: props.width },
];

export const getTooltipResponsiveCSS = (props: TooltipResponsiveProps) => {
  const data = getTooltipResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};

export const fadeInAnimation = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fadeOutAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

export const getTooltipPositionalCSS = ({ tooltipPosition, containerHeight }: TooltipProps) => {
  switch (tooltipPosition) {
    case 'bottom-right':
      return `
        left: 0px;
        border-top-left-radius: 4px;
        top: ${containerHeight}px;
      `;
    case 'bottom-left':
      return `
        right: 0px;
        border-top-right-radius: 4px;
        top: ${containerHeight}px;
      `;
    case 'top-left':
      return `
        right: 0px;
        border-bottom-right-radius: 4px;
        bottom: ${containerHeight}px;
      `;
    case 'top-right':
      return `
        left: 0px;
        border-bottom-left-radius: 4px;
        bottom: ${containerHeight}px;
      `;
    default:
      return '';
  }
};
