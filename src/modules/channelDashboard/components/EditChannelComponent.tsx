import { Box } from 'blocks';
import { EditChannelForm } from './EditChannelForm';
import { EditChannelFooter } from './EditChannelFooter';
import { FC } from 'react';
import { ChannelInfoFormValues, DashboardActiveState } from '../ChannelDashboard.types';
import { useGetChannelDetails } from 'queries';
import { useAccount } from 'hooks';
import { useFormik } from 'formik';
import isEqual from 'lodash/isEqual';
import useModalBlur from 'hooks/useModalBlur';

type EditChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
};

const EditChannelComponent: FC<EditChannelProps> = ({ setActiveState }) => {
  const { account } = useAccount();

  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);
  console.log('channelDetails >>>', channelDetails);

  const channelForm = useFormik<ChannelInfoFormValues>({
    initialValues: {
      channelName: channelDetails?.name,
      channelDesc: channelDetails?.info,
      channelURL: channelDetails?.url,
      channelIcon: channelDetails?.iconV2
    },
    // validationSchema:channelFormValidation,
    onSubmit: (values) => {
      // checkForChanges();
      console.log('Values >>>', values);
    }
  });

  const {
    isModalOpen: isUploadLogoModalOpen,
    showModal: displayUplaodLogoModal,
    ModalComponent: UploadLogoComponent
  } = useModalBlur();

  return (
    <Box
      display="flex"
      width={{ initial: '846px', ml: '357px' }}
      padding="s6"
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
          channelForm={channelForm}
          channelDetails={channelDetails}
        />
      )}
      <EditChannelFooter channelForm={channelForm} setActiveState={setActiveState} />
    </Box>
  );
};

export { EditChannelComponent };
