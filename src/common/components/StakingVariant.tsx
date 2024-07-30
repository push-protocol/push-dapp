import { FC } from "react";

import { Box, Text } from "blocks";

type StakingVariantProps = {
  fees: number;
  title: string;
  description?: string;
}
const StakingVariant: FC<StakingVariantProps> = ({
  fees,
  title,
  description,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      width='-webkit-fill-available'
    >

      <Box display="flex" flexDirection="column" alignSelf="stretch">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor='surface-secondary'
          // borderRadius={balance < fees ? "radius-sm radius-sm radius-none radius-none" : "radius-sm"}
          borderRadius={"radius-sm"}
          padding="spacing-sm spacing-md"
          alignItems="center"
        >

          <Box width={{ initial: 'inherit', ml: '200px' }}>
            <Text
              variant="h4-semibold"
              color='text-primary'
              display={{ ml: 'none', dp: 'block' }}
            >
              {title}
            </Text>
            <Text
              variant="h5-semibold"
              color='text-primary'
              display={{ ml: 'block', dp: 'none' }}
            >
              {title}
            </Text>

            <Text
              variant="c-regular"
              color='text-tertiary'
              display={{ ml: 'none', dp: 'block' }}
            >
              {description}
            </Text>

            <Text
              variant="c-regular"
              color='text-tertiary'
              display={{ ml: 'block', dp: 'none' }}
            >
              {description}
            </Text>
          </Box>

          <Box display='flex'>
            {/* {!!pushApprovalAmount && pushApprovalAmount >= fees && <TickCircleFilled color='icon-brand-medium' size={22} />} */}

            <Box>
              <Text
                variant="h4-semibold"
                color='text-brand-medium'
                display={{ ml: 'none', dp: 'block' }}
              >
                {fees} PUSH
              </Text>
              <Text
                variant="h5-semibold"
                color='text-brand-medium'
                display={{ ml: 'block', dp: 'none' }}
              >
                {fees} PUSH
              </Text>

              {/* {showBalance && <Skeleton isLoading={fetchingbalance}>
                <Text variant="bes-semibold" color='text-tertiary'>
                  Balance:{''}
                  {balance?.toLocaleString()}
                </Text>
              </Skeleton>} */}
            </Box>

          </Box>

        </Box>
      </Box>

    </Box>
  );
};

export { StakingVariant };