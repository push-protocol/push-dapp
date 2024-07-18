import { FormikProps } from 'formik';
import { ChannelDetailsResponse } from 'queries';
import { FC, useMemo } from 'react';
import { ChannelInfoFormValues } from '../ChannelDashboard.types';
import { Box, Button, Separator, TextArea, TextInput } from 'blocks';
import { ImageV3 } from '../ChannelDashboard.styled';
import { css } from 'styled-components';
import isEqual from 'lodash/isEqual';
import uploadLogoModal from 'modules/editChannel/uploadLogoModal';
import { MODAL_POSITION } from 'hooks/useModalBlur';

type EditChannelFormProps = {
  channelDetails: ChannelDetailsResponse,
  channelForm: FormikProps<ChannelInfoFormValues>;
  UploadLogoComponent: any;
  displayUplaodLogoModal: any;
}

const EditChannelForm: FC<EditChannelFormProps> = ({
  channelDetails,
  channelForm,
  UploadLogoComponent,
  displayUplaodLogoModal
}) => {

  console.log("Channel Form", channelForm);

  const checkForChanges = useMemo(() => {
    if (!isEqual(channelForm.values, channelForm.initialValues)) {
      return false
    } else {
      return true
    }
  }, [channelForm.values])



  return (
    <Box display='flex' gap='s8' width='100%' padding='spacing-sm spacing-md' justifyContent='center'>
      <Box display='flex' flexDirection='column' alignItems='center' gap='s4'>
        <Box
          width="90px"
          height="90px"
          border='1px solid gray-100'
          borderRadius="radius-md"
        >
          <ImageV3
            width="100%"
            height="100%"
            src={channelForm.values.channelIcon}
          />
        </Box>
        <Button size='extraSmall' onClick={displayUplaodLogoModal}>Upload Logo</Button>
      </Box>
      <Box height='330px' margin='spacing-none spacing-lg'>
        <Separator orientation='vertical' />
      </Box>

      <Box width='550px'>
        <form>
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
              css={css`flex:1;`}
            >
              <TextInput
                required
                label="Channel Name"
                value={channelForm.values.channelName}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  channelForm.setFieldValue('channelName', inputValue);
                }}
                error={channelForm.touched.channelName && Boolean(channelForm.errors.channelName)}
                errorMessage={channelForm.touched.channelName ? channelForm.errors.channelName : ''}
                totalCount={32}
              />

              <TextArea
                required
                label="Channel Description"
                placeholder="Get notified about ..."
                description='Enter a Brief description of the notifications the user will receive'
                error={channelForm.touched.channelDesc && Boolean(channelForm.errors.channelDesc)}
                errorMessage={channelForm.touched.channelDesc ? channelForm.errors.channelDesc : ''}
                value={channelForm.values.channelDesc}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  channelForm.setFieldValue('channelDesc', inputValue);
                }}
                totalCount={250}
              />

              <TextInput
                required
                label="Channel Website URL"
                value={channelForm.values.channelURL}
                onChange={channelForm.handleChange('channelURL')}
                error={channelForm.touched.channelURL && Boolean(channelForm.errors.channelURL)}
                errorMessage={channelForm.touched.channelURL ? channelForm.errors.channelURL : ''}
              />
            </Box>
          </Box>

        </form>
      </Box>

      <UploadLogoComponent
        InnerComponent={uploadLogoModal}
        InnerComponentProps={{ channelForm }}
        modalPosition={MODAL_POSITION.ON_PARENT}
      />

    </Box>
  );
};

export { EditChannelForm };