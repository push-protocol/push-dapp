import React, {
  forwardRef,
  Fragment,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import Cropper from "react-easy-crop";
import styledComponents from "styled-components";
import Resizer from "react-image-file-resizer";

const ImageClipper = forwardRef((props, ref) => {
  //   const [imageSrc, setImageSrc] = useState(null);
  const { imageSrc, onImageCropped } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  //   console.log("here", { imageSrc });

  useImperativeHandle(ref, () => ({
    async showCroppedImage() {
      try {
        if (imageSrc) {
          const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
          const image = await resizeFile(croppedImage);
          onImageCropped(image);
        } else {
          return "Nothing";
        }
      } catch (e) {
        console.error(e);
      }
    },
  }));

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

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
            type: "image/jpeg",
            lastModified: Date.now(),
          })
        );
      }, "image/jpeg");
    });
  }

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        128,
        128,
        "JPEG",
        80,
        0,
        (uri) => {
          resolve(uri);
          setCroppedImage(uri);
        },
        "base64"
      );
    });

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
              width: "250px",
              height: "250px",
              position: "relative",
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
