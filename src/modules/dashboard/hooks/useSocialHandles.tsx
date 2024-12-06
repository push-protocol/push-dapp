import React, { useState, useEffect } from 'react';

import { useDisclosure } from 'common';
import { useGetSocialsStatus } from 'queries';
import { useAccount } from 'hooks';

import { walletToCAIP10 } from 'helpers/w2w';
import { appConfig } from 'config';
import { generateVerificationProof } from 'modules/rewards/utils/generateVerificationProof';

import { PushAPI } from '@pushprotocol/restapi';

import { DiscordProfile, EmailProfile, TelegramProfile } from 'blocks';

export type SocialHandleStatusType = {
  email: string | null;
  discord_username: string | null;
  telegram_username: string | null;
};

type SocialHandlesItemType = {
  icon: () => React.JSX.Element;
  itemTitle: string;
  itemDescription: string;
  onClick: () => void;
  userStatus: string | null;
};

export const useSocialHandles = (
  setErrorMessage: (error: string) => void,
  requiresVerificationProof: boolean,
  userPushSDKInstance?: PushAPI
) => {
  const modalControl = useDisclosure();
  const telegramModalControl = useDisclosure();
  const discordModalControl = useDisclosure();
  const { account } = useAccount();
  const [socialHandleStatus, setSocialHandleStatus] = useState<SocialHandleStatusType | null>(null);

  const channelAddress = walletToCAIP10({ account });
  const { mutate: fetchSocialStatus, isPending } = useGetSocialsStatus();

  const fetchStatus = async () => {
    if (!channelAddress) return;

    let verificationProof;

    if (requiresVerificationProof) {
      const data = {
        wallet: channelAddress,
      };
      verificationProof = await generateVerificationProof(data, userPushSDKInstance); // Pass your SDK instance if required
      if (!verificationProof) return;
    }

    fetchSocialStatus(
      { channelAddress, ...(requiresVerificationProof && { verificationProof: verificationProof as string }) },
      {
        onError: (error) => {
          setErrorMessage('Failed to fetch social status.');
          console.error('Error fetching social status:', error);
        },
        onSuccess: (data) => {
          setSocialHandleStatus(data);
        },
      }
    );
  };

  useEffect(() => {
    if (channelAddress && !requiresVerificationProof) {
      fetchStatus();
    }
  }, [channelAddress]);

  const socialHandlesList: SocialHandlesItemType[] = [
    {
      icon: () => <EmailProfile height={23} />,
      itemTitle: 'Email',
      itemDescription: 'Receive notifications in your email inbox',
      onClick: () => modalControl.open(),
      userStatus: socialHandleStatus?.email || null,
    },
    appConfig?.telegramExternalURL && {
      icon: () => <TelegramProfile height={23} />,
      itemTitle: 'Telegram',
      itemDescription: 'Receive notifications as Telegram messages',
      onClick: () => telegramModalControl.open(),
      userStatus: socialHandleStatus?.telegram_username || null,
    },
    appConfig?.discordExternalURL && {
      icon: () => <DiscordProfile height={23} />,
      itemTitle: 'Discord',
      itemDescription: 'Receive notifications as Discord messages',
      onClick: () => discordModalControl.open(),
      userStatus: socialHandleStatus?.discord_username || null,
    },
  ].filter(Boolean);

  return {
    socialHandlesList,
    socialHandleStatus,
    modalControl,
    telegramModalControl,
    discordModalControl,
    isPending,
    fetchStatus,
    channelAddress,
  };
};
