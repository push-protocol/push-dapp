import { FC } from 'react';
import { css } from 'styled-components';

import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { useGetSocialsStatus } from 'queries';

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
import { useDisclosure } from 'common';
import { AddEmail } from 'components/UserProfileSettings/AddEmail';
import AddDiscord from 'components/UserProfileSettings/AddDiscord';
import AddTelegram from 'components/UserProfileSettings/AddTelegram';

export type ConnectSocialHandlesProps = {
  setErrorMessage: (errorMessage: string) => void;
  setSuccessMessage: (successMessage: string) => void;
};

export type SocialHandlesItemType = {
  itemTitle: string;
  itemDescription: string;
  type: 'email' | 'telegram' | 'discord';
  isConnected: boolean;
};

const ConnectSocialHandles: FC<ConnectSocialHandlesProps> = ({ setErrorMessage, setSuccessMessage }) => {
  const modalControl = useDisclosure();
  const telegramModalControl = useDisclosure();
  const discordModalControl = useDisclosure();
  const { account } = useAccount();

  // Getting user Id by wallet address
  const channelAddress = walletToCAIP10({ account });

  const { data: socialHandleStatus, refetch: refetchSocialHandleStatus } = useGetSocialsStatus(channelAddress);

  const socialHandlesList: any[] = [
    {
      icon: () => <EmailProfile height={18} />,
      itemTitle: 'Email',
      itemDescription: 'Receive notifications in your email inbox',
      userStatus: socialHandleStatus?.email || null,
      onClick: () => modalControl.open(),
    },
    {
      icon: () => <TelegramProfile height={18} />,
      itemTitle: 'Telegram',
      itemDescription: 'Receive notifications as Telegram messages',
      onClick: () => telegramModalControl.open(),
      userStatus: socialHandleStatus?.telegram_username || null,
    },
    {
      icon: () => <DiscordProfile height={18} />,
      itemTitle: 'Discord',
      itemDescription: 'Receive notifications as Discord messages',
      onClick: () => discordModalControl.open(),
      userStatus: socialHandleStatus?.discord_username || null,
    },
  ];

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        gap={{ tb: 'spacing-xs' }}
        width="100%"
      >
        {socialHandlesList.map((item: any) => (
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
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-xxxs"
            >
              <Box
                display="flex"
                gap="spacing-xxs"
                alignItems="center"
                flexDirection="row"
              >
                {item?.icon()}

                <Text
                  variant="h5-semibold"
                  color="text-primary"
                >
                  {item.itemTitle}
                </Text>
              </Box>

              <Text
                variant="bs-regular"
                color="text-tertiary"
              >
                {item.itemDescription}
              </Text>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              alignSelf="flex-start"
            >
              {item.userStatus === null ? (
                <Button
                  variant="tertiary"
                  size="small"
                  onClick={item?.onClick}
                >
                  Connect
                </Button>
              ) : (
                <Dropdown
                  overlay={
                    <Menu>
                      <MenuItem
                        label="Disconnect"
                        icon={<OptOut />}
                        onClick={() => console.log('disconnect')}
                      />
                    </Menu>
                  }
                >
                  <Button
                    variant="secondary"
                    size="extraSmall"
                    trailingIcon={<CaretDown size={20} />}
                  >
                    {item?.userStatus}
                  </Button>
                </Dropdown>
              )}
            </Box>
          </Box>
        ))}

        {modalControl.isOpen && (
          <AddEmail
            modalControl={modalControl}
            refetchSocialHandleStatus={refetchSocialHandleStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}

        {telegramModalControl.isOpen && (
          <AddTelegram
            modalControl={telegramModalControl}
            refetchSocialHandleStatus={refetchSocialHandleStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}

        {discordModalControl.isOpen && (
          <AddDiscord
            modalControl={discordModalControl}
            refetchSocialHandleStatus={refetchSocialHandleStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}
      </Box>
    </>
  );
};

export { ConnectSocialHandles };
