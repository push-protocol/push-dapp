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
      gap="s12"
    >
      <Box
        display="flex"
        gap="s1"
        alignItems="center"
      >
        <PushLogo />
        <Text
          variant="h2-semibold"
          color={{ light: 'gray-1000', dark: 'white' }}
        >
          Push
        </Text>
      </Box>
      <Box
        width="374px"
        display="flex"
        alignItems="center"
        padding="s6"
        flexDirection="column"
        gap="s6"
        backgroundColor={{ dark: 'gray-900', light: 'white' }}
        borderRadius="r6"
      >
        <Text
          variant="h4-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          Points Vault Login
        </Text>
        <Box width="100%">
          <form onSubmit={formik.handleSubmit}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap="s3"
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
              <Box margin="s6 s0 s0 s0">
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
