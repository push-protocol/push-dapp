import { FC } from 'react';

import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Box, CircleFilled, Copy, Ethereum, PlusCircle, Skeleton, Text, Tooltip } from 'blocks';

import { LOGO_ALIAS_CHAIN } from 'common';

import { shortenText } from 'helpers/UtilityHelper';


import { ChannelDetailsResponse } from 'queries';

import { ImageV3 } from '../ChannelDashboard.styled';
import APP_PATHS from 'config/AppPaths';

type ChannelDashboardInfoProps = {
  channelDetails?: ChannelDetailsResponse;
  loadingChannelDetails: boolean;
  showAddNewChain?: boolean;
}

const ChannelDashboardInfo: FC<ChannelDashboardInfoProps> = ({
  channelDetails,
  loadingChannelDetails,
  showAddNewChain = false,
}) => {

  const navigate = useNavigate();

  const verifiedAliasChainIds =
    channelDetails?.aliases?.filter((item) => item?.is_alias_verified)?.map((item) => item.alias_blockchain_id) || [];
  console.log("verifiedAliasChainIds", verifiedAliasChainIds);


  return (
    <Box
      display='flex'
      gap='spacing-sm'
      alignItems='center'>

      <Skeleton isLoading={loadingChannelDetails}>
        <Box
          width="90px"
          height="90px"
          border='1px solid gray-100'
          borderRadius="radius-md"
        >
          <ImageV3
            width="100%"
            height="100%"
            src={channelDetails?.iconV2}
          />
        </Box>
      </Skeleton>


      <Box display="flex" flexDirection="column" gap='s1'>
        <Skeleton isLoading={loadingChannelDetails} width='100%'>
          <Box display="flex" flexDirection={{ ml: 'column', initial: 'row' }}>

            <Text variant="h4-semibold" color="text-primary">
              {channelDetails?.name}
            </Text>

            <Box display='flex' alignItems='center'>
              <Box
                display="flex"
                alignItems="center"
                margin={{ initial: "spacing-none spacing-none spacing-none spacing-xs", ml: 'spacing-none' }}
              >
                <Ethereum
                  width={18}
                  height={18}
                />
                {verifiedAliasChainIds.length > 0 && (
                  verifiedAliasChainIds.map((aliasChainId: number) => {
                    const LogoComponent = LOGO_ALIAS_CHAIN[aliasChainId];
                    return LogoComponent ? (
                      <Box
                        display="flex"
                        css={css`margin-left: -4px;`}
                      >
                        <LogoComponent
                          key={aliasChainId}
                          width={18}
                          height={18}
                        />
                      </Box>
                    ) : null;
                  })
                )}
              </Box>

              {showAddNewChain && <Box display='flex' cursor='pointer'
                onClick={() => navigate(APP_PATHS.AddNewChain)}>
                <PlusCircle size={18} color="icon-primary" />
              </Box>}

            </Box>
          </Box>
        </Skeleton>

        <Box display="flex" flexDirection="column" gap="spacing-xs">
          <Skeleton isLoading={loadingChannelDetails} width='100%'>
            <Box display="flex" gap="s1">

              <Text color="text-tertiary" variant="c-regular">
                {shortenText(channelDetails ? channelDetails?.channel : '', 5)}
              </Text>

              <Tooltip
                description='Copy Wallet'
                children={<Box cursor="pointer">
                  <Copy size={14} color="icon-tertiary" />
                </Box>
                }
              />

            </Box>
          </Skeleton>

          <Box display="flex" gap="spacing-xs">
            <Skeleton isLoading={loadingChannelDetails}>
              <Text color="text-tertiary" variant="c-regular">
                {channelDetails?.subscriber_count} {" "} subscribers
              </Text>
            </Skeleton>

            {channelDetails?.activation_status === 0 && (
              <Box
                display="flex"
                alignItems="center"
                gap="spacing-xxxs"
                padding="spacing-none spacing-xxxs"
                backgroundColor="surface-danger-subtle"
                borderRadius="radius-xs"
              >
                <CircleFilled size={8} color='icon-danger-bold' />
                <Text color='text-danger-bold' variant='bes-semibold'> Deactivated</Text>
              </Box>
            )}

            {channelDetails?.activation_status === 1 && (
              <Box
                display="flex"
                alignItems="center"
                gap="spacing-xxxs"
                padding="spacing-none spacing-xxxs"
                backgroundColor="surface-success-subtle"
                borderRadius="radius-xs"
              >

                <CircleFilled size={8} color='icon-success-bold' />
                <Text color='text-success-bold' variant='bes-semibold'> Active</Text>
              </Box>
            )}

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelDashboardInfo };
