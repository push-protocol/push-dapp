import React from 'react';
import { TabPanels, TabPanel, TabsKeyboardActivation } from '@reach/tabs';
import '@reach/tabs/styles.css';
import {
  StyledFillTab,
  StyledFillTabList,
  StyledFillTabs,
  StyledLineTab,
  StyledLineTabList,
  StyledLineTabs,
  StyledTabLabel,
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
  onChange?: (activeKey: string) => void;
  activeKey?: string;
  variant?: 'line' | 'fill';
};

const Tabs: React.FC<TabsProps> = ({ items, onChange, variant = 'line', activeKey }) => {
  const handleChange = (index: number) => {
    const activeItem = items[index];
    if (activeItem && !activeItem.disabled) {
      onChange?.(activeItem.key);
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
      role="tabpanel"
      keyboardActivation={TabsKeyboardActivation.Auto}
    >
      <TabList role="tablist">
        {items.map((item) => (
          <Tab
            aria-disabled={item.disabled}
            role="tab"
            key={item.key}
            disabled={item.disabled}
          >
            {item.icon && item.icon}
            <StyledTabLabel>{item.label}</StyledTabLabel>
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
