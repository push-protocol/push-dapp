
// React + Web3 Essentials
import { FC } from 'react';

// Internal Components
import { Box, Communication, CommunicationDark, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';


// Internal Configs
import { WelcomeIllustrations } from '../configs';

export type IllustraionComponentProps = {}

const IllustrationComponent: FC<IllustraionComponentProps> = () => {
  const { mode } = useBlocksTheme();

  return (
    <Box
      display="flex"
      flexDirection={{ tb: 'column', ml: 'column', initial: 'row' }}
      padding={{ ml: 's0', initial: 's8 s6' }}
      justifyContent="space-between"
      gap={{ tb: 's3', ml: 's3', initial: 's6' }}
    >

      {WelcomeIllustrations.map((illustration) => (
        <Box
          key={illustration.id}
          display="flex"
          flexDirection="row"
          gap="s3"
          alignItems="center"
          width={{ tb: '-webkit-fill-available', initial: 'inherit' }}
        >
          {mode === 'dark' ? <CommunicationDark /> : <Communication />}
          <Text variant="h5-semibold" color={{ light: 'black', dark: 'white' }}>
            {illustration.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export { IllustrationComponent };
