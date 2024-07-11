//? Since this is used just in Create channel flow so I have not moved it in the common folder

// React + web3 essentials
import { FC, useRef } from "react";

// Third party libraries
import { css } from "styled-components";
import * as Yup from 'yup';

// Component
import { Box, Button, CloudUpload, Text } from "blocks";
import ImageClipper from "primaries/ImageClipper";
import { useFormik } from "formik";
import { isImageFile } from "../CreateChannel.utils";

type UploadLogoProps = {
  view: boolean;
  croppedImage: string | undefined;
  setView: (view: boolean) => void;
  setCroppedImage: (croppedImage: string | undefined) => void;
  setActiveStepIndex: (stepFlow: number) => void;
  handleNextStep: () => void;
}

const UploadLogo: FC<UploadLogoProps> = ({
  view,
  croppedImage,
  setView,
  setCroppedImage,
  setActiveStepIndex,
  handleNextStep
}) => {

  const childRef = useRef();

  const logoValidationSchema = Yup.object().shape({
    image: Yup.mixed().required('Image is required'),
  });


  const formik = useFormik({
    initialValues: {
      image: null,
      imageSrc: '',
      imageType: ''
    },
    validationSchema: logoValidationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
    },
  });

  // handle Input file type
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File change")
    const file = e.currentTarget.files?.[0];
    setView(false)
    setCroppedImage(undefined)
    if (file && isImageFile(file)) {
      await processFile(file);
    }
  };

  // Handle Drop Image
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setView(false)
    setCroppedImage(undefined)
    const file = e.dataTransfer.files?.[0];
    if (file && isImageFile(file)) {
      await processFile(file);
    }
  };

  // Process Image
  const processFile = async (file: File) => {
    formik.setFieldValue('image', file);
    // Read the file and set imageSrc and imageType
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      formik.setFieldValue('imageSrc', reader.result as string);
      formik.setFieldValue('imageType', file.type);
    };
    setView(true);
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

        <form onSubmit={formik.handleSubmit}>
          <Box
            width={{ initial: '500px', ml: '325px' }}
            padding='s12 s0'
            display='flex'
            flexDirection='column'
            alignItems='center'
            border={{ light: '1px dashed gray-300', dark: '1px dashed gray-700' }}
            borderRadius="r6"
            backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
            gap='s6'
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
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
                  imageSrc={formik.values.imageSrc}
                  imageType={formik.values.imageType}
                  onImageCropped={(croppedImage: string) => setCroppedImage(croppedImage)}
                  ref={childRef}
                />
              )
            ) : (
              <CloudUpload size={50} />
            )}

            <Box display='flex' gap='s1'>
              <Text
                variant="bs-semibold"
                color={{ light: 'gray-1000', dark: 'gray-600' }}
              > Drag and Drop or</Text>
              <label htmlFor="file-upload">
                <Text
                  variant="bs-semibold"
                  color={{ light: 'pink-600', dark: 'pink-400' }}
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
        </form>

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