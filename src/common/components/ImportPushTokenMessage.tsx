import { FC } from 'react';

import { css } from 'styled-components';

import { Box, Text } from 'blocks';

import { importPushToken } from 'helpers';

type ImportPushTokenMessageProps = {
  title: string;
};

const ImportPushTokenMessage: FC<ImportPushTokenMessageProps> = ({ title }) => {
  const handlePushTokenImport = async () => {
    await importPushToken();
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" gap="spacing-xxxs">
      <Text variant="bes-semibold" color="text-tertiary">
        {title}
      </Text>
      <Text
        css={css`
          cursor: pointer;
        `}
        variant="bes-semibold"
        color="text-brand-medium"
        onClick={handlePushTokenImport}
      >
        Import Token
      </Text>
    </Box>
  );
};

export { ImportPushTokenMessage };
