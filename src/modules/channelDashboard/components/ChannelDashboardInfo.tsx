import { FC, useState } from 'react';

import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Box, CircleFilled, Copy, Ethereum, PlusCircle, Skeleton, Text, TickCircleFilled, Tooltip } from 'blocks';

import { LOGO_ALIAS_CHAIN } from 'common';

import { shortenText } from 'helpers/UtilityHelper';

import { ChannelDetails } from 'queries';

import APP_PATHS from 'config/AppPaths';

type ChannelDashboardInfoProps = {
  channelDetails?: ChannelDetails;
  loadingChannelDetails: boolean;
  showAddNewChain?: boolean;
};

const ChannelDashboardInfo: FC<ChannelDashboardInfoProps> = ({
  channelDetails,
  loadingChannelDetails,
  showAddNewChain = false,
}) => {
  const navigate = useNavigate();

  const verifiedAliasChainIds =
    channelDetails?.aliases?.filter((item) => item?.is_alias_verified)?.map((item) => item.alias_blockchain_id) || [];

  const [tooltipText, setToolTipText] = useState('Copy Wallet');
  const copyWalletAddress = () => {
    if (channelDetails) {
      navigator.clipboard.writeText(channelDetails.channel);
      setToolTipText('Copied');
    }
    setTimeout(() => {
      setToolTipText('Copy Wallet');
    }, 1000);
  };

  return (
    <Box
      display="flex"
      gap="spacing-sm"
      alignItems="center"
    >
      <Skeleton isLoading={!channelDetails?.name}>
        <Box
          width="90px"
          height="90px"
          border="border-sm solid stroke-tertiary"
          borderRadius="radius-md"
          css={css`
            img {
              border-radius: 16px;
            }
          `}
        >
          <img
            width="100%"
            height="100%"
            src={channelDetails?.iconV2}
          />
        </Box>
      </Skeleton>

      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xxxs"
      >
        <Skeleton
          isLoading={!channelDetails?.name}
          width="200px"
          height='30px'
        >
          <Box
            display="flex"
            alignItems={{ initial: 'center', ml: 'baseline' }}
            flexDirection={{ ml: 'column', initial: 'row' }}
          >
            <Text
              variant="h4-semibold"
              color="text-primary"
            >
              {channelDetails?.name}
            </Text>

            <Box
              display="flex"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                margin={{ initial: 'spacing-none spacing-none spacing-none spacing-xxxs', ml: 'spacing-none' }}
              >
                {!!channelDetails?.is_alias_verified && (
                  <TickCircleFilled
                    size={22}
                    color="icon-tertiary"
                  />
                )}

                <Ethereum
                  width={18}
                  height={18}
                />
                {verifiedAliasChainIds.length > 0 &&
                  verifiedAliasChainIds.map((aliasChainId) => {
                    const LogoComponent = LOGO_ALIAS_CHAIN[Number(aliasChainId)];
                    return LogoComponent ? (
                      <Box
                        display="flex"
                        css={css`
                          margin-left: -4px;
                        `}
                      >
                        <LogoComponent
                          key={aliasChainId}
                          width={18}
                          height={18}
                        />
                      </Box>
                    ) : null;
                  })}
              </Box>

              {showAddNewChain && (
                <Box
                  display="flex"
                  cursor="pointer"
                  onClick={() => navigate(APP_PATHS.AddNewChain)}
                >
                  <PlusCircle
                    size={24}
                    color="icon-primary"
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Skeleton>

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
        >
          <Skeleton
            isLoading={!channelDetails?.name}
            width="100%"
          >
            <Box
              display="flex"
              gap="spacing-xxxs"
            >
              <Text
                color="text-tertiary"
                variant="c-regular"
              >
                {shortenText(channelDetails ? channelDetails?.channel : '', 5)}
              </Text>

              <Tooltip title={tooltipText}>
                <Box cursor="pointer">
                  <Copy
                    onClick={copyWalletAddress}
                    size={14}
                    color="icon-tertiary"
                  />
                </Box>
              </Tooltip>
            </Box>
          </Skeleton>

          <Box
            display="flex"
            gap="spacing-xs"
          >
            <Skeleton isLoading={!channelDetails?.name}>
              <Text
                color="text-tertiary"
                variant="c-regular"
              >
                {channelDetails?.subscriber_count} subscribers
              </Text>
            </Skeleton>

            {channelDetails?.activation_status === 0 && (
              <Box
                display="flex"
                alignItems="center"
                gap="spacing-xxxs"
                padding="spacing-none spacing-xxxs"
                backgroundColor="surface-state-danger-subtle"
                borderRadius="radius-xs"
              >
                <CircleFilled
                  size={8}
                  color="icon-state-danger-bold"
                />
                <Text
                  color="text-state-danger-bold"
                  variant="bes-semibold"
                >
                  {' '}
                  Deactivated
                </Text>
              </Box>
            )}

            {channelDetails?.activation_status === 1 && (
              <Box
                display="flex"
                alignItems="center"
                gap="spacing-xxxs"
                padding="spacing-none spacing-xxxs"
                backgroundColor="surface-state-success-subtle"
                borderRadius="radius-xs"
              >
                <CircleFilled
                  size={8}
                  color="icon-state-success-bold"
                />
                <Text
                  color="text-state-success-bold"
                  variant="bes-semibold"
                >
                  {' '}
                  Active
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelDashboardInfo };
