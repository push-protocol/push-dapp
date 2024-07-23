import { FC } from "react";

import { css } from "styled-components";

import { BellSimple, BellSimpleSlash, Box, Cube, Text } from "blocks";

import { useAccount } from "hooks";

import { useGetChannelDetails } from "queries";

import { ChannelDropdownTypes, DashboardActiveState } from "../ChannelDashboard.types";

type ChannelDashboardDropdownProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}
const ChannelDashboardDropdown: FC<ChannelDashboardDropdownProps> = ({
  setActiveState,
}) => {

  const { account } = useAccount();
  const { data: channelDetails } = useGetChannelDetails(account);

  const dropdownItems: ChannelDropdownTypes[] = [
    {
      title: 'Add Subgraph Details',
      logo: Cube,
      onClick: () => setActiveState('addSubgraph'),
      color: 'text-primary',
      show: true,
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
  ]

  return (
    <>
      <Box
        backgroundColor='surface-primary'
        display='flex'
        flexDirection='column'
        padding='spacing-xs spacing-xxs'
        border='border-sm solid stroke-tertiary'
        borderRadius="radius-xs"
        gap='spacing-xs'
        width='191px'
        position="absolute"
        css={css`right:0px;`}
      >
        {dropdownItems.map((item) => {
          const LogoComponent = item.logo;
          return (
            <Box
              display={item.show ? 'flex' : 'none'}
              gap='spacing-xs'
              alignItems='center'
              cursor='pointer'
              onClick={item.onClick}
              color={item.color}
            >
              <LogoComponent />
              <Text variant="bs-semibold" color={item.color}>{item.title}</Text>
            </Box>
          )
        })}
      </Box>
    </>
  );
};

export { ChannelDashboardDropdown };