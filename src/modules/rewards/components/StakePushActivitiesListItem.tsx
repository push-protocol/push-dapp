import { Box, Button, Lock, Multiplier, RewardsBell, Text } from 'blocks';

const StakePushActivitiesListItem = ({ item }: { item: any }) => {
  return (
    <Box
      backgroundColor="surface-secondary"
      borderRadius="radius-md"
      display="flex"
      flexDirection={{ ml: 'column', initial: 'row' }}
      alignItems="center"
      padding="spacing-sm"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection={{ ml: 'column', initial: 'row' }}
        alignItems="center"
      >
        <Box
          width="48px"
          height="48px"
          borderRadius="radius-round"
          backgroundColor="surface-tertiary"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="border-xs solid stroke-tertiary"
        >
          <Lock size={28} />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          margin={{
            ml: 'spacing-xxs spacing-none spacing-sm spacing-none',
            initial: 'spacing-none spacing-none spacing-none spacing-md',
          }}
          gap={{ ml: 'spacing-sm', initial: 'spacing-xxxs' }}
          alignItems={{ ml: 'center' }}
        >
          <Text
            variant="bl-semibold"
            color="text-primary"
            textAlign="center"
          >
            {item.header}
          </Text>
          {item.points && (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxxs"
            >
              <RewardsBell
                width={28}
                height={28}
              />
              <Text
                variant="bs-semibold"
                color="text-primary"
              >
                {item.points?.toLocaleString()}
              </Text>
            </Box>
          )}
          {item.multiplier && (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxxs"
            >
              <Multiplier size={28} />
              <Text
                variant="bs-semibold"
                color="text-primary"
              >
                {item.multiplier?.toLocaleString()}x
              </Text>
            </Box>
          )}
        </Box>
      </Box>

      <Box>
        <Button
          variant="tertiary"
          size="small"
          disabled
        >
          Locked
        </Button>
      </Box>
    </Box>
  );
};

export { StakePushActivitiesListItem };
