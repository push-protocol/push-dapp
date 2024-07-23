import { Box } from 'blocks';

import { useAccount } from 'hooks';
import useModalBlur from 'hooks/useModalBlur';

import { useGetChannelDetails } from 'queries';

import { EditChannelFooter } from './components/EditChannelFooter';
import { EditChannelForm } from './components/EditChannelForm';

import { EditChanelFormProvider } from './EditChannel.forms';
import { FC } from 'react';
import { DashboardActiveState } from 'modules/channelDashboard/ChannelDashboard.types';

type EditChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const EditChannel: FC<EditChannelProps> = ({
  setActiveState
}) => {
  const { account } = useAccount();

  const { data: channelDetails } = useGetChannelDetails(account);

  const {
    isModalOpen: isUploadLogoModalOpen,
    showModal: displayUplaodLogoModal,
    ModalComponent: UploadLogoComponent
  } = useModalBlur();

  return (
    <EditChanelFormProvider>
      <Box
        display="flex"
        width={{ initial: '846px', ml: '357px' }}
        padding='spacing-md'
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        backgroundColor="surface-primary"
        borderRadius="radius-lg"
        margin="spacing-none spacing-none spacing-sm spacing-none"
      >
        {channelDetails && (
          <EditChannelForm
            displayUplaodLogoModal={displayUplaodLogoModal}
            UploadLogoComponent={UploadLogoComponent}
            channelDetails={channelDetails}
          />
        )}
        <EditChannelFooter setActiveState={setActiveState} />

      </Box>

    </EditChanelFormProvider>

  );
};

export { EditChannel };
