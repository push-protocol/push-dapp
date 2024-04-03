import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Button, Item } from 'components/SharedStyling';
import ImageClipper from 'primaries/ImageClipper';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';
import { device } from 'config/Globals';

const uploadLogoModal = ({
  onClose, InnerComponentProps
}) => {
  const {
    setChannelLogo,
    channelLogo,
    croppedImage,
    setCroppedImage,
    setChannelFile,
    imageSrc,
    setImageSrc,
    imageType,
    setImageType
  } = InnerComponentProps;

  const theme = useTheme();
  const childRef = useRef();
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => {
    onClose()
  });

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    //prevent the browser from opening the image
    e.preventDefault();
    e.stopPropagation();
    //let's grab the image file
    handleFile(e.dataTransfer, "transfer", e);
  };

  const handleFile = async (file, path, e) => {
    e.preventDefault();
    setCroppedImage(undefined);
    // setView(true);

    //you can carry out any file validations here...
    if (file?.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(file?.files[0]);

      reader.onloadend = function (e) {
        setImageSrc(reader.result);
        setImageType(file?.files[0]?.type)
      };
    }
  };

  return (
    <Container ref={containerRef}>
      <ModalNav><CloseButton onClick={onClose} /></ModalNav>

      <ModalContainer>
        <ModalPrimaryText>Please upload a PNG, JPG. Crop the image to resize to 128px.</ModalPrimaryText>
        <Space className="">
          {/* <div> */}
          <div
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleOnDrop(e)}
            className="bordered"
          >

            <div className="inner">

              <div className="crop-div">
                {croppedImage ? (
                  <div className="crop-innderdiv">
                    <div>
                      <img
                        alt="Cropped Img"
                        src={croppedImage}
                        className="croppedImage"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="crop-innderdiv">
                    <ImageClipper
                      className="cropper"
                      imageSrc={imageSrc}
                      imageType={imageType}
                      onImageCropped={(croppedImage) =>
                        setCroppedImage(croppedImage)
                      }
                      width="128px"
                      height="128px"
                      ref={childRef}
                    />
                  </div>
                )}
              </div>

              <DragText >
                <p className="text-below">
                  Drag and Drop or
                </p>
                <div className="text-div">
                  <label htmlFor="file-upload" className="labeled">
                    <div>Browse to Choose</div>
                    <input
                      id="file-upload"
                      accept="image/*"
                      name="file-upload"
                      hidden
                      onChange={(e) => handleFile(e.target, "target", e)}
                      type="file"
                      className="sr-only"
                      readOnly
                    />
                  </label>
                </div>
              </DragText>
            </div>
          </div>
          {/* </div> */}

        </Space>


        <ModalFooter>
          {croppedImage ? (
            <>
              <UploadButton
                onClick={() => {
                  setChannelLogo(croppedImage)
                  onClose();
                }}>Upload Image
              </UploadButton>
            </>
          ) : (
            <>
              <CropButton
                onClick={() => {
                  childRef.current.showCroppedImage();
                }}>Crop Image</CropButton>
            </>
          )}
        </ModalFooter>

      </ModalContainer>


    </Container>
  );
};

export default uploadLogoModal;

const Container = styled.div`
`

const ModalContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 18px 10px 32px 10px;

`

const ModalPrimaryText = styled.p`
    margin:0px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    text-align: center;
    color: ${(props) => props.theme.modalTextColor}
`

const ModalNav = styled.div`
    text-align: end;
    width: 100%;
`

const CloseButton = styled(AiOutlineClose)`
    cursor:pointer;
    font-size:20px;
    color: ${(props) => props.theme.modalTextColor};

`;

const DragText = styled(Item)`
display:flex;
flex-direction:row;
align-items:center;
`

const ModalFooter = styled(ItemVV2)`

`

const CropButton = styled(Button)`
font-family: 'Strawford';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
display: flex;
border-radius: 15px;
align-items: center;
text-align: center;
background: #CF1C84;
color:#fff;
padding: 16px 27px;
width: 12rem;
`

const UploadButton = styled(Button)`
font-family: 'Strawford';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
display: flex;
border-radius: 15px;
align-items: center;
text-align: center;
background: #CF1C84;
color:#fff;
padding: 16px 18px;
width: 12rem;
`

const Space = styled.div`
  width: 100%;
  margin: 24px 0px 44px 0px;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  .bordered {
    display: flex;
    justify-content: center;
    border: 1px dashed #8C99B0;
    align-items: flex-end;
    border-radius: 12px;
    padding: 0px 50px 0px 50px;
    background: ${(props) => props.theme.modalbackgroundColor};
    .inner {
      margin-top: 0.25rem;
      text-align: center;
      padding: 23px 15px 23px 15px;
      width: 100%;
      .crop-div {
        width: 100%;
        display: flex;
        flex-direction: row;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        justify-content: space-evenly;
        align-items: center;
        margin-right: auto;
        .crop-innderdiv{
            width: 100%;
            background: ${(props) => props.theme.modalImageBgColor};
            border-radius: 20px;
            padding: 17px 100px 17px 100px;
            @media (max-width: 768px) {
              padding: 17px 2px 17px;
            }

            margin-bottom: 12px;
        }

        div {
            height:128px;
            // width:128px;
          .croppedImage {
            border-radius: 20px;
            // @media (max-width: 768px) {
            //   margin-top: 1rem;
            // }
          }
        }
        .cropper {
          border-radius: 20px;
          width: 128px;
          height: 128px;
        }
      }
      .check-space {
        .croppedImage {
          width: auto;
          height: auto;
          border-radius: 5px;
        }
        .button-space {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      .crop-button {
        display: flex;
        justify-content: center;
        width: 100%;
        @media (max-width: 768px) {
          margin-top: 1rem;
        }
      }
      .svg {
        margin: 0px auto;
        height: 3rem;
        width: 3rem;
        color: #ccc;
      }
      .text-div {
        display: flex;
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: #ccc;
        justify-content: center;
        .labeled {
          position: relative;
          cursor: pointer;
          border-radius: 4px;
          color: #CF1C84;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .text-below {
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: ${(props) => props.theme.modalTextColor};
        margin:0px 0.3rem 0px 0px;
      }
    }
  }
  .image-error {
    font-size: 1rem;
    line-height: 1rem;
    color: red;
    margin-top: 0.5rem;
  }
  .image {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    .item {
      width: 4rem;
      height: auto;
      border-radius: 4px;
    }
    .image-border {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 2rem;
      .text {
        font-size: 1rem;
        line-height: 1rem;
        color: #ccc;
        margin-top: 1rem;
      }
    }
  }
`;
