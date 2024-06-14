// React and other libraries
import { FC, ReactNode } from "react";

// Third-party libraries
import { css } from "styled-components";

// Components
import { Box, Text } from "blocks";
import Tooltip from "components/reusables/tooltip/Tooltip";
import PushLogo from "blocks/illustrations/components/PushLogo";

type VerifiedToolTipComponentProps = {
  children: ReactNode;
}

const VerifiedToolTipComponent: FC<VerifiedToolTipComponentProps> = (props) => {
  const { children } = props;
  return (
    <Tooltip
      wrapperProps={{
        width: 'fit-content',
        maxWidth: 'fit-content',
        minWidth: 'fit-content',
        display: 'flex',
        cursor: 'pointer',
        zIndex: '9999',
      }}
      placementProps={
        {
          background: 'none',
          bottom: '20px',
          left: '7px',
        }
      }
      tooltipContent={
        <ToolTipContent />
      }
    >
      {children}
    </Tooltip>
  );
};

export { VerifiedToolTipComponent };

const ToolTipContent = () => {
  return (
    <Box
      backgroundColor='black'
      height='20px'
      width='175px'
      padding='s2 s4'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      borderRadius="1rem 1rem 1rem 0.125rem"
      css={css`z-index:1000;`}
    >
      <Text variant="bs-semibold">Verified By: </Text>
      <Box display='flex' gap='s2' alignItems='center'>
        <PushLogo width={16} height={16} />
        <Text>Push Admin</Text>
      </Box>
    </Box>
  )
}