// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

// External Packages
import moment from 'moment';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { getReq, postReq } from 'api';
import { ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useDeviceWidthCheck } from 'hooks';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import { Item } from '../../primaries/SharedStyling';
import ChannelSettings from '../ChannelSettings';
import ShowDelegates from '../ShowDelegates';

// Internal Configs
import { appConfig } from "config";
import GLOBALS, { device } from "config/Globals";
import { Button, H2, P, Span } from '../SharedStyling';
import EditChannelButtons from './EditChannelButtons';
import EditChannelForms from './EditChannelForms';
import useModal from 'hooks/useModal';
import UploadLogoModalContent from './UploadLogoModalContent';
import useToast from 'hooks/useToast';
import { useClickAway } from 'react-use';
import LoaderSpinner, { LOADER_OVERLAY, LOADER_SPINNER_TYPE, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import GLOABALS from 'config/Globals';
import Spinner from 'components/reusables/spinners/SpinnerUnit';
import VerifyLogo from '../../assets/Vector.svg';
import { MdCheckCircle, MdError } from 'react-icons/md';

const DATE_FORMAT = 'MMM DD YYYY';

export default function EditChannel({ closeEditChannel }) {
  const { chainId } = useWeb3React();
  const {
    channelDetails,
    canVerify,
    aliasDetails: { isAliasVerified, aliasAddrFromContract }
  } = useSelector((state) => state.admin);
  const theme = useTheme();
  const { CHANNEL_ACTIVE_STATE, CHANNNEL_DEACTIVATED_STATE } = useSelector((state) => state.channels);
  const { processingState } = useSelector((state) => state.channelCreation);
  const [verifyingChannel, setVerifyingChannel] = React.useState([]);
  const uploadModalRef = React.useRef(null);

  const [channelName, setChannelName] = React.useState(channelDetails.name);
  const [channelInfo, setChannelInfo] = React.useState(channelDetails.info);
  const [channelURL, setChannelURL] = React.useState(channelDetails.url);
  const [channelLogo, setChannelLogo] = React.useState(channelDetails.icon);
  const [channelFile, setChannelFile] = React.useState(undefined);
  const [croppedImage, setCroppedImage] = useState(channelLogo);
  const [pushDeposited, setPushDeposited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showUploadLogoModal, setShowUploadLogoModal] = useState(false);
  console.log("Modal", showUploadLogoModal);
  const editChannelToast = useToast();


  const closeUploadModal = () => {
    setShowUploadLogoModal(false);
  }

  let { channelState } = channelDetails;
  console.log("Channel Details", channelDetails);
  console.log("Channel State", channelState);


  if (!channelState) channelState = channelDetails['activation_status'];
  const channelIsActive = channelState === CHANNEL_ACTIVE_STATE;
  const channelIsDeactivated = channelState === CHANNNEL_DEACTIVATED_STATE;

  const CORE_CHAIN_ID = appConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => {
    console.log("trigggered");
    closeUploadModal()
  });


  const editChannel = async (e) => {
    console.log("Channel file", channelFile);
    let input = {
      name: channelName,
      info: channelInfo,
      url: channelURL,
      icon: channelFile
      // icon: channelFile,
    }

    editChannelToast.showMessageToast({
      toastTitle: 'Success',
      toastMessage: `Channel Updated Successfully`,
      toastType: 'SUCCESS',
      getToastIcon: (size) =>
      <MdCheckCircle
      size={size}
      color="green"
    />,
    });

    console.log("Input payload", input);
  }



  // const {
  //   isModalOpen: isUploadLogoModalOpen,
  //   showModal: showUploadLogoModal,
  //   ModalComponent: UploadLogoComponent,
  // } = useModal();

  const confirmUploadLogo = () => {
    console.log("Image uplaoded")
  }

  useEffect(() => {
    if (croppedImage) {
      console.log("Image cropped", croppedImage);
      toDataURL(croppedImage, function (dataUrl) {
        const response = handleLogoSizeLimitation(dataUrl);
        console.log("response", response);
        if (response.success) {
          console.log("Cropped Image....", croppedImage);
          setChannelFile(croppedImage);
        }
      });
    } else {
      return 'Nothing';
    }
  }, [croppedImage]);

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  const handleLogoSizeLimitation = (base64) => {
    // Setup Error on higher size of 128px
    var sizeOf = require('image-size');
    var base64Data = base64.split(';base64,').pop();
    var img = Buffer.from(base64Data, 'base64');
    var dimensions = sizeOf(img);

    // Only proceed if image is equal to or less than 128
    if (dimensions.width > 128 || dimensions.height > 128) {
      console.log('Image size check failed... returning');
      return {
        success: 0,
        info: 'Image size check failed, Image should be 128X128PX',
      };
    }

    console.log(base64Data.charAt(0));
    if (base64Data.charAt(0) === '/') {
      return {
        success: 1,
        info: 'Image checks passed',
      };
    } else if (base64Data.charAt(0) === 'i') {
      return {
        success: 1,
        info: 'Image checks passed',
      };
    } else {
      return {
        success: 0,
        info: 'Image extension should be jpg or png',
      };
    }
  };

  return (
    <EditChannelContainer ref={containerRef}>

      {/* Modal to upload Logo */}
      {showUploadLogoModal ? (
        <UploadLogoModalContent
          type={LOADER_TYPE.STANDALONE}
          overlay={LOADER_OVERLAY.ONTOP}
          blur={GLOABALS.ADJUSTMENTS.BLUR.DEFAULT}
          closeUploadModal={closeUploadModal}
          setChannelLogo={setChannelLogo}
          channelLogo={channelLogo}
          setChannelFile={setChannelFile}
          setCroppedImage={setCroppedImage}
          croppedImage={croppedImage}
        />
      ) : null}

      <EditableContainer>

        <AdaptiveMobileItemHV22 >
          <ImageSection src={channelLogo}></ImageSection>
          <UploadButton onClick={() => setShowUploadLogoModal(true)}>Upload Logo</UploadButton>
        </AdaptiveMobileItemHV22>

        {!isMobile && <VerticalLine></VerticalLine>}

        {/* Edit Channel Form */}
        <EditChannelForms
          channelName={channelName}
          setChannelName={setChannelName}
          channelInfo={channelInfo}
          setChannelInfo={setChannelInfo}
          channelURL={channelURL}
          setChannelURL={setChannelURL}
          editChannel={editChannel}
        />

      </EditableContainer>


      {/* This is Footer container that is present over the buttons */}
      <Footer>
        <div>
          <FooterPrimaryText onClick={()=>setPushDeposited(!pushDeposited)}>Channel edit fee</FooterPrimaryText>
          <FooterSecondaryText>Editing channel details requires fees to be deposited</FooterSecondaryText>
        </div>

        <ItemHV2
          flex="0"
        >
          {pushDeposited? <TickImage src={VerifyLogo} /> : null}
          <EditFee onClick={() => setIsLoading(!isLoading)}>
            50 PUSH
          </EditFee>

        </ItemHV2>

      </Footer>

      {isLoading ? (
        <>
          {/* Verifying Spinner and Text */}
          <VerifyingContainer>
            <Spinner
              size={42}
              color={GLOBALS.COLORS.PRIMARY_PINK}
              type={LOADER_SPINNER_TYPE.PROCESSING}
            />
            <TransactionText>
              Verifying Transaction
            </TransactionText>

          </VerifyingContainer>
        </>
      ) : (
        <>
          {/* This below is Footer Buttons i.e, Cancel and save changes */}
          < EditChannelButtons
            closeEditChannel={closeEditChannel}
            editChannel={editChannel}
            pushDeposited={pushDeposited}
          />
        </>
      )}

    </EditChannelContainer>
  );
}

const EditChannelContainer = styled(ItemVV2)`
 padding: 0px;
  @media (min-width:1140px){
    padding: 15px 50px 0px 50px;
  }
`;

const TickImage = styled.img`

`


const EditableContainer = styled(ItemVV2)`
  flex-direction:row;
  margin-bottom:45px;
  @media (max-width:600px){
    flex-direction: column;
  }
  @media(max-width:425px){
    margin-bottom:40px;
  }

`

const UploadButton = styled(Button)`
    border-radius: 8px;
    background:${(props) => props.theme.logoBtnBg};
    color:${(props) => props.theme.logoBtnColor};
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    padding:10px 12px;

`

const AdaptiveMobileItemHV22 = styled(ItemHV2)`
  flex:0;
  // margin:10px 0px 0px 0px;
  // padding:0px 10px 0px 0px;
    align-items: center;
    align-self: baseline;
    justify-content: center;

  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 600px){
    width:100%;
    justify-content: center;
    flex-direction: column;
  }
`

const ImageSection = styled.img`
  width: 128px;
  height: 128px;
  margin-bottom:20px;
  border-radius: 32px;
  @media ${device.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`;

const VerticalLine = styled.div`
  height: 21.5rem;
  width:2px;
  background:${(props) => props.theme.verticalLineColor};
  margin: 0px 68px;
  @media (min-width:993px) and (max-width:1240px) {
    margin:0px 68px;
  }
  @media (min-width:600px) and (max-width:768px){
    margin:0px 68px;
  }
`;

const Footer = styled(ItemVV2)`

  // flex-direction: row;
  // justify-content: space-between;
    background: ${(props) => props.theme.editFooterBg};
    border-radius: 12px;
    padding: 23px 32px;
    display: grid;
    grid-auto-flow: column;
    align-content: space-between;
    justify-content: space-between;
    grid-gap: 40px;

  @media (max-width:600px){
    padding: 16px;
  }
  
`;

const FooterPrimaryText = styled.p`
  margin:0px;
  color: ${(props) => props.theme.editChannelPrimaryText};
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const FooterSecondaryText = styled.p`
font-size: 12px;
margin:0px;
font-weight: 400;
line-height: 130%;
color: ${(props) => props.theme.editChannelSecondaryText};
`

const EditFee = styled.p`
  margin:0px 0px 0px 5px;
  color: #D53893;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

const VerifyingContainer = styled(ItemVV2)`
  flex-direction:row;
  margin-top:33px;

`

const TransactionText = styled.p`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left:12px;
  color: ${(props) => props.theme.editChannelPrimaryText};
`


