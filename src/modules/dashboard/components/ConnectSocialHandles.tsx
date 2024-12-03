import { FC, useEffect, useState } from 'react';

import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { useGetSocialsStatus } from 'queries';

import { Box, Button, Text, EmailProfile, TelegramProfile, DiscordProfile, Tick, Skeleton } from 'blocks';
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

type SocialHandleStatusType = {
  email: string | boolean | null;
  discord_username: string | boolean | null;
  telegram_username: string | boolean | null;
};

const ConnectSocialHandles: FC<ConnectSocialHandlesProps> = ({ setErrorMessage, setSuccessMessage }) => {
  const modalControl = useDisclosure();
  const telegramModalControl = useDisclosure();
  const discordModalControl = useDisclosure();
  const { account } = useAccount();
  const [socialHandleStatus, setSocialHandleStatus] = useState<SocialHandleStatusType>();

  // Getting user Id by wallet address
  const channelAddress = walletToCAIP10({ account });

  const { mutate: fetchSocialStatus, isPending } = useGetSocialsStatus();

  // Fetch social status logic
  const getSocialStatus = async () => {
    if (!channelAddress) return;

    if (channelAddress) {
      fetchSocialStatus(
        { channelAddress },
        {
          onError: (error) => {
            setErrorMessage('Failed to fetch social status.');
            console.error('Error fetching social status:', error);
          },
          onSuccess: (data) => {
            setSocialHandleStatus(data);
          },
        }
      );
    }
  };

  useEffect(() => {
    if (!channelAddress) return;
    getSocialStatus();
  }, [channelAddress]);

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
        flexDirection={{ initial: 'row', ml: 'column' }}
        gap={{ initial: 'spacing-sm', tb: 'spacing-xs' }}
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
            width="-webkit-fill-available"
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
              {item.userStatus ? (
                <Skeleton isLoading={isPending}>
                  <Button
                    variant="secondary"
                    size="extraSmall"
                    leadingIcon={<Tick />}
                  >
                    Linked
                  </Button>
                </Skeleton>
              ) : (
                <Button
                  variant="tertiary"
                  size="small"
                  onClick={item?.onClick}
                >
                  Connect
                </Button>
              )}
            </Box>
          </Box>
        ))}

        {modalControl.isOpen && (
          <AddEmail
            modalControl={modalControl}
            refetchSocialHandleStatus={getSocialStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}

        {telegramModalControl.isOpen && (
          <AddTelegram
            modalControl={telegramModalControl}
            refetchSocialHandleStatus={getSocialStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}

        {discordModalControl.isOpen && (
          <AddDiscord
            modalControl={discordModalControl}
            refetchSocialHandleStatus={getSocialStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}
      </Box>
    </>
  );
};

export { ConnectSocialHandles };
