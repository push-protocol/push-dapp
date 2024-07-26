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
  Skeleton
} from 'blocks';

import { ChannelDetails } from 'queries';

import { ChannelDashboardInfo } from './ChannelDashboardInfo';

import { ChannelDropdownTypes, DashboardActiveState } from '../ChannelDashboard.types';
import { css } from 'styled-components';

type ChannelDashboardHeaderProps = {
  channelDetails?: ChannelDetails;
  loadingChannelDetails: boolean;
  setActiveState: (activeState: DashboardActiveState) => void;
};

const ChannelDashboardHeader: FC<ChannelDashboardHeaderProps> = ({
  channelDetails,
  loadingChannelDetails,
  setActiveState
}) => {
  const dropdownItems: ChannelDropdownTypes[] = [
    {
      title: 'Add Subgraph Details',
      logo: Cube,
      onClick: () => setActiveState('addSubgraph'),
      color: 'text-primary',
      show: true
    },
    {
      title: 'Deactivate Channel',
      logo: BellSimpleSlash,
      onClick: () => setActiveState('deactivateChannel'),
      color: 'text-state-danger-bold',
      show: channelDetails?.activation_status === 0 ? false : true //Channel is deactivated
    },
    {
      title: 'Activate Channel',
      logo: BellSimple,
      onClick: () => setActiveState('reactivateChannel'),
      color: 'text-state-success-bold',
      show: channelDetails?.activation_status === 0 ? true : false
    }
  ];

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
      <Box display="flex" height="fit-content" gap="spacing-xxs" justifyContent="center">
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
                {dropdownItems.map((Item, index) => {
                  const LogoComponent = Item.logo;
                  return (
                    Item.show && (
                      <MenuItem
                        key={index}
                        label={Item.title}
                        icon={<LogoComponent size={24} />}
                        onClick={Item.onClick}
                        css={css`
                          color: var(--${Item.color});
                          span {
                            color: var(--${Item.color});
                          }
                        `}
                      />
                    )
                  );
                })}
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
              <KebabMenuHorizontal size={24} color="icon-primary" />
            </Box>
          </Dropdown>
        </Skeleton>
      </Box>
    </Box>
  );
};

export { ChannelDashboardHeader };
