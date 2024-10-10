import { FC } from 'react';

import {
  BellSimple,
  BellSimpleSlash,
  Box,
  Button,
  Cube,
  Dropdown,
  KebabMenuHorizontal,
  Menu,
  MenuItem,
  Skeleton,
} from 'blocks';

import { Alias, ChannelDetails } from 'queries';

import { useAccount } from 'hooks';
import { appConfig } from 'config';

import { ChannelDashboardInfo } from './ChannelDashboardInfo';
import { DashboardActiveState } from '../ChannelDashboard.types';

type ChannelDashboardHeaderProps = {
  channelDetails?: ChannelDetails;
  setActiveState: (activeState: DashboardActiveState) => void;
  onActiveNetwork: boolean;
  currentAliasDetails?: Alias;
};

const ChannelDashboardHeader: FC<ChannelDashboardHeaderProps> = ({
  channelDetails,
  setActiveState,
  onActiveNetwork,
  currentAliasDetails,
}) => {
  const { chainId } = useAccount();
  const isAliasVerified = currentAliasDetails && currentAliasDetails?.is_alias_verified === 0;
  const onCoreNetwork: boolean = appConfig.coreContractChain === chainId;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      flexDirection={{ ml: 'column', initial: 'row' }}
      gap={{ ml: 'spacing-md' }}
    >
      <ChannelDashboardInfo
        channelDetails={channelDetails}
        showAddNewChain={onCoreNetwork}
        onActiveNetwork={onActiveNetwork}
        isAliasVerified={isAliasVerified}
      />

      {/* Edit Channel and Dropdown only visible on Core network */}
      {onCoreNetwork && (
        <Box
          display="flex"
          height="fit-content"
          gap="spacing-xxs"
          justifyContent="center"
        >
          <Skeleton isLoading={!channelDetails?.name}>
            <Button
              variant="outline"
              size="small"
              onClick={() => setActiveState('editChannel')}
              disabled={channelDetails?.activation_status === 0}
            >
              Edit Channel
            </Button>
          </Skeleton>

          <Skeleton isLoading={!channelDetails?.name}>
            <Dropdown
              trigger="hover"
              overlay={
                <Menu>
                  <MenuItem
                    label="Add Subgraph Details"
                    icon={<Cube size={24} />}
                    onClick={() => setActiveState('addSubgraph')}
                  />

                  {channelDetails?.activation_status ? (
                    <MenuItem
                      label="Deactivate Channel"
                      icon={<BellSimpleSlash size={24} />}
                      onClick={() => setActiveState('deactivateChannel')}
                      type="error"
                    />
                  ) : (
                    <MenuItem
                      label="Activate Channel"
                      icon={<BellSimple size={24} />}
                      onClick={() => setActiveState('reactivateChannel')}
                      type="success"
                    />
                  )}
                </Menu>
              }
            >
              <Box
                padding="spacing-xs"
                border="border-sm solid stroke-tertiary"
                borderRadius="radius-xs"
                display="flex"
                height="16px"
                cursor="pointer"
                alignItems="center"
              >
                <KebabMenuHorizontal
                  size={24}
                  color="icon-primary"
                />
              </Box>
            </Dropdown>
          </Skeleton>
        </Box>
      )}
    </Box>
  );
};

export { ChannelDashboardHeader };
