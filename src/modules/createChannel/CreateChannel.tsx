import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { Box } from 'blocks';
import { appConfig } from 'config';
import { Stepper } from 'common';
import { useAccount } from 'hooks';
import { CHANNEL_TYPE } from 'helpers/UtilityHelper';
import { IPFSupload } from 'helpers/IpfsHelper';
import { useApprovePUSHToken, useCreateChannel } from 'queries';

import { ChannelInfo } from './components/ChannelInfo';
import {
  CHANNEL_STAKE_FEES,
  createChannelSteps,
  progressInitialState,
  errorInitialState,
} from './CreateChannel.constants';
import { CreateChannelError } from './components/CreateChannelError';
import { CreateChannelHeader } from './components/CreateChannelHeader';
import { CreateChannelProcessingInfo } from './components/CreateChannelProcessingInfo';
import { DifferentChainPage } from './components/DifferentChainPage';
import { StakeFees } from './components/StakeFees';
import { UploadLogo } from './components/UploadLogo';

import { createChannelInfoForm, uploadLogoForm } from './CreateChannel.form';
import { checkImageSize, checkPushTokenApprovalFunc } from './CreateChannel.utils';
import { ActiveStepKey, ChannelCreationError, CreateChannelProgressType } from './CreateChannel.types';

const fees = ethers.utils.parseUnits(CHANNEL_STAKE_FEES.toString(), 18);

const CreateChannel = () => {
  const { account, provider, isWalletConnected, chainId, connect } = useAccount();

  const onCoreNetwork = appConfig.coreContractChain === chainId;

  const { mutate: approvePUSHToken } = useApprovePUSHToken();
  const { mutate: createNewChannel } = useCreateChannel();

  const [activeStepKey, setActiveStepKey] = useState<ActiveStepKey>('channel_info');
  const [completedSteps, setCompletedSteps] = useState<Array<ActiveStepKey>>(['channel_info']);

  const handleNextStep = (key: ActiveStepKey) => {
    setCompletedSteps([...new Set([...completedSteps, key])]);
    setActiveStepKey(key);
  };

  const channelInfoFormik = createChannelInfoForm({ handleNextStep, setActiveStepKey });
  const uploadLogoFormik = uploadLogoForm();

  const [view, setView] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);

  const [progressState, setProgressState] = useState<CreateChannelProgressType>(progressInitialState);

  const [channelCreationError, setChannelCreationError] = useState<ChannelCreationError>(errorInitialState);

  useEffect(() => {
    if (croppedImage) {
      checkImageSize(croppedImage, setCroppedImage);
    }
  }, [croppedImage]);

  const handleProgressBar = (progress: number, progressInfo: string, processingInfo: string) => {
    setProgressState((prevState) => ({
      ...prevState,
      progress: progress,
      progressInfo: progressInfo,
      processingInfo: processingInfo,
    }));
  };

  const updateChannelCreationError = (txErrorStatus: number, txError: string) => {
    setChannelCreationError((prev) => ({
      ...prev,
      txErrorStatus: txErrorStatus,
      txError: txError,
    }));
  };

  // Approving PUSH Token for the contract
  const handleApprovePushToken = (signer: ethers.providers.JsonRpcSigner, storagePointer: string) => {
    approvePUSHToken(
      {
        noOfTokenToApprove: fees,
        signer,
      },
      {
        onSuccess: (response) => {
          if (response.status === 1) {
            handleProgressBar(60, 'Please complete the transaction in your wallet to continue.', 'Approving PUSH');

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
          setProgressState(progressInitialState);
          return false;
        },
      }
    );
  };

  // Create Channel from Contract using Mutation
  const createChannel = (signer: ethers.providers.JsonRpcSigner, storagePointer: string) => {
    let channelType = CHANNEL_TYPE['GENERAL'];
    const identity = '1+' + storagePointer;
    const identityBytes = ethers.utils.toUtf8Bytes(identity);

    handleProgressBar(70, 'Please complete the transaction in your wallet to continue.', 'Creating Channel...');

    createNewChannel(
      {
        channelType,
        identityBytes,
        fees,
        signer,
      },
      {
        onSuccess: (response) => {
          if (response.status === 0) {
            // It means their is smart contract error,  either network congestion or gas issue
            // We are not sure about this error so we cant display (EDGE CASE)
            updateChannelCreationError(2, 'Transaction failed due to one of the following reasons:');
          } else {
            handleProgressBar(80, 'Please wait while we confirm the transaction..', 'Transaction Confirmed..');

            setTimeout(() => {
              handleProgressBar(
                90,
                'Creating your channel, Aligning pixels, adjusting padding... This may take some time.',
                'Redirecting... Please do not refresh'
              );
            }, 2000);

            setTimeout(() => {
              handleProgressBar(
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
            setProgressState(progressInitialState);
          } else {
            // Other unknown error
            console.error('Error in creating channel--> %o', error);
            console.error({ error });
            handleProgressBar(
              0,
              'There was an error in creating the Channel',
              'Kindly Contact support@epns.io to resolve the issue.'
            );
          }
        },
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
      setActiveStepKey('channel_info');
      return;
    }

    if (!croppedImage) {
      setActiveStepKey('upload_logo');
      return;
    }

    handleProgressBar(10, 'Checking for PUSH Token Approval', 'Loading...');

    // Calculate the approval amount of the user
    const approvedTokenAmount = await checkPushTokenApprovalFunc({ provider, account });

    const ChannelInput = JSON.stringify({
      name: channelInfoFormik.values.channelName,
      info: channelInfoFormik.values.channelDesc,
      url: channelInfoFormik.values.channelURL,
      icon: croppedImage,
    });

    handleProgressBar(20, 'Please wait, payload is getting uploaded to IPFS', 'Loading...');

    let storagePointer = await IPFSupload(ChannelInput);
    console.debug('IPFS storagePointer:', storagePointer);

    handleProgressBar(40, 'Please complete the transaction in your wallet to continue.', 'Payload Uploaded...');

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
      backgroundColor="surface-primary"
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
          {channelCreationError.txErrorStatus !== 0 && (
            <CreateChannelError channelCreationError={channelCreationError} />
          )}

          {!progressState.progress ? (
            <Box
              display="flex"
              flexDirection="column"
              gap="s8"
              alignItems="center"
              alignSelf="stretch"
            >
              <Stepper
                steps={createChannelSteps}
                completedSteps={completedSteps}
                setActiveStepKey={(key) => setActiveStepKey(key as ActiveStepKey)}
              />

              {activeStepKey == 'channel_info' && <ChannelInfo channelInfoFormik={channelInfoFormik} />}

              {activeStepKey === 'upload_logo' && (
                <UploadLogo
                  view={view}
                  croppedImage={croppedImage}
                  setView={setView}
                  setCroppedImage={setCroppedImage}
                  setActiveStepKey={setActiveStepKey}
                  handleNextStep={handleNextStep}
                  uploadLogoFormik={uploadLogoFormik}
                />
              )}

              {activeStepKey === 'stake_fees' && (
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
