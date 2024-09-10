import { FC, useState } from 'react';

import { Box, Button, Separator, Text, ToggleSwitch } from 'blocks';

import InputSlider from 'components/reusables/sliders/InputSlider';
import RangeSlider from 'components/reusables/sliders/RangeSlider';

import { UserSetting } from 'helpers/channel/types';
import { css } from 'styled-components';

type NotificationSettingsDropdownProps = {
  userSetting: UserSetting[];
  updateNotificationSettings: (setting: UserSetting[]) => Promise<void>;
  updatingNotificationSettings: boolean;
  unsubscribing: boolean;
  unsubscribe: () => void;
};

const ManageSettingsDropdown: FC<NotificationSettingsDropdownProps> = ({
  userSetting,
  updateNotificationSettings,
  updatingNotificationSettings,
  unsubscribing,
  unsubscribe,
}) => {
  const [modifiedSettings, setModifiedSettings] = useState([...userSetting]);

  const handleSliderChange = (index: number, value: number | { lower: number; upper: number }) => {
    const updatedSettings = [...modifiedSettings];
    updatedSettings[index].user = value;
    setModifiedSettings(updatedSettings);
  };

  const handleSwitchChange = (index: number) => {
    const updatedSettings = [...modifiedSettings];
    if (updatedSettings[index].type === 1) {
      // Type 1
      // Use a type guard to narrow the type to UserSetting of type 1
      const setting = updatedSettings[index] as UserSetting & { type: 1 };
      setting.user = !setting.user;
    } else if (updatedSettings[index].type === 2) {
      // Type 2
      // Use a type guard to narrow the type to UserSetting of type 2
      const setting = updatedSettings[index] as UserSetting & { type: 2 };
      setting.enabled = !setting.enabled;
    } else {
      // Type 3
      // Use a type guard to narrow the type to UserSetting of type 2
      const setting = updatedSettings[index] as UserSetting & { type: 3 };
      setting.enabled = !setting.enabled;
    }
    setModifiedSettings(updatedSettings);
  };

  const handleUpdateNotificationSettings = () => {
    updateNotificationSettings(modifiedSettings);
  };

  const handleOptOut = async () => {
    unsubscribe();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      padding="spacing-xs"
      border="border-sm solid stroke-secondary"
      backgroundColor="surface-primary"
      borderRadius="radius-sm"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xxs"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="-webkit-fill-available"
          maxHeight="30vh"
          padding="spacing-none spacing-xs"
          overflow="scroll"
          customScrollbar
          css={css`
            overflow-x: none;
          `}
        >
          {modifiedSettings.map((setting, index) => {
            return (
              <Box key={index}>
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="spacing-xs spacing-none"
                  gap="spacing-xxs"
                  alignSelf="stretch"
                  alignItems="flex-start"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignSelf="stretch"
                  >
                    <Text
                      variant="h6-bold"
                      color="text-primary"
                      textTransform="capitalize"
                    >
                      {setting.description}
                    </Text>
                    <ToggleSwitch
                      checked={setting.type === 1 ? setting.user : setting.enabled}
                      onCheckedChange={() => handleSwitchChange(index)}
                    />
                  </Box>
                  {setting.type === 2 && setting.enabled === true && (
                    <Box
                      display="flex"
                      flexDirection="column"
                      gap="spacing-xxs"
                      alignItems="flex-start"
                      alignSelf="stretch"
                    >
                      <Text
                        variant="h6-bold"
                        color="text-primary"
                        textTransform="capitalize"
                      >
                        {setting.user || setting.default}
                      </Text>
                      <InputSlider
                        val={setting.user}
                        max={setting.upperLimit}
                        min={setting.lowerLimit}
                        step={setting.ticker || 1}
                        defaultVal={setting.default}
                        onChange={({ x }) => handleSliderChange(index, x)}
                      />
                    </Box>
                  )}

                  {setting.type === 3 && setting.enabled === true && (
                    <Box
                      display="flex"
                      flexDirection="column"
                      gap="spacing-xxs"
                      alignItems="flex-start"
                      alignSelf="stretch"
                    >
                      <Text
                        variant="h6-bold"
                        color="text-primary"
                        textTransform="capitalize"
                      >
                        {setting.user.lower || setting.default.lower} - {setting.user.upper || setting.default.upper}
                      </Text>
                      <RangeSlider
                        startVal={setting.user.lower || setting.default.lower}
                        endVal={setting.user.upper || setting.default.upper}
                        max={setting.upperLimit}
                        min={setting.lowerLimit}
                        step={setting.ticker || 1}
                        defaultStartVal={setting.default.lower}
                        defaultEndVal={setting.default.upper}
                        onChange={({ startVal, endVal }) =>
                          handleSliderChange(index, { lower: startVal, upper: endVal })
                        }
                      />
                    </Box>
                  )}
                </Box>
                <Separator />
              </Box>
            );
          })}
        </Box>

        <Box
          display="flex"
          gap="spacing-xxs"
          alignSelf="stretch"
          alignItems="center"
          justifyContent="flex-end"
          flexDirection="column"
          padding="spacing-none spacing-xs"
        >
          <Text
            color="text-tertiary"
            variant="bes-regular"
          >
            You will receive all important updates from this channel.
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-md"
            alignItems="center"
            width="100%"
          >
            <Button
              size="small"
              variant="primary"
              onClick={handleUpdateNotificationSettings}
              block
              loading={updatingNotificationSettings}
            >
              {updatingNotificationSettings ? 'Updating' : 'Update Preferences'}
            </Button>
            <Box
              width="100%"
              cursor="pointer"
              onClick={handleOptOut}
            >
              <Text
                textAlign="center"
                variant="bs-semibold"
              >
                {unsubscribing ? 'Unsubscribing' : 'Unsubscribe'}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ManageSettingsDropdown };
