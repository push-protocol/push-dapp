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
      backgroundColor={{
        light: 'white',
        dark: 'gray-900',
      }}
      padding="s6"
      borderRadius="r6"
    >
      <Text
        variant="h4-bold"
        color="gray-1000"
      >
        Points Vault
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        // TODO: fix ds-blocks
        css={[{ marginBottom: 'var(--s6)' }]}
      >
        <Box
          display="flex"
          gap="s1"
        >
          <Text
            color="gray-500"
            variant="bs-regular"
          >
            Ensure the user has at-least 50 Followers and is following
          </Text>
          <Link
            to="https://x.com/pushprotocol"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Text
              color="pink-400"
              variant="bs-regular"
            >
              @pushprotocol
            </Text>
          </Link>{' '}
          <Text
            color="gray-500"
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
          // TODO: Fix ds-blocks
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
