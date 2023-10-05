// React + Web3 Essentials
import React, { CSSProperties } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { useDeviceWidthCheck } from 'hooks';
import { Item } from 'primaries/SharedStyling';
import { Section } from 'components/SharedStyling';

// Internal Configs
import { device } from 'config/Globals';

interface ChannelInfoHeaderProps {
  title: string;
  description: string;
  Button?: React.ReactNode;
  style?: CSSProperties;
}

const ChannelInfoHeader = ({ title, description, Button, style }: ChannelInfoHeaderProps) => {
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(700);

  return (
    <HeaderSection style={style}>
      <Item align="flex-start">
        <DelegatesInfoHeader style={{ color: theme.color }}>{title}</DelegatesInfoHeader>
        {!isMobile && (
          <>
            <div style={{ height: '4px' }} />
            <DelegatesInfoLabel>{description}</DelegatesInfoLabel>
          </>
        )}
      </Item>
      {Button}
    </HeaderSection>
  );
};

export default ChannelInfoHeader;

const DelegatesInfoHeader = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

const DelegatesInfoLabel = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${(props) => props.theme.default.secondaryColor};
`;

const HeaderSection = styled(Section)`
  flex-direction: row;
  align-items: center;
  padding: 24px 24px 20px 24px;

  @media ${device.tablet} {
    padding: 20px 12px;
    flex: 0;
  }
`;
