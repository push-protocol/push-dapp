import { Tabs as ReachTabs, TabList, Tab } from '@reach/tabs';
import styled from 'styled-components';
import { ModeProp } from '../Blocks.types';

export const StyledFillTabs = styled(ReachTabs)`
  display: flex;
  flex-direction: column;
  gap: var(--s4);
`;

export const StyledFillTabList = styled(TabList)<ModeProp>`
  display: flex;
  width: fit-content;
  padding: var(--s1);
  background-color: var(--${({ mode }) => (mode === 'light' ? 'gray-100' : 'gray-1000')});
  border-radius: var(--r4);
`;

export const StyledFillTab = styled(Tab)<ModeProp>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: var(--s2) var(--s4);
  gap: var(--s2);
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  color: var(--${({ mode }) => (mode === 'light' ? 'gray-1000' : 'white')});
  font-family: var(--font-family);
  background-color: var(--transparent);
  border-radius: var(--r4);
  overflow: hidden;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s;

  &[data-selected] {
    background-color: var(--${({ mode }) => (mode === 'light' ? 'white' : 'gray-800')});
    border-bottom: none;
  }

  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: var(--gray-500);
  }
`;

export const StyledLineTabs = styled(ReachTabs)`
  display: flex;
  flex-direction: column;
  gap: var(--s6);
`;

export const StyledLineTabList = styled(TabList)<ModeProp>`
  display: flex;
  background-color: var(--transparent);
  gap: var(--s3);
  justify-content: flex-start;
  border-bottom: 1px solid var(--${({ mode }) => (mode === 'light' ? 'gray-200' : 'gray-800')});
`;

export const StyledLineTab = styled(Tab)<ModeProp>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: var(--s0) var(--s4) var(--s4) var(--s4);
  gap: var(--s2);
  margin-bottom: -1px;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  color: var(--${({ mode }) => (mode === 'light' ? 'gray-1000' : 'gray-200')});
  font-family: var(--font-family);
  background-color: var(--transparent);
  overflow: hidden;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s;
  width: auto;

  &[data-selected] {
    border-bottom: 2px solid var(--pink-400);
  }

  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: var(--gray-500);
  }
`;
