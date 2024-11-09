import { FC, useRef, useState } from 'react';
import { css } from 'styled-components';
import { Box, Button, Cross, FileUpload, Modal, Text } from 'blocks';
import ImageClipper from 'primaries/ImageClipper';
import { ModalResponse } from 'common';

type UploadAvatarModalProps = {
  formValues: { avatar: File | null; imageSrc: string; imageType: string };
  setFieldValue: (field: string, value: any) => void;
  modalControl: ModalResponse;
};

const UploadAvatarModal: FC<UploadAvatarModalProps> = ({ formValues, setFieldValue, modalControl }) => {
  const { isOpen, onClose } = modalControl;
  const childRef = useRef();
  const [croppedImage, setCroppedImage] = useState<string | undefined>(formValues.imageSrc);

  // Handle file selection from input
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setCroppedImage(undefined);
    if (file) {
      await processFile(file);
    }
  };

  // Handle file drop
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCroppedImage(undefined);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  // Process selected file
  const processFile = async (file: File) => {
    setFieldValue('avatar', file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFieldValue('imageSrc', reader.result as string);
      setFieldValue('imageType', file.type);
    };
  };

  return (
    <Modal
      size="medium"
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      {/* Upload Area */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
      >
        <Text
          variant="bes-regular"
          color="text-tertiary"
        >
          Upload a PNG, JPG up to 1MB. Crop the image to resize to 128px.
        </Text>

        <FileUpload
          id="file-upload"
          onChange={handleFileChange}
          onDrop={handleDrop}
        >
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
              <Box
                width="128px"
                height="128px"
                borderRadius="radius-md"
              >
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
                onImageCropped={(croppedImg: string) => {
                  setCroppedImage(croppedImg);
                  setFieldValue('avatar', croppedImg);
                }}
                ref={childRef}
              />
            )}

            <Box
              display="flex"
              gap="spacing-xxxs"
            >
              <Text
                variant="bs-semibold"
                color="text-tertiary"
              >
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

      {/* Action Button */}
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        margin="spacing-md spacing-none spacing-none spacing-none"
      >
        {croppedImage ? (
          <Button
            onClick={() => {
              setFieldValue('avatar', croppedImage);
              onClose();
            }}
          >
            Upload Image
          </Button>
        ) : (
          <Button
            onClick={() => {
              //@ts-ignore
              childRef.current.showCroppedImage();
            }}
          >
            Crop Image
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default UploadAvatarModal;
