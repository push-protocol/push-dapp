import { FC } from 'react';
import { css } from 'styled-components';

import { Box, Button, Separator, TextArea, TextInput } from 'blocks';

import { MODAL_POSITION } from 'hooks/useModalBlur';

import uploadLogoModal from 'modules/editChannel/uploadLogoModal';
import { ChannelDetailsResponse } from 'queries';

import { ImageV3 } from 'modules/channelDashboard/ChannelDashboard.styled';
import { useEditChannelForm } from '../EditChannel.forms';


type EditChannelFormProps = {
  channelDetails: ChannelDetailsResponse,
  UploadLogoComponent: any;
  displayUplaodLogoModal: any;
}

const EditChannelForm: FC<EditChannelFormProps> = ({
  UploadLogoComponent,
  displayUplaodLogoModal,
}) => {

  const {
    values: formValues,
    touched,
    setFieldValue,
    errors,
    setTouched,
  } = useEditChannelForm();

  return (
    <Box display='flex' gap='spacing-lg' width='100%' padding='spacing-sm spacing-md' justifyContent='center'>
      <Box display='flex' flexDirection='column' alignItems='center' gap='spacing-sm'>
        <Box
          width="90px"
          height="90px"
          border='border-sm solid stroke-tertiary'
          borderRadius="radius-md"
        >
          <ImageV3
            width="100%"
            height="100%"
            src={formValues.channelIcon}
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
                value={formValues.channelName as string}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setTouched({
                    channelName: true
                  })
                  setFieldValue('channelName', inputValue);
                }}
                error={touched.channelName && Boolean(errors.channelName)}
                errorMessage={touched.channelName ? errors.channelName : ''}
                totalCount={32}
              />

              <TextArea
                required
                label="Channel Description"
                placeholder="Get notified about ..."
                description='Enter a Brief description of the notifications the user will receive'
                error={touched.channelDesc && Boolean(errors.channelDesc)}
                errorMessage={touched.channelDesc ? errors.channelDesc : ''}
                value={formValues.channelDesc}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setTouched({
                    channelDesc: true
                  })
                  setFieldValue('channelDesc', inputValue);
                }}
                totalCount={250}
              />

              <TextInput
                required
                label="Channel Website URL"
                value={formValues.channelURL as string}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setTouched({
                    channelURL: true
                  })
                  setFieldValue('channelURL', inputValue)
                }}
                error={touched.channelURL && Boolean(errors.channelURL)}
                errorMessage={touched.channelURL ? errors.channelURL : ''}
              />
            </Box>
          </Box>

        </form>
      </Box>

      <UploadLogoComponent
        InnerComponent={uploadLogoModal}
        modalPosition={MODAL_POSITION.ON_PARENT}
      />

    </Box>
  );
};

export { EditChannelForm };