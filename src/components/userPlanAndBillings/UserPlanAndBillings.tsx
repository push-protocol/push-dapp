import { css } from 'styled-components';

import { useDisclosure } from 'common';

import { Box, Button, ProgressBar, Text } from 'blocks';
import UpgradePlanModal from './UpgradePlanModal';

const UserPlanAndBillings = () => {
  const modalControl = useDisclosure();

  const itemNotifications = [
    { title: 'Email Notification Delivery', subtitle: '750 remaining' },
    { title: 'Telegram Notification Delivery', subtitle: '750 remaining' },
    { title: 'Discord Notification Delivery', subtitle: '750 remaining' },
  ];
  return (
    <Box width="100%">
      <Text
        variant="bs-regular"
        color="text-tertiary"
      >
        Take full control of your Push Notification plan, manage and stay up to date with your plan usage
      </Text>

      <Box
        backgroundColor="surface-secondary"
        margin="spacing-lg spacing-none spacing-none spacing-none"
        padding="spacing-md"
        borderRadius="radius-md"
      >
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text
            variant="h2-semibold"
            color="text-primary"
          >
            Pro Plan
          </Text>
          <Text
            variant="h2-semibold"
            color="text-primary"
          >
            $14.99/mo
          </Text>
        </Box>

        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text
            variant="bm-regular"
            color="text-tertiary"
          >
            For individuals
          </Text>
          <Text
            variant="bm-regular"
            color="text-tertiary"
          >
            billed yearly
          </Text>
        </Box>

        <Box
          margin="spacing-lg spacing-none spacing-none spacing-none"
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="tertiary"
            size="small"
          >
            Upgrade Plan
          </Button>

          <Text
            variant="bs-semibold"
            color="text-primary"
            css={css`
              cursor: pointer;
            `}
            onClick={() => modalControl.open()}
          >
            Cancel Plan
          </Text>
        </Box>
      </Box>

      <Box margin="spacing-xl spacing-none spacing-none spacing-none">
        <Text
          variant="h4-semibold"
          color="text-primary"
        >
          Plan Usage
        </Text>
        <Text
          variant="bs-regular"
          color="text-tertiary"
        >
          Keep track of usage in your current cycle
        </Text>
      </Box>

      <Box
        margin="spacing-lg spacing-none spacing-none spacing-none"
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
        gap="spacing-md"
      >
        {itemNotifications.map((item) => (
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xxs"
            width="100%"
          >
            <Text
              color="text-secondary"
              variant="c-bold"
            >
              {item.title}
            </Text>

            <ProgressBar
              progress={250}
              max={1000}
            />

            <Text
              color="text-secondary"
              variant="c-regular"
            >
              {item.subtitle}
            </Text>
          </Box>
        ))}
      </Box>

      {modalControl.isOpen && <UpgradePlanModal modalControl={modalControl} />}
    </Box>
  );
};

export default UserPlanAndBillings;
