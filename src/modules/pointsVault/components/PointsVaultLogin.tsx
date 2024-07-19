import { FC } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { MdError } from 'react-icons/md';

import { usePointsVaultUserLogin } from 'queries';
import useToast from 'hooks/useToast';

import { Box, Button, TextInput, PushLogo, Text } from 'blocks';

import { PointsVaultView, VaultLoginformValues } from '../PointsVault.types';

export type PointsVaultLoginProps = {
  handleSetActiveView: (component: PointsVaultView) => void;
};

const PointsVaultLogin: FC<PointsVaultLoginProps> = ({ handleSetActiveView }) => {
  const { mutate: pointsVaultUserLogin, isPending } = usePointsVaultUserLogin();

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik<VaultLoginformValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin({ ...values });
    },
  });
  const toast = useToast();

  const handleLogin = ({ username, password }: { username: string; password: string }) => {
    pointsVaultUserLogin(
      {
        username,
        password,
      },
      {
        onSuccess: (response) => {
          //response.token is the auth token
          handleSetActiveView('list');
        },
        onError: (error: any) => {
          if (error.name) {
            toast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: error.response.data.error,
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }
        },
      }
    );
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="spacing-xxl"
    >
      <Box
        display="flex"
        gap="spacing-xxxs"
        alignItems="center"
      >
        <PushLogo />
        <Text
          variant="h2-semibold"
          color="text-primary"
        >
          Push
        </Text>
      </Box>
      <Box
        width="374px"
        display="flex"
        alignItems="center"
        padding="spacing-md"
        flexDirection="column"
        gap="spacing-md"
        backgroundColor="surface-primary"
        borderRadius="radius-md"
      >
        <Text
          variant="h4-bold"
          color="text-primary"
        >
          Points Vault Login
        </Text>
        <Box width="100%">
          <form onSubmit={formik.handleSubmit}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap="spacing-xs"
              width="100%"
            >
              <Box width="100%">
                <TextInput
                  placeholder="User"
                  value={formik.values.username}
                  disabled={isPending}
                  onChange={formik.handleChange('username')}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  errorMessage={formik.touched.username ? formik.errors.username : ''}
                />
              </Box>

              <Box width="100%">
                <TextInput
                  type="password"
                  placeholder="Password"
                  disabled={isPending}
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  errorMessage={formik.touched.password ? formik.errors.password : ''}
                />
              </Box>
              <Box margin="spacing-md spacing-none spacing-none spacing-none">
                <Button disabled={isPending}>{isPending ? 'Authenticating' : 'Login'}</Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export { PointsVaultLogin };
