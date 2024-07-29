// React and other libraries
import { FC } from 'react';

// Components
import { Add, Box, Dash, HoverableSVG, Text } from 'blocks';

interface DashboardHeaderProps {
  setSubHeaderVisibility: (visibility: boolean) => void;
  showSubHeader: boolean;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({ setSubHeaderVisibility, showSubHeader }) => {
  return (
    <Box
      flexDirection="row"
      display="flex"
      justifyContent="space-between"
      margin={showSubHeader ? 'spacing-none' : 'spacing-none spacing-none spacing-sm spacing-none'}
    >
      <Box
        flexDirection="row"
        display="flex"
        gap="spacing-xs"
      >
        <Text variant="h3-semibold">👋</Text>
        <Text
          variant="h3-semibold"
          color="text-primary"
        >
          GM! Welcome to Push.
        </Text>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        onClick={() => setSubHeaderVisibility(!showSubHeader)}
      >
        {showSubHeader ? (
          <HoverableSVG
            icon={
              <Dash
                size={20}
                color="icon-tertiary"
              />
            }
          ></HoverableSVG>
        ) : (
          <HoverableSVG
            icon={
              <Add
                size={20}
                color="icon-tertiary"
              />
            }
          ></HoverableSVG>
        )}
      </Box>
    </Box>
  );
};

export { DashboardHeader };
