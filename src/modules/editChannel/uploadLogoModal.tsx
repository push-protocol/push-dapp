import { Box, Button, Cross, Text } from 'blocks';
import { FormikProps, useFormik } from 'formik';
import { isImageFile } from 'modules/channelDashboard/ChannelDashboard.utils';
import ImageClipper from 'primaries/ImageClipper';
import { FC, useRef, useState } from 'react';
import { css } from 'styled-components';
import * as Yup from 'yup';
import { useEditChannelForm } from './EditChannel.forms';

type UploadlogoModelProps = {
  onClose: () => void;
}

const uploadLogoModal: FC<UploadlogoModelProps> = ({ onClose }) => {


  const {
    values: formValues,
    setFieldValue,
  } = useEditChannelForm();


  const logoValidationSchema = Yup.object().shape({
    image: Yup.mixed().required('Image is required')
  });

  const uploadLogoForm = useFormik({
    initialValues: {
      image: formValues.channelIcon,
      imageSrc: '',
      imageType: ''
    },
    validationSchema: logoValidationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
    }
  });


  const childRef = useRef();

  // Upload Logo
  const [croppedImage, setCroppedImage] = useState<string | undefined>(uploadLogoForm.values.image);


  // handle Input file type
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setCroppedImage(undefined)
    if (file && isImageFile(file)) {
      await processFile(file);
    }
  };

  // Handle Drop Image
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCroppedImage(undefined)
    const file = e.dataTransfer.files?.[0];
    if (file && isImageFile(file)) {
      await processFile(file);
    }
  };

  // Process Image
  const processFile = async (file: File) => {
    uploadLogoForm.setFieldValue('image', file);
    // Read the file and set imageSrc and imageType
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadLogoForm.setFieldValue('imageSrc', reader.result as string);
      uploadLogoForm.setFieldValue('imageType', file.type);
    };
  };


  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='s8'
      alignItems='center'
      alignSelf='stretch'
    >
      <Box display='flex' width='100%' justifyContent='end' color='text-tertiary' cursor='pointer'>
        <Cross size={24} onClick={onClose} />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='s8'
      >
        <Text variant="bes-regular" color='text-tertiary'>
          Upload a PNG, JPG upto 1MB. Crop the image to resize to 128px.
        </Text>

        {/* <form onSubmit={uploadLogoFormik.handleSubmit}> */}
        <Box
          width={{ initial: '500px', ml: '325px' }}
          padding='spacing-xxl spacing-none'
          display='flex'
          flexDirection='column'
          alignItems='center'
          border={{ light: '1px dashed gray-300', dark: '1px dashed gray-700' }}
          borderRadius="r6"
          backgroundColor='surface-secondary'
          gap='s6'
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {croppedImage ? (
            <Box
              width='128px'
              height='128px'
              borderRadius="r5"
            >
              <img style={{ borderRadius: 'inherit' }} width="100%"
                height="100%" src={croppedImage} alt="Cropped Img" />
            </Box>
          ) : (
            <ImageClipper
              width='200px'
              height='200px'
              imageSrc={uploadLogoForm.values.imageSrc}
              imageType={uploadLogoForm.values.imageType}
              onImageCropped={(croppedImage: string) => setCroppedImage(croppedImage)}
              ref={childRef}
            />
          )}

          <Box display='flex' gap='s1'>
            <Text
              variant="bs-semibold"
              color='text-tertiary'
            > Drag and Drop or</Text>
            <label htmlFor="file-upload">
              <Text
                variant="bs-semibold"
                color='text-brand-medium'
                css={css`cursor:pointer;`}
              >
                Browse to Choose
              </Text>
            </label>
          </Box>

          <input
            id="file-upload"
            accept="image/*"
            name="file-upload"
            hidden
            onChange={handleFileChange}
            type="file"
            readOnly
          />

        </Box>
        {/* </form> */}

      </Box>

      <Box>
        {croppedImage ? (
          <>
            <Button
              onClick={() => {
                if (uploadLogoForm.isValid) {
                  // Also Check if the value of Icon is changed or not
                  setFieldValue('channelIcon', croppedImage)
                  onClose();
                }
              }}
            >
              Upload Image
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                childRef.current.showCroppedImage();
              }}
            >
              Crop Image
            </Button>
          </>
        )}
      </Box>

    </Box>
  );
};

export default uploadLogoModal;