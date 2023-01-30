import { useWeb3React } from '@web3-react/core';
import BlurBG from 'components/reusables/blurs/BlurBG';
import { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Button, Item } from 'components/SharedStyling';
import GLOBALS from 'config/Globals';
import ImageClipper from 'primaries/ImageClipper';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCloudUpload } from 'react-icons/bs';
import { useClickAway } from 'react-use';
import styled, { useTheme } from "styled-components";

const UploadLogoModalContent = ({
    type = LOADER_TYPE.STANDALONE,
    overlay = LOADER_OVERLAY.NORMAL,
    blur = 0,
    closeUploadModal,
    setChannelLogo,
    channelLogo,
    setChannelFile,
    setCroppedImage,
    croppedImage
}) => {

    // const handleClose = () => onClose();
    const theme = useTheme();

    const containerRef = React.useRef(null);
    useClickAway(containerRef, () => {
        console.log("Done here")
        closeUploadModal()
    });

    const childRef = useRef();
    const { chainId, library, account } = useWeb3React();
    const [view, setView] = useState(false);
    const [imageSrc, setImageSrc] = useState(channelLogo);
    // const [croppedImage, setCroppedImage] = useState(channelLogo);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleOnDrop = (e) => {
        //prevent the browser from opening the image
        e.preventDefault();
        e.stopPropagation();
        //let's grab the image file
        handleFile(e.dataTransfer, "transfer");
    };

    const handleFile = async (file, path) => {
        setCroppedImage(undefined);
        setView(true);

        //you can carry out any file validations here...
        if (file?.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(file?.files[0]);

            reader.onloadend = function (e) {
              console.log("Image src",reader.result);
                setImageSrc(reader.result);
            };
        } else {
            return "Nothing....";
        }
    };

   

   

    return (
        <ItemVV2
            position={overlay == LOADER_OVERLAY.ONTOP ? 'absolute' : 'relative'}
            alignSelf={overlay == LOADER_OVERLAY.ONTOP ? 'stretch' : 'center'}
            flex="initial"
            top="0"
            right="0"
            bottom="0"
            left="0"
            zIndex="1000"
            padding="15px"
            ref={containerRef}
        // onClick={closeUploadModal}
        >

            {overlay === LOADER_OVERLAY.ONTOP && <BlurBG blur={blur} />}


            <ModalContainer
                flex="initial"
                alignSelf={type == LOADER_TYPE.SEAMLESS ? 'auto' : 'center'}
                padding={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
                borderRadius={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                border={type == LOADER_TYPE.SEAMLESS ? 'transparent' : `1px solid ${theme.default.border}`}
                background={theme.chatQRbg}

            >

                <ModalNav><CloseButton onClick={closeUploadModal} /></ModalNav>

                <Space className="">
                    <div>

                        <ModalPrimaryText>Please upload a PNG, JPG. Crop the image to resize to 128px.</ModalPrimaryText>

                        <div
                            onDragOver={(e) => handleDragOver(e)}
                            onDrop={(e) => handleOnDrop(e)}
                            className="bordered"
                        >
                            <div className="inner">

                                <div className="crop-div">
                                    {croppedImage ? (
                                        <div>
                                            <img
                                                alt="Cropped Img"
                                                src={croppedImage}
                                                className="croppedImage"
                                            />
                                        </div>
                                    ) : (
                                        <ImageClipper
                                            className="cropper"
                                            imageSrc={imageSrc}
                                            onImageCropped={(croppedImage) =>
                                                setCroppedImage(croppedImage)
                                            }
                                            ref={childRef}
                                        />
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
                                                onChange={(e) => handleFile(e.target, "target")}
                                                type="file"
                                                className="sr-only"
                                                readOnly
                                            />
                                        </label>
                                    </div>
                                </DragText>
                            </div>
                        </div>
                    </div>
                </Space>

                <ModalFooter>
                    
                    {croppedImage ? (
                        <>
                            <CropButton 
                                onClick={() => {
                                    setChannelLogo(croppedImage)
                                    closeUploadModal()
                            }}>Upload Image</CropButton> 
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

        </ItemVV2>
    );
};

export default UploadLogoModalContent;

const ModalContainer = styled(ItemVV2)`
    display:flex;
    // width:80%;
    flex-direction: column;
    margin: 2% 1%;
    padding:30px 40px;
    // width: 503px;
    // height: 477px;
`

const ModalPrimaryText = styled.p`
    margin:0px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    text-align: center;
    color: #657795;
`
const ModalNav = styled.div`
    text-align: end;
    width: 100%;
`

const CloseButton = styled(AiOutlineClose)`
    cursor:pointer;

`;

const Space = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  .bordered {
    display: flex;
    justify-content: center;
    border: 1px dashed #8C99B0;
    align-items: flex-end;
    border-radius: 12px;
    padding: 6px;
    background-color: #F5F5FA;
    margin-top: 10px;
    .inner {
      margin-top: 0.25rem;
      text-align: center;
      padding: 20px 10px 10px 10px;
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
        div {
          .croppedImage {
            border-radius: 20px;
            @media (max-width: 768px) {
              margin-top: 1rem;
            }
          }
        }
        .cropper {
          border-radius: 20px;
          width: 250px;
          height: 250px;
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
        color: #657795;
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
width: 10rem;
`