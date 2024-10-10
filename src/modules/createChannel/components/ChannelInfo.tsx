import { FC } from 'react';

import { Box, Button, Select, TextArea, TextInput } from 'blocks';

import { useAccount } from 'hooks';
import { useGetChannelCategories } from 'queries';
import { useCreateChannelForm } from '../CreateChannel.form';
import { ActiveStepKey } from '../CreateChannel.types';

type ChannelInfoProps = {
  setActiveStepKey: (key: ActiveStepKey) => void;
  handleNextStep: (key: ActiveStepKey) => void;
};
const ChannelInfo: FC<ChannelInfoProps> = ({ handleNextStep, setActiveStepKey }) => {
  const {
    values: formValues,
    touched,
    setFieldTouched,
    setFieldValue,
    errors,
    validateForm,
    setTouched,
  } = useCreateChannelForm();

  const { isWalletConnected, connect } = useAccount();

  const { data: categories } = useGetChannelCategories();

  const handleNext = () => {
    validateForm().then((errors) => {
      setTouched({
        channelName: true,
        channelDesc: true,
        channelCategory: true,
        channelURL: true,
      });
      if (Object.keys(errors).length === 0) {
        if (!isWalletConnected) {
          connect();
        }
        handleNextStep('uploadLogo');
        setActiveStepKey('uploadLogo');
      }
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="stretch"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xl"
        alignSelf="stretch"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
          alignSelf="stretch"
        >
          <TextInput
            required
            label="Channel Name"
            value={formValues.channelName}
            onChange={(e) => {
              const value = e.target.value;
              setFieldTouched('channelName', true);
              setFieldValue('channelName', value);
            }}
            totalCount={32}
            error={touched.channelName && Boolean(errors?.channelName)}
            errorMessage={touched.channelName ? errors?.channelName : ''}
          />
          <Select
            required
            label="Channel Category"
            options={categories?.selectFieldTags || []}
            value={formValues.channelCategory}
            error={touched.channelCategory && Boolean(errors?.channelCategory)}
            errorMessage={touched.channelCategory ? errors?.channelCategory : ''}
            onSelect={(value) => {
              setFieldTouched('channelCategory', true);
              setFieldValue('channelCategory', value);
            }}
          />
          <TextArea
            required
            label="Channel Description"
            placeholder="Get notified about ..."
            description="Enter a Brief description of the notifications the user will receive"
            value={formValues.channelDesc}
            onChange={(e) => {
              const value = e.target.value;
              setFieldTouched('channelDesc', true);
              setFieldValue('channelDesc', value);
            }}
            totalCount={250}
            error={touched.channelDesc && Boolean(errors?.channelDesc)}
            errorMessage={touched.channelURL ? errors?.channelDesc : ''}
          />
          <TextInput
            required
            label="Channel Website URL"
            value={formValues.channelURL}
            onChange={(e) => {
              const value = e.target.value;
              setFieldTouched('channelURL', true);
              setFieldValue('channelURL', value);
            }}
            error={touched.channelURL && Boolean(errors?.channelURL)}
            errorMessage={touched.channelURL ? errors?.channelURL : ''}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
        >
          <Button onClick={handleNext}>Next</Button>
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelInfo };
