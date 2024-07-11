// This is the Parent component for the Create Channel flow.
// React + web3 essentials
import { useEffect, useState } from 'react';

// Third party libraries
import { useFormik } from 'formik';
import { ethers } from 'ethers';

// Hooks
import { useAccount } from 'hooks';

//common
import { Stepper } from 'common';

// Components
import { Box } from 'blocks';
import { StakeFees } from './components/StakeFees';
import { UploadLogo } from './components/UploadLogo';
import { ChannelInfo } from './components/ChannelInfo';
import { CreateChannelError } from './components/CreateChannelError';
import { CreateChannelHeader } from './components/CreateChannelHeader';
import { CreateChannelProcessingInfo } from './components/CreateChannelProcessingInfo';
import { CHANNEL_STAKE_FEES, CreateChannelSteps } from './CreateChannel.constants';
import { ChannelCreationError, ChannelInfoFormValues, CreateChannelProgressType } from './CreateChannel.types';
import { channelInfoValidationSchema, checkImageSize, checkPushTokenApprovalFunc } from './CreateChannel.utils';

// Helpers
import { IPFSupload } from 'helpers/IpfsHelper';
import { CHANNEL_TYPE } from 'helpers/UtilityHelper';

// Config
import { useApprovePUSHToken, useCreateChannel } from 'queries/hooks/createChannel';

const completedSteps = [0];
const fees = ethers.utils.parseUnits(CHANNEL_STAKE_FEES.toString(), 18);

const progressInitialState: CreateChannelProgressType = {
  progress: null,
  progressInfo: '',
  processingInfo: ''
};

const errorInitialState: ChannelCreationError = {
  txErrorStatus: 0,
  txError: ''
};

const CreateChannel = () => {
  const { account, provider, isWalletConnected, connect } = useAccount();

  const { mutate: approvePUSHToken, isPending: pendingApproval } = useApprovePUSHToken();
  const { mutate: createNewChannel, isPending: createChannelPending } = useCreateChannel();

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const channelInfoFormik = useFormik<ChannelInfoFormValues>({
    initialValues: {
      channelName: '',
      channelDesc: '',
      channelURL: ''
    },
    validationSchema: channelInfoValidationSchema,
    onSubmit: (values) => {
      console.log('Values ', values);
      handleNextStep();
      setActiveStepIndex(1);
    }
  });

  // Upload Logo
  const [view, setView] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);

  // Progress Bar and text
  const [progressState, setProgressState] = useState<CreateChannelProgressType>(progressInitialState);

  //Error status and text
  const [channelCreationError, setChannelCreationError] = useState<ChannelCreationError>(errorInitialState);


  // To handle the stepper
  const handleNextStep = () => {
    if (activeStepIndex < 2) {
      const nextStepIndex = activeStepIndex + 1;
      completedSteps.push(nextStepIndex);
      setActiveStepIndex(nextStepIndex);
    }
  };

  useEffect(() => {
    if (croppedImage) {
      checkImageSize(croppedImage, setCroppedImage);
    }
  }, [croppedImage]);

  const updateProgressState = (progress: number, progressInfo: string, processingInfo: string) => {
    setProgressState((prevState) => ({
      ...prevState,
      progress: progress,
      progressInfo: progressInfo,
      processingInfo: processingInfo
    }));
  };

  const updateChannelCreationError = (txErrorStatus: number, txError: string) => {
    setChannelCreationError((prev) => ({
      ...prev,
      txErrorStatus: txErrorStatus,
      txError: txError
    }));
  };


  const handleApprovePushToken = (signer: ethers.providers.JsonRpcSigner, storagePointer: string) => {
    approvePUSHToken(
      {
        noOfTokenToApprove: fees,
        signer
      },
      {
        onSuccess: (response) => {
          if (response.status === 1) {
            updateProgressState(
              60,
              'Please complete the transaction in your wallet to continue.',
              'Approving PUSH'
            );

            createChannel(signer, storagePointer);
          }
        },
        onError: (error: any) => {
          console.log('Error in approving PUSH Token', error);
          if (error.code === 4001 || error.code === 'ACTION_REJECTED') {
            console.log('Signature error ', error);
            updateChannelCreationError(1, 'User Rejected Signature. Please try again.');
          } else {
            updateChannelCreationError(2, 'Transaction failed due to one of the following reasons:');
          }
          setProgressState(progressInitialState)
          return false;
        }
      }
    );
  };

  const createChannel = (signer: ethers.providers.JsonRpcSigner, storagePointer: string) => {
    let channelType = CHANNEL_TYPE['GENERAL'];
    const identity = '1+' + storagePointer;
    const identityBytes = ethers.utils.toUtf8Bytes(identity);

    updateProgressState(
      70,
      'Please complete the transaction in your wallet to continue.',
      'Creating Channel...'
    );

    createNewChannel(
      {
        channelType,
        identityBytes,
        fees,
        signer
      },
      {
        onSuccess: (response) => {
          if (response.status === 0) {
            // It means their is smart contract error,  either network congestion or gas issue
            // We are not sure about this error so we cant display (EDGE CASE)
            updateChannelCreationError(2, 'Transaction failed due to one of the following reasons:');
          } else {
            console.log('Tx Successful', response);

            updateProgressState(
              80,
              'Please wait while we confirm the transaction..',
              'Transaction Confirmed..'
            );

            setTimeout(() => {
              updateProgressState(
                90,
                'Creating your channel, Aligning pixels, adjusting padding... This may take some time.',
                'Redirecting... Please do not refresh'
              );
            }, 2000);

            setTimeout(() => {
              updateProgressState(
                100,
                'Creating your channel, Aligning pixels, adjusting padding... This may take some time.',
                'Redirecting... Please do not refresh'
              );
              window.location.reload();
            }, 3000);
          }
        },
        onError: (error: any) => {
          console.log('Error in transaction from query >>>>', error);
          //User Rejected query handle it here
          if (error.code === 4001 || error.code === 'ACTION_REJECTED') {
            console.log('Signature error ', error);
            updateChannelCreationError(1, 'User Rejected Signature. Please try again.');
            setProgressState(progressInitialState)
          } else {
            // Other unknown error
            console.error('Error --> %o', error);
            console.error({ error });
            updateProgressState(
              0,
              'There was an error in creating the Channel',
              'Kindly Contact support@epns.io to resolve the issue.'
            );
          }
        }
      }
    );
  };

  const handleCreateNewChannel = async () => {
    setProgressState(progressInitialState);
    setChannelCreationError(errorInitialState);

    if (!isWalletConnected) {
      connect();
      return;
    }

    if (!channelInfoFormik.isValid) {
      setActiveStepIndex(0);
      return;
    }

    if (!croppedImage) {
      setActiveStepIndex(1);
      return;
    }

    updateProgressState(10, 'Checking for PUSH Token Approval', 'Loading...');

    // Calculate the approval amount of the user
    const approvedTokenAmount = await checkPushTokenApprovalFunc({ provider, account });
    console.log('Approved Token Amount >>', approvedTokenAmount);

    let input = {
      name: channelInfoFormik.values.channelName,
      info: channelInfoFormik.values.channelDesc,
      url: channelInfoFormik.values.channelURL,
      icon: croppedImage
    };

    const ChannelInput = JSON.stringify(input);

    updateProgressState(20, 'Please wait, payload is getting uploaded to IPFS', 'Loading...');

    let storagePointer = await IPFSupload(ChannelInput);
    console.debug('IPFS storagePointer:', storagePointer);

    updateProgressState(
      40,
      'Please complete the transaction in your wallet to continue.',
      'Payload Uploaded...'
    );

    var signer = provider.getSigner(account);
    console.debug(signer);

    // Asking user to approve 50 PUSH token
    if (approvedTokenAmount < 50.0) {
      handleApprovePushToken(signer, storagePointer);
    } else {
      createChannel(signer, storagePointer);
    }
  };



  return (
    <Box
      padding={{ initial: 's8', ml: 's4' }}
      backgroundColor={{ light: 'white', dark: 'gray-900' }}
      borderRadius="r8"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="s10"
    >
      <CreateChannelHeader />

      {channelCreationError.txErrorStatus !== 0 && <CreateChannelError channelCreationError={channelCreationError} />}

      {progressState.progress === null ? (
        <Box display="flex" flexDirection="column" gap="s8" alignItems="center" alignSelf="stretch">
          <Stepper
            steps={CreateChannelSteps}
            completedSteps={completedSteps}
            setActiveStepIndex={setActiveStepIndex}
          />

          {activeStepIndex == 0 && <ChannelInfo channelInfoFormik={channelInfoFormik} />}

          {activeStepIndex === 1 && (
            <UploadLogo
              view={view}
              croppedImage={croppedImage}
              setView={setView}
              setCroppedImage={setCroppedImage}
              setActiveStepIndex={setActiveStepIndex}
              handleNextStep={handleNextStep}
            />
          )}

          {activeStepIndex === 2 && (
            <StakeFees
              channelStakeFees={CHANNEL_STAKE_FEES}
              handleCreateNewChannel={handleCreateNewChannel}
            />
          )}
        </Box>
      ) : (
        <CreateChannelProcessingInfo progressState={progressState} />
      )}
    </Box>
  );
};

export { CreateChannel };
