import { Box, Text } from 'blocks';
import { importPushToken } from 'helpers';
import { FC } from 'react';
import { css } from 'styled-components';

type ImportPushTokenMessageProps = {
  title: string;
}

const ImportPushTokenMessage: FC<ImportPushTokenMessageProps> = ({
  title
}) => {

  // Import Push Token in Your wallet
  const handlePushTokenImport = async () => {
    await importPushToken();
  };


  return (
    <Box display="flex" flexDirection="row" gap="s1" justifyContent="center">
      <Text variant="bes-semibold" color='text-tertiary'>
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

export default ImportPushTokenMessage;