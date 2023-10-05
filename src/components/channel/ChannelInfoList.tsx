// React + Web3 Essentials
import React, { CSSProperties } from 'react';

// External Packages
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Internal Compoonents
import { Item } from 'primaries/SharedStyling';
import DelegateInfo from 'components/DelegateInfo';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Icon from 'assets/navigation/receiveNotifOffIcon.svg';
import { ImageV2 } from 'components/reusables/SharedStylingV2';
import { ModifySettingsButton } from './ChannelButtons';
import DelegateSettingsDropdown, { ChannelDropdownOption } from './DelegateSettingsDropdown';

// Internal Configs
import { device } from 'config/Globals';
import { ChannelSetting } from 'helpers/channel/types';

const isOwner = (account: string, delegate: string) => {
  return account.toLowerCase() === delegate.toLowerCase();
};

type ChannelInfoListProps =
  | {
      isAddress: true;
      items: string[];
      isLoading: boolean;
      account: string;
      style?: CSSProperties;
      addressDropdownOptions: Array<ChannelDropdownOption>;
    }
  | {
      isAddress: false;
      items: Array<ChannelSetting>;
      isLoading: boolean;
      account: string;
      style?: CSSProperties;
      settingsDropdownOptions?: Array<ChannelDropdownOption>;
    };

const ChannelInfoList = (props: ChannelInfoListProps) => {
  const navigate = useNavigate();

  const handleNavigateToModifySettings = () => {
    navigate(`/channel/settings`);
  };

  return (
    <DelegatesList
      style={props.style}
      isLoading={props.isLoading}
    >
      <Item
        flex="5"
        justify="flex-start"
        align="stretch"
      >
        {props.isLoading ? (
          <SpinnerContainer>
            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
          </SpinnerContainer>
        ) : (
          <>
            {props.items &&
              props.items.length > 0 &&
              props.items.map((item) => {
                return (
                  <div key={props.isAddress ? item : item.description || item.index}>
                    <Divider />
                    <Item
                      direction="row"
                      justify="space-between"
                      padding="9.5px 0px"
                    >
                      <Item
                        direction="row"
                        justify="flex-start"
                        margin="0px 0px 0px -15px"
                      >
                        {props.isAddress ? (
                          <DelegateInfoContainer>
                            <DelegateInfo
                              delegateAddress={item}
                              maxWidth={'200px'}
                            />
                          </DelegateInfoContainer>
                        ) : (
                          <>
                            <NotificationSettingName>{item.description}</NotificationSettingName>
                            {item.lowerLimit !== undefined && <Tag>Range</Tag>}
                          </>
                        )}
                        {props.isAddress && isOwner(props.account, item) && <Tag>Creator</Tag>}
                      </Item>
                      {props.isAddress === true &&
                        props.addressDropdownOptions?.length > 0 &&
                        !isOwner(props.account, item) && (
                          <DelegateSettingsDropdown
                            options={props.addressDropdownOptions}
                            item={item}
                          />
                        )}
                      {props.isAddress === false && props.settingsDropdownOptions?.length > 0 && (
                        <DelegateSettingsDropdown
                          options={props.settingsDropdownOptions}
                          item={item}
                        />
                      )}
                    </Item>
                  </div>
                );
              })}
            {props.items && props.items.length === 0 && !props.isAddress && (
              <EmptyNotificationSetting>
                <NotifIcon
                  src={Icon}
                  alt="No Settings"
                  width="24px"
                  height="24px"
                />
                <EmptyNotificationTitle>No settings added</EmptyNotificationTitle>
                <EmptyNotificationDesc>
                  Add settings for users to customize their notification preferences.
                </EmptyNotificationDesc>
                <ModifySettingsButton onClick={handleNavigateToModifySettings} />
              </EmptyNotificationSetting>
            )}
          </>
        )}
      </Item>
    </DelegatesList>
  );
};

export default ChannelInfoList;

const DelegatesList = styled.div<{ isLoading: boolean }>`
  padding: ${(props) => (props.isLoading ? '0px' : '0px 24px 16px')};
  flex: 1;

  @media ${device.tablet} {
    flex: 0;
    padding: ${(props) => (props.isLoading ? '0px' : '0px 16px 10px')};
  }
`;

const Tag = styled.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.default.secondaryBg};
  color: ${(props) => props.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
`;

const NotificationSettingName = styled.span`
  margin-left: 15px;
  color: ${(props) =>
    props.theme.scheme === 'light' ? props.theme.default.color : props.theme.default.secondaryColor};
`;

const EmptyNotificationSetting = styled.div`
  border-top: ${(props) => `1px solid ${props.theme.default.borderColor}`};
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

const Divider = styled.div`
  background-color: ${(props) => props.theme.default.border};
  height: 1px;
`;

const SpinnerContainer = styled.div`
  height: 100px;
`;

const DelegateInfoContainer = styled.div`
  @media ${device.tablet} {
    margin: 0px 0px 0px 5px;
  }
`;
