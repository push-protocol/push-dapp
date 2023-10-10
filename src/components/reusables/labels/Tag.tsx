// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

const Tag = ({ children }) => {
  return <TagLabel>{children}</TagLabel>;
};

export default Tag;

const TagLabel = styled.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.default.secondaryBg};
  color: ${(props) => props.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`;
