import { Box, Text, TextArea, TextInput, ToggleSwitch } from 'blocks';
import { ChangeEvent, FC, useState } from 'react';

const FormFields: FC = () => {
  //move these to formik
  const [titleChecked, setTitleChecked] = useState(false);
  const [mediaUrlChecked, setMediaUrlChecked] = useState(false);
  const [ctaLinkChecked, setCtaLinkChecked] = useState(false);

  return (
    <Box
      display="flex"
      gap="spacing-md"
      width="100%"
      flexDirection="column"
    >
      <Box
        display="flex"
        gap="spacing-sm"
      >
        select
      </Box>
      <Box
        display="flex"
        gap="spacing-sm"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
          backgroundColor="surface-secondary"
          borderRadius="radius-xs"
          gap="spacing-xxxl"
          padding="spacing-xs"
        >
          <Text>Title</Text>
          <ToggleSwitch
            leadingToggle={false}
            checked={titleChecked}
            onCheckedChange={(checked) => setTitleChecked(checked)}
          />
        </Box>
        <Box
          display="flex"
          backgroundColor="surface-secondary"
          borderRadius="radius-xs"
          gap="spacing-xxxl"
          alignItems="center"
          padding="spacing-xs"
        >
          <Text>Media URL</Text>
          <ToggleSwitch
            leadingToggle={false}
            checked={mediaUrlChecked}
            onCheckedChange={(checked) => setMediaUrlChecked(checked)}
          />
        </Box>
        <Box
          display="flex"
          backgroundColor="surface-secondary"
          borderRadius="radius-xs"
          alignItems="center"
          gap="spacing-xxxl"
          padding="spacing-xs"
        >
          <Text>CTA Link</Text>
          <ToggleSwitch
            leadingToggle={false}
            checked={ctaLinkChecked}
            onCheckedChange={(checked) => setCtaLinkChecked(checked)}
          />
        </Box>
      </Box>
      {titleChecked && (
        <TextInput
          totalCount={80}
          placeholder="Input Value"
          label="Notification Title"
          onChange={() => {}}
          value={''}
        />
      )}
      <TextArea
        label="Notification Message"
        placeholder="Input Value"
        totalCount={500}
        onChange={() => {}}
        value={''}
      />
      {mediaUrlChecked && (
        <TextInput
          placeholder="Input Value"
          label="Media URL"
          onChange={() => {}}
          value={''}
        />
      )}
      {ctaLinkChecked && (
        <TextInput
          placeholder="Input Value"
          label="CTA Link"
          onChange={() => {}}
          value={''}
        />
      )}
      select
    </Box>
  );
};

export { FormFields };
