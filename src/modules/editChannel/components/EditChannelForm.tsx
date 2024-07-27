import { FC } from 'react';
import { css } from 'styled-components';

import { Box, Button, Separator, TextArea, TextInput } from 'blocks';

import { MODAL_POSITION } from 'hooks/useModalBlur';

import { uploadLogoModal } from 'modules/editChannel/uploadLogoModal';
import { ChannelDetails } from 'queries';

import { useEditChannelForm } from '../EditChannel.form';

type EditChannelFormProps = {
  channelDetails: ChannelDetails;
  UploadLogoComponent: any;
  displayUplaodLogoModal: any;
};

const EditChannelForm: FC<EditChannelFormProps> = ({ UploadLogoComponent, displayUplaodLogoModal }) => {
  const { values: formValues, errors, handleChange } = useEditChannelForm();

  return (
    <Box display="flex" flexDirection={{ initial: 'row', ml: 'column' }} gap="spacing-lg" width="100%" padding="spacing-sm spacing-md" justifyContent="center">
      <Box display="flex" flexDirection="column" alignItems="center" gap="spacing-sm">
        <Box
          width="90px"
          height="90px"
          border="border-sm solid stroke-tertiary"
          borderRadius="radius-md"
          css={css`
            img {
              border-radius: 16px;
            }
          `}
        >
          <img width="100%" height="100%" src={formValues.channelIcon} />
        </Box>
        <Button size="extraSmall" onClick={displayUplaodLogoModal}>
          Upload Logo
        </Button>
      </Box>
      <Box display={{ initial: 'block', ml: 'none' }} height="330px" margin="spacing-none spacing-lg">
        <Separator orientation="vertical" />
      </Box>

      <Box display={{ initial: 'none', ml: 'block' }}>
        <Separator orientation="horizontal" />
      </Box>

      <Box width={{ initial: "550px", ml: '350px' }}>
        <form>
          <Box display="flex" flexDirection="column" gap="spacing-xl" alignSelf="stretch">
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-sm"
              alignSelf="stretch"
              css={css`
                flex: 1;
              `}
            >
              <TextInput
                required
                label="Channel Name"
                value={formValues.channelName}
                onChange={handleChange('channelName')}
                error={Boolean(errors.channelName)}
                errorMessage={errors.channelName}
                totalCount={32}
              />

              <TextArea
                required
                label="Channel Description"
                placeholder="Get notified about ..."
                description="Enter a Brief description of the notifications the user will receive"
                error={Boolean(errors.channelDesc)}
                errorMessage={errors.channelDesc}
                value={formValues.channelDesc}
                onChange={handleChange('channelDesc')}
                totalCount={250}
              />

              <TextInput
                required
                label="Channel Website URL"
                value={formValues.channelURL}
                onChange={handleChange('channelURL')}
                error={Boolean(errors.channelURL)}
                errorMessage={errors.channelURL}
              />
            </Box>
          </Box>
        </form>
      </Box>

      <UploadLogoComponent InnerComponent={uploadLogoModal} modalPosition={MODAL_POSITION.ON_PARENT} />
    </Box>
  );
};

export { EditChannelForm };
