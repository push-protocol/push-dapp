//Components
import { Avatar, Box, Button, Discord, DiscordProfile, EmailProfile, TelegramProfile, Text, TextInput } from 'blocks';

const UserProfileSocialSettings = () => {
  const itemList = [
    {
      icon: () => <EmailProfile height={23} />,
      itemTitle: 'Email',
      itemDescription: 'Receive notifications in your email inbox',
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

            <Button
              variant="tertiary"
              size="extraSmall"
            >
              Connect
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserProfileSocialSettings;
