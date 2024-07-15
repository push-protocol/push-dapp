import { Box, Copy, Ethereum, Optimism, PlusCircle, Polygon, Text } from 'blocks';
import { shortenText } from 'helpers/UtilityHelper';
import { css } from 'styled-components';
import UnstoppableLogo from 'assets/Clothing.png'

const ChannelDashboardInfo = () => {
  return (
    <Box
      display='flex'
      gap='spacing-sm'
      alignItems='center'>

      <Box
        width="90px"
        height="90px"
        border='1px solid gray-100'
        borderRadius="radius-md"
      >
        <img
          width="100%"
          height="100%"
          src={UnstoppableLogo}
        />
      </Box>



      <Box display="flex" flexDirection="column">
        <Box display="flex" gap="s1">
          <Text variant="h4-semibold" color="text-primary">
            Unstoppable Domains
          </Text>
          <Box
            css={css`
            margin-left: -8px;
          `}
          >
            <Ethereum />
            <Polygon />
            <Optimism />
          </Box>
          <PlusCircle size={24} color="icon-primary" />
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xs">
          <Box display="flex" gap="s1">
            <Text color="text-tertiary" variant="c-regular">
              {shortenText('0x9452BCAf507CD6547574b78B810a723d8868C85a', 5)}
            </Text>
            <Box cursor="pointer">
              <Copy size={14} color="icon-tertiary" />
            </Box>
          </Box>

          <Box display="flex" gap="spacing-xs">
            <Text color="text-tertiary" variant="c-regular">
              555 subscribers
            </Text>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelDashboardInfo };
