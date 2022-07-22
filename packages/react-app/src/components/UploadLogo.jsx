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
} from "primaries/SharedStyling";
import ImageClipper from "primaries/ImageClipper";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import { ethers } from "ethers";
import { addresses, abis } from "@project/contracts";
import { ReactComponent as ImageIcon } from "../assets/Image.svg";
import Loader from "react-loader-spinner";

const UploadLogo = ({
  croppedImage,
  view,
  imageSrc,
  processing,
  setCroppedImage,
  setView,
  setImageSrc,
  setProcessingInfo,
  handleCreateChannel
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

      reader.onloadend = function(e) {
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
      <Content padding="50px 20px 20px">
        <Item align="flex-start">
          <H3 color="#e20880" margin="0px 0px">
            Upload Channel Logo to start the process. Clip image to
            resize to 128x128px.
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
                    <ImageIcon />
                  )}

                  <ButtonSpace>
                    <div className="crop-button">
                      {view &&
                        (!croppedImage && (
                          <Button
                            bg="#1C4ED8"
                            onClick={() => {
                              childRef.current.showCroppedImage();
                            }}
                          >
                            Clip Image
                          </Button>
                        )
                      )}
                    </div>
                  </ButtonSpace>

                  <div className="text-div">
                    <label htmlFor="file-upload" className="labeled">
                      <div>Upload a file</div>
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
                    <div className="">- or drag and drop</div>
                  </div>
                  <p className="text-below">
                    PNG, JPG.Proceed to clip and submit final
                  </p>
                </div>
              </div>
            </div>
          </Space>

          {!UtilityHelper.isMainnet(chainId) ? (
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
          )}

        <FormSubmision
          flex="1"
          direction="column"
          margin="0px"
          justify="center"
          size="1.1rem"
          onSubmit={handleCreateChannel}
        >
          <Item
            margin="15px 0px 0px 0px"
            flex="1"
            self="stretch"
            align="stretch"
          >
            <Button
              bg="#e20880"
              color="#fff"
              flex="1"
              radius="0px"
              padding="20px 10px"
              disabled={processing == 1 ? true : false}
            >
              {processing == 1 && (
                <Loader
                  type="Oval"
                  color="#fff"
                  height={24}
                  width={24}
                />
              )}
              {processing != 1 && (
                <Input
                  cursor="hand"
                  textTransform="uppercase"
                  color="#fff"
                  weight="400"
                  size="0.8em"
                  spacing="0.2em"
                  type="submit"
                  value="Setup Channel"
                />
              )}
            </Button>
          </Item>
        </FormSubmision>
      </Content>
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

const Space = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  .bordered {
    display: flex;
    justify-content: center;
    border: 4px dotted #ccc;
    border-radius: 10px;
    padding: 6px;
    margin-top: 10px;
    .inner {
      margin-top: 0.25rem;
      text-align: center;
      padding: 10px;
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
        margin-top: 0.2rem;
        color: #ccc;
        justify-content: center;
        .labeled {
          position: relative;
          cursor: pointer;
          background-color: white;
          border-radius: 4px;
          color: #60a5fa;
        }
      }
      .text-below {
        font-size: 1rem;
        line-height: 1rem;
        color: #ccc;
        margin-top: 0.3rem;
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