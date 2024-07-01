import { Tabs as ReachTabs, TabList, Tab } from '@reach/tabs';
import styled from 'styled-components';
import { ModeProp } from '../Blocks.types';
import { getBlocksColor } from '../Blocks.utils';

export const StyledFillTabs = styled(ReachTabs)`
  display: flex;
  flex-direction: column;
  gap: var(--s4);
`;

export const StyledFillTabList = styled(TabList)<ModeProp>`
  display: flex;
  width: fit-content;
  padding: var(--s1);
  background-color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-100', dark: 'gray-1000' })};
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
  color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-800', dark: 'gray-300' })};
  background-color: ${getBlocksColor('light', 'transparent')};
  border-radius: var(--r3);
  transition: background-color 0.3s, color 0.3s;
  border-bottom: none;

  &[data-selected] {
    background-color: ${({ mode }) => getBlocksColor(mode, { light: 'white', dark: 'gray-800' })};
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-1000', dark: 'white' })};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-1000', dark: 'white' })};
  }

  &:focus-visible {
    outline: 1px solid ${getBlocksColor('light', 'pink-300')};
  }

  &:active {
    background-color: ${getBlocksColor('light', 'transparent')};
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-1000', dark: 'white' })};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
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
  background-color: ${getBlocksColor('light', 'transparent')};
  gap: var(--s3);
  justify-content: flex-start;
  border-bottom: 1px solid ${({ mode }) => getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
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
  background-color: ${getBlocksColor('light', 'transparent')};
  color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-800', dark: 'gray-300' })};
  transition: background-color 0.3s, color 0.3s;
  border-bottom: 2px solid ${getBlocksColor('light', 'transparent')};

  &[data-selected] {
    border-bottom: 2px solid ${getBlocksColor('light', 'pink-400')};
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-1000', dark: 'gray-100' })};
  }

  &:hover {
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-1000', dark: 'gray-100' })};
  }

  &:focus-visible {
    outline: 2px solid ${getBlocksColor('light', 'pink-300')};
    border-bottom: 2px solid ${getBlocksColor('light', 'transparent')};
    border-radius: var(--r3);
    margin-bottom: -2px;
  }

  &:active {
    background-color: ${getBlocksColor('light', 'transparent')};
    color: ${getBlocksColor('light', 'gray-1000')};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-400', dark: 'gray-700' })};
    border-bottom: 2px solid ${({ mode }) => getBlocksColor(mode, { light: 'gray-300', dark: 'gray-800' })};
    opacity: 1;
  }
`;
