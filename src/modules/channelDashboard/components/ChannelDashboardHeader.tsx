import { Box, Button, Dropdown, KebabMenuHorizontal, Skeleton } from "blocks";
import { FC } from "react";
import { ChannelDashboardInfo } from "./ChannelDashboardInfo";
import { ChannelDashboardDropdown } from "./ChannelDashboardDropdown";
import { css } from "styled-components";
import { ChannelDetailsResponse } from "queries";
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
            onClick={() => setActiveState('edit_channel')}
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
              border={{ light: '1px solid gray-300', dark: '1px solid gray-700' }}
              borderRadius="radius-xs"
              display='flex'
              height='16px'
              cursor='pointer'
              alignItems='center'
              css={css`
              `}
            >

              <KebabMenuHorizontal size={24} color={{ dark: 'gray-400', light: 'gray-900' }} />
            </Box>
          </Dropdown>
        </Skeleton>
      </Box>
    </Box>
  );
};



export { ChannelDashboardHeader };