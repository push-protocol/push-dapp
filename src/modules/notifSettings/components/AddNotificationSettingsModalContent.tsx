import { FC } from 'react';

import { Box, Button, Text, TextInput, ToggleSwitch } from 'blocks';
import { css } from 'styled-components';

import { ModalResponse } from 'common';

import { NotificationSettingsRangeSelector } from './NotificationSettingsRangeSelector';
import { useEditNotificationSettingsForm } from '../EditNotificationSetting.form';

type AddNotificationSettingsModalContentProps = {
  modalControl: ModalResponse;
};

const AddNotificationSettingsModalContent: FC<AddNotificationSettingsModalContentProps> = ({ modalControl }) => {
  const {
    values: formValues,
    handleSubmit,
    handleChange,
    touched,
    errors,
    setFieldValue,
  } = useEditNotificationSettingsForm();

  const { onClose } = modalControl;
  return (
    <Box width="100%"  >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          gap="spacing-md"
        >
          <Text
            textAlign="center"
            variant="h4-semibold"
          >
            Add a Setting
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-md"
            padding="spacing-xxs spacing-xs"
            width="-webkit-fill-available"
            maxHeight='440px'
            css={css`overflow-y:scroll;`}
            customScrollbar
          >
            <TextInput
              placeholder="e.g. Announcements"
              label="Setting Name"
              totalCount={50}
              value={formValues.settingName}
              onChange={handleChange('settingName')}
              error={touched.settingName && Boolean(errors.settingName)}
              errorMessage={touched.settingName ? errors.settingName : ''}
            />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Text
                  ellipsis
                  variant="h6-bold"
                >
                  Set as Default
                </Text>
                <Text variant="bes-regular">Setting on for users by default</Text>
              </Box>
              <ToggleSwitch
                leadingToggle={false}
                checked={formValues.isDefault}
                onCheckedChange={(checked) => setFieldValue('isDefault', checked)}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Text
                  ellipsis
                  variant="h6-bold"
                >
                  Range
                </Text>
                <Text variant="bes-regular">Set a range for this setting e.g. 1-10</Text>
              </Box>
              <ToggleSwitch
                leadingToggle={false}
                checked={formValues.enableRange}
                onCheckedChange={(checked) => setFieldValue('enableRange', checked)}
              />
            </Box>
            {formValues.enableRange && <NotificationSettingsRangeSelector />}
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="spacing-xxs"
            gap="spacing-xs"
            alignSelf="center"
          >
            <Button
              size="small"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="primary"
            >
              Save settings
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export { AddNotificationSettingsModalContent };
