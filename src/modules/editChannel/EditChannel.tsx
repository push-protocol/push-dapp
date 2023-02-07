// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

// External Packages
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";
import { useDeviceWidthCheck } from 'hooks';

// Internal Configs
import { addresses, appConfig } from "config";
import GLOBALS, { device } from "config/Globals";
import { Button } from '../../components/SharedStyling';
import EditChannelForms from './EditChannelForms';
import useModal from 'hooks/useModal';
import UploadLogoModalContent from './UploadLogoModalContent';
import useToast from 'hooks/useToast';
import { useClickAway } from 'react-use';
import { LOADER_OVERLAY, LOADER_SPINNER_TYPE, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import GLOABALS from 'config/Globals';
import Spinner from 'components/reusables/spinners/SpinnerUnit';
import VerifyLogo from '../../assets/Vector.svg';
import { MdCheckCircle, MdError } from 'react-icons/md';
import uploadLogoModal from './uploadLogoModal';
import { approvePushToken, getPushTokenApprovalAmount } from 'helpers';
import { getCAIPObj } from 'helpers/CaipHelper';
import { IPFSupload } from 'helpers/IpfsHelper';
import { isEmpty } from 'helpers/InputValidation';
import { isLengthValid, isValidUrl } from 'helpers/UtilityHelper';

export default function EditChannel({ 
  closeEditChannel,
  UploadLogoComponent,
  displayUplaodLogoModal,
  isUploadLogoModalOpen
}) {
  const { chainId, account, library } = useWeb3React();
  const {
    channelDetails,
    canVerify,
    aliasDetails: { isAliasVerified, aliasAddrFromContract }
  } = useSelector((state) => state.admin);
  
  const { epnsReadProvider, epnsWriteProvider} = useSelector(
    (state) => state.contracts
  );
  const theme = useTheme();

  // it can be fetched from contract for dynamic, but making it const will be fast
  const minFeesForAddChannel = 50;

  const [channelName, setChannelName] = React.useState(channelDetails?.name);
  const [channelInfo, setChannelInfo] = React.useState(channelDetails?.info);
  const [channelURL, setChannelURL] = React.useState(channelDetails?.url);
  const [channelLogo, setChannelLogo] = React.useState(channelDetails?.icon);
  // const [channelFile, setChannelFile] = React.useState(undefined);
  const [channelFile, setChannelFile] = React.useState(channelDetails?.icon);
  const [croppedImage, setCroppedImage] = useState(channelDetails?.icon);
  const [imageSrc, setImageSrc] = useState(croppedImage);
  const [pushDeposited, setPushDeposited] = useState(false);

  const [errorInfo, setErrorInfo] = useState<{name:string, description:string, address:string, url:string}>({name: '',description: '', address: '', url: ''});


  const [isLoading, setIsLoading] = useState(false);
  const [feesRequiredForEdit, setFeesRequiredForEdit] = useState(0);
  const [pushApprovalAmount, setPushApprovalAmount] = useState(0);

  const [showUploadLogoModal, setShowUploadLogoModal] = useState(false);
  const editChannelToast = useToast();

  useEffect(() => {
    if(!account) return;

    (async function () {
      const amount = await epnsReadProvider.channelUpdateCounter(account);
      setFeesRequiredForEdit(minFeesForAddChannel*(Number(amount)+1)); //50
    })();
  }, [account]);

  useEffect(() => {
    if(!account || !library) return;

    (async function () {
      const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
        address: account,
        provider: library,
        contractAddress: addresses.epnscore
      });
      setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
      const amountToBeDeposit  = parseInt(pushTokenApprovalAmount);

      if((amountToBeDeposit >= feesRequiredForEdit) && (amountToBeDeposit !=0 )  ){
        setPushDeposited(true);
      }else{
        setPushDeposited(false);
      }

    })();
  }, [account, library]);

  const depositPush = async () => {
    setIsLoading(true);
    if(!library) return;

    const signer = library.getSigner(account);
    const response = await approvePushToken({
      signer,
      contractAddress: addresses.epnscore,
      amount: (feesRequiredForEdit - pushApprovalAmount)
    });

    if(response) {
      setIsLoading(false);
      setPushApprovalAmount(feesRequiredForEdit);
      setPushDeposited(true);
    }
    setIsLoading(false);
  }

  const closeUploadModal = () => {
    setShowUploadLogoModal(false);
  }

  const isMobile = useDeviceWidthCheck(600);

  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => {
    closeUploadModal()
  });

  const isAllFilledAndValid = (): boolean => {
    setErrorInfo('');

    if (isEmpty(channelName) || isEmpty(channelInfo) || isEmpty(channelURL) ){
      if (
        isEmpty(channelName)
      ) {
        setErrorInfo(x => ({
          ...x,
          name: 'Please, enter the channel name.',
        }));
      }

      if (isEmpty(channelInfo)) {
        setErrorInfo(x => ({
          ...x,
          description: 'Please, enter the channel description',
        }));
      }

      if (isEmpty(channelURL)) {
        setErrorInfo(x => ({
          ...x,
          url: 'Please, enter the channel url',
        }));
      }

      return false
    }

    if (!isLengthValid(channelName, 125)) {
      setErrorInfo(x => ({
        ...x,
        name: 'Channel Name should not exceed 125 characters! Please retry!',
      }));
      
      return false;
    }
    if (!isLengthValid(channelURL, 125)) {
      setErrorInfo(x => ({
        ...x,
        url: 'Channel Url should not exceed 125 characters! Please retry!',
      }));
      return false;
    }
    if (!isValidUrl(channelURL)) {
      setErrorInfo(x => ({
        ...x,
        url: 'Channel URL is invalid! Please enter a valid url!',
      }));
      return false;
    }

    return true;
  };

  const isDetailsAltered = (): boolean => {

    if(channelName !== channelDetails?.name 
      || 
      channelInfo !== channelDetails?.info 
      || 
      channelURL!==channelDetails?.url || 
      channelFile!==channelDetails?.icon
      ) {
        return false;
    }else{
      return true;
    }

  }

  const editChannel = async (e) => {
    try {

      if (!isAllFilledAndValid()) return;

      setIsLoading(true);
      const input = JSON.stringify({
        name: channelName,
        info: channelInfo,
        url: channelURL,
        icon: channelFile,
        aliasDetails: channelDetails['aliasDetails'] || getCAIPObj({
          chainId: parseInt(channelDetails['chain_id']),
          address: channelDetails['address'],
        }),
      });

      console.log(input);
      const storagePointer = await IPFSupload(input);
      console.log('IPFS storagePointer:', storagePointer);

      const identity = '1+' + storagePointer; // IPFS Storage Type and HASH
      const newIdentityBytes = ethers.utils.toUtf8Bytes(identity);
      const parsedFees = ethers.utils.parseUnits(feesRequiredForEdit.toString(), 18);

      
      const tx = await epnsWriteProvider.updateChannelMeta(account, newIdentityBytes, parsedFees, {
        gasLimit: 1000000
      })

      console.log(tx);
      await tx.wait();
      setIsLoading(false);

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
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
      editChannelToast.showMessageToast({
        toastTitle: 'Transaction failed',
        toastMessage: 'Channel details are not changed',
        toastType: 'ERROR',
        getToastIcon: (size) =>
        <MdError size={size} color="red" />,
      });
    }
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
        <UploadLogoComponent
          InnerComponent={uploadLogoModal}
          InnerComponentProps={{ 
              setChannelLogo, 
              channelLogo, 
              croppedImage, 
              setCroppedImage, 
              setChannelFile, 
              imageSrc, 
              setImageSrc, 
              errorInfo, 
              setErrorInfo 
            }}
        />

      <EditableContainer>

        <AdaptiveMobileItemHV22 >
          <ImageSection src={channelLogo}></ImageSection>
          <UploadButton onClick={() => {
            displayUplaodLogoModal()
            setShowUploadLogoModal(true)
          }}>Upload Logo</UploadButton>
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
          errorInfo={errorInfo}
          setErrorInfo={setErrorInfo}
        />

      </EditableContainer>


      {/* This is Footer container that is present over the buttons */}
      <Footer>
        <div>
          <FooterPrimaryText>Channel edit fee</FooterPrimaryText>
          <FooterSecondaryText>Editing channel details requires fees to be deposited</FooterSecondaryText>
        </div>

        <ItemHV2
          flex="0"
        >
          {pushDeposited ? <TickImage src={VerifyLogo} /> : null}
          <EditFee>
            {feesRequiredForEdit} PUSH
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
          <ButtonContainer>
            <CancelButtons onClick={closeEditChannel}>
              Cancel
            </CancelButtons>

            {(pushApprovalAmount >= feesRequiredForEdit) ? (
              <FooterButtons 
              disabled = {isDetailsAltered()}
              style = {{background: isDetailsAltered() ? " #F4DCEA" : "#CF1C84"}}
              onClick={editChannel}>
                Save Changes
              </FooterButtons>)
              : (
                <FooterButtons onClick={depositPush} >
                  Deposit Push
                </FooterButtons>
              )}

          </ButtonContainer>
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

const TickImage = styled.img``

const AdaptiveMobileItemHV22 = styled(ItemHV2)`
  flex:0;
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

//Footer Button's CSS
const ButtonContainer = styled(ItemHV2)`
    justify-content: end;
    margin-top:35px;
    @media (max-width:425px){
        flex-direction:column-reverse;
    }

`;

const FooterButtons = styled(Button)`
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

@media (min-width:425px) and (max-width:600px) {
    font-size: 15px;
    padding: 12px 12px;
    width: 7rem;
}

@media (max-width:425px){
    width: -webkit-fill-available;
}

`;

const CancelButtons = styled(FooterButtons)`
    margin-right:14px;
    background:${(props) => props.theme.default.bg};
    color:${(props) => props.theme.logoBtnColor};
    border:1px solid #CF1C84;

    @media (max-width:425px){
        margin-right:0px;
        margin-top:10px;
    }

    &:hover{
        color:#AC106C;
        border:border: 1px solid #AC106C;
        background:transparent;
        opacity:1;
    }

    &:after{
        background:white;
    }
`


