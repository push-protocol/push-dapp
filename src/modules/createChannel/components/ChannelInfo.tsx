// React + web3 essentials
import { FC } from "react";

// Third party librabries
import { FormikProps } from "formik";

// Components
import { Box, Button, TextArea, TextInput } from "blocks";

// Types
import { ChannelInfoFormValues } from "../CreateChannel.types";

type ChannelInfoProps = {
  channelInfoFormik: FormikProps<ChannelInfoFormValues>;
}

const ChannelInfo: FC<ChannelInfoProps> = ({
  channelInfoFormik,
}) => {

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignSelf='stretch'
    >

      <form onSubmit={channelInfoFormik.handleSubmit}>
        <Box
          display='flex'
          flexDirection='column'
          gap='spacing-xl'
          alignSelf='stretch'
        >
          <Box
            display='flex'
            flexDirection='column'
            gap='spacing-sm'
            alignSelf='stretch'
          >
            <TextInput
              required
              label="Channel Name"
              value={channelInfoFormik.values.channelName}
              onChange={(e) => {
                const maxLength = 32;
                const inputValue = e.target.value.slice(0, maxLength);
                channelInfoFormik.setFieldValue('channelName', inputValue);
              }}
              error={channelInfoFormik.touched.channelName && Boolean(channelInfoFormik.errors.channelName)}
              errorMessage={channelInfoFormik.touched.channelName ? channelInfoFormik.errors.channelName : ''}
              totalCount={32}
            />

            <TextArea
              required
              label="Channel Description"
              placeholder="Get notified about ..."
              description='Enter a Brief description of the notifications the user will receive'
              error={channelInfoFormik.touched.channelDesc && Boolean(channelInfoFormik.errors.channelDesc)}
              errorMessage={channelInfoFormik.touched.channelDesc ? channelInfoFormik.errors.channelDesc : ''}
              totalCount={250}
              value={channelInfoFormik.values.channelDesc}
              onChange={(e) => {
                const maxLength = 250;
                const inputValue = e.target.value.slice(0, maxLength);
                channelInfoFormik.setFieldValue('channelDesc', inputValue);
              }}
            />

            <TextInput
              required
              label="Channel Website URL"
              value={channelInfoFormik.values.channelURL}
              onChange={channelInfoFormik.handleChange('channelURL')}
              error={channelInfoFormik.touched.channelURL && Boolean(channelInfoFormik.errors.channelURL)}
              errorMessage={channelInfoFormik.touched.channelURL ? channelInfoFormik.errors.channelURL : ''}
            />
          </Box>

          <Box display='flex' justifyContent='center'>
            <Button disabled={!channelInfoFormik.isValid}>
              Next
            </Button>
          </Box>
        </Box>

      </form>
    </Box>

  );
};

export { ChannelInfo };