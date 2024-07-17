// React and other libraries
import { useEffect, useState } from 'react';

// Third party libraries
import { ethers } from 'ethers';

// Hooks
import { useAccount } from 'hooks';

// Common
import { Stepper } from 'common';

// Helpers
import { CHANNEL_TYPE } from 'helpers/UtilityHelper';
import { IPFSupload } from 'helpers/IpfsHelper';

// Config
import { appConfig } from 'config';
import { createChannelInfoForm, uploadLogoForm } from './CreateChannel.form';
import { useApprovePUSHToken, useCreateChannel } from 'queries/hooks/createChannel';

// Utility funcs
import { checkImageSize, checkPushTokenApprovalFunc } from './CreateChannel.utils';

// Components
import { Box } from 'blocks';
import { ChannelInfo } from './components/ChannelInfo';
import { CHANNEL_STAKE_FEES, CreateChannelSteps } from './CreateChannel.constants';
import { CreateChannelError } from './components/CreateChannelError';
import { CreateChannelHeader } from './components/CreateChannelHeader';
import { CreateChannelProcessingInfo } from './components/CreateChannelProcessingInfo';
import { DifferentChainPage } from './components/DifferentChainPage';
import { StakeFees } from './components/StakeFees';
import { UploadLogo } from './components/UploadLogo';

// Types
import { ChannelCreationError, CreateChannelProgressType } from './CreateChannel.types';

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
  const { account, provider, isWalletConnected, chainId, connect } = useAccount();

  const onCoreNetwork = appConfig.coreContractChain === chainId;

  const { mutate: approvePUSHToken, isPending: pendingApproval } = useApprovePUSHToken();
  const { mutate: createNewChannel, isPending: createChannelPending } = useCreateChannel();

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // To handle the stepper
  const handleNextStep = () => {
    if (activeStepIndex < 2) {
      const nextStepIndex = activeStepIndex + 1;
      completedSteps.push(nextStepIndex);
      setActiveStepIndex(nextStepIndex);
    }
  };

  // Forms
  const channelInfoFormik = createChannelInfoForm({ handleNextStep, setActiveStepIndex });
  const uploadLogoFormik = uploadLogoForm();

  // Upload Logo
  const [view, setView] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);

  // Progress Bar and text
  const [progressState, setProgressState] = useState<CreateChannelProgressType>(progressInitialState);

  // Error status and text
  const [channelCreationError, setChannelCreationError] = useState<ChannelCreationError>(errorInitialState);

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

  // Approving PUSH Token for the contract
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

  // Create Channel from Contract using Mutation
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
            console.error('Error in creating channel--> %o', error);
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

  // Main function to create Channel.
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
      padding={{ initial: 'spacing-lg', ml: 'spacing-sm' }}
      backgroundColor='surface-primary'
      borderRadius="radius-md"
      display="flex"
      width={{ initial: '648px', ml: '325px' }}
      flexDirection="column"
      alignItems="center"
      gap="s10"
    >
      <CreateChannelHeader />

      {!onCoreNetwork && <DifferentChainPage />}

      {onCoreNetwork && (
        <>
          {channelCreationError.txErrorStatus !== 0 &&
            <CreateChannelError channelCreationError={channelCreationError} />
          }

          {progressState.progress === null ? (
            <Box
              display="flex"
              flexDirection="column"
              gap="s8"
              alignItems="center"
              alignSelf="stretch"
            >
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
                  uploadLogoFormik={uploadLogoFormik}
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

        </>
      )}

    </Box>
  );
};

export { CreateChannel };
