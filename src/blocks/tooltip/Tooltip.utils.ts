import { CSSProperties } from 'react';
import { getResponsiveCSS } from '../Blocks.utils';
import type { TooltipResponsiveCSSPropertiesData, TooltipResponsiveProps, TooltipPosition } from './Tooltip.types';
import { Align, Side } from '@radix-ui/react-popper';

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

export const getTooltipPositionalCSS = (tooltipPosition: TooltipPosition) => {
  let style: { align: Align; side: Side; style: CSSProperties } = {
    align: 'start',
    side: 'top',
    style: {
      borderBottomLeftRadius: 4,
    },
  };

  switch (tooltipPosition) {
    case 'bottom-left':
      style = {
        align: 'end',
        side: 'bottom',
        style: {
          borderTopRightRadius: 4,
        },
      };
      break;
    case 'top-left':
      style = {
        align: 'end',
        side: 'top',
        style: {
          borderBottomRightRadius: 4,
        },
      };
      break;
    case 'bottom-right':
      style = {
        align: 'start',
        side: 'bottom',
        style: {
          borderTopLeftRadius: 4,
        },
      };
      break;
  }

  return style;
};
