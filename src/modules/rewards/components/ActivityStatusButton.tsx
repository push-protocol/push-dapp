// React and other libraries
import { FC } from 'react';

//Components
import { Box, Button, Skeleton } from 'blocks';


type ActivityStatusButtonProps = {
  label: string;
  disabledLabel?: string;
  isLoading?: boolean;
  onClick?: () => void;
  disabled: boolean;

}

const ActivityStatusButton: FC<ActivityStatusButtonProps> = ({
  label,
  isLoading,
  onClick,
  disabled,
  disabledLabel
}) => {
  return (
    <Box
      display="flex"
      alignItems={{ ml: 'flex-start', initial: 'center' }}
      flexDirection="column"
    >
      <Skeleton width="100%" isLoading={isLoading} >
        <Button
          variant="tertiary"
          size="extraSmall"
          onClick={onClick}
          disabled={disabled}
        >

          {disabledLabel && disabled ? disabledLabel : label}

          {/* {label} */}
        </Button>
      </Skeleton>
    </Box>
  );
};

export { ActivityStatusButton };