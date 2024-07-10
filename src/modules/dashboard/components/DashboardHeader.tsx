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
      margin={showSubHeader ? 's0' : 's0 s0 s4 s0'}
    >
      <Box
        flexDirection="row"
        display="flex"
        gap="s3"
      >
        <Text variant="h3-semibold">👋</Text>
        <Text
          variant="h3-semibold"
          color={{ light: 'black', dark: 'white' }}
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
                color={{ light: 'gray-300', dark: 'gray-700' }}
              />
            }
          ></HoverableSVG>
        ) : (
          <HoverableSVG
            icon={
              <Add
                size={20}
                color={{ light: 'gray-300', dark: 'gray-700' }}
              />
            }
          ></HoverableSVG>
        )}
      </Box>
    </Box>
  );
};

export default DashboardHeader;
