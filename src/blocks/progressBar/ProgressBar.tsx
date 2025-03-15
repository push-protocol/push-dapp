import type { FC } from 'react';
import styled from 'styled-components';
import type { ProgressBarProps } from './ProgressBar.types';
import { getProgressWidthPercentage } from './ProgressBar.utils';

const StyledProgressBarContainer = styled.div`
  background-color: var(--components-progress-bar-background-default);
  width: 100%;
  height: 4px;
  border-radius: var(--radius-xxs, 8px);
`;

const StyledProgressBar = styled.div<{ width: string; isComplete: boolean }>`
  border-radius: var(--radius-xxs, 8px);
  background-color: ${({ isComplete }) =>
    isComplete
      ? 'var(--components-progress-bar-background-complete)'
      : 'var(--components-progress-bar-background-progress)'};
  height: 100%;
  width: ${({ width }) => width};
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
`;

const ProgressBar: FC<ProgressBarProps> = ({ progress, max = 100, ...rest }) => {
  const progressPercentage = getProgressWidthPercentage(progress, max);
  const isComplete = progressPercentage >= 100;

  return (
    <StyledProgressBarContainer
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={progress}
      {...rest}
    >
      <StyledProgressBar
        width={`${progressPercentage}%`}
        isComplete={isComplete}
      />
    </StyledProgressBarContainer>
  );
};

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
