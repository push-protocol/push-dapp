// React and other libraries
import { FC } from 'react';

// components
import { Box, Button, Lock, RewardsBell, Text } from 'blocks';

interface BonusItemProp {
  header: string;
  subheader: string;
  points?: number;
  multipliers?: number;
}

export type BonusActivitiesItemProps = {
  item: BonusItemProp;
};

const BonusActivitiesItem: FC<BonusActivitiesItemProps> = ({ item }) => {
  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="spacing-sm"
      justifyContent="space-between"
    >
      <Box
        width="48px"
        height="48px"
        borderRadius="radius-round"
        backgroundColor="surface-tertiary"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid gray-300"
      >
        <Lock size={28} />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="spacing-xs spacing-none spacing-none spacing-none"
      >
        <Text
          color="text-primary"
          variant="bl-semibold"
        >
          {item.header}
        </Text>
        <Text
          variant="bs-regular"
          color="text-tertiary"
          textAlign="center"
        >
          {item.subheader}
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="spacing-xxs"
        margin="spacing-md spacing-none spacing-none spacing-none"
      >
        <RewardsBell
          width={28}
          height={28}
        />
        <Text
          variant="bm-semibold"
          color="text-primary"
        >
          {item.points?.toLocaleString()} Points
        </Text>
      </Box>

      <Box margin="spacing-md spacing-none spacing-none spacing-none">
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

export { BonusActivitiesItem };
