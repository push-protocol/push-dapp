import { Box, Text, Button, Skeleton } from 'blocks';

const UserProfileSettingsItem = ({ item, isPending }: any) => {
  return (
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
        <Skeleton isLoading={isPending}>
          <Button
            variant="secondary"
            size="extraSmall"
          >
            {item?.userStatus}
          </Button>
        </Skeleton>
      )}
    </Box>
  );
};

export default UserProfileSettingsItem;
