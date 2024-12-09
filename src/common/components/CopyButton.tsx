import { Copy, Tooltip, Box } from 'blocks';
import { copyToClipboard } from 'helpers/UtilityHelper';
import { FC, useState } from 'react';

type CopyButtonProps = {
  tooltipTitle: string;
  content: string;
  size?: number;
};

const CopyButton: FC<CopyButtonProps> = ({ tooltipTitle, content, size }) => {
  const [hover, setHover] = useState(false);
  return (
    <Tooltip title={tooltipTitle}>
      <Box
        cursor="pointer"
        display="flex"
        onClick={() => copyToClipboard(content)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Copy
          color={hover ? 'icon-primary' : 'icon-tertiary'}
          size={size || 12}
        />
      </Box>
    </Tooltip>
  );
};

export { CopyButton };
