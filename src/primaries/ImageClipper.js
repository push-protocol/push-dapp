// React + Web3 Essentials
import React, {
  forwardRef,
  Fragment,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";

// External Packages
import Cropper from "react-easy-crop";
import styledComponents from "styled-components";
import Pica from 'pica';
import Compressor from "compressorjs";

export function isBrave() {
  if (window.navigator.brave != undefined) {
    if (window.navigator.brave.isBrave.name == "isBrave") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const ImageClipper = forwardRef((props, ref) => {
  //   const [imageSrc, setImageSrc] = useState(null);
  const { imageSrc,imageType, onImageCropped, width,height } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  useImperativeHandle(ref, () => ({
    async showCroppedImage() {
      try {
        if (imageSrc) {
          const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
          const clean = await convertBlobToBase64(croppedImage);
          //because pica has compatiblity issues on brave, we use pica on chrome and comprressorjs on brave after checking if window is opened on brave or chrome.
          const image = isBrave() ? await resizeImageOnBrave(croppedImage) : await resizeImage(clean);

          
          const finalImage = await convertBlobToBase64(image);
          onImageCropped(finalImage);
        } else {
          return "Nothing";
        }
      } catch (e) {
        console.error(e);
      }
    },
  }));

  async function resizeImage(clean) {
    const pica = Pica();
    let file = await createImage(clean);
    const canvas = document.createElement("canvas");

    canvas.height = 128;
    canvas.width = 128;
    return new Promise(resolve => {
  
        resolve(
          pica
            .resize(file, canvas, {
              unsharpAmount: 100,
              unsharpRadius: 0.7,
              unsharpThreshold: 2,
          })
          .then(result => pica.toBlob(result, imageType, 1)),
        );
  
    });
  }

  async function resizeImageOnBrave(clean){
    return new Promise((resolve, reject) => {
      new Compressor(clean, {
        quality: 1,
        strict: true,
        maxWidth: 128,
        maxHeight: 128,
        checkOrientation: false,
        success: resolve,
        error: reject
      });
    })
  }

  const convertBlobToBase64 = async (blob) => { // blob data
  return await blobToBase64(blob);
}

const blobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

  // function toDataURL(url, callback) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = function() {
  //     var reader = new FileReader();
  //     reader.onloadend = function() {
  //       callback(reader.result);
  //     };
  //     reader.readAsDataURL(xhr.response);
  //   };
  //   xhr.open("GET", url);
  //   xhr.responseType = "blob";
  //   xhr.send();
  // }


  async function getCroppedImg(imageSrc, pixelCrop) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    const fileName = "none.jpg";

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    // As Base64 string
    // return canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob((file) => {
        //   resolve(URL.createObjectURL(file));
        resolve(
          new File([file], fileName, {
            type: imageType,
            lastModified: Date.now(),
          })
        );
      },imageType, 1);
    });
  }


  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url;
    });

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };
  return (
    <Fragment>
      <Container>
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={onZoomChange}
          // objectFit="vertical-cover"
          style={{
            containerStyle: {
              width: width ? width : "250px",
              height: height? height : "250px",
              position: "relative",
              borderRadius: "20px",
            },
          }}
        />
      </Container>

      {/* <Button onClick={() => showCroppedImage()}>Run</Button> */}
    </Fragment>
  );
});

const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

export default ImageClipper;
