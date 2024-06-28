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
  gap: var(--s2);
`;

export const StyledFillTab = styled(Tab)<ModeProp>`
  display: flex;
  padding: var(--s0) var(--s4);
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: var(--s2);
  align-self: stretch;
  cursor: pointer;
  color: var(--${({ mode }) => (mode === 'light' ? 'gray-800' : 'gray-300')});
  background-color: var(--transparent);
  border-radius: var(--r3);
  transition: background-color 0.3s, color 0.3s;
  border-bottom: none;

  &[data-selected] {
    background-color: var(--${({ mode }) => (mode === 'light' ? 'white' : 'gray-800')});
    color: var(--${({ mode }) => (mode === 'light' ? 'gray-1000' : 'white')});
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: var(--${({ mode }) => (mode === 'light' ? 'gray-1000' : 'white')});
  }

  &:focus-visible {
    outline: 1px solid var(--pink-300);
  }

  &:active {
    background-color: var(--transparent);
    color: var(--${({ mode }) => (mode === 'light' ? 'gray-1000' : 'white')});
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: var(--${({ mode }) => (mode === 'light' ? 'gray-300' : 'gray-700')});
    opacity: 1;
  }
`;

export const StyledLineTabs = styled(ReachTabs)`
  display: flex;
  flex-direction: column;
  gap: var(--s4);
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
  padding: var(--s0) var(--s4);
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: var(--s2);
  cursor: pointer;
  margin-bottom: -1px;
  background-color: var(--transparent);
  color: var(--${({ mode }) => (mode === 'light' ? 'gray-800' : 'gray-300')});
  transition: background-color 0.3s, color 0.3s;
  border-bottom: 2px solid var(--transparent);

  &[data-selected] {
    border-bottom: 2px solid var(--pink-400);
    color: var(--${({ mode }) => (mode === 'light' ? 'gray-1000' : 'gray-100')});
  }

  &:hover {
    color: var(--${({ mode }) => (mode === 'light' ? 'gray-1000' : 'gray-100')});
  }

  &:focus-visible {
    outline: 2px solid var(--pink-300);
    border-bottom: 2px solid var(--transparent);
    border-radius: var(--r3);
    margin-bottom: -2px;
  }

  &:active {
    background-color: var(--transparent);
    color: var(--gray-1000);
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: var(--${({ mode }) => (mode === 'light' ? 'gray-400' : 'gray-700')});
    border-bottom: 2px solid var(--${({ mode }) => (mode === 'light' ? 'gray-300' : 'gray-800')});
    opacity: 1;
  }
`;
