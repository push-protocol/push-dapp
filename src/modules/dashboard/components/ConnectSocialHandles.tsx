import { FC } from 'react';

import { Box, Button, Text, Tick, Skeleton } from 'blocks';
import { AddEmail } from 'components/UserProfileSettings/AddEmail';
import AddDiscord from 'components/UserProfileSettings/AddDiscord';
import AddTelegram from 'components/UserProfileSettings/AddTelegram';
import { useSocialHandles } from '../hooks/useSocialHandles';

export type ConnectSocialHandlesProps = {
  setErrorMessage: (errorMessage: string) => void;
  setSuccessMessage: (successMessage: string) => void;
};

const ConnectSocialHandles: FC<ConnectSocialHandlesProps> = ({ setErrorMessage, setSuccessMessage }) => {
  const { socialHandlesList, modalControl, telegramModalControl, discordModalControl, isPending, fetchStatus } =
    useSocialHandles(setErrorMessage, false);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ initial: 'row', ml: 'column' }}
        gap={{ initial: 'spacing-sm', tb: 'spacing-xs' }}
        width="100%"
      >
        {socialHandlesList?.map((item) => (
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

            <Skeleton isLoading={isPending}>
              <Box
                display="flex"
                alignItems="center"
                alignSelf="flex-start"
              >
                {item.userStatus ? (
                  <Button
                    variant="secondary"
                    size="extraSmall"
                    leadingIcon={<Tick />}
                  >
                    Linked
                  </Button>
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
            </Skeleton>
          </Box>
        ))}

        {modalControl.isOpen && (
          <AddEmail
            modalControl={modalControl}
            refetchSocialHandleStatus={fetchStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}

        {telegramModalControl.isOpen && (
          <AddTelegram
            modalControl={telegramModalControl}
            refetchSocialHandleStatus={fetchStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}

        {discordModalControl.isOpen && (
          <AddDiscord
            modalControl={discordModalControl}
            refetchSocialHandleStatus={fetchStatus}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}
      </Box>
    </>
  );
};

export { ConnectSocialHandles };
