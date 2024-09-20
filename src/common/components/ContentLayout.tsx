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
        backgroundColor="surface-primary"
        borderRadius="radius-lg"
        display="flex"
        flexDirection="column"
        height="calc(100vh - 96px)"
        overflow="hidden"
        padding="spacing-md spacing-md spacing-none spacing-md"
        maxWidth="1200px"
        width="calc(100% - (var(--spacing-sm) * 2))"
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
