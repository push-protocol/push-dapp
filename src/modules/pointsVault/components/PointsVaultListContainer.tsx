import { Box, Link, Search, Tabs, Text, TextInput } from 'blocks';
import { PointsVaultApprovedList } from './PointsVaultApprovedList';
import PushIcon from 'assets/snap/PushIcon.svg';
import { css } from 'styled-components';
import { PointsVaultPendingList } from './PointsVaultPendingList';
import { PointsVaultRejectedList } from './PointsVaultRejectedList';
import { useDebounce } from 'react-use';
import { useCallback, useState } from 'react';
import { ethers } from 'ethers';

const PointsVaultListContainer = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState({});

  const getFormattedQuery = useCallback((qry: string) => {
    if (!qry) return {};
    const isAddress = ethers.utils.isAddress(qry);
    const key = isAddress ? 'wallet' : 'twitter';
    const value = isAddress ? `eip155:${qry}` : qry;
    return { [key]: value };
  }, []);

  useDebounce(() => setDebouncedQuery(getFormattedQuery(query)), 500, [query]);

  return (
    <Box
      backgroundColor="surface-primary"
      padding="spacing-md"
      borderRadius="radius-md"
    >
      <Text
        variant="h4-bold"
        color="text-primary"
      >
        Points Vault
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="spacing-none spacing-none spacing-md spacing-none"
      >
        <Box
          display="flex"
          gap="spacing-xxxs"
        >
          <Text
            color="text-tertiary"
            variant="bs-regular"
          >
            Ensure the user has at-least 50 Followers and is following
          </Text>
          <Link
            to="https://x.com/PushChain"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Text
              color="text-brand-medium"
              variant="bs-regular"
            >
              @pushprotocol
            </Text>
          </Link>{' '}
          <Text
            color="text-tertiary"
            variant="bs-regular"
          >
            on Twitter
          </Text>
        </Box>
        <img
          src={PushIcon}
          alt="Push Icon"
        />
      </Box>
      <Box
        position="relative"
        width="100%"
      >
        <Box
          position="absolute"
          width="302px"
          css={css`
            right: 0px;
          `}
        >
          <TextInput
            placeholder="Search user or x handle or else"
            icon={<Search />}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Box>
      <Tabs
        variant="fill"
        onChange={() => setQuery('')}
        items={[
          {
            key: 'PENDING',
            label: 'Pending',
            children: <PointsVaultPendingList query={debouncedQuery} />,
          },
          {
            key: 'COMPLETED',
            label: 'Approved',
            children: <PointsVaultApprovedList query={debouncedQuery} />,
          },
          {
            key: 'REJECTED',
            label: 'Rejected',
            children: <PointsVaultRejectedList query={debouncedQuery} />,
          },
        ]}
      />
    </Box>
  );
};

export { PointsVaultListContainer };
