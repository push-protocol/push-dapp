// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Compoonents
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import FaucetInfo from 'components/FaucetInfo';
import useToast from 'hooks/useToast';
import { useAccount } from 'hooks';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';
import { Button } from '../SharedStyling';
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Spinner from 'components/reusables/spinners/SpinnerUnit';
import VerifyLogo from '../../assets/Vector.svg';
import { approvePushToken, getPushTokenApprovalAmount, mintPushToken } from 'helpers';
import { addresses } from 'config';

interface DepositFeeFooterProps {
  title: string;
  description: string;
  onCancel: () => void;
  disabled: boolean;
  onClick: () => void;
}

const DepositFeeFooter = ({ title, description, onCancel, disabled, onClick }: DepositFeeFooterProps) => {
  const { account, provider } = useAccount();
  const { epnsReadProvider } = useSelector((state: any) => state.contracts);
  const [feesRequiredForEdit, setFeesRequiredForEdit] = useState(0);
  const [pushApprovalAmount, setPushApprovalAmount] = useState(0);
  const [pushDeposited, setPushDeposited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // it can be fetched from contract for dynamic, but making it const will be fast
  const minFees = 50;

  const depositFeeToast = useToast();

  useEffect(() => {
    if (!account) return;

    (async function () {
      const amount = await epnsReadProvider.channelUpdateCounter(account);
      setFeesRequiredForEdit(minFees * (Number(amount) + 1));
    })();
  }, [account]);

  useEffect(() => {
    if (!account || !provider) return;

    (async function () {
      const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
        address: account,
        provider: provider,
        contractAddress: addresses.epnscore,
      });
      setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
      const amountToBeDeposit = parseInt(pushTokenApprovalAmount);

      if (amountToBeDeposit >= feesRequiredForEdit && amountToBeDeposit != 0) {
        setPushDeposited(true);
      } else {
        setPushDeposited(false);
      }
    })();
  }, [account, provider]);

  const depositPush = async () => {
    setIsLoading(true);
    if (!provider) return;
    const signer = provider.getSigner(account);
    depositFeeToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
    try {
      const response = await approvePushToken({
        signer,
        contractAddress: addresses.epnscore,
        amount: feesRequiredForEdit - pushApprovalAmount,
      });
      console.log('response', response);
      if (response) {
        setIsLoading(false);
        setPushApprovalAmount(feesRequiredForEdit);
        setPushDeposited(true);
        depositFeeToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Successfully approved Push!',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });
      }
    } catch (err) {
      console.log(err);
      if (err.code == 'ACTION_REJECTED') {
        // EIP-1193 userRejectedRequest error
        depositFeeToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `User denied message signature.`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      } else {
        depositFeeToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in approving PUSH Token`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });

        console.log('Error --> %o', err);
        console.log({ err });
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Footer>
        <div>
          <FooterPrimaryText>{title}</FooterPrimaryText>
          <FooterSecondaryText>{description}</FooterSecondaryText>
        </div>
        <ItemHV2 flex="0">
          {pushDeposited ? <TickImage src={VerifyLogo} /> : null}
          <EditFee>{feesRequiredForEdit} PUSH</EditFee>
        </ItemHV2>
      </Footer>
      <FaucetInfo
        noOfPushTokensToCheck={feesRequiredForEdit}
        containerProps={{ width: '100%' }}
        onMintPushToken={async (noOfTokens) => {
          await mintPushToken({ noOfTokens, provider, account });
        }}
      />

      {isLoading ? (
        <>
          {/* Verifying Spinner and Text */}
          <VerifyingContainer>
            <Spinner
              size={42}
              color={GLOBALS.COLORS.PRIMARY_PINK}
              type={LOADER_SPINNER_TYPE.PROCESSING}
            />
            <TransactionText>Verifying Transaction</TransactionText>
          </VerifyingContainer>
        </>
      ) : (
        <>
          {/* This below is Footer Buttons i.e, Cancel and save changes */}
          <ButtonContainer>
            <CancelButtons onClick={onCancel}>Cancel</CancelButtons>

            {pushApprovalAmount >= feesRequiredForEdit ? (
              <FooterButtons
                disabled={disabled}
                style={{ background: disabled ? ' #F4DCEA' : '#CF1C84' }}
                onClick={onClick}
              >
                Save Changes
              </FooterButtons>
            ) : (
              <FooterButtons onClick={depositPush}>Approve PUSH</FooterButtons>
            )}
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default DepositFeeFooter;

const TickImage = styled.img``;

const Footer = styled(ItemVV2)`
  background: ${(props) => props.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  height: 100px;
  align-items: center;
  z-index: 1;

  @media ${device.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${device.mobileL} {
    margin: 0px;
  }
`;

const FooterPrimaryText = styled.p`
  margin: 0px;
  color: ${(props) => props.theme.editChannelPrimaryText};
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const FooterSecondaryText = styled.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.editChannelSecondaryText};
`;

const EditFee = styled.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const VerifyingContainer = styled(ItemVV2)`
  flex-direction: row;
  margin-top: 33px;

  @media ${device.tablet} {
    flex: 0;
  }
`;

const TransactionText = styled.p`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${(props) => props.theme.editChannelPrimaryText};
`;

const ButtonContainer = styled(ItemHV2)`
  justify-content: end;
  margin-top: 24px;
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
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
  background: #cf1c84;
  color: #fff;
  padding: 16px 27px;
  width: 12rem;

  @media ${device.tablet} {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${device.mobileL} {
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
`;
