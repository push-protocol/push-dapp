import { Box, Button, Dropdown, KebabMenuHorizontal, KebabMenuVertical } from "blocks";
import { FC, useRef } from "react";
import { ChannelDashboardInfo } from "./ChannelDashboardInfo";
import { ChannelDashboardDropdown } from "./ChannelDashboardDropdown";
import { css } from "styled-components";

type ChannelDashboardHeaderProps = {

}

const ChannelDashboardHeader: FC<ChannelDashboardHeaderProps> = () => {
  const dropdownref = useRef();
  console.log("Dropdown ref", dropdownref.current);

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      width='100%'
    >
      <ChannelDashboardInfo />

      <Box
        display='flex'
        gap='spacing-xxs'
      >
        <Button variant="outline" size="small">Edit Channel</Button>
        {/* Dropdown */}
        <Dropdown
          trigger="click"
          overlay={<ChannelDashboardDropdown />}
        >
          <Box
            padding='spacing-xs'
            border='1px solid gray-300'
            borderRadius="radius-xs"
            display='flex'
            height='16px'
            alignItems='center'
            css={css`
              
              `}
          >

            <KebabMenuHorizontal size={24} />
          </Box>
        </Dropdown>
      </Box>
    </Box>
  );
};



export { ChannelDashboardHeader };