import { FC } from 'react';

import { Box } from 'blocks';

import useModalBlur from 'hooks/useModalBlur';

import { ChannelDetails } from 'queries';

import { EditChannelFooter } from './components/EditChannelFooter';
import { EditChannelDetails } from './components/EditChannelDetails';

import { EditChanelFormProvider } from './EditChannel.form';
import { DashboardActiveState } from 'modules/channelDashboard/ChannelDashboard.types';

type EditChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
  channelDetails: ChannelDetails;
};

const EditChannel: FC<EditChannelProps> = ({ setActiveState, channelDetails }) => {

  const {
    isModalOpen: isUploadLogoModalOpen,
    showModal: displayUplaodLogoModal,
    ModalComponent: UploadLogoComponent
  } = useModalBlur();


  return (
    <>
      <EditChanelFormProvider channelDetails={channelDetails}>
        <Box
          display="flex"
          width={{ initial: '846px', ml: '357px' }}
          padding="spacing-md"
          flexDirection="column"
          alignItems="center"
          gap="spacing-lg"
          backgroundColor="surface-primary"
          borderRadius="radius-lg"
          margin="spacing-none spacing-none spacing-sm spacing-none"
        >
          {channelDetails && (
            <EditChannelDetails
              displayUplaodLogoModal={displayUplaodLogoModal}
              UploadLogoComponent={UploadLogoComponent}
              channelDetails={channelDetails}
            />
          )}
          <EditChannelFooter setActiveState={setActiveState} />
        </Box>
      </EditChanelFormProvider>
    </>
  );
};

export { EditChannel };