// Tabs.tsx
import React from 'react';
import { Tabs as ReachTabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import styled from 'styled-components';
import '@reach/tabs/styles.css';

interface TabItem {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  onChange: (activeKey: string) => void;
}

// Styled Components
const StyledTabs = styled(ReachTabs)`
  font-family: Arial, sans-serif;
  margin: 20px;
`;

const StyledTabList = styled(TabList)`
  display: flex;
  border-bottom: 2px solid #ddd;
  margin-bottom: 16px;
`;

const StyledTab = styled(Tab)<{ disabled?: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  transition: border-color 0.3s;

  &[data-selected] {
    border-bottom-color: #007bff;
    color: #007bff;
  }

  &:focus {
    outline: none;
    border-bottom-color: #0056b3;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: #ccc;
  }

  .icon {
    margin-right: 8px;
  }
`;

const StyledTabPanels = styled(TabPanels)``;

const StyledTabPanel = styled(TabPanel)`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

// Tabs Component
const Tabs: React.FC<TabsProps> = ({ items, onChange }) => {
  const handleChange = (index: number) => {
    const activeItem = items[index];
    if (activeItem && !activeItem.disabled) {
      onChange(activeItem.key);
    }
  };

  return (
    <StyledTabs onChange={handleChange}>
      <StyledTabList>
        {items.map((item) => (
          <StyledTab
            key={item.key}
            disabled={item.disabled}
            aria-disabled={item.disabled}
          >
            {item.icon && <span className="icon">{item.icon}</span>}
            {item.label}
          </StyledTab>
        ))}
      </StyledTabList>
      <StyledTabPanels>
        {items.map((item) => (
          <StyledTabPanel key={item.key}>{item.children}</StyledTabPanel>
        ))}
      </StyledTabPanels>
    </StyledTabs>
  );
};

Tabs.displayName = 'Tabs';

export { Tabs };
