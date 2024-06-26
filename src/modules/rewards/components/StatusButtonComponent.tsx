// React and other libraries
import { FC } from 'react';

// Third-party libraries
import { css } from 'styled-components';

//Components
import { Box, Button, Skeleton } from 'blocks';


type StatusButtonComponentProps = {
  label: string;
  isLoading?: boolean;
  onClick?: () => void;
  disabled: boolean;
}

//This is default Activity Button style which is common in all the activities
const StatusButtonComponent: FC<StatusButtonComponentProps> = ({
  label,
  isLoading,
  onClick,
  disabled
}) => {
  return (
    <Box
      display="flex"
      alignItems={{ ml: 'flex-start', initial: 'center' }}
      flexDirection="column"
      minWidth="100px"
    >
      <Skeleton width="100%" isLoading={isLoading} >
        <Button
          variant="tertiary"
          size="extraSmall"
          css={css`
                width: 100%;
              `}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </Button>
      </Skeleton>
    </Box>
  );
};

export { StatusButtonComponent };