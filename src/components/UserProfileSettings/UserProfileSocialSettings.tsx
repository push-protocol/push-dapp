// React and other libraries
import { FC, useEffect, useState } from 'react';
import { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Helpers
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';
import APP_PATHS from 'config/AppPaths';

//Components
import { Box, Text } from 'blocks';
import { AddEmail } from './AddEmail';
import AddTelegram from './AddTelegram';
import AddDiscord from './AddDiscord';
import UserProfileSettingsItem from './UserProfileSettingsItem';
import { useSocialHandles } from 'modules/dashboard/hooks/useSocialHandles';

type UserProfileSocialSettingsType = {
  errorMessage?: string;
  setErrorMessage: (errorMessage: string) => void;
  successMessage?: string;
  setSuccessMessage: (successMessage: string) => void;
};

const UserProfileSocialSettings: FC<UserProfileSocialSettingsType> = ({ setErrorMessage, setSuccessMessage }) => {
  const navigate = useNavigate();
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const {
    socialHandlesList,
    modalControl,
    telegramModalControl,
    discordModalControl,
    isPending,
    fetchStatus,
    channelAddress,
  } = useSocialHandles(setErrorMessage, true, userPushSDKInstance);

  useEffect(() => {
    if (!userPushSDKInstance || !channelAddress) return;
    fetchStatus();
  }, [userPushSDKInstance, channelAddress]);

  useEffect(() => {
    setIsAuthModalVisible(userPushSDKInstance && userPushSDKInstance?.readmode());
  }, [userPushSDKInstance]);

  const handleCloseAuthModal = () => {
    setIsAuthModalVisible(false);
    navigate(APP_PATHS.WelcomeDashboard);
  };

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
        {socialHandlesList?.map((item) => (
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
          refetchSocialHandleStatus={fetchStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {telegramModalControl.isOpen && (
        <AddTelegram
          modalControl={telegramModalControl}
          refetchSocialHandleStatus={fetchStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {discordModalControl.isOpen && (
        <AddDiscord
          modalControl={discordModalControl}
          refetchSocialHandleStatus={fetchStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}
    </Box>
  );
};

export default UserProfileSocialSettings;
