import type { ReactNode } from 'react';

import type { FlattenSimpleInterpolation } from 'styled-components';
import type { TooltipContentProps } from '@radix-ui/react-tooltip';

export type TooltipNonResponsiveProps = {
  /* Sets height css property */
  height?: string;
  /* Sets max-height css property */
  maxHeight?: string;
  /* Sets min-height css property */
  minHeight?: string;
  /* Sets max-width css property */
  maxWidth?: string;
  /* Sets min-width css property */
  minWidth?: string;
  /* Sets width css property */
  width?: string;
};

export type TooltipPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type TooltipTrigger = 'hover' | 'click';

export type TooltipComponentProps = {
  /* Additional prop from styled components to apply custom css to Tooltip */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Tooltip */
  children?: ReactNode;
  /* Overlay content component of the Tooltip */
  overlay?: ReactNode;
  /* Title of the Tooltip */
  title?: string;
  /* Description to be displayed in the tooltip */
  description?: string;
  /* Position of the Tooltip */
  tooltipPosition?: TooltipPosition;
  /* Trigger for the Tooltip to open */
  trigger?: TooltipTrigger | Array<TooltipTrigger>;
};

export type TooltipProps = TooltipNonResponsiveProps & TooltipComponentProps & TooltipContentProps;
