import { Tabs as ReachTabs, TabList, Tab } from '@reach/tabs';
import { textVariants } from '../text';
import styled from 'styled-components';
import { deviceMediaQ } from '../theme';

export const StyledFillTabs = styled(ReachTabs)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const StyledFillTabList = styled(TabList)`
  overflow: auto hidden;
  display: flex;
  width: fit-content;
  @media${deviceMediaQ.mobileL} {
    width: -webkit-fill-available;
  }
  padding: var(--spacing-xxxs);
  background-color: var(--surface-secondary);
  border-radius: var(--radius-sm);
  gap: var(--spacing-xxs);
`;

export const StyledFillTab = styled(Tab)`
  display: flex;
  padding: var(--spacing-none) var(--spacing-sm);
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xxs);
  align-self: stretch;
  cursor: pointer;
  color: var(--text-secondary);
  background-color: var(--surface-transparent);
  border-radius: var(--radius-xs);
  transition: background-color 0.3s, color 0.3s;
  border-bottom: none;

  &[data-selected] {
    background-color: var(--components-button-tertiary-background-inverse);
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: var(--components-button-secondary-text-default);
  }

  &:focus-visible {
    outline: var(--border-sm) solid var(--stroke-state-focused);
  }

  &:active {
    background-color: var(--surface-transparent);
    color: var(--components-button-secondary-text-default);
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: var(--components-button-secondary-text-disabled);
    opacity: 1;
  }
`;

export const StyledLineTabs = styled(ReachTabs)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const StyledLineTabList = styled(TabList)`
  overflow: auto hidden;
  display: flex;
  background-color: var(--surface-transparent);
  gap: var(--spacing-xs);
  justify-content: flex-start;
  border-bottom: var(--border-sm) solid var(--stroke-secondary);
`;

export const StyledLineTab = styled(Tab)`
  display: flex;
  padding: var(--spacing-none) var(--spacing-sm);
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xxs);
  cursor: pointer;
  margin-bottom: -1px;
  background-color: var(--surface-transparent);
  color: var(--text-secondary);
  transition: background-color 0.3s, color 0.3s;
  border-bottom: var(--border-md) solid var(--surface-transparent);

  &[data-selected] {
    border-bottom: var(--border-md) solid var(--stroke-brand-medium);
    color: var(--text-primary);
  }

  &:hover {
    color: var(--text-primary);
  }

  &:focus-visible {
    outline: var(--border-md) solid var(--stroke-state-focused);
    border-bottom: var(--border-md) solid var(--surface-transparent);
    border-radius: var(--radius-xs);
    margin-bottom: -2px;
  }

  &:active {
    background-color: var(--surface-transparent);
    color: var(--text-primary);
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: var(--text-state-disabled);
    border-bottom: var(--border-md) solid var(--stroke-state-disabled);
    opacity: 1;
  }
`;

export const StyledTabLabel = styled.span`
  white-space: nowrap;
  font-family: var(--font-family);
  font-size: ${textVariants['h5-semibold'].fontSize};
  font-style: ${textVariants['h5-semibold'].fontStyle};
  font-weight: ${textVariants['h5-semibold'].fontWeight};
  line-height: ${textVariants['h5-semibold'].lineHeight};
`;
