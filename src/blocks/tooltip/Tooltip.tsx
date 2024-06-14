import { type FC, useRef, useState } from 'react';
import styled from 'styled-components';
import type { TooltipContainerProps, TooltipProps } from './Tooltip.types';
import { fadeInAnimation, fadeOutAnimation, getTooltipPositionalCSS, getTooltipResponsiveCSS } from './Tooltip.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';
import { useDimensions } from 'hooks/useDimensions';

import { tooltipCSSPropsKeys } from './Tooltip.constants';

const StyledTooltip = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !tooltipCSSPropsKeys.includes(prop as keyof TooltipProps) && defaultValidatorFn(prop),
})<TooltipProps>`
  /* Tooltip responsive styles */
  ${(props) => getTooltipResponsiveCSS(props)}

  /* Tooltip default styles */
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 10;
  padding: 8px;
  position: absolute;
  border-radius: 12px;
  background-color: ${getBlocksColor('light', 'black')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  animation: ${({ visible }) => (visible ? fadeInAnimation : fadeOutAnimation)} 0.1s ease-in-out;

  /* Tooltip position */
  ${(props) => getTooltipPositionalCSS(props)}

  ${(props) => props.css || ''};
`;

const TooltipContainer = styled.div<TooltipContainerProps>`
  position: relative;
  cursor: ${({ trigger }) => (trigger === 'click' ? 'pointer' : 'default')};
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
  tooltipPosition = 'top-right',
  width = 'max-content',
  maxWidth = '171px',
  trigger = 'hover',
  children,
  description,
  title,
  overlay,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useDimensions(containerRef);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <TooltipContainer
      ref={containerRef}
      onMouseEnter={trigger === 'hover' ? showTooltip : undefined}
      onClick={trigger === 'click' ? () => setVisible((prev) => !prev) : undefined}
      onMouseLeave={hideTooltip}
      trigger={trigger}
    >
      <StyledTooltip
        {...props}
        {...{ tooltipPosition, visible, containerWidth, containerHeight, width, maxWidth }}
      >
        {overlay ? (
          overlay
        ) : (
          <>
            {title && <TooltipTitle>{title}</TooltipTitle>}
            {description && <TooltipDescription>{description}</TooltipDescription>}
          </>
        )}
      </StyledTooltip>
      {children}
    </TooltipContainer>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
