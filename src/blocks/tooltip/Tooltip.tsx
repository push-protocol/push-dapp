import { type FC, useRef, useState } from 'react';
import styled from 'styled-components';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import type { TooltipProps } from './Tooltip.types';
import { getTooltipPositionalCSS, getTooltipResponsiveCSS } from './Tooltip.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';
import { tooltipCSSPropsKeys } from './Tooltip.constants';
import { useIsVisible } from 'common';

const RadixTooltipContent = styled(RadixTooltip.Content).withConfig({
  shouldForwardProp: (prop) => !tooltipCSSPropsKeys.includes(prop as keyof TooltipProps),
})<TooltipProps>`
  /* Tooltip responsive styles */
  ${(props) => getTooltipResponsiveCSS(props)}

  /* Tooltip default styles */
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-radius: 12px;
  background-color: ${getBlocksColor('light', 'black')};

  ${(props) => props.css || ''};
`;

const TooltipTitle = styled.div`
  color: ${getBlocksColor('light', 'white')};
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

const TooltipDescription = styled.div`
  color: ${getBlocksColor('light', 'gray-400')};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Tooltip: FC<TooltipProps> = ({
  width = 'max-content',
  maxWidth = '171px',
  trigger = 'hover',
  tooltipPosition = 'bottom-right',
  children,
  description,
  title,
  overlay,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isInView = useIsVisible(triggerRef);

  const { style, ...cssProps } = getTooltipPositionalCSS(tooltipPosition);
  const triggerArray = typeof trigger === 'string' ? [trigger] : trigger;

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root
        delayDuration={250}
        open={visible && isInView}
      >
        <RadixTooltip.Trigger
          asChild
          ref={triggerRef}
          onMouseEnter={() => triggerArray.includes('hover') && showTooltip()}
          onMouseLeave={() => triggerArray.includes('hover') && hideTooltip()}
          onFocus={showTooltip}
          onBlur={hideTooltip}
          /* Makes the element focusable to support focus related functions on mobile devices */
          tabIndex={0}
        >
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltipContent
            {...{ style, width, maxWidth }}
            {...cssProps}
            {...props}
          >
            {overlay ? (
              overlay
            ) : (
              <>
                {title && <TooltipTitle>{title}</TooltipTitle>}
                {description && <TooltipDescription>{description}</TooltipDescription>}
              </>
            )}
          </RadixTooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
