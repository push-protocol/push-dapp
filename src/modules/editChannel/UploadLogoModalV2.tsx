import { FC, useRef, useState } from 'react';

import { css } from 'styled-components';

import { Box, Button, Cross, FileUpload, Text } from 'blocks';

import ImageClipper from 'primaries/ImageClipper';

import { useEditChannelForm } from './EditChannel.form';

type UploadlogoModelV2Props = {
  onClose: () => void;
};

const UploadLogoModalV2: FC<UploadlogoModelV2Props> = ({ onClose }) => {
  const { values: formValues, setFieldValue, isValid } = useEditChannelForm();

  const childRef = useRef();

  // Upload Logo
  const [croppedImage, setCroppedImage] = useState<string | undefined>(formValues.channelIcon);

  // handle Input file type
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setCroppedImage(undefined);
    if (file) {
      await processFile(file);
    }
  };

  // Handle Drop Image
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCroppedImage(undefined);
    const file = e.dataTransfer.files?.[0];
    if (file) {
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
    <Box display="flex" flexDirection="column" gap="spacing-lg" alignItems="center" alignSelf="stretch">
      <Box display="flex" width="100%" justifyContent="end" color="text-tertiary" cursor="pointer">
        <Cross size={24} onClick={onClose} />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap="spacing-lg">
        <Text variant="bes-regular" color="text-tertiary">
          Upload a PNG, JPG upto 1MB. Crop the image to resize to 128px.
        </Text>

        <FileUpload id="file-upload" onChange={handleFileChange} onDrop={handleDrop}>
          <Box
            width={{ initial: '500px', ml: '325px' }}
            padding="spacing-xxl spacing-none"
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="border-sm dashed stroke-tertiary"
            borderRadius="radius-md"
            backgroundColor="surface-secondary"
            gap="spacing-md"
          >
            {croppedImage ? (
              <Box width="128px" height="128px" borderRadius="radius-md">
                <img
                  style={{ borderRadius: 'inherit' }}
                  width="100%"
                  height="100%"
                  src={croppedImage}
                  alt="Cropped Img"
                />
              </Box>
            ) : (
              <ImageClipper
                //@ts-ignore
                width="200px"
                height="200px"
                imageSrc={formValues.imageSrc}
                imageType={formValues.imageType}
                onImageCropped={(croppedImage: string) => {
                  setCroppedImage(croppedImage);
                  setFieldValue('channelIcon', croppedImage);
                }}
                ref={childRef}
              />
            )}

            <Box display="flex" gap='spacing-xxxs'>
              <Text variant="bs-semibold" color="text-tertiary">
                Drag and Drop or
              </Text>
              <label htmlFor="file-upload">
                <Text
                  variant="bs-semibold"
                  color="text-brand-medium"
                  css={css`
                    cursor: pointer;
                  `}
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
                  setFieldValue('channelIcon', croppedImage);
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
                //@ts-ignore
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

export { UploadLogoModalV2 };