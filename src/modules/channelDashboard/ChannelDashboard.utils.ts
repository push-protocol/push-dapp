import { handleLogoSizeLimitation, toDataURL } from 'helpers/LogoSizeHelper';

export const isImageFile = (file: File) => {
  return file.type.startsWith('image/');
};

export const checkImageSize = (croppedImage, setChannelFile) => {
  toDataURL(croppedImage, function(dataUrl: string) {
    const response = handleLogoSizeLimitation(dataUrl);
    if (response.success) {
      setChannelFile(croppedImage);
    }
  });
};
