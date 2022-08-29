import React, { useRef } from "react";
import UtilityHelper from 'helpers/UtilityHelper';
import {
  Section,
  Content,
  Item,
  H3,
  Button,
  Input,
  FormSubmision,
  Span
} from "primaries/SharedStyling";
import ImageClipper from "primaries/ImageClipper";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import { ethers } from "ethers";
import { addresses, abis } from "@project/contracts";
import { ReactComponent as ImageIcon } from "../assets/Image.svg";
import { Oval } from "react-loader-spinner";
import {BsCloudUpload} from 'react-icons/bs'

const UploadLogo = ({
  croppedImage,
  view,
  imageSrc,
  processing,
  setCroppedImage,
  setView,
  setImageSrc,
  setProcessingInfo,
  handleCreateChannel,
  logoInfo
}) => {
  const childRef = useRef();
  const { chainId, library, account } = useWeb3React();

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
        setImageSrc(reader.result);
      };
    } else {
      return "Nothing....";
    }
  };

  //mind Dai
  const mintDai = async () => {
    try {
      var signer = library.getSigner(account);
      let daiContract = new ethers.Contract(addresses.dai, abis.dai, signer);
      console.log({
        daiContract,
      });
      console.log(1);
      let daiAmount = 1000;
      const amount = ethers.utils.parseUnits(daiAmount.toString(), 18);
      console.log(2);
      var mintTransactionPromise = daiContract.mint(amount);
      console.log(3);
      const tx = await mintTransactionPromise;
      console.log(tx);
      await library.waitForTransaction(tx.hash);
      console.log(4);
      setProcessingInfo("1000 Dai minted successfully!");
      console.log("Transaction Completed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Section>
      <Body>
        <Item align="center">
          <H3 color=" #657795" margin="0px 0px" textTransform="none" weight="500" size="15px">
          Please upload a PNG, JPG. Crop the image to resize to 128px.  
          </H3>
        </Item>
        
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
                          onImageCropped={(croppedImage) =>
                            setCroppedImage(croppedImage)
                          }
                          ref={childRef}
                        />
                      )}
                    </div>
                  ) : (
                    // <ImageIcon />
                    <BsCloudUpload size={100} color='#8C99B0' style={{marginTop:'30px'}} />
                  )}

                 

                  <Item display="flex" direction="row" align="center">
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
                  </Item>
                </div>
              </div>
            </div>
          </Space>

          {/* {!UtilityHelper.isMainnet(chainId) ? (
            <Item align="flex-end">
              <Minter
                onClick={() => {
                  mintDai();
                }}
              >
                <Pool>
                  <br></br>
                  <PoolShare>Get Free DAI for Channel</PoolShare>
                </Pool>
              </Minter>
            </Item>
          ) : (
            <></>
          )} */}

        {logoInfo?.length > 0 && (<Item 
            margin="30px 0px 30px 0px"
            flex="1"
            padding="10px 5px"
            radius="10px"
            bg="#F5F5FA">
              <div style={{color:'#CF1C84'}}>{logoInfo}</div>
            </Item>)}

        {view && (!croppedImage ? (
        <Item width="12.2em" self="stretch" align="stretch" margin="100px auto 50px auto">
          <Button
            bg="#e20880"
            color="#fff"
            flex="1"
            radius="15px"
            padding="20px 10px"
            onClick={() => {
              childRef.current.showCroppedImage();
            }}
          >
            <Span
              color="#fff"
              weight="600"
              textTransform="none"
              line="22px"
              size="16px"
            >
              Crop Image
            </Span>
          </Button>
        </Item>): (

              <FormSubmision
              flex="1"
              direction="column"
              margin="0px"
              justify="center"
              size="1.1rem"
              onSubmit={handleCreateChannel}
              >
              <Item
                width="12.2em" self="stretch" align="stretch" margin="100px auto 50px auto"
              >
                <Button
                  bg="#e20880"
                  color="#fff"
                  flex="1"
                  radius="15px"
                  padding="20px 10px"
                  disabled={processing == 1 ? true : false}
                >
                  {processing == 1 && (
                    <Oval
                      color="#fff"
                      height={24}
                      width={24}
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
                      value="Create Channel"
                    />
                  )}
                </Button>
              </Item>
              </FormSubmision> 
        ))}


      </Body>
    </Section>
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
  // background: #674c9f;
`;

const ButtonSpace = styled.div`
  width: 40%;
  align-items: center;
  margin: 1rem auto;
`;

const Body = styled.div`
  margin: 50px auto 0px auto;
  width: 55%; 
  @media (max-width: 600px) {
    width: 95%; 
  }
  @media (max-width: 1224px) {
    width: 75%; 
  }
`

const Space = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  .bordered {
    display: flex;
    // height: 250px;
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
            border-radius: 12px;
            @media (max-width: 768px) {
              margin-top: 1rem;
            }
          }
        }
        .cropper {
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
        font-size: 1rem;
        line-height: 1rem;
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
        font-size: 1rem;
        line-height: 1rem;
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