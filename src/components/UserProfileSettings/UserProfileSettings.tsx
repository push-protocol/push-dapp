// React and other libraries
import { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//Components
import { Box, Button, CameraFilled, TextInput } from 'blocks';
import { useDisclosure } from 'common';
import UploadAvatarModal from './UploadAvatarModal';
import { css } from 'styled-components';
import { useGetUserProfileInfo } from 'queries';

// Define Formik initial values type
type FormValues = {
  displayName: string | null;
  picture: string | null;
  description: string | null;
};

const UserProfileSettings: FC = () => {
  const modalControl = useDisclosure();
  const { data: userProfileInfo } = useGetUserProfileInfo();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    displayName: Yup.string().max(50, 'Display Name cannot exceed 50 characters').required('Display Name is required'),
  });

  // Formik setup
  const formik = useFormik<FormValues>({
    initialValues: { displayName: '', picture: null, description: '' },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Add your save logic here
    },
  });

  // Populate initial form values when userProfileInfo is fetched
  useEffect(() => {
    if (userProfileInfo) {
      formik.setValues({
        displayName: userProfileInfo.name || '',
        picture: userProfileInfo.picture || null,
        description: userProfileInfo.desc || null,
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
            value={formik.values.description as string}
            onChange={formik.handleChange('description')}
            error={formik.touched.displayName && Boolean(formik.errors.description)}
            errorMessage={formik.touched.description ? formik.errors.description : ''}
            totalCount={150}
          />
        </Box>

        <Button size="small">Save Changes</Button>
      </form>
    </Box>
  );
};

export default UserProfileSettings;
