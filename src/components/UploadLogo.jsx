// React + Web3 Essentials
import { ethers } from 'ethers';
import React, { Fragment, useRef } from 'react';

// External Packages
import styled from 'styled-components';
import { BsCloudUpload } from 'react-icons/bs';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import UtilityHelper from 'helpers/UtilityHelper';
import ImageClipper from 'primaries/ImageClipper';
import { FormSubmision, Input } from 'primaries/SharedStyling';
import { ReactComponent as ImageIcon } from '../assets/Image.svg';

// Internal Configs
import { abis, addresses } from 'config';
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from './reusables/SharedStylingV2';

const UploadLogo = ({
  croppedImage,
  view,
  imageSrc,
  imageType,
  processing,
  setCroppedImage,
  setView,
  setImageSrc,
  setImageType,
  setProcessingInfo,
  logoInfo,
  setStepFlow,
}) => {
  const childRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    //prevent the browser from opening the image
    e.preventDefault();
    e.stopPropagation();
    //let's grab the image file
    handleFile(e.dataTransfer, 'transfer');
  };

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
    <Body>
      <ItemVV2 align="center">
        <H2V2
          color=" #657795"
          margin="20px 0px"
          textTransform="none"
          fontWeight="300"
          fontSize="15px"
          letterSpacing="0.05"
          textAlign="center"
        >
          Please upload a PNG, JPG. Crop the image to resize to 128px.
        </H2V2>
      </ItemVV2>

      <Space className="">
        <div>
          <div
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleOnDrop(e)}
            className="bordered"
          >
            <div className="inner">
              {view ? (
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
                      imageType={imageType}
                      onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
                      ref={childRef}
                    />
                  )}
                </div>
              ) : (
                <BsCloudUpload
                  size={100}
                  color="#8C99B0"
                  style={{ marginTop: '30px' }}
                />
              )}

              <ItemHV2
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <p className="text-below">Drag and Drop or</p>
                <div className="text-div">
                  <label
                    htmlFor="file-upload"
                    className="labeled"
                  >
                    <div>Browse to Choose</div>
                    <input
                      id="file-upload"
                      accept="image/*"
                      name="file-upload"
                      hidden
                      onChange={(e) => handleFile(e.target, 'target')}
                      type="file"
                      className="sr-only"
                      readOnly
                    />
                  </label>
                </div>
              </ItemHV2>
            </div>
          </div>
        </div>
      </Space>

      {logoInfo?.length > 0 && (
        <ItemHV2
          margin="30px 0px 30px 0px"
          flex="1"
          padding="10px 5px"
          borderRadius="10px"
          background="#F5F5FA"
        >
          <div style={{ color: '#CF1C84' }}>{logoInfo}</div>
        </ItemHV2>
      )}

      {view &&
        (!croppedImage ? (
          <ItemHV2
            width="12.2em"
            self="stretch"
            align="stretch"
            margin="100px auto 50px auto"
          >
            <ButtonV2
              background="#e20880"
              color="#fff"
              flex="1"
              borderRadius="15px"
              padding="20px 10px"
              onClick={() => {
                childRef.current.showCroppedImage();
              }}
            >
              <SpanV2
                color="#fff"
                fontWeight="600"
                textTransform="none"
                lineHeight="22px"
                fontSize="16px"
              >
                Crop Image
              </SpanV2>
            </ButtonV2>
          </ItemHV2>
        ) : (
          <FormSubmision
            flex="1"
            direction="column"
            margin="0px"
            justify="center"
            size="1.1rem"
            onSubmit={(e) => {
              e.preventDefault();
              setStepFlow(2);
            }}
          >
            <ItemVV2
              width="12.2em"
              alignSelf="stretch"
              alignItems="stretch"
              margin="100px auto 50px auto"
            >
              <ButtonV2
                background="#e20880"
                color="#fff"
                flex="1"
                borderRadius="15px"
                padding="20px 10px"
                disabled={processing == 1 ? true : false}
              >
                {processing == 1 && (
                  <LoaderSpinner
                    type={LOADER_TYPE.SEAMLESS}
                    spinnerSize={24}
                    spinnerColor="#fff"
                  />
                )}
                {processing != 1 && (
                  <Input
                    cursor="hand"
                    textTransform="none"
                    color="#fff"
                    weight="600"
                    textTransform="none"
                    line="22px"
                    size="16px"
                    type="submit"
                    value="Next"
                  />
                )}
              </ButtonV2>
            </ItemVV2>
          </FormSubmision>
        ))}
    </Body>
  );
};

const Minter = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
`;

const ChannelMetaBox = styled.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
`;

const Pool = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PoolShare = styled(ChannelMetaBox)`
  background: #e20880;
`;

const ButtonSpace = styled.div`
  width: 40%;
  align-items: center;
  margin: 1rem auto;
`;

const Body = styled.div`
  margin: 50px auto 0px auto;
  width: 55%;
  @media (max-width: 768px) {
    min-width: 100%;
    margin: 10px auto 0px auto;
  }
  @media (max-width: 1224px) {
    width: 75%;
  }
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
    border: 1px dashed #8c99b0;
    align-items: flex-end;
    border-radius: 12px;
    padding: 6px;
    background-color: #f5f5fa;
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
          color: #cf1c84;
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
        margin-right: 0.3rem;
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

export default UploadLogo;
