// React and other libraries
import { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

// hooks
import { useAccount } from 'hooks';
import { useAppContext } from 'contexts/AppContext';

//Components
import { Alert, Box, Button, CameraFilled, TextInput } from 'blocks';
import { useDisclosure } from 'common';
import UploadAvatarModal from './UploadAvatarModal';
import { css } from 'styled-components';
import { useGetUserProfileInfo, useUpdateUserProfileInfo } from 'queries';

// Define Formik initial values type
type FormValues = {
  displayName: string | null;
  picture: string | null;
  desc: string | null;
};

const UserProfileSettings: FC = () => {
  const modalControl = useDisclosure();
  const { wallet } = useAccount();
  const { handleConnectWalletAndEnableProfile } = useAppContext();
  const { data: userProfileInfo, refetch: refetchUserInfo } = useGetUserProfileInfo();
  const { mutate: updateUserInfo, isPending: updatingInfo } = useUpdateUserProfileInfo();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successInfo, setSuccessInfo] = useState<string>('');

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  // Validation schema using Yup
  const validationSchema = Yup.object({
    displayName: Yup.string().max(50, 'Display Name cannot exceed 50 characters').required('Display Name is required'),
  });

  // Formik setup
  const formik = useFormik<FormValues>({
    initialValues: { displayName: '', picture: null, desc: '' },
    validationSchema,
    onSubmit: async (values) => {
      // Add your save logic here

      const sdkInstance = !userPushSDKInstance?.signer
        ? (await handleConnectWalletAndEnableProfile({ wallet })) ?? undefined
        : userPushSDKInstance;

      updateUserInfo(
        {
          userPushSDKInstance: sdkInstance,
          name: values.displayName,
          desc: values.desc,
          picture: values.picture,
        },
        {
          onSuccess: (response: any) => {
            setSuccessInfo('User Details Updated Successfully');
            refetchUserInfo();

            setTimeout(() => {
              setSuccessInfo('');
            }, 3000);
          },
          onError: (error: Error) => {
            console.log('Error updating user profile info', error);
            setErrorMessage('Error while updating User Info!');
          },
        }
      );
    },
  });

  // Populate initial form values when userProfileInfo is fetched
  useEffect(() => {
    if (userProfileInfo) {
      formik.setValues({
        displayName: userProfileInfo.name || '',
        picture: userProfileInfo.picture || null,
        desc: userProfileInfo.desc || null,
      });
    }
  }, [userProfileInfo]);

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-sm"
          alignItems="center"
          margin="spacing-xs spacing-none spacing-md spacing-none"
        >
          {formik.values.picture ? (
            <Box
              width="90px"
              height="90px"
              border="border-sm solid stroke-tertiary"
              borderRadius="radius-md"
              css={css`
                img {
                  border-radius: 16px;
                }
              `}
            >
              <img
                width="100%"
                height="100%"
                src={formik.values.picture}
              />
            </Box>
          ) : (
            <Box
              width="75px"
              height="75px"
              backgroundColor="surface-tertiary"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="radius-sm"
            >
              <CameraFilled
                color="icon-primary"
                size={25}
              />
            </Box>
          )}

          <Button
            variant="tertiary"
            size="extraSmall"
            onClick={() => modalControl.open()}
          >
            Change Avatar
          </Button>
        </Box>

        {modalControl.isOpen && (
          <UploadAvatarModal
            modalControl={modalControl}
            formValues={formik.values}
            setFieldValue={formik.setFieldValue}
          />
        )}

        <Box
          display="flex"
          flexDirection="column"
          margin="spacing-none spacing-none spacing-xl spacing-none"
        >
          <TextInput
            label="Display Name"
            value={formik.values.displayName as string}
            onChange={formik.handleChange('displayName')}
            error={formik.touched.displayName && Boolean(formik.errors.displayName)}
            errorMessage={formik.touched.displayName ? formik.errors.displayName : ''}
            totalCount={50}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          margin="spacing-none spacing-none spacing-xl spacing-none"
        >
          <TextInput
            label="Bio"
            value={formik.values.desc as string}
            onChange={formik.handleChange('desc')}
            error={formik.touched.displayName && Boolean(formik.errors.desc)}
            errorMessage={formik.touched.desc ? formik.errors.desc : ''}
            totalCount={150}
          />
        </Box>

        <Button
          size="small"
          loading={updatingInfo}
        >
          Save Changes
        </Button>

        {successInfo && (
          <Box margin="spacing-md spacing-none spacing-none spacing-none">
            <Alert
              variant="success"
              heading={successInfo}
            />
          </Box>
        )}

        {errorMessage && (
          <Box margin="spacing-md spacing-none spacing-none spacing-none">
            <Alert
              variant="error"
              heading={errorMessage}
            />
          </Box>
        )}
      </form>
    </Box>
  );
};

export default UserProfileSettings;
