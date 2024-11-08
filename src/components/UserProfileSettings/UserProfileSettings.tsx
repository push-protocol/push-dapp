// React and other libraries
import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//Components
import { Avatar, Box, Button, TextInput } from 'blocks';
import { useDisclosure } from 'common';
import UploadAvatarModal from './UploadAvatarModal';
import { css } from 'styled-components';

const UserProfileSettings: FC = () => {
  const modalControl = useDisclosure();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    displayName: Yup.string().max(50, 'Display Name cannot exceed 50 characters').required('Display Name is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: { displayName: '', avatar: null, imageType: '', imageSrc: '' },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Add your save logic here
    },
  });
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
          {formik.values.avatar ? (
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
                src={formik.values.avatar}
              />
            </Box>
          ) : (
            <Avatar />
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
            value={formik.values.displayName}
            onChange={formik.handleChange('displayName')}
            error={formik.touched.displayName && Boolean(formik.errors.displayName)}
            errorMessage={formik.touched.displayName ? formik.errors.displayName : ''}
            totalCount={50}
          />
        </Box>

        <Button size="small">Save Changes</Button>
      </form>
    </Box>
  );
};

export default UserProfileSettings;
