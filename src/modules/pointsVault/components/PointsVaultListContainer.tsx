import { Box, Link, Search, Tabs, Text, TextInput } from 'blocks';
import { PointsVaultList } from './PointsVaultList';
import PushIcon from 'assets/snap/PushIcon.svg';
import { css } from 'styled-components';
import { useFormik } from 'formik';
import { PointsVaultSearchPayload, PointsVaultStatus, useGetPointsVaultUsers, useSearchPVUsers } from 'queries';
import { useDebounce } from 'react-use';
import { useState } from 'react';

const PointsVaultListContainer = () => {
  const [type, setType] = useState<PointsVaultStatus>('PENDING');
  const [showSearch, setShowSearch] = useState(false);

  const formik = useFormik<PointsVaultSearchPayload>({
    initialValues: { query: '' },
    onSubmit: () => {},
  });

  const [debouncedQuery, setDebouncedQuery] = useState(formik.values.query);

  useDebounce(
    () => {
      setShowSearch(!!formik.values.query);
      setDebouncedQuery(formik.values.query);
    },
    500,
    [formik.values.query]
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, refetch } = useGetPointsVaultUsers({
    pageSize: 20,
    status: type,
  });

  const {
    data: searchResults,
    hasNextPage: hasNextPageSearch,
    fetchNextPage: fetchNextPageSearch,
    isFetchingNextPage: isFetchingNextPageSearch,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
    refetch: refetchSearch,
  } = useSearchPVUsers({ query: debouncedQuery });

  const ActiveListData = () => {
    return (
      <PointsVaultList
        data={showSearch ? searchResults : data}
        hasNextPage={showSearch ? hasNextPageSearch : hasNextPage}
        isFetchingNextPage={showSearch ? isFetchingNextPageSearch : isFetchingNextPage}
        isError={showSearch ? isErrorSearch : isError}
        isLoading={showSearch ? isLoadingSearch : isLoading}
        refetch={showSearch ? refetchSearch : refetch}
        fetchNextPage={showSearch ? fetchNextPageSearch : fetchNextPage}
      />
    );
  };

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
          // TODO: Fix ds-blocks
          css={css`
            right: 0px;
          `}
        >
          <TextInput
            placeholder="Search user or x handle or else"
            icon={<Search />}
            value={formik.values.query}
            onChange={formik.handleChange('query')}
            // TODO: Fix ds-blocks
            css={css`
              width: 302px;
            `}
          />
        </Box>
      </Box>
      <Tabs
        variant="fill"
        onChange={(key) => {
          formik.setValues({ query: '' });
          setType(key as PointsVaultStatus);
        }}
        items={[
          {
            key: 'PENDING',
            label: 'Pending',
            children: <ActiveListData />,
          },
          {
            key: 'COMPLETED',
            label: 'Approved',
            children: <ActiveListData />,
          },
          {
            key: 'REJECTED',
            label: 'Rejected',
            children: <ActiveListData />,
          },
        ]}
      />
    </Box>
  );
};

export { PointsVaultListContainer };
