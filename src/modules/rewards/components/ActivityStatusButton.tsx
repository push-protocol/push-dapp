// React and other libraries
import { FC } from 'react';

// type
import { ButtonSize, ButtonVariant } from 'blocks/button';

//Components
import { Box, Button, Skeleton } from 'blocks';

type ActivityStatusButtonProps = {
  label: string;
  disabledLabel?: string;
  isLoading?: boolean;
  onClick?: () => void;
  disabled: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const ActivityStatusButton: FC<ActivityStatusButtonProps> = ({
  label,
  isLoading,
  onClick,
  disabled,
  disabledLabel,
  variant,
  size,
}) => {
  return (
    <Box
      display="flex"
      alignItems={{ ml: 'flex-start', initial: 'center' }}
      flexDirection="column"
    >
      <Skeleton
        width="100%"
        isLoading={isLoading}
      >
        <Button
          variant={variant || 'tertiary'}
          size={size || 'extraSmall'}
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
