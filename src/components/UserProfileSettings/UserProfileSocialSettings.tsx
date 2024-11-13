// React and other libraries
import { FC } from 'react';

// Helpers
import { useDisclosure } from 'common';
import { useAccount } from 'hooks';
import { useGetSocialsStatus } from 'queries';
import { walletToCAIP10 } from 'helpers/w2w';

//Components
import {
  Box,
  Button,
  CaretDown,
  DiscordProfile,
  Dropdown,
  EmailProfile,
  Menu,
  MenuItem,
  OptOut,
  TelegramProfile,
  Text,
} from 'blocks';
import { AddEmail } from './AddEmail';

type UserProfileSocialSettingsType = {
  errorMessage?: string;
  setErrorMessage: (errorMessage: string) => void;
  successMessage?: string;
  setSuccessMessage: (successMessage: string) => void;
};

const UserProfileSocialSettings: FC<UserProfileSocialSettingsType> = ({ setErrorMessage, setSuccessMessage }) => {
  const modalControl = useDisclosure();
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
      userStatus: socialHandleStatus?.discord_username || null,
    },
    {
      icon: () => <DiscordProfile height={23} />,
      itemTitle: 'Discord',
      itemDescription: 'Receive notifications as Discord messages',
      userStatus: socialHandleStatus?.telegram_username || null,
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
          <Box
            display="flex"
            margin="spacing-sm spacing-none spacing-none spacing-none"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              gap="spacing-sm"
              alignItems="center"
            >
              <Box
                padding="spacing-xs"
                borderRadius="radius-xs"
                border="border-xs solid stroke-tertiary"
              >
                {item?.icon()}
              </Box>

              <Box>
                <Text
                  variant="h5-semibold"
                  color="text-primary"
                >
                  {item.itemTitle}
                </Text>
                <Text
                  variant="bs-regular"
                  color="text-tertiary"
                >
                  {item.itemDescription}
                </Text>
              </Box>
            </Box>

            {item.userStatus === null ? (
              <Button
                variant="tertiary"
                size="extraSmall"
                onClick={item?.onClick}
              >
                Connect
              </Button>
            ) : (
              <Dropdown
                overlay={
                  <Menu>
                    <MenuItem
                      label="Disconnect"
                      icon={<OptOut />}
                      onClick={() => console.log('disconnect')}
                    />
                  </Menu>
                }
              >
                <Button
                  variant="secondary"
                  size="extraSmall"
                  trailingIcon={<CaretDown size={20} />}
                >
                  {item?.userStatus}
                </Button>
              </Dropdown>
            )}
          </Box>
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
    </Box>
  );
};

export default UserProfileSocialSettings;
