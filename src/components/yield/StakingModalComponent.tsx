import { useClickAway } from 'react-use';
import { Input, Span } from 'primaries/SharedStyling';

// React + Web3 Essentials
import { useContext, useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';

// External Packages
import styled, { useTheme } from 'styled-components';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Compoonents
import Close from 'assets/chat/group-chat/close.svg?react';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { bnToInt, formatTokens } from 'helpers/StakingHelper';
import { P } from 'components/SharedStyling';
import { H2V2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'blocks';
import { AppContext } from 'contexts/AppContext';

// Internal Configs
import { abis, addresses } from 'config/index.js';
import { useAccount, useDeviceWidthCheck } from 'hooks';

const StakingModalComponent = ({ onClose, InnerComponentProps, toastObject }) => {
  const { title, getUserData, getPoolStats, setUnstakeErrorMessage, setWithdrawErrorMessage } = InnerComponentProps;

  const { account, provider, isWalletConnected, connect } = useAccount();

  const [maxAmount, setMaxAmount] = useState(0);
  const [approvedToken, setApprovedToken] = useState(0);
  const [depositApproved, setDepositApprove] = useState(false);

  const [txInProgressApprDep, setTxInProgressApprDep] = useState(false);
  const [txInProgressDep, setTxInProgressDep] = useState(false);

  const [txnMessage, setTxnMessage] = useState(null);

  const { handleConnectWalletAndEnableProfile } = useContext(AppContext);

  const [depositAmount, setDepositAmount] = useState(0);

  const handleClose = () => {
    setUnstakeErrorMessage(null);
    setWithdrawErrorMessage(null);
    onClose();
  };
  const theme = useTheme();
  const containerRef = useRef(null);
  useClickAway(containerRef, () => handleClose());

  const fillMax = async () => {
    var signer = provider.getSigner(account);
    const tokenAddr = title === 'Uni-V2' ? addresses.uniV2LPToken : addresses.pushToken;
    const token = new ethers.Contract(tokenAddr, abis.uniV2LpToken, signer);

    let balance = bnToInt(await token.balanceOf(account));
    setMaxAmount(parseInt(balance.toString().replace(/\D/, '')) || 0);
  };

  const checkApprDeposit = async () => {
    setTxInProgressApprDep(true);

    var signer = provider.getSigner(account);
    let allowance;

    if (title === 'Uni-V2') {
      let token = new ethers.Contract(addresses.uniV2LPToken, abis.uniV2LpToken, signer);
      allowance = await token.allowance(account, addresses.stakingV2);
    } else {
      let token = new ethers.Contract(addresses.pushToken, abis.uniV2LpToken, signer);
      allowance = await token.allowance(account, addresses.pushCoreV2);
    }

    setApprovedToken(formatTokens(allowance));
    setTxInProgressApprDep(false);
  };

  useEffect(() => {
    fillMax();
    checkApprDeposit();
  }, []);

  const approveDeposit = async () => {
    if (!isWalletConnected) {
      connect();
      return;
    }

    if (depositApproved || txInProgressApprDep) {
      return;
    }

    setTxInProgressApprDep(true);

    var signer = provider.getSigner(account);

    let tx;
    // const uintMax = bn(2).pow(bn(256)).sub(1);
    const fees = ethers.utils.parseUnits(depositAmount.toString(), 18);

    if (title === 'Uni-V2') {
      const tokencontractinstance = new ethers.Contract(addresses.uniV2LPToken, abis.uniV2LpToken, signer);
      tx = tokencontractinstance.approve(addresses.stakingV2, fees);
    } else {
      const tokencontractinstance = new ethers.Contract(addresses.pushToken, abis.uniV2LpToken, signer);
      tx = tokencontractinstance.approve(addresses.pushCoreV2, fees);
    }

    tx.then(async (tx) => {
      toastObject.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
      try {
        await provider.waitForTransaction(tx.hash);
        toastObject.showMessageToast({
          toastTitle: 'Success',
          toastMessage: `Successfully approved ${title} Tokens!`,
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });

        setTxInProgressApprDep(false);
        setDepositApprove(true);
      } catch (e) {
        console.error('Error', e);
        toastObject.showMessageToast({
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

        setTxInProgressApprDep(false);
      }
    }).catch((err) => {
      console.error('Error', err);
      toastObject.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `User denied message signature`,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
      setTxInProgressApprDep(false);
    });
  };

  const depositAmountTokenFarmSingleTx = async () => {
    if (!isWalletConnected) {
      connect();
      return;
    }

    if (txInProgressDep || !depositApproved) {
      return;
    }

    setTxInProgressDep(true);

    if (depositAmount == 0) {
      toastObject.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `You need to deposit atleast 1 ${title} token `,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
      setTxInProgressDep(false);
      return;
    }

    var signer = provider.getSigner(account);

    let tx2;

    if (title === 'Uni-V2') {
      let staking = new ethers.Contract(addresses.stakingV2, abis.stakingV2, signer);

      tx2 = staking.deposit(
        addresses.uniV2LPToken,
        ethers.BigNumber.from(depositAmount).mul(ethers.BigNumber.from(10).pow(18))
      );
    } else {
      let pushCoreV2 = new ethers.Contract(addresses.pushCoreV2, abis.pushCoreV2, signer);
      tx2 = pushCoreV2.stake(ethers.BigNumber.from(depositAmount).mul(ethers.BigNumber.from(10).pow(18)));
    }

    tx2
      .then(async (tx) => {
        toastObject.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

        try {
          await provider.waitForTransaction(tx.hash);
          toastObject.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Transaction Completed!',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });

          getPoolStats();
          getUserData();
          setTxInProgressDep(false);
          handleClose();
        } catch (e) {
          console.error('Error', e);
          toastObject.showMessageToast({
            toastTitle: 'Error',
            toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
            toastType: 'ERROR',
            getToastIcon: (size) => (
              <MdError
                size={size}
                color="red"
              />
            ),
          });

          setTxInProgressDep(false);
        }
      })
      .catch((err) => {
        console.error('Error in depositing', err);
        err.reason = err.reason.slice(err.reason.indexOf('::') + 1);
        toastObject.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `Transaction Cancelled! ${err.reason}`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });

        setTxInProgressDep(false);
      });
  };

  const handleInput = (e) => {
    e.preventDefault();
    setDepositAmount(parseInt(e.target.value.replace(/\D/, '')) || 0);

    if (approvedToken >= parseInt(e.target.value.replace(/\D/, '')) || 0) {
      setDepositApprove(true);
    } else {
      setDepositApprove(false);
    }
  };

  const setDepositAmountMax = (tokenAmount) => {
    setDepositAmount(parseInt(tokenAmount.toString().replace(/\D/, '')) || 0);
  };

  const isMobile = useDeviceWidthCheck(600);

  return (
    <Container>
      <ItemHV2 justifyContent="space-between">
        <PrimaryText>{title === 'Uni-V2' ? 'Uniswap V2 Staking Pool' : 'Push Fee Staking Pool'}</PrimaryText>
        <Close
          onClick={() => handleClose()}
          style={{ cursor: 'pointer' }}
        />
      </ItemHV2>

      <ItemVV2>
        <P
          weight="500"
          size="14px"
          self="baseline"
          color={theme.stakingSecondaryText}
        >
          You are Staking
        </P>

        <ItemHV2
          width="-webkit-fill-available"
          background={theme.default.bg}
          height="60px"
          padding={isMobile ? '8px' : '14px'}
          borderRadius="12px"
          border={`1px solid ${theme.modalBorderColor}`}
        >
          <TokenInput
            placeholder="Enter Amount"
            flex="2"
            radius="4px"
            size="32px"
            height="32px"
            self="auto"
            bg="#FFF"
            color={theme.stakingSecondaryText}
            value={depositAmount}
            onChange={(e) => {
              e.preventDefault();
              handleInput(e);
            }}
            autoFocus={true}
          />

          <MaxText onClick={() => setDepositAmountMax(maxAmount)}>Max: {maxAmount}</MaxText>
        </ItemHV2>
      </ItemVV2>

      <ItemHV2
        margin="20px 0"
        gap="12px"
      >
        <Button
          variant="primary"
          size="medium"
          onClick={approveDeposit}
          disabled={!depositApproved ? false : true}
        >
          {!depositApproved && !txInProgressApprDep && (
            <Span
              color="#FFFFFF"
              weight="400"
              cursor="pointer"
            >
              Approve {title}
            </Span>
          )}
          {txInProgressApprDep && !depositApproved && (
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={26}
              spinnerColor="#fff"
              title={'Approving'}
              titleColor="#FFF"
            />
          )}
          {depositApproved && (
            <Span
              color={theme.emptyButtonText}
              weight="600"
              cursor="default"
            >
              Approved
            </Span>
          )}
        </Button>
        <Button
          variant="outline"
          size="medium"
          disabled={!depositApproved || txInProgressDep ? true : false}
          onClick={depositAmountTokenFarmSingleTx}
        >
          {!txInProgressDep && 'Deposit'}
          {txInProgressDep && (
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={26}
              spinnerColor="#FFFFFF"
              title={'Depositing'}
              titleColor="#FFF"
            />
          )}
        </Button>
      </ItemHV2>
    </Container>
  );
};

export default StakingModalComponent;

const Container = styled.div`
  padding: 16px 20px;
  width: 340px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 500px) {
    width: 270px;
    padding: 16px 15px;
  }
`;

const PrimaryText = styled(H2V2)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${(props) => props.theme.stakingPrimaryText};
`;

const TokenInput = styled(Input)`
  background: transparent;
  width: 100%;
`;

const MaxText = styled.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`;
