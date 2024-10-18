// React and other libraries
import { FC, ReactNode } from 'react';

// third party libraries
import { css } from 'styled-components';

//components
import { Box } from 'blocks';

type ContentLayoutProps = {
  children: ReactNode;
  variant?: 'basic' | 'verticalStretch';
};

const ContentLayout: FC<ContentLayoutProps> = ({ children, variant }) => {
  if (variant === 'verticalStretch')
    return (
      <Box
        alignSelf="center"
        backgroundColor="surface-primary"
        borderRadius="radius-lg"
        display="flex"
        flexDirection="column"
        height="calc(100vh - 76px)"
        overflow="hidden"
        maxWidth="1200px"
        width={{ initial: 'calc(100% - (var(--spacing-sm) * 2))', ml: '-webkit-fill-available' }}
        css={css`
          border-bottom-right-radius: var(--radius-none);
          border-bottom-left-radius: var(--radius-none);
        `}
      >
        {children}
      </Box>
    );

  return (
    <Box
      alignItems="center"
      alignSelf="center"
      backgroundColor="surface-transparent"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      maxWidth="1200px"
      width="calc(100% - (var(--spacing-sm) * 2))"
      css={css`
        flex: initial;
        margin: 0 0 auto 0;
      `}
    >
      {children}
    </Box>
  );
};
export { ContentLayout };
