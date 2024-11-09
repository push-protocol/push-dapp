import { FC } from 'react';
import { css } from 'styled-components';

import {
  Box,
  Button,
  Dropdown,
  Menu,
  MenuItem,
  Text,
  CaretDown,
  OptOut,
  EmailProfile,
  TelegramProfile,
  DiscordProfile,
} from 'blocks';
import { socialHandlesList } from '../Dashboard.constants';
import { SocialHandlesItemType } from '../Dashboard.types';

export type ConnectSocialHandlesProps = {};

const ConnectSocialHandles: FC<ConnectSocialHandlesProps> = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        gap={{ tb: 'spacing-xs' }}
        width="100%"
      >
        {socialHandlesList.map((item: SocialHandlesItemType) => (
          <Box
            display="flex"
            flexDirection="column"
            border="border-sm solid stroke-secondary"
            padding={{ initial: 'spacing-md', ml: 'spacing-md spacing-sm', tb: 'spacing-sm', lp: 'spacing-sm' }}
            borderRadius="radius-md"
            gap="spacing-sm"
            width={{
              initial: '290px',
              mm: '258px',
              ml: 'auto',
              tb: '278px',
              lp: '278px',
            }}
            css={css`
              flex-shrink: 0;
            `}
            minHeight={{ initial: 'auto', tb: '180px' }}
          >
            <Box>
              <Box
                display="flex"
                gap="spacing-xxs"
                alignItems="center"
                flexDirection="row"
              >
                {/* Social icons will be displayed here */}
                {item?.type === 'email' && <EmailProfile width={18} />}
                {item?.type === 'telegram' && <TelegramProfile width={18} />}
                {item?.type === 'discord' && <DiscordProfile width={18} />}

                <Text
                  variant="h5-semibold"
                  color="text-primary"
                >
                  {item.heading}
                </Text>
              </Box>

              <Text
                variant="bs-regular"
                color="text-tertiary"
              >
                {item.description}
              </Text>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              alignSelf="flex-start"
            >
              {item.isConnected ? (
                <Dropdown
                  overlay={
                    <Menu>
                      <MenuItem
                        label="Disconnect"
                        icon={<OptOut />}
                      />
                    </Menu>
                  }
                >
                  <Button
                    variant="outline"
                    size="small"
                    trailingIcon={<CaretDown />}
                  >
                    zeeshan.mac@gmail.com
                  </Button>
                </Dropdown>
              ) : (
                <Button
                  aria-label="Connect"
                  size="small"
                  variant="tertiary"
                >
                  Connect
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export { ConnectSocialHandles };
