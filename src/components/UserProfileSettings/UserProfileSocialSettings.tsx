// React and other libraries
import { FC, useEffect, useState } from 'react';
import { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Hooks
import { useDisclosure } from 'common';
import { useAccount } from 'hooks';
import { useGetSocialsStatus } from 'queries';

// Helpers
import { generateVerificationProof } from 'modules/rewards/utils/generateVerificationProof';
import { appConfig } from 'config';
import { walletToCAIP10 } from 'helpers/w2w';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';
import APP_PATHS from 'config/AppPaths';

//Components
import { Box, DiscordProfile, EmailProfile, TelegramProfile, Text } from 'blocks';
import { AddEmail } from './AddEmail';
import AddTelegram from './AddTelegram';
import AddDiscord from './AddDiscord';
import UserProfileSettingsItem from './UserProfileSettingsItem';

type UserProfileSocialSettingsType = {
  errorMessage?: string;
  setErrorMessage: (errorMessage: string) => void;
  successMessage?: string;
  setSuccessMessage: (successMessage: string) => void;
};

type SocialHandleStatusType = {
  email: string | null;
  discord_username: string | null;
  telegram_username: string | null;
};

const UserProfileSocialSettings: FC<UserProfileSocialSettingsType> = ({ setErrorMessage, setSuccessMessage }) => {
  const modalControl = useDisclosure();
  const telegramModalControl = useDisclosure();
  const discordModalControl = useDisclosure();
  const { account } = useAccount();
  const navigate = useNavigate();

  const [socialHandleStatus, setSocialHandleStatus] = useState<SocialHandleStatusType>();
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  // Getting user Id by wallet address
  const channelAddress = walletToCAIP10({ account });

  const { mutate: fetchSocialStatus, isPending } = useGetSocialsStatus();

  // Fetch social status logic
  const getSocialStatus = async () => {
    if (!channelAddress) return;

    const data = {};

    const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

    if (!verificationProof) return;

    if (channelAddress) {
      fetchSocialStatus(
        { channelAddress, verificationProof: verificationProof as string },
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
    }
  };

  useEffect(() => {
    if (!userPushSDKInstance || !channelAddress) return;
    getSocialStatus();
  }, [userPushSDKInstance, channelAddress]);

  useEffect(() => {
    setIsAuthModalVisible(userPushSDKInstance && userPushSDKInstance?.readmode());
  }, [userPushSDKInstance]);

  const handleCloseAuthModal = () => {
    setIsAuthModalVisible(false);
    navigate(APP_PATHS.WelcomeDashboard);
  };

  const itemList = [
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

  return (
    <Box>
      <Box>
        <Text
          variant="h4-semibold"
          color="text-primary"
        >
          Get Notified Anywhere
        </Text>

        <Text
          variant="bs-regular"
          color="text-tertiary"
        >
          Connects apps and receive notifications directly in your Email, Telegram and Discord
        </Text>
      </Box>

      <Box padding="spacing-sm spacing-none spacing-none spacing-none">
        {itemList?.map((item) => (
          <UserProfileSettingsItem
            item={item}
            isPending={isPending}
          />
        ))}
      </Box>

      {isAuthModalVisible && (
        <Box
          display="flex"
          justifyContent="center"
          width="-webkit-fill-available"
          alignItems="center"
          css={css`
            z-index: 99999;
          `}
        >
          <UnlockProfileWrapper
            type={UNLOCK_PROFILE_TYPE.MODAL}
            showConnectModal={true}
            onClose={handleCloseAuthModal}
            description="Unlock your profile to proceed."
          />
        </Box>
      )}

      {modalControl.isOpen && (
        <AddEmail
          modalControl={modalControl}
          refetchSocialHandleStatus={getSocialStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {telegramModalControl.isOpen && (
        <AddTelegram
          modalControl={telegramModalControl}
          refetchSocialHandleStatus={getSocialStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {discordModalControl.isOpen && (
        <AddDiscord
          modalControl={discordModalControl}
          refetchSocialHandleStatus={getSocialStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}
    </Box>
  );
};

export default UserProfileSocialSettings;
