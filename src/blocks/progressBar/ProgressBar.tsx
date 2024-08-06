import type { FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import type { ProgressBarProps } from './ProgressBar.types';
import { getProgressWidthPercentage } from './ProgressBar.utils';

const StyledProgressBarContainer = styled.div<{ css?: FlattenSimpleInterpolation }>`
  /* Default CSS */
  background-color: var(--components-progress-bar-background-default);
  width: 100%;
  height: 4px;
  border-radius: var(--radius-xxs, 8px);

  /* Extra CSS prop */
  ${({ css }) => css || ''}
`;

const StyledProgressBar = styled.div<{ width: string }>`
  /* Default CSS */
  border-radius: var(--radius-xxs, 8px);
  background-color: var(--components-progress-bar-background-progress);
  height: 100%;
  width: ${({ width }) => width};
  transition: width 0.3s ease;
`;

const ProgressBar: FC<ProgressBarProps> = ({ progress, max = 100, ...rest }) => (
  <StyledProgressBarContainer
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={max}
    aria-valuenow={progress}
    {...rest}
  >
    <StyledProgressBar width={`${getProgressWidthPercentage(progress, max)}%`} />
  </StyledProgressBarContainer>
);

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
