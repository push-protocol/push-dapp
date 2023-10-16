// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import Icon from 'assets/navigation/receiveNotifOffIcon.svg';
import { ImageV2 } from 'components/reusables/SharedStylingV2';
import { ModifySettingsButton } from './ChannelButtons';

// Types
interface EmptyNotificationSettingsProps {
  onClick: () => void;
  title: string;
  description: string;
  buttonTitle?: string;
  showTopBorder?: boolean;
}

const EmptyNotificationSettings = ({
  description,
  onClick,
  title,
  buttonTitle,
  showTopBorder = true,
}: EmptyNotificationSettingsProps) => {
  return (
    <EmptyNotificationSetting showTopBorder={showTopBorder}>
      <NotifIcon
        src={Icon}
        alt="No Settings"
        width="24px"
        height="24px"
      />
      <EmptyNotificationTitle>{title}</EmptyNotificationTitle>
      <EmptyNotificationDesc>{description}</EmptyNotificationDesc>
      <ModifySettingsButton
        onClick={onClick}
        title={buttonTitle}
      />
    </EmptyNotificationSetting>
  );
};

export default EmptyNotificationSettings;

const EmptyNotificationSetting = styled.div<{ showTopBorder: boolean }>`
  border-top: ${(props) => props.showTopBorder && `1px solid ${props.theme.default.borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

const EmptyNotificationTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.default.color};
`;

const EmptyNotificationDesc = styled.div`
  margin-top: 1px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.default.secondaryColor};
`;

const NotifIcon = styled(ImageV2)`
  color: ${(props) => props.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`;
