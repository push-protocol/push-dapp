// React and other libraries
import { FC } from 'react';

// Helpers
import { useDisclosure } from 'common';

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
import { AddEmail } from './addEmail';

const UserProfileSocialSettings: FC = () => {
  const modalControl = useDisclosure();

  const itemList = [
    {
      icon: () => <EmailProfile height={23} />,
      itemTitle: 'Email',
      itemDescription: 'Receive notifications in your email inbox',
      onClick: () => modalControl.open(),
    },
    {
      icon: () => <TelegramProfile height={23} />,
      itemTitle: 'Telegram',
      itemDescription: 'Receive notifications as Telegram messages',
    },
    {
      icon: () => <DiscordProfile height={23} />,
      itemTitle: 'Discord',
      itemDescription: 'Receive notifications as Discord messages',
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

            {item.itemTitle != 'Email' ? (
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
                  zeeshan.mac@gmail.com
                </Button>
              </Dropdown>
            )}
          </Box>
        ))}
      </Box>

      {modalControl.isOpen && <AddEmail modalControl={modalControl} />}
    </Box>
  );
};

export default UserProfileSocialSettings;
