// React + Web3 Essentials
import { useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMore } from 'react-icons/ai';

// Internal Configs
import { device } from 'config/Globals';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import { updateBulkSubscriptions, updateBulkUserSettings } from 'redux/slices/channelSlice';

// Internal Components
import { Button } from 'primaries/SharedStyling';
import { ImageV2 } from 'components/reusables/SharedStylingV2';
import { Alert, Box, Text } from 'blocks';
import UserProfileSettings from 'components/UserProfileSettings/UserProfileSettings';
import ChannelListSettings from 'components/channel/ChannelListSettings';
import PushSnapSettings from 'components/PushSnap/PushSnapSettings';
import UserPlanAndBillings from 'components/userPlanAndBillings/UserPlanAndBillings';
import UserProfileSocialSettings from 'components/UserProfileSettings/UserProfileSocialSettings';

interface ChannelListItem {
  channel: string;
  icon: string;
  name: string;
  id: number;
  channel_settings: string;
}

function UserSettings() {
  const isMobile = useDeviceWidthCheck(800);

  const { account, chainId } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const { subscriptionStatus, userSettings: currentUserSettings } = useSelector((state: any) => state.channels);
  const [selectedOption, setSelectedOption] = useState(0);

  const [channelList, setChannelList] = useState<ChannelListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // for alerts
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fetchChannelDetails = async (channel: string) => {
    const details = await userPushSDKInstance.channel.info(channel);
    if (details) {
      const updatedChannelItem: ChannelListItem = {
        channel,
        id: details.id,
        icon: details.icon,
        name: details.name,
        channel_settings: details.channel_settings,
      };
      return updatedChannelItem;
    } else return undefined;
  };

  const fillData = async (details: any) => {
    const data = [];
    await Promise.all(
      Object.keys(details).map(async (channel) => {
        const channelData = await fetchChannelDetails(channel);
        if (channelData) data.push(channelData);
      })
    );
    setChannelList(data);
  };

  useEffect(() => {
    if (!account || !userPushSDKInstance) return;
    (async function () {
      setIsLoading(true);
      if (Object.keys(subscriptionStatus).length === 0) {
        const subscriptionsArr = await userPushSDKInstance.notification.subscriptions();
        const subscriptionsMapping = {};
        const userSettings = {};
        subscriptionsArr.map(({ channel, user_settings }) => {
          subscriptionsMapping[channel] = true;
          userSettings[channel] = user_settings ? JSON.parse(user_settings) : null;
        });
        dispatch(updateBulkSubscriptions(subscriptionsMapping));
        dispatch(updateBulkUserSettings(userSettings));
        await fillData(subscriptionsMapping);
      } else {
        await fillData(subscriptionStatus);
      }
      setIsLoading(false);
    })();
  }, [account, userPushSDKInstance]);

  const navigateToChannels = () => {
    navigate('/channels');
  };

  const selectOptions = [
    {
      value: 0,
      label: 'My Profile',
      title: 'Your Profile',
      section: 'top',
    },
    {
      value: 1,
      label: 'Notification Settings',
      title: 'Notification Settings',
      section: 'top',
    },
    {
      value: 2,
      label: 'Push Snap',
      title: '',
      section: 'top',
    },
    {
      value: 3,
      label: 'Plan & Billing',
      title: 'Plan & Billing',
      section: 'bottom',
    },
  ];

  return (
    <Container>
      <PageTitle>Settings</PageTitle>
      <PageDescription>Customize your Push profile or manage your notification preferences</PageDescription>

      <Wrapper>
        <SelectSection>
          {selectOptions
            .filter((option) => option.section === 'top')
            .map((option) => (
              <SelectListOption
                onClick={() => setSelectedOption(option.value)}
                key={option.value}
                isSelected={option.value === selectedOption}
              >
                {option.label}
              </SelectListOption>
            ))}

          {!isMobile && (
            <Box margin="spacing-lg spacing-none spacing-none spacing-none">
              <Text
                variant="os-regular"
                color="text-tertiary"
              >
                Developers
              </Text>
            </Box>
          )}

          {selectOptions
            .filter((option) => option.section === 'bottom')
            .map((option) => (
              <SelectListOption
                onClick={() => setSelectedOption(option.value)}
                key={option.value}
                isSelected={option.value === selectedOption}
              >
                {option.label}
              </SelectListOption>
            ))}
        </SelectSection>

        <ChannelBlock>
          {selectedOption === 0 && (
            <>
              {successMessage && (
                <Box margin="spacing-sm spacing-none spacing-none spacing-none">
                  <Alert
                    variant="success"
                    heading={successMessage}
                  />
                </Box>
              )}
              {errorMessage && (
                <Box margin="spacing-sm spacing-none spacing-none spacing-none">
                  <Alert
                    variant="error"
                    heading={errorMessage}
                  />
                </Box>
              )}
            </>
          )}

          {selectedOption === 3 && (
            <Alert
              showIcon={false}
              heading="Go Pro for $14.99/mo and unlock access to more features"
              onAction={() => console.log('idea')}
              actionText="Upgrade Plan"
              variant="basic"
            />
          )}

          <ChannelWrapper>
            <ChannelContainer selectedOption={selectedOption}>
              {selectOptions[selectedOption]?.title && (
                <SectionTitle bottomSpacing={selectedOption == 2 ? false : true}>
                  {selectOptions[selectedOption]?.title}
                </SectionTitle>
              )}

              {selectedOption === 0 && (
                <UserProfileSettings
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  successMessage={successMessage}
                  setSuccessMessage={setSuccessMessage}
                />
              )}
              {selectedOption === 1 && <ChannelListSettings />}
              {selectedOption === 2 && <PushSnapSettings />}
              {selectedOption === 3 && <UserPlanAndBillings />}
            </ChannelContainer>
          </ChannelWrapper>

          {selectedOption == 0 && (
            <ChannelWrapper>
              <ChannelContainer selectedOption={selectedOption}>
                <UserProfileSocialSettings
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  successMessage={successMessage}
                  setSuccessMessage={setSuccessMessage}
                />
              </ChannelContainer>
            </ChannelWrapper>
          )}
        </ChannelBlock>
      </Wrapper>
    </Container>
  );
}

// Export Default
export default UserSettings;

const Container = styled.div`
  padding: 32px 24px;
  flex: 1;
  height: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    padding: 24px 12px;
  }
`;

const PageTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.default.color};

  @media ${device.tablet} {
    text-align: center;
    margin-top: 24px;
  }
`;

const PageDescription = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.default.secondaryColor};
  margin-bottom: 40px;

  @media ${device.tablet} {
    text-align: center;
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
  flex: 1;
  min-height: 0;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 42px;

  @media ${device.tablet} {
    margin-right: 0px;
    flex-direction: row;
    overflow-x: scroll;
    justify-content: center;
  }
`;

const SelectListOption = styled(Button)<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? props.theme.default.secondaryBg : 'transparent')};
  color: ${(props) => props.theme.default.secondaryColor};
  border-radius: 12px;
  width: 100%;
  padding: 14px;
  margin: 10px 0px;
  justify-content: flex-start;

  &:hover:after {
    background-color: ${(props) => props.theme.default.secondaryBg};
  }

  @media ${device.tablet} {
    padding: 12px;
    max-width: fit-content;
  }
`;

const ChannelWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.userSettingsBorder};
  padding: 12px;
  border-radius: 24px;

  @media ${device.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`;

const ChannelBlock = styled.div`
  overflow: hidden;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  min-height: 0;
  gap: 16px;
  padding-right: 12px;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
    right: 10px;
  }
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
    position: absolute;
    right: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d53a94;
    border-radius: 99px;
    width: 4px;
    position: absolute;
    right: 10px;
  }
  // Adding margin-bottom to the last child
  & > *:last-child {
    margin-bottom: 100px;
  }
`;

const ChannelContainer = styled.div<{ selectedOption: number }>`
  overflow-y: ${(props) => (props.selectedOption === 3 ? 'none' : 'auto')};
  height: ${(props) => (props.selectedOption === 0 || props.selectedOption === 3 ? 'auto' : '55vh')};
  padding: 12px;

  &::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d53a94;
    border-radius: 99px;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  @media ${device.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`;

const SectionTitle = styled.div<{ bottomSpacing: boolean }>`
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: ${(props) => (props.bottomSpacing ? '20px' : '0px')};
  color: ${(props) => props.theme.default.color};

  @media ${device.tablet} {
    text-align: center;
  }
`;

const SettingsListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`;

const Icon = styled(ImageV2)`
  border: 1px solid ${(props) => props.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`;

const ChannelName = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: normal;
  color: ${(props) => props.theme.default.color};
`;

const SettingsListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HR = styled.span`
  background-color: ${(props) => props.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`;

const MoreButtonUI = styled(AiOutlineMore)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.default.color};
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;
