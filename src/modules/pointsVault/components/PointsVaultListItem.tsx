import { Box, Link, Skeleton, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { PointsVaultActivity, PointsVaultStatus, useGetUserTwitterDetails, usePointsVaultToken } from 'queries';
import { css } from 'styled-components';
import { PointsVaultListActionButtons } from './PointsVaultListActionButtons';
import { caip10ToWallet } from 'helpers/w2w';

export type PointsVaultListItemProps = {
  item: PointsVaultActivity;
  isLoading: boolean;
  refetch: (actions?: PointsVaultStatus) => void;
};

const PointsVaultListItem = ({ isLoading, item, refetch }: PointsVaultListItemProps) => {
  const { mode } = useBlocksTheme();
  const token = usePointsVaultToken();
  const { data } = useGetUserTwitterDetails(item.data?.twitter, token);

  return (
    <Box
      height="48px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      // TODO: Fix ds-blocks
      css={css`
        border-bottom: 1px solid var(--${mode === 'dark' ? 'gray-800' : 'gray-200'});
      `}
    >
      <Skeleton isLoading={isLoading}>
        <Box
          display="flex"
          alignItems="center"
          width="345px"
          height="22px"
        >
          <Text
            variant="bs-semibold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {caip10ToWallet(item.userWallet)}
          </Text>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box
          display="flex"
          alignItems="center"
          width="345px"
        >
          <Link
            to={`https://x.com/${item.data?.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              color="pink-600"
              variant="bs-semibold"
            >
              https://x.com/{item.data?.twitter}
            </Text>
          </Link>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="42px"
        >
          <Text
            variant="bs-semibold"
            color={
              data?.followersCount && data.followersCount < 50 ? 'red-700' : { light: 'gray-1000', dark: 'gray-100' }
            }
          >
            {data?.followersCount ?? '-'}
          </Text>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box
          width="245px"
          minHeight="22px"
          display="flex"
          justifyContent="center"
        >
          <PointsVaultListActionButtons
            refetch={refetch}
            status={item.status}
            item={item}
          />
        </Box>
      </Skeleton>
    </Box>
  );
};

export { PointsVaultListItem };
