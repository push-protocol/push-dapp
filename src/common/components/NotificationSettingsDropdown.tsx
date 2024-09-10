import { FC, useState } from 'react';

import { Box, Button, Separator, Text, ToggleSwitch } from 'blocks';

import InputSlider from 'components/reusables/sliders/InputSlider';
import RangeSlider from 'components/reusables/sliders/RangeSlider';

import { ChannelSetting } from 'helpers/channel/types';
import { css } from 'styled-components';

type NotificationSettingsDropdownProps = {
  // TODO: Change this to the new channel Settings type
  channelSettings: ChannelSetting[];
  optInHandler: (channelSettings: ChannelSetting[]) => Promise<void>;
  loading: boolean;
  onClose: () => void;
};

const NotificationSettingsDropdown: FC<NotificationSettingsDropdownProps> = ({
  optInHandler,
  channelSettings,
  loading,
  onClose,
}) => {
  const [modifiedSettings, setModifiedSettings] = useState([...channelSettings]);

  const handleSliderChange = (index: number, value: number | { lower: number; upper: number }) => {
    const updatedSettings = [...modifiedSettings];
    updatedSettings[index].default = value;
    setModifiedSettings(updatedSettings);
  };

  const handleSwitchChange = (index: number) => {
    const updatedSettings = [...modifiedSettings];
    if (updatedSettings[index].type === 1) {
      // Type 1
      // Use a type guard to narrow the type to ChannelSetting of type 1
      const setting = updatedSettings[index] as ChannelSetting & { type: 1 };
      setting.default = !setting.default;
    } else {
      // Type 2
      // Use a type guard to narrow the type to ChannelSetting of type 2
      const setting = updatedSettings[index] as ChannelSetting & { type: 2 };
      setting.enabled = !setting.enabled;
    }
    setModifiedSettings(updatedSettings);
  };

  const handleOptIn = async () => {
    await optInHandler(modifiedSettings);
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
        // padding="spacing-none spacing-xs"
        gap="spacing-xxs"
        alignItems="center"
        alignSelf="stretch"
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
                  gap="spacing-xxs"
                  padding="spacing-xs spacing-none"
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
                      checked={setting.type === 1 ? setting.default : setting.enabled}
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
                        {setting.default}
                      </Text>
                      <InputSlider
                        val={setting.default}
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
                        {setting.default.lower} - {setting.default.upper}
                      </Text>
                      <RangeSlider
                        startVal={setting.default.lower}
                        endVal={setting.default.upper}
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
              onClick={handleOptIn}
              block
              loading={loading}
            >
              {loading ? 'Subscribing' : 'Subscribe'}
            </Button>
            <Box
              width="100%"
              cursor="pointer"
              onClick={onClose}
            >
              <Text
                textAlign="center"
                variant="bs-semibold"
              >
                Cancel
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { NotificationSettingsDropdown };
