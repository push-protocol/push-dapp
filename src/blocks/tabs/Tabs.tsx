import React from 'react';
import { TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import { useBlocksTheme } from '../Blocks.hooks';
import {
  StyledFillTab,
  StyledFillTabList,
  StyledFillTabs,
  StyledLineTab,
  StyledLineTabList,
  StyledLineTabs,
} from './Tabs.styled';

export type TabItem = {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  onChange: (activeKey: string) => void;
  activeKey?: string;
  variant?: 'line' | 'fill';
};

const Tabs: React.FC<TabsProps> = ({ items, onChange, variant = 'line', activeKey }) => {
  const { mode } = useBlocksTheme();

  const handleChange = (index: number) => {
    const activeItem = items[index];
    if (activeItem && !activeItem.disabled) {
      onChange(activeItem.key);
    }
  };

  const TabsContainer = variant === 'line' ? StyledLineTabs : StyledFillTabs;

  const TabList = variant === 'line' ? StyledLineTabList : StyledFillTabList;

  const Tab = variant === 'line' ? StyledLineTab : StyledFillTab;

  const activeTabIndex = activeKey ? items.findIndex((item) => item.key === activeKey) : undefined;

  return (
    <TabsContainer
      onChange={handleChange}
      index={activeTabIndex}
    >
      <TabList mode={mode}>
        {items.map((item) => (
          <Tab
            key={item.key}
            disabled={item.disabled}
            aria-disabled={item.disabled}
            mode={mode}
          >
            {item.icon && item.icon}
            {item.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {items.map((item) => (
          <TabPanel key={item.key}>{item.children}</TabPanel>
        ))}
      </TabPanels>
    </TabsContainer>
  );
};

Tabs.displayName = 'Tabs';

export { Tabs };
