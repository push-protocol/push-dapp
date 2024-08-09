import { FC, useRef } from "react";
import { css } from "styled-components";

import { Box, Button, CloudUpload, FileUpload, Text, Tick } from "blocks";
import ImageClipper from "primaries/ImageClipper";

import { isImageFile } from "../CreateChannel.utils";
import { ActiveStepKey } from "../CreateChannel.types";
import { useCreateChannelForm } from "../CreateChannel.form";

type UploadChannelLogoProps = {
  view: boolean;
  setView: (view: boolean) => void;
  setActiveStepKey: (key: ActiveStepKey) => void;
  handleNextStep: (key: ActiveStepKey) => void;
}

const UploadChannelLogo: FC<UploadChannelLogoProps> = ({
  view,
  setView,
  setActiveStepKey,
  handleNextStep,
}) => {

  const childRef = useRef();

  const {
    values: formValues,
    setFieldValue,
  } = useCreateChannelForm();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setView(false)
    if (file && isImageFile(file)) {
      await processFile(file);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setView(false)
    const file = e.dataTransfer.files?.[0];
    if (file && isImageFile(file)) {
      await processFile(file);
    }
  };

  const processFile = async (file: File) => {
    setFieldValue('image', file);
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
      gap='spacing-lg'
      alignItems='center'
      alignSelf='stretch'
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='spacing-lg'
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
            border='border-xs dashed stroke-tertiary'
            borderRadius="radius-md"
            backgroundColor='surface-secondary'
            gap='spacing-md'
          >

            {formValues?.image ? (
              view ? (
                <Box
                  width='128px'
                  height='128px'
                  borderRadius="radius-md"
                >
                  <img style={{ borderRadius: 'inherit' }} width="100%"
                    height="100%" src={formValues.image} alt="Cropped Img" />
                </Box>
              ) : (
                <ImageClipper
                  //@ts-ignore
                  width='200px'
                  height='200px'
                  imageSrc={formValues.imageSrc}
                  imageType={formValues.imageType}
                  onImageCropped={(croppedImage: string) => {
                    setView(true);
                    setFieldValue('image', croppedImage)
                  }}
                  ref={childRef}
                />
              )
            ) : (
              <CloudUpload size={50} />
            )}

            <Box display='flex' gap='spacing-xxxs'>
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


      {formValues?.image && (
        view ? (
          <>
            <Button
              disabled={!view && !formValues?.image}
              onClick={() => {
                handleNextStep('stakeFees');
                setActiveStepKey('stakeFees');
              }}
            >
              Next
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
        )
      )}

    </Box>
  );
};

export { UploadChannelLogo };