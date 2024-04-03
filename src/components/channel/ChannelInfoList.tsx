// React + Web3 Essentials
import React, { CSSProperties } from 'react';

// External Packages
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Internal Compoonents
import { Item } from 'primaries/SharedStyling';
import DelegateInfo from 'components/DelegateInfo';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import DelegateSettingsDropdown, { ChannelDropdownOption } from './DelegateSettingsDropdown';
import EmptyNotificationSettings from './EmptyNotificationSettings';
import Tag from '../reusables/labels/Tag';

// Internal Configs
import { device } from 'config/Globals';
import { ChannelSetting } from 'helpers/channel/types';

// Types
interface ChannelInfoListCommonProps {
  isLoading: boolean;
  account: string;
  style?: CSSProperties;
}

interface AddressListOptions extends ChannelInfoListCommonProps {
  isAddress: true;
  items: string[];
  addressDropdownOptions: Array<ChannelDropdownOption>;
}

interface SettingListOptions extends ChannelInfoListCommonProps {
  isAddress: false;
  items: Array<ChannelSetting>;
  isLoading: boolean;
  settingsDropdownOptions?: Array<ChannelDropdownOption>;
  onClickEmptyListButton: () => void;
  emptyListButtonTitle: string;
}

type ChannelInfoListProps = AddressListOptions | SettingListOptions;

const ChannelInfoList = (props: ChannelInfoListProps) => {
  const isOwner = (account: string, delegate: string) => {
    return account.toLowerCase() === delegate.toLowerCase();
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
                            {item.type === 2 && <Tag>Range</Tag>}
                            {item.type === 3 && <Tag>Multi-Range</Tag>}
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
            {props.items && props.items.length === 0 && props.isAddress === false && (
              <EmptyNotificationSettings
                title="No settings added"
                description="Add settings for users to customize their notification preferences."
                onClick={props.onClickEmptyListButton}
                buttonTitle={props.emptyListButtonTitle}
              />
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
    padding: ${(props) => (props.isLoading ? '0px' : '0px 0px 10px')};
  }
`;

const NotificationSettingName = styled.span`
  margin-left: 15px;
  color: ${(props) =>
    props.theme.scheme === 'light' ? props.theme.default.color : props.theme.default.secondaryColor};
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
