import { FC } from "react";

import { Box, Button, Dropdown, KebabMenuHorizontal, Skeleton } from "blocks";

import { ChannelDetailsResponse } from "queries";

import { ChannelDashboardInfo } from "./ChannelDashboardInfo";
import { ChannelDashboardDropdown } from "./ChannelDashboardDropdown";

import { DashboardActiveState } from "../ChannelDashboard.types";

type ChannelDashboardHeaderProps = {
  channelDetails?: ChannelDetailsResponse;
  loadingChannelDetails: boolean;
  setActiveState: (activeState: DashboardActiveState) => void;
}

const ChannelDashboardHeader: FC<ChannelDashboardHeaderProps> = ({
  channelDetails,
  loadingChannelDetails,
  setActiveState
}) => {


  return (
    <Box
      display='flex'
      justifyContent='space-between'
      width='100%'
      flexDirection={{ ml: 'column', initial: 'row' }}
      gap={{ ml: 'spacing-md' }}
    >
      <ChannelDashboardInfo
        channelDetails={channelDetails}
        loadingChannelDetails={loadingChannelDetails}
        showAddNewChain
      />

      {/* Edit Channel and Dropdown */}
      <Box display='flex' height='fit-content' gap='spacing-xxs' justifyContent='center'>
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

        {/* Dropdown */}
        <Skeleton isLoading={loadingChannelDetails}>
          <Dropdown
            trigger="click"
            overlay={<ChannelDashboardDropdown
              setActiveState={setActiveState}
            />}
          >
            <Box
              padding='spacing-xs'
              border='border-sm solid stroke-tertiary'
              borderRadius="radius-xs"
              display='flex'
              height='16px'
              cursor='pointer'
              alignItems='center'
            >
              <KebabMenuHorizontal size={24}
                color='icon-primary'
              />
            </Box>
          </Dropdown>
        </Skeleton>
      </Box>
    </Box>
  );
};



export { ChannelDashboardHeader };