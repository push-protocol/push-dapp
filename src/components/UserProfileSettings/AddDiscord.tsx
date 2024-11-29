import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { useAccount } from 'hooks';
import { useAppContext } from 'contexts/AppContext';
import { walletToCAIP10 } from 'helpers/w2w';
import { useSendHandlesVerificationCode, useVerifyHandlesVerificationCode } from 'queries';
import { generateVerificationProof } from 'modules/rewards/utils/generateVerificationProof';

import { Box, Button, Discord, Link, Modal, Text, TextInput } from 'blocks';
import { CopyButton, ModalResponse } from 'common';
import { shortenText } from 'helpers/UtilityHelper';

type AddDiscordProps = {
  modalControl: ModalResponse;
  refetchSocialHandleStatus: () => void;
  setErrorMessage: (errorMessage: string) => void;
  setSuccessMessage: (successMessage: string) => void;
};

enum Steps {
  EnterDiscord = 1,
  VerifyId = 2,
}

const AddDiscord: FC<AddDiscordProps> = ({
  modalControl,
  // refetchSocialHandleStatus,
  // setErrorMessage,
  // setSuccessMessage,
}) => {
  const { isOpen, onClose } = modalControl;
  const { account, wallet } = useAccount();
  const { handleConnectWalletAndEnableProfile } = useAppContext();

  const caip10WalletAddress = walletToCAIP10({ account });
  const [step, setStep] = useState(1);
  const [discordCode, setDiscordCode] = useState<string>('');
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const { mutate: sendVerification } = useSendHandlesVerificationCode();
  const { mutate: verifyVerification } = useVerifyHandlesVerificationCode();

  const discordValidationSchema = Yup.object({
    discord: Yup.string().required('Required'),
  });

  const discordFormik = useFormik({
    initialValues: { discord: '' },
    validationSchema: discordValidationSchema,
    onSubmit: () => {
      handleSendVerificationCode();
    },
  });

  const getSDKInstance = useCallback(async () => {
    return userPushSDKInstance?.signer ? userPushSDKInstance : await handleConnectWalletAndEnableProfile({ wallet });
  }, [userPushSDKInstance, handleConnectWalletAndEnableProfile, wallet]);

  const handleSendVerificationCode = async () => {
    const sdkInstance = await getSDKInstance();
    const data = {
      wallet: caip10WalletAddress,
      value: { discord_username: discordFormik.values.discord },
      valueType: 'telegram',
    };

    const verificationProof = await generateVerificationProof(data, sdkInstance);

    if (!verificationProof) return;

    sendVerification(
      {
        caipAddress: caip10WalletAddress as string,
        verificationProof: verificationProof as string,
        value: { discord_username: discordFormik.values.discord },
        social_platform: 'discord',
      },
      {
        onSuccess: (response: any) => {
          if (response?.success) {
            console.log(response);
            setDiscordCode(response.verificationCode);
            setStep(Steps.VerifyId);
          }
        },
        onError: (error: Error) => {
          console.log('Error sending code', error);
        },
      }
    );
  };

  return (
    <Modal
      size="small"
      isOpen={isOpen}
      onClose={onClose}
      {...(step === Steps.VerifyId && {
        onBack: () => setStep(Steps.EnterDiscord),
      })}
      acceptButtonProps={
        step === Steps.EnterDiscord
          ? {
              children: 'Next',
              onClick: () => {
                discordFormik?.handleSubmit();
              },
            }
          : null
      }
      cancelButtonProps={null}
    >
      {step === Steps.EnterDiscord && (
        <Box width="100%">
          <Box
            width="100%"
            display="flex"
            margin="spacing-none spacing-none spacing-sm spacing-none"
            justifyContent="center"
          >
            <Discord
              width={48}
              height={48}
            />
          </Box>

          <Text
            textAlign="center"
            variant="h4-semibold"
          >
            Enter your Discord ID
          </Text>

          <Text
            textAlign="center"
            variant="bs-regular"
          >
            Follow the steps to link your Discord to Push and receive notifications
          </Text>

          <form onSubmit={discordFormik.handleSubmit}>
            <Box
              margin="spacing-md spacing-none spacing-none spacing-none"
              width="100%"
            >
              <TextInput
                label="Discord ID"
                value={discordFormik.values.discord}
                onChange={discordFormik.handleChange('discord')}
                error={discordFormik.touched.discord && Boolean(discordFormik.errors.discord)}
                errorMessage={discordFormik.touched.discord ? discordFormik.errors.discord : ''}
              />
            </Box>
          </form>
        </Box>
      )}

      {step === Steps.VerifyId && discordCode && (
        <Box width="100%">
          <Box
            width="100%"
            display="flex"
            margin="spacing-none spacing-none spacing-sm spacing-none"
            justifyContent="center"
          >
            <Discord
              width={48}
              height={48}
            />
          </Box>

          <Text
            textAlign="center"
            variant="h3-semibold"
          >
            Connect your Discord
          </Text>

          <Text
            textAlign="center"
            variant="bs-regular"
            color="text-tertiary"
          >
            Follow the steps to link your Discord to Push and receive notifications
          </Text>

          <Box
            margin="spacing-sm spacing-none"
            gap="spacing-xxs"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              textAlign="center"
              variant="bl-regular"
            >
              Step 1: Copy the verification code
            </Text>

            <Box
              display="flex"
              padding="spacing-xs"
              gap="spacing-xxs"
              alignItems="center"
              justifyContent="center"
              backgroundColor="surface-tertiary"
              width="fit-content"
              borderRadius="radius-sm"
            >
              <Text
                color="text-brand-subtle"
                variant="bl-semibold"
                textAlign="center"
              >
                {shortenText(`${caip10WalletAddress}-${discordCode}`, 10)}
              </Text>

              <CopyButton
                tooltipTitle="Copy Address"
                content={`${caip10WalletAddress}-${discordCode}`}
                size={24}
              />
            </Box>
          </Box>

          <Box margin="spacing-lg spacing-none spacing-none spacing-none">
            <Text
              textAlign="center"
              variant="bl-regular"
            >
              Step 2: Visit the link and paste the code
            </Text>

            <Box margin="spacing-xs spacing-none">
              {/* generate call link shortly */}
              <Link
                to={'https://discordapp.com/users/pushlinkbot'}
                isText={true}
                textProps={{
                  variant: 'bl-semibold',
                  textAlign: 'center',
                  color: 'text-brand-medium',
                }}
              >
                discordapp.com/users/pushlinkbot
              </Link>
            </Box>
          </Box>

          <Text
            textAlign="center"
            variant="bs-regular"
            color="text-tertiary"
          >
            Please ensure you’re logged into your Discord account. Click on Complete Verification below once complete.
          </Text>
        </Box>
      )}
    </Modal>
  );
};

export default AddDiscord;
