// React + web3 essentials
import { FC, useRef } from "react";

// Third party libraries
import { css } from "styled-components";


// Component
import { Box, Button, CloudUpload, Text } from "blocks";
import ImageClipper from "primaries/ImageClipper";

type UploadLogoProps = {
  view: boolean;
  imageSrc: string | undefined;
  imageType: string | undefined;
  croppedImage: string | undefined;
  setView: (view: boolean) => void;
  setImageSrc: (imageSrc: string | undefined) => void;
  setImageType: (imageType: string | undefined) => void;
  setCroppedImage: (croppedImage: string | undefined) => void;
  setUploadDone: (uploadDone: boolean) => void;
  setActiveStepIndex: (stepFlow: number) => void;
  handleNextStep: () => void;

}

const UploadLogo: FC<UploadLogoProps> = ({
  view,
  imageSrc,
  imageType,
  croppedImage,
  setView,
  setImageSrc,
  setImageType,
  setCroppedImage,
  setUploadDone,
  setActiveStepIndex,
  handleNextStep
}) => {

  const childRef = useRef();

  const handleFile = async (file: HTMLInputElement) => {
    setCroppedImage(undefined);
    setView(true);

    //you can carry out any file validations here...
    if (file?.files?.[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(file?.files[0]);

      reader.onloadend = function () {
        setImageSrc(reader.result as string);
        setImageType(file?.files?.[0]?.type);
      };
    } else {
      return 'Nothing....';
    }
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='s8'
      alignItems='center'
      alignSelf='stretch'
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='s8'
      >
        <Text variant="bes-regular" color='gray-500'>
          Upload a PNG, JPG upto 1MB. Crop the image to resize to 128px.
        </Text>


        <Box
          width='500px'
          padding='s12 s0'
          display='flex'
          flexDirection='column'
          alignItems='center'
          border='1px dashed gray-300'
          borderRadius="r6"
          backgroundColor='gray-100'
          gap='s6'
        >

          {view ? (
            croppedImage ? (
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
                imageSrc={imageSrc}
                imageType={imageType}
                onImageCropped={(croppedImage: string) => setCroppedImage(croppedImage)}
                ref={childRef}
              />
            )
          ) : (
            <CloudUpload size={50} />
          )}

          <Box display='flex' gap='s1'>
            <Text variant="bs-semibold"> Drag and Drop or</Text>
            <label htmlFor="file-upload">
              <Text
                variant="bs-semibold"
                color='pink-600'
                css={css`cursor:pointer;`}
              >
                Browse to Choose
              </Text>
            </label>
          </Box>

          {/* //TODO: Change this to new input block when it supports file */}
          <input
            id="file-upload"
            accept="image/*"
            name="file-upload"
            hidden
            onChange={(e) => {
              handleFile(e.target as HTMLInputElement)
            }}
            type="file"
            className="sr-only"
            readOnly
          />

        </Box>

      </Box>

      {!croppedImage && view ? (
        <Button
          onClick={() => {
            childRef.current.showCroppedImage();
          }}
        >
          Crop Image
        </Button>
      ) : (
        <Button
          disabled={!view && !croppedImage}
          onClick={() => {
            setUploadDone(true)
            handleNextStep();
            setActiveStepIndex(2)
          }}
        >
          Next
        </Button>
      )}




    </Box>
  );
};

export { UploadLogo };