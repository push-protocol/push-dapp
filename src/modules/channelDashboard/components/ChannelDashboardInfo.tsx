import { Box, Copy, Ethereum, PlusCircle, Skeleton, Text, Tooltip } from 'blocks';
import { shortenText } from 'helpers/UtilityHelper';
import { css } from 'styled-components';
import { LOGO_ALIAS_CHAIN } from 'modules/dashboard/configs';
import { useNavigate } from 'react-router-dom';
import { ChannelDetailsResponse } from 'queries';
import { ImageV3 } from '../ChannelDashboard.styled';
import { FC } from 'react';

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

  const LOGOS = [137, 10]
  const navigate = useNavigate();

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
                {LOGOS.map((chain) => {
                  const LogoComponent = LOGO_ALIAS_CHAIN[chain];
                  return LogoComponent ? (
                    <Box
                      display="flex"
                      css={css`margin-left: -4px;`}
                    >
                      <LogoComponent
                        key={chain}
                        width={18}
                        height={18}
                      />
                    </Box>
                  ) : null;
                })}
              </Box>

              {showAddNewChain && <Box display='flex' cursor='pointer' onClick={() => navigate('/addNewChain')}>
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
                backgroundColor="red-100"
                borderRadius="radius-xs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#E93636" />
                </svg>
                <Text color='red-500' variant='bes-semibold'> Deactivated</Text>
              </Box>
            )}

            {channelDetails?.activation_status === 1 && (
              <Box
                display="flex"
                alignItems="center"
                gap="spacing-xxxs"
                padding="spacing-none spacing-xxxs"
                backgroundColor="green-100"
                borderRadius="radius-xs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#008769" />
                </svg>
                <Text color='green-500' variant='bes-semibold'> Active</Text>
              </Box>
            )}

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelDashboardInfo };
