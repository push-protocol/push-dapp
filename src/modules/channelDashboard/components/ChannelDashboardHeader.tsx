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

import { ChannelDetails } from 'queries';

import { ChannelDashboardInfo } from './ChannelDashboardInfo';

import { DashboardActiveState } from '../ChannelDashboard.types';

type ChannelDashboardHeaderProps = {
  channelDetails?: ChannelDetails;
  loadingChannelDetails: boolean;
  setActiveState: (activeState: DashboardActiveState) => void;
};

const ChannelDashboardHeader: FC<ChannelDashboardHeaderProps> = ({
  channelDetails,
  loadingChannelDetails,
  setActiveState,
}) => {
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
        loadingChannelDetails={loadingChannelDetails}
        showAddNewChain
      />

      {/* Edit Channel and Dropdown */}
      <Box
        display="flex"
        height="fit-content"
        gap="spacing-xxs"
        justifyContent="center"
      >
        <Skeleton isLoading={loadingChannelDetails}>
          <Button
            variant="outline"
            size="small"
            onClick={() => setActiveState('editChannel')}
            disabled={channelDetails?.activation_status === 0}
          >
            Edit Channel
          </Button>
        </Skeleton>

        <Skeleton isLoading={loadingChannelDetails}>
          <Dropdown
            trigger="click"
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
    </Box>
  );
};

export { ChannelDashboardHeader };
