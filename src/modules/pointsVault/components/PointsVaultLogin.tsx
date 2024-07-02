import { Box, Button, TextInput, PushLogo, Text } from 'blocks';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FC, useState } from 'react';
import { usePointsVaultUserLogin } from 'queries';
import { PointsVaultComponents } from '../PointsVault.types';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

export type PointsVaultLoginProps = {
  handleSetActiveComponent: (component: PointsVaultComponents) => void;
};

const PointsVaultLogin: FC<PointsVaultLoginProps> = ({ handleSetActiveComponent }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { mutate: pointsVaultUserLogin, isPending } = usePointsVaultUserLogin({
    username: '',
    password: '',
  });

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin({ ...values });
    },
  });

  const handleLogin = ({ username, password }: { username: string; password: string }) => {
    pointsVaultUserLogin(
      {
        username,
        password,
      },
      {
        onSuccess: (response) => {
          setErrorMessage('');
          handleSetActiveComponent('list');
        },
        onError: (error: any) => {
          if (error.name) {
            setErrorMessage(error.response.data.error);
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
        <Text variant="h2-semibold">Push</Text>
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
        <StyledForm onSubmit={formik.handleSubmit}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap="s3"
            width="100%"
          >
            <TextInput
              placeholder="User"
              value={formik.values.username}
              disabled={isPending}
              onChange={formik.handleChange('username')}
              error={formik.touched.username && Boolean(formik.errors.username)}
              errorMessage={formik.touched.username ? formik.errors.username : ''}
            />

            <TextInput
              type="password"
              placeholder="Password"
              disabled={isPending}
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              error={formik.touched.password && Boolean(formik.errors.password)}
              errorMessage={formik.touched.password ? formik.errors.password : ''}
            />

            <Box
              margin="s6 s0 s0 s0"
              display="flex"
              flexDirection="column"
              alignItems="centr"
              gap="s2"
            >
              <Text color="red-400">{errorMessage}</Text>
              <Button disabled={isPending}>{isPending ? 'Authenticating' : 'Login'}</Button>
            </Box>
          </Box>
        </StyledForm>
      </Box>
    </Box>
  );
};

export { PointsVaultLogin };
