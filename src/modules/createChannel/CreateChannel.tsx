import { useState } from 'react';

import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

import { Alert, Box, ErrorFilled } from 'blocks';
import { Stepper } from 'common';
import APP_PATHS from 'config/AppPaths';
import { appConfig } from 'config';

import { useAccount } from 'hooks';
import { CHANNEL_TYPE } from 'helpers/UtilityHelper';
import { IPFSupload } from 'helpers/IpfsHelper';
import { useApprovePUSHToken, useCreateChannel } from 'queries';

import { ChannelInfo } from './components/ChannelInfo';
import {
  CHANNEL_STAKE_FEES,
  createChannelSteps,
  progressInitialState,
  errorInitialState
} from './CreateChannel.constants';
import { CreateChannelHeader } from './components/CreateChannelHeader';
import { CreateChannelProcessingInfo } from './components/CreateChannelProcessingInfo';
import { DifferentChainPage } from './components/DifferentChainPage';
import { StakeFees } from './components/StakeFees';
import { UploadChannelLogo } from './components/UploadChannelLogo';

import { CreateChannelFormProvider } from './CreateChannel.form';
import { checkApprovePushTokens } from './CreateChannel.utils';
import { ActiveStepKey, ChannelCreationError, ChannelInfoFormValues, CreateChannelProgressType } from './CreateChannel.types';

const fees = ethers.utils.parseUnits(CHANNEL_STAKE_FEES.toString(), 18);

const CreateChannel = () => {
  const { account, provider, isWalletConnected, chainId, connect } = useAccount();

  const onCoreNetwork = appConfig.coreContractChain === chainId;

  const { mutate: approvePUSHToken } = useApprovePUSHToken();
  const { mutate: createNewChannel } = useCreateChannel();

  const navigate = useNavigate();

  const [activeStepKey, setActiveStepKey] = useState<ActiveStepKey>('channelInfo');
  const [completedSteps, setCompletedSteps] = useState<Array<ActiveStepKey>>(['channelInfo']);

  const handleNextStep = (value: ActiveStepKey) => {
    setCompletedSteps([...new Set([...completedSteps, value])]);
    setActiveStepKey(value);
  };

  const [view, setView] = useState(false);

  const [progressState, setProgressState] = useState<CreateChannelProgressType>(progressInitialState);

  const [channelCreationError, setChannelCreationError] = useState<ChannelCreationError>(errorInitialState);

  const handleProgressBar = (progress: number, progressInfo: string, processingInfo: string) => {
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
        }
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
        signer
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
            }, 3000);

            setTimeout(() => {
              handleProgressBar(
                100,
                'Creating your channel, Aligning pixels, adjusting padding... This may take some time.',
                'Redirecting... Please do not refresh'
              );
              console.log("Navigating to Channel Dashboard route");
              navigate(`${APP_PATHS.ChannelDashboard}/${account}`)
            }, 5000);
          }
        },
        onError: (error: any) => {
          console.log('Error in transaction from query >>>>', error);
          // User Rejected query handle it here
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
        }
      }
    );
  };

  // Main function to create Channel.
  const handleCreateNewChannel = async (values: ChannelInfoFormValues) => {
    setProgressState(progressInitialState);
    setChannelCreationError(errorInitialState);

    if (!isWalletConnected) {
      connect();
      return;
    }

    handleProgressBar(10, 'Checking for PUSH Token Approval', 'Loading...');

    // Calculate the approval amount of the user
    const approvedTokenAmount = await checkApprovePushTokens({ provider, account });

    const ChannelInput = JSON.stringify({
      name: values.channelName,
      info: values.channelDesc,
      url: values.channelURL,
      icon: values.image,
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
    <CreateChannelFormProvider onSubmit={(values: ChannelInfoFormValues) => handleCreateNewChannel(values)}>
      <Box
        padding={{ initial: 'spacing-lg', ml: 'spacing-sm' }}
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        width={{ initial: '648px', ml: '325px' }}
        flexDirection="column"
        alignItems="center"
        gap="spacing-xl"
      >
        <CreateChannelHeader />

        {!onCoreNetwork && <DifferentChainPage />}

        {onCoreNetwork && (
          <>
            {channelCreationError.txErrorStatus !== 0 && (
              <Alert
                variant='error'
                icon={<ErrorFilled color='icon-state-danger-bold' size={24} />}
                message={channelCreationError.txError}
                width='100%'
              />
            )}

            {!progressState.progress ? (
              <Box
                display="flex"
                flexDirection="column"
                gap="spacing-lg"
                alignItems="center"
                alignSelf="stretch"
              >
                <Stepper
                  steps={createChannelSteps}
                  completedSteps={completedSteps}
                  setActiveStepKey={(key) => setActiveStepKey(key as ActiveStepKey)}
                />

                {activeStepKey == 'channelInfo' && (
                  <ChannelInfo handleNextStep={handleNextStep} setActiveStepKey={setActiveStepKey} />
                )}

                {activeStepKey === 'uploadLogo' && (
                  <UploadChannelLogo
                    view={view}
                    setView={setView}
                    setActiveStepKey={setActiveStepKey}
                    handleNextStep={handleNextStep}
                  />
                )}

                {activeStepKey === 'stakeFees' && (
                  <StakeFees
                    handleNextStep={handleNextStep}
                  />
                )}
              </Box>
            ) : (
              <CreateChannelProcessingInfo progressState={progressState} />
            )}
          </>
        )}
      </Box>
    </CreateChannelFormProvider>
  );
};

export { CreateChannel };
