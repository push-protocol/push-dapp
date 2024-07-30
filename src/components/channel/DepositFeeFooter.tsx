// React + Web3 Essentials
import { useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';

import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Compoonents
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import FaucetInfo from 'components/FaucetInfo';
import useToast from 'hooks/useToast';
import { useAccount } from 'hooks';
import { Button } from 'blocks';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Spinner from 'components/reusables/spinners/SpinnerUnit';
import VerifyLogo from '../../assets/Vector.svg?react';
import { approvePushToken, getPushTokenApprovalAmount, mintPushToken } from 'helpers';
import { addresses } from 'config/index.js';

interface DepositFeeFooterProps {
  title: string;
  description: string;
  onCancel: () => void;
  disabled: boolean;
  onClick: () => void;
  feeRequired: number;
}

const DepositFeeFooter = ({ title, description, onCancel, disabled, onClick, feeRequired }: DepositFeeFooterProps) => {
  const { account, provider } = useAccount();
  const [pushApprovalAmount, setPushApprovalAmount] = useState(0);
  const [pushDeposited, setPushDeposited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const depositFeeToast = useToast();

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

      if (amountToBeDeposit >= feeRequired && amountToBeDeposit != 0) {
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
        amount: feeRequired - pushApprovalAmount,
      });
      console.debug('response', response);
      if (response) {
        setIsLoading(false);
        setPushApprovalAmount(feeRequired);
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
      console.error(err);
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

        console.error('Error --> %o', err);
        console.error({ err });
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
          <EditFee>{feeRequired} PUSH</EditFee>
        </ItemHV2>
      </Footer>
      <FaucetInfo
        noOfPushTokensToCheck={feeRequired}
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
            <Button
              onClick={onCancel}
              disabled={false}
              variant="outline"
              size="large"
            >
              Cancel
            </Button>

            {pushApprovalAmount >= feeRequired ? (
              <Button
                onClick={onClick}
                disabled={disabled}
                size="large"
              >
                Save Changes
              </Button>
            ) : (
              <Button
                onClick={depositPush}
                size="large"
                disabled={disabled}
              >
                Approve PUSH
              </Button>
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
  color: ${(props) => props.theme.viewChannelSecondaryText};
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
  gap: 14px;
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`;
