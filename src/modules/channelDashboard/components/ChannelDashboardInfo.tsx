import { FC, useState } from 'react';

import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Box, Copy, Ethereum, PlusCircle, Skeleton, Tag, Text, TickCircleFilled, Tooltip } from 'blocks';

import { LOGO_ALIAS_CHAIN } from 'common';

import { shortenText } from 'helpers/UtilityHelper';

import { ChannelDetails } from 'queries';

import APP_PATHS from 'config/AppPaths';

type ChannelDashboardInfoProps = {
  channelDetails?: ChannelDetails;
  showAddNewChain?: boolean;
  onActiveNetwork?: boolean;
  isAliasVerified?: boolean;
};

const ChannelDashboardInfo: FC<ChannelDashboardInfoProps> = ({
  channelDetails,
  showAddNewChain = false,
  onActiveNetwork = true,
  isAliasVerified,
}) => {
  const navigate = useNavigate();

  let verifiedAliasChainIds =
    channelDetails?.aliases
      ?.filter((item) => item.is_alias_verified)
      .map((item) => parseInt(item.alias_blockchain_id)) || [];

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
      <Skeleton isLoading={!channelDetails?.name || isAliasVerified}>
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
          isLoading={!channelDetails?.name || isAliasVerified}
          width="200px"
          height="30px"
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
                {!!channelDetails?.verified_status && (
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
                  verifiedAliasChainIds.map((aliasChainId: number) => {
                    const LogoComponent = LOGO_ALIAS_CHAIN[aliasChainId];
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
            isLoading={!channelDetails?.name || isAliasVerified}
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
            <Skeleton isLoading={!channelDetails?.name || isAliasVerified}>
              <Text
                color="text-tertiary"
                variant="c-regular"
              >
                {channelDetails?.subscriber_count} subscribers
              </Text>
            </Skeleton>

            <Skeleton isLoading={!channelDetails?.name || isAliasVerified}>
              {!onActiveNetwork ? (
                <Tag
                  label="Setup Pending"
                  variant="warning"
                />
              ) : (
                <>
                  {channelDetails?.activation_status === 0 && (
                    <Tag
                      label="Deactivated"
                      variant="danger"
                    />
                  )}
                  {channelDetails?.activation_status === 1 && (
                    <Tag
                      label="Active"
                      variant="success"
                    />
                  )}
                </>
              )}
            </Skeleton>
            <Skeleton isLoading={!channelDetails?.name || isAliasVerified}>
              {channelDetails?.tags.length ? (
                <Tag
                  label={channelDetails.tags[0]}
                  variant="info"
                />
              ) : null}
            </Skeleton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelDashboardInfo };
