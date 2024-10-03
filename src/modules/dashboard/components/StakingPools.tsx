import { FC } from 'react';
import { css } from 'styled-components';
import { ArrowUpRight, Box, Button, EarnOnPush, Link, PushLogo, Skeleton, Text } from 'blocks';
import { usePushStakingStats } from 'common';
import { formatTokens } from 'helpers/StakingHelper';

export type StakingPoolsProps = {};

const StakingPools: FC<StakingPoolsProps> = () => {
  const { poolStats, pushPoolStats } = usePushStakingStats();

  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      padding="spacing-md"
      display="flex"
      gap="spacing-md"
      width="-webkit-fill-available"
      flexDirection="column"
    >
      <Box
        display="flex"
        alignItems={{ initial: 'flex-start', tb: 'center' }}
        justifyContent="space-between"
        width="-webkit-fill-available"
        flexDirection={{ initial: 'row', tb: 'column' }}
        textAlign={{ tb: 'center' }}
        gap={{ initial: 'spacing-none', tb: 'spacing-sm' }}
      >
        <Box maxWidth="303px">
          <Text variant="h4-semibold">Staking Pools</Text>
          <Text
            variant="bes-regular"
            color="text-tertiary-inverse"
          >
            Stake to support network decentralization and earn staking rewards every epoch.
          </Text>
        </Box>
        <Box
          display="flex"
          gap={{ initial: 'spacing-md', ml: 'spacing-sm' }}
          flexDirection={{ initial: 'row', ml: 'column' }}
        >
          <Box>
            <Text variant="h5-semibold">Total Value Locked</Text>
            <Skeleton isLoading={!poolStats?.totalValueLocked}>
              <Text variant="h3-bold">{`$${Number(poolStats?.totalValueLocked.toFixed(2)).toLocaleString()}`}</Text>
            </Skeleton>
          </Box>
          <Box>
            <Text variant="h5-semibold">Rewards Paid</Text>
            <Skeleton isLoading={!poolStats?.pushRewardsDistributed || !poolStats.totalDistributedAmount}>
              <Text variant="h3-bold">
                {poolStats?.pushRewardsDistributed && poolStats?.totalDistributedAmount
                  ? `${Math.min(
                      formatTokens(poolStats?.pushRewardsDistributed),
                      formatTokens(poolStats?.totalDistributedAmount)
                    ).toLocaleString()}`
                  : 0}
              </Text>
            </Skeleton>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={{ initial: 'spacing-sm', tb: 'spacing-md' }}
        width="-webkit-fill-available"
        flexDirection={{ initial: 'row', tb: 'column' }}
      >
        <Box
          padding="spacing-md"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="radius-md"
          border="border-sm solid stroke-secondary"
          width={{ tb: '-webkit-fill-available', initial: '65%' }}
          gap={{ initial: 'spacing-none', tb: 'spacing-md' }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap="spacing-xxs"
            flexDirection="column"
          >
            <Box
              border="border-sm solid stroke-secondary"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="48px"
              height="48px"
              borderRadius="radius-lg"
              flexDirection="column"
            >
              <PushLogo
                width={24}
                height={24}
              />
            </Box>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
            >
              <Text variant="h4-semibold">Push Fee Staking Pool</Text>
              <Text
                variant="bes-regular"
                color="text-tertiary-inverse"
                textAlign="center"
              >
                Stake any amount of PUSH to receive rewards and a slice of the fees earned by the protocol.
              </Text>
            </Box>
            <Box
              display={{ initial: 'flex', ml: 'block' }}
              gap="spacing-lg"
            >
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Skeleton isLoading={!pushPoolStats?.stakingAPR}>
                  <Text
                    variant="h3-bold"
                    color="text-state-success-bold"
                  >
                    ~{pushPoolStats?.stakingAPR.toLocaleString()}%
                  </Text>
                </Skeleton>
                <Text
                  color="text-tertiary-inverse"
                  variant="c-regular"
                >
                  APR + Fees
                </Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Skeleton isLoading={!pushPoolStats?.totalStakedAmount || !poolStats?.pushPrice}>
                  <Text variant="h3-bold">
                    $
                    {pushPoolStats?.totalStakedAmount && poolStats?.pushPrice
                      ? (
                          formatTokens(pushPoolStats?.totalStakedAmount) * poolStats?.pushPrice.toFixed(2)
                        ).toLocaleString()
                      : 0}
                  </Text>
                </Skeleton>
                <Text
                  color="text-tertiary-inverse"
                  variant="c-regular"
                >
                  Staked
                </Text>
              </Box>
            </Box>
          </Box>
          <Link
            to="/yieldv2"
            isText={false}
          >
            <Button size="small">Stake & Earn Rewards</Button>
          </Link>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="radius-md"
          padding="spacing-md"
          width={{ tb: '-webkit-fill-available', initial: '55%' }}
          css={css`
            background: linear-gradient(269deg, #eeb4fd 0.85%, #dad1ff 99.15%);
          `}
          gap="spacing-xs"
          alignItems={{ initial: 'flex-start', tb: 'center' }}
          textAlign={{ initial: 'start', tb: 'center' }}
        >
          <EarnOnPush />
          <Box width="80%">
            <Text
              variant="h4-bold"
              color="text-on-light-bg"
            >
              Earn & Grow with Push.
            </Text>
            <Text
              variant="bs-regular"
              color="text-on-light-bg"
            >
              Earn rewards on fees earned by the protocol. Stake to earn.
            </Text>
          </Box>
          <Link
            to="https://push.org/docs/tokenomics/"
            isText={false}
            target="_blank"
          >
            <Box
              display="flex"
              alignItems="center"
              color="text-brand-medium"
            >
              <Text
                color="text-brand-medium"
                variant="bm-semibold"
              >
                Learn More
              </Text>
              <ArrowUpRight size={18} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { StakingPools };

// infographic
