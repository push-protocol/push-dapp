import { FC, useRef, useState } from 'react';

import { css } from 'styled-components';

import { Box, Button, Cross, FileUpload, Text } from 'blocks';

import { isImageFile } from 'modules/channelDashboard/ChannelDashboard.utils';
import ImageClipper from 'primaries/ImageClipper';

import { useEditChannelForm } from './EditChannel.forms';

type UploadlogoModelProps = {
  onClose: () => void;
}

const uploadLogoModal: FC<UploadlogoModelProps> = ({ onClose }) => {

  const {
    values: formValues,
    setFieldValue,
    isValid
  } = useEditChannelForm();

  const childRef = useRef();

  // Upload Logo
  const [croppedImage, setCroppedImage] = useState<string | undefined>(formValues.channelIcon);

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
    setFieldValue('channelIcon', file);
    // Read the file and set imageSrc and imageType
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFieldValue('imageSrc', reader.result as string);
      setFieldValue('imageType', file.type);
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

        <FileUpload
          id='file-upload'
          onChange={handleFileChange}
          onDrop={handleDrop}
        >
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
                imageSrc={formValues.imageSrc}
                imageType={formValues.imageType}
                onImageCropped={(croppedImage: string) => {
                  setCroppedImage(croppedImage)
                  setFieldValue('channelIcon', croppedImage);
                }}
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
          </Box>
        </FileUpload>
      </Box>

      <Box>
        {croppedImage ? (
          <>
            <Button
              onClick={() => {
                if (isValid) {
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
