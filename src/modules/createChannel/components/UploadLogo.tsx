import { Box, Button, Text } from "blocks";
import { FC, useState } from "react";

type UploadLogoProps = {

}

const UploadLogo: FC<UploadLogoProps> = () => {

  const [view, setView] = useState(false);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [imageType, setImageType] = useState(null);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const handleFile = async (file, path) => {
    setCroppedImage(undefined);
    setView(true);

    //you can carry out any file validations here...
    if (file?.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(file?.files[0]);

      reader.onloadend = function (e) {
        setImageSrc(reader.result);
        setImageType(file?.files[0]?.type);
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
      <Box>
        <Text variant="bes-regular" color='gray-500'>
          Upload a PNG, JPG upto 1MB. Crop the image to resize to 128px.
        </Text>


        <Box>

        </Box>


        <input
          id="file-upload"
          accept="image/*"
          name="file-upload"
          // hidden
          onChange={(e) => handleFile(e.target, 'target')}
          type="file"
          className="sr-only"
          readOnly
        />


      </Box>
      <Button>Next</Button>
    </Box>
  );
};

export { UploadLogo };