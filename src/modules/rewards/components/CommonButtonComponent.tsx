import { Box, Button, Skeleton } from 'blocks';
import { FC } from 'react';
import { css } from 'styled-components';

type CommonActionButtonProps = {
  label: string;
  isLoading?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const CommonButtonComponent: FC<CommonActionButtonProps> = ({
  label,
  isLoading,
  onClick,
  disabled = false,
}) => {
  return (
    <Box display="flex" alignItems={{ ml: 'flex-start', initial: 'center' }} flexDirection="column" minWidth="100px">
      <Skeleton isLoading={isLoading} width='100%'>
        <Button
          variant="tertiary"
          size="small"
          css={css`
      width: 100%;
    `}
          disabled={disabled}
          onClick={onClick}
        >
          {label}
        </Button>
      </Skeleton>
    </Box>
  );
};

export default CommonButtonComponent;