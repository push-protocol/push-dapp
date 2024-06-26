import { CSSProperties } from 'react';
import type { TooltipPosition } from './Tooltip.types';
import { TooltipContentProps } from '@radix-ui/react-tooltip';

export const getTooltipPositionalCSS = (tooltipPosition: TooltipPosition) => {
  let style: {
    align: TooltipContentProps['align'];
    side: TooltipContentProps['side'];
    style: CSSProperties;
  } = {
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
