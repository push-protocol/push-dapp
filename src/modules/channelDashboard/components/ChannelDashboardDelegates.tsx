import { FC } from 'react';
import { Add, Box, Button, Separator, Skeleton, Text } from 'blocks';
import { ChannelDelegateList } from './ChannelDelegateList';
import ChannelDashboardNullState from './ChannelDashboardNullState';
import { ChannelDelegatesResponse } from 'queries';
import { DashboardActiveState } from '../ChannelDashboard.types';

type ChannelDashboardDelegatesProps = {
  channel_delegates?: ChannelDelegatesResponse;
  loadingDelegates: boolean;
  setChannelDashboardError: (error: string) => void;
  refetchChannelDelegate: () => void;
  setActiveState: (activeState: DashboardActiveState) => void;
};
const ChannelDashboardDelegates: FC<ChannelDashboardDelegatesProps> = ({
  channel_delegates,
  loadingDelegates,
  setChannelDashboardError,
  refetchChannelDelegate,
  setActiveState
}) => {
  return (
    <Box
      display="flex"
      padding="spacing-sm"
      border={{ light: '1px solid gray-300', dark: '1px solid gray-700' }}
      borderRadius="radius-sm"
      width="-webkit-fill-available"
      flexDirection="column"
    >
      <Box display="flex" flexDirection="column" gap="s2">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap="s1">
            <Skeleton isLoading={loadingDelegates}>
              <Text variant="h5-semibold" color="text-primary">
                Channel Delegates
              </Text>
            </Skeleton>
            <Skeleton isLoading={loadingDelegates}>
              <Text variant="c-regular" color="text-tertiary">
                {' '}
                Delegates can send channel notifications{' '}
              </Text>
            </Skeleton>
          </Box>

          <Button
            onClick={() => setActiveState('addDelegate')}
            size="extraSmall"
            variant="tertiary"
            leadingIcon={<Add />}
          >
            Add
          </Button>
        </Box>
        <Separator />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        overflow="auto"
        height={{ initial: '274px', ml: '230px' }}
        justifyContent={channel_delegates ? 'flex-start' : 'center'}
      >
        {channel_delegates && channel_delegates.length > 0 ? (
          <>
            {channel_delegates.map((delegate: string) => (
              <ChannelDelegateList
                delegate_address={delegate}
                setChannelDashboardError={setChannelDashboardError}
                refetchChannelDelegate={refetchChannelDelegate}
              />
            ))}
          </>
        ) : (
          <ChannelDashboardNullState
            state="delegatee"
            title="No delegates yet"
            subTitle="Delegates added to your channel will appear here."
          />
        )}
      </Box>
    </Box>
  );
};

export { ChannelDashboardDelegates };
