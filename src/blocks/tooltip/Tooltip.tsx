import { type FC, useRef, useState } from 'react';
import styled from 'styled-components';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import type { TooltipProps } from './Tooltip.types';
import { getTooltipPositionalCSS } from './Tooltip.utils';
import { tooltipCSSPropsKeys } from './Tooltip.constants';
import { useIsVisible } from 'common';
import { textVariants } from '../text';

const RadixTooltipContent = styled(RadixTooltip.Content).withConfig({
  shouldForwardProp: (prop) => !tooltipCSSPropsKeys.includes(prop as keyof TooltipProps),
})<TooltipProps>`
  /* Tooltip default styles */
  display: flex;
  flex-direction: column;
  gap: var(--s1);
  padding: var(--s2);
  border-radius: var(--r3);
  font-family: var(--font-family);
  word-wrap: break-word;
  color: var(--text-primary-inverse);
  background-color: var(--surface-primary-inverse);

  /* Tooltip non-responsive styles */
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};

  ${(props) => props.css || ''};
`;

const StyledTitle = styled.span`
  color: var(--text-primary-inverse);
  font-family: var(--font-family);
  font-size: ${textVariants['c-semibold'].fontSize};
  font-style: ${textVariants['c-semibold'].fontStyle};
  font-weight: ${textVariants['c-semibold'].fontWeight};
  line-height: ${textVariants['c-semibold'].lineHeight};
`;

const StyledDescription = styled.span`
  color: var(--text-primary-inverse);
  font-family: var(--font-family);
  font-size: ${textVariants['c-regular'].fontSize};
  font-style: ${textVariants['c-regular'].fontStyle};
  font-weight: ${textVariants['c-regular'].fontWeight};
  line-height: ${textVariants['c-regular'].lineHeight};
`;

const Tooltip: FC<TooltipProps> = ({
  width = 'max-content',
  maxWidth = '274px',
  trigger = 'hover',
  tooltipPosition = 'top-right',
  children,
  description,
  title,
  overlay,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const onVisibilityChange = (isVisible: boolean) => {
    if (!isVisible) hideTooltip();
  };

  const isInView = useIsVisible(triggerRef, onVisibilityChange);

  const { style, ...cssProps } = getTooltipPositionalCSS(tooltipPosition);
  const triggerArray = typeof trigger === 'string' ? [trigger] : trigger;

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
          onClick={showTooltip}
          onFocus={showTooltip}
          onBlur={hideTooltip}
          /* Makes the element focusable to support focus related functions on mobile devices */
          tabIndex={0}
        >
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltipContent
            sideOffset={8}
            {...{ style, width, maxWidth }}
            {...cssProps}
            {...props}
          >
            {overlay ? (
              overlay
            ) : (
              <>
                {title && <StyledTitle>{title}</StyledTitle>}
                {description && <StyledDescription>{description}</StyledDescription>}
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
