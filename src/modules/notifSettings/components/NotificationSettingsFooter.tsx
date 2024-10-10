import { FC, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Alert, Box, Button } from 'blocks';

import { StakingVariant } from 'common';
import { addresses } from 'config';
import APP_PATHS from 'config/AppPaths';
import { useAppContext } from 'contexts/AppContext';

import { getPushTokenApprovalAmount, getPushTokenFromWallet } from 'helpers';
import { useAccount } from 'hooks';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';
import { useApprovePUSHToken, useCreateNotificationSettings } from 'queries';
import useFetchChannelDetails from 'common/hooks/useFetchUsersChannelDetails';
import { compareObject } from '../NotificationSettings.constants';

type NotificationSettingsFooterProps = {
  newSettings: ChannelSetting[];
  channelSettings: ChannelSetting[];
};

const EDIT_SETTING_FEE = 50;

const NotificationSettingsFooter: FC<NotificationSettingsFooterProps> = ({ newSettings, channelSettings }) => {
  const navigate = useNavigate();
  const { account, provider, wallet, isWalletConnected, connect } = useAccount();

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const { handleConnectWalletAndEnableProfile } = useAppContext();
  const { refetchChannelDetails } = useFetchChannelDetails();

  const [pushApprovalAmount, setPushApprovalAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [balance, setBalance] = useState(0);

  // Check PUSH Token in wallet
  const pushTokenInWallet = async () => {
    const amount = await getPushTokenFromWallet({
      address: account,
      provider: provider,
    });
    setBalance(amount);
  };

  const checkApprovedPUSHTokenAmount = async () => {
    const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
      address: account,
      provider: provider,
      contractAddress: addresses.epnscore,
    });
    setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
  };

  useEffect(() => {
    if (!account || !provider) return;
    checkApprovedPUSHTokenAmount();
    pushTokenInWallet();
  }, [account, provider]);

  const { mutate: approvePUSHToken, isPending: approvingPUSH } = useApprovePUSHToken();

  const approvePUSH = async () => {
    if (!provider) return;

    if (!isWalletConnected) {
      connect();
      return;
    }

    setErrorMessage('');
    const signer = provider.getSigner(account);
    const fees = ethers.utils.parseUnits((EDIT_SETTING_FEE - pushApprovalAmount).toString(), 18);

    approvePUSHToken(
      {
        noOfTokenToApprove: fees,
        signer,
      },
      {
        onSuccess: () => {
          checkApprovedPUSHTokenAmount();
        },
        onError: (error: any) => {
          console.log('Error in Approving PUSH', error);
          if (error.code == 'ACTION_REJECTED') {
            setErrorMessage('User rejected signature. Please try again.');
          } else {
            setErrorMessage('Error in approving PUSH Tokens');
          }
        },
      }
    );
  };

  const { mutate: createNotificationSettings, isPending: addingNotificationSettings } = useCreateNotificationSettings();

  const handleSaveSettings = async () => {
    let userPushInstance = userPushSDKInstance;
    if (!userPushInstance.signer) {
      userPushInstance = await handleConnectWalletAndEnableProfile({ wallet });
      if (!userPushInstance) {
        return;
      }
    }

    setErrorMessage('');
    const newsettingData: ChannelSetting[] = newSettings.map((setting) => {
      if (setting.type === 1) {
        return {
          type: setting.type,
          description: setting.description,
          default: setting.default ? 1 : 0,
        };
      } else {
        return {
          type: setting.type,
          description: setting.description,
          default: setting.default,
          data: {
            lower: setting.lowerLimit,
            upper: setting.upperLimit,
            ticker: setting.ticker,
            enabled: setting.enabled,
          },
        };
      }
    });

    createNotificationSettings(
      {
        userPushSDKInstance: userPushInstance,
        settings: newsettingData,
      },
      {
        onSuccess: (response) => {
          if (response.transactionHash) {
            refetchChannelDetails();
            navigate(`${APP_PATHS.ChannelDashboard(account)}`);
          }
        },
        onError: (error: any) => {
          console.log('Error in adding setting', error);
          setErrorMessage('Error in saving settings. Please try again later');
        },
      }
    );
  };

  const settingsChanged = useMemo(() => {
    if (!channelSettings) return false;
    if (newSettings.length !== channelSettings.length) return true;

    let isChanged = false;

    newSettings.forEach((setting1, index) => {
      const setting2 = channelSettings[index];

      if (setting1.type !== setting2.type) {
        isChanged = true;
        return;
      }

      if (setting1.type === 1) {
        if (setting1.description !== setting2.description || setting1.default !== setting2.default) {
          isChanged = true;
          return;
        }
      }

      if (setting1.type === 2) {
        if (
          setting1.description !== setting2.description ||
          setting1.default !== setting2.default ||
          setting1.enabled !== setting2.enabled ||
          setting1.lowerLimit !== setting2.lowerLimit ||
          setting1.upperLimit !== setting2.upperLimit ||
          setting1.ticker !== setting2.ticker
        ) {
          isChanged = true;
          return;
        }
      }

      if (setting1.type === 3) {
        if (
          setting1.description !== setting2.description ||
          !compareObject(setting1.default, setting2.default) ||
          setting1.enabled !== setting2.enabled ||
          setting1.lowerLimit !== setting2.lowerLimit ||
          setting1.upperLimit !== setting2.upperLimit ||
          setting1.ticker !== setting2.ticker
        ) {
          isChanged = true;
          return;
        }
      }
    });

    return isChanged;
  }, [newSettings, channelSettings]);

  return (
    <Box
      width="100%"
      gap="spacing-md"
      display="flex"
      flexDirection="column"
    >
      {errorMessage && (
        <Alert
          heading={errorMessage}
          variant="error"
        />
      )}

      <StakingVariant
        title="Modify Setting Fee"
        description="Make sure all settings are ready before proceeding to the next step"
        fees={EDIT_SETTING_FEE}
        pushApprovalAmount={pushApprovalAmount}
        showBalance
        balance={balance}
        setBalance={setBalance}
      />

      <Box
        display="flex"
        justifyContent={{ initial: 'end', ml: 'center' }}
        gap="spacing-xs"
      >
        <Button
          variant="outline"
          onClick={() => navigate(`${APP_PATHS.ChannelDashboard(account)}`)}
        >
          Cancel
        </Button>

        {pushApprovalAmount >= EDIT_SETTING_FEE ? (
          <Button
            onClick={handleSaveSettings}
            disabled={addingNotificationSettings || !settingsChanged}
            loading={addingNotificationSettings}
          >
            {addingNotificationSettings ? 'Saving' : 'Save Settings'}
          </Button>
        ) : (
          <Button
            onClick={approvePUSH}
            disabled={approvingPUSH}
            loading={approvingPUSH}
          >
            {approvingPUSH ? 'Approving' : 'Approve PUSH'}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export { NotificationSettingsFooter };
