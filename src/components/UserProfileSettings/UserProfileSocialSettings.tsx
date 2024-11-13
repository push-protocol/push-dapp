// React and other libraries
import { FC } from 'react';

// Helpers
import { useDisclosure } from 'common';
import { useAccount } from 'hooks';
import { useGetSocialsStatus } from 'queries';
import { walletToCAIP10 } from 'helpers/w2w';

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

const UserProfileSocialSettings: FC<UserProfileSocialSettingsType> = ({ setErrorMessage, setSuccessMessage }) => {
  const modalControl = useDisclosure();
  const telegramModalControl = useDisclosure();
  const discordModalControl = useDisclosure();
  const { account } = useAccount();

  // Getting user Id by wallet address
  const channelAddress = walletToCAIP10({ account });

  const { data: socialHandleStatus, refetch: refetchSocialHandleStatus } = useGetSocialsStatus(channelAddress);

  const itemList = [
    {
      icon: () => <EmailProfile height={23} />,
      itemTitle: 'Email',
      itemDescription: 'Receive notifications in your email inbox',
      onClick: () => modalControl.open(),
      userStatus: socialHandleStatus?.email || null,
    },
    {
      icon: () => <TelegramProfile height={23} />,
      itemTitle: 'Telegram',
      itemDescription: 'Receive notifications as Telegram messages',
      onClick: () => telegramModalControl.open(),
      userStatus: socialHandleStatus?.telegram_username || null,
    },
    {
      icon: () => <DiscordProfile height={23} />,
      itemTitle: 'Discord',
      itemDescription: 'Receive notifications as Discord messages',
      onClick: () => discordModalControl.open(),
      userStatus: socialHandleStatus?.discord_username || null,
    },
  ];
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
          <UserProfileSettingsItem item={item} />
        ))}
      </Box>

      {modalControl.isOpen && (
        <AddEmail
          modalControl={modalControl}
          refetchSocialHandleStatus={refetchSocialHandleStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {telegramModalControl.isOpen && (
        <AddTelegram
          modalControl={telegramModalControl}
          refetchSocialHandleStatus={refetchSocialHandleStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {discordModalControl.isOpen && (
        <AddDiscord
          modalControl={discordModalControl}
          refetchSocialHandleStatus={refetchSocialHandleStatus}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}
    </Box>
  );
};

export default UserProfileSocialSettings;
