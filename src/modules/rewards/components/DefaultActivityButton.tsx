// React and other libraries
import { FC } from 'react';

// Third-party libraries
import { css } from 'styled-components';

//Components
import { Box, Button, Skeleton } from 'blocks';

type DefaultActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  refetchActivity: () => void;
};

const DefaultActivityButton: FC<DefaultActivityButtonProps> = ({ userId, activityTypeId, refetchActivity }) => {
  const handleVerification = () => {
    console.log(' Verification is called', userId, activityTypeId, refetchActivity);
  };

  return (
    <Box
      display="flex"
      alignItems={{ ml: 'flex-start', initial: 'center' }}
      flexDirection="column"
      minWidth="100px"
    >
      <Skeleton width="100%">
        <Button
          variant="tertiary"
          size="small"
          css={css`
            width: 100%;
          `}
          onClick={handleVerification}
        >
          Verify
        </Button>
      </Skeleton>
    </Box>
  );
};

export { DefaultActivityButton };
