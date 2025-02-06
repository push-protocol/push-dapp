import { FC, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { css } from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAccount } from 'hooks';
import { getRequiredFieldMessage, useDisclosure } from 'common';
import { useInitiatePaymentInfo } from 'queries';
import { PlanPurchasedModal } from './PlanPurchasedModal';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { getUSDCBalance, sendUSDC } from '../utils/handleUSDCutils';
import { addresses } from 'config';

import { PricingPlanTabsType } from 'modules/pricing/Pricing.types';
import { PurchasePlanModalTypes } from '../PusrchasePlan.types';
import { PricingPlanType } from 'queries/types/pricing';

import { Box, Button, ExternalLink, Link, TabItem, Tabs, Text, TextInput, Tick } from 'blocks';
import { ConfirmPurchaseModal } from './ConfirmPurchaseModal';

export type PurchaseSummeryProps = { selectedPlan: PricingPlanType };
const PurchaseSummery: FC<PurchaseSummeryProps> = ({ selectedPlan }) => {
  const pricingPlanTabs: TabItem[] = [
    { label: 'Yearly', key: 'yearly', children: null },
    { label: 'Monthly', key: 'monthly', children: null },
  ];

  const modalControl = useDisclosure();
  const successModalControl = useDisclosure();
  const { account, isWalletConnected, connect, chainId } = useAccount();
  const walletAddress = convertAddressToAddrCaip(account, chainId);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planType = searchParams.get('type');

  const isValidPricingPlan = (value: string | null): value is PricingPlanTabsType =>
    value === 'yearly' || value === 'monthly';

  const [selectedPricingPlanTab, setSelectedPricingPlanTab] = useState<PricingPlanTabsType>(
    isValidPricingPlan(planType) ? planType : 'monthly',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [modalType, setShowModalType] = useState<PurchasePlanModalTypes>(null);
  const [balance, setBalance] = useState<string | null | undefined>(null);

  const totalAmount = selectedPlan?.value ? selectedPlan?.value * (selectedPricingPlanTab === 'yearly' ? 12 : 1) : 0;
  const usdcBalance = 0;

  const { mutate: handleInitatePayment } = useInitiatePaymentInfo();

  useEffect(() => {
    const fetchBalance = async () => {
      if (window.ethereum && account) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const fetchedBalance = await getUSDCBalance(
          account,
          addresses?.usdcTokenAddress,
          provider,
          connect,
          isWalletConnected,
        );
        setBalance(fetchedBalance);
      }
    };
    fetchBalance();
  }, [account, isWalletConnected]);

  // const handleOnCloseModal = () => {
  //   if (modalType === 'confirmPurchase') {
  //     setShowModalType('planPurchased');
  //   } else {
  //     modalControl.onClose();
  //     setShowModalType(null);
  //   }
  // };

  const handleOpenFaucetLink = () => {
    window.open('https://faucet.circle.com/', '_blank');
  };

  // EIP191 signature
  const getEip191Signature = async (message: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner(account);

    const signature = await signer.signMessage(message);
    return signature;
  };

  const handlePurchase = async () => {
    const req = {
      body: {
        channel: walletAddress,
        pricingPlanId: selectedPlan?.id?.toString(),
      },
    };

    const messageHash = ethers.utils.hashMessage(
      JSON.stringify({
        channel: req.body.channel,
        content: req.body.pricingPlanId,
      }),
    );

    const verificationProof = await getEip191Signature(messageHash);

    console.log('Message Hash:', messageHash, 'verificationProof:', verificationProof);

    handleInitatePayment(
      {
        channel: walletAddress,
        pricingPlanId: selectedPlan?.id?.toString(),
        currency: 'USDC',
        network: chainId,
        verificationProof: verificationProof!,
        email: formik.values.email,
        duration: selectedPricingPlanTab === 'yearly' ? '12' : '1',
      },
      {
        onSuccess: (response) => {
          console.log('Response on the channels page', response);
          navigate(`/channel/${account}?paymentId=${response?.paymentId}`);
          setIsLoading(false);
        },
        onError: (error) => {
          console.log('Error in the channels', error);
          setIsLoading(false);
        },
      },
    );

    // modalControl?.close
  };

  const handleApproveAndPurchase = async () => {
    if (!isWalletConnected) {
      await connect();
    }
    setIsApproved(true);
    setIsLoading(true);

    modalControl.open();
    const paymentAmount = selectedPricingPlanTab === 'yearly' ? selectedPlan?.value * 12 : selectedPlan?.value;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    console.log(paymentAmount, 'there there');
    await sendUSDC(paymentAmount, addresses?.usdcRecipient, provider);

    // handlePurchase();
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required(getRequiredFieldMessage('Email')),
    }),
    onSubmit: handleApproveAndPurchase,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ initial: '50%', ml: '100%' }}
      gap="spacing-md"
      margin={{ ml: 'spacing-none spacing-none spacing-sm spacing-none' }}
      css={css`
        box-sizing: border-box;
      `}
    >
      {modalControl.isOpen && (
        <ConfirmPurchaseModal
          modalControl={modalControl}
          plan={selectedPlan}
          selectedPlanType={selectedPricingPlanTab === 'yearly' ? '12' : '1'}
        />
      )}

      {successModalControl.isOpen && (
        <PlanPurchasedModal
          modalControl={modalControl}
          plan={selectedPlan}
        />
      )}

      <Box>
        <Text variant="h3-semibold">Summary</Text>
        <Text
          color="text-tertiary"
          variant="bs-regular"
        >
          Each wallet can purchase a limited allocation of Nodes.
        </Text>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          padding="spacing-lg spacing-md"
          borderRadius="radius-lg"
          border="border-sm solid stroke-secondary"
          backgroundColor="surface-primary"
          gap="spacing-lg"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-md"
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text variant="bl-semibold">Plan</Text>
              <Text
                color="text-secondary"
                variant="bl-bold"
              >
                Push {selectedPlan?.name}
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text variant="bl-semibold">Duration</Text>
              <Tabs
                items={pricingPlanTabs}
                activeKey={selectedPricingPlanTab}
                variant="fill"
                onChange={(activeKey) => setSelectedPricingPlanTab(activeKey as PricingPlanTabsType)}
                alignTabs="center"
              />
            </Box>
          </Box>

          <TextInput
            label="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange('email')}
            error={formik.touched.email && Boolean(formik.errors.email)}
            errorMessage={formik.touched.email ? formik.errors.email : ''}
          />

          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-lg"
          >
            <Box
              display="flex"
              flexDirection="column"
              borderRadius="radius-sm"
              backgroundColor="surface-tertiary"
              padding="spacing-xs spacing-sm"
            >
              <Text variant="h5-semibold">Total Price</Text>
              <Text variant="h3-bold">{totalAmount} USDC</Text>
              {balance && isWalletConnected && (
                <Text
                  color="text-tertiary"
                  variant="bs-regular"
                  textAlign="right"
                >
                  Balance: {balance}
                </Text>
              )}
            </Box>

            {usdcBalance < 1 && (
              <Link
                style={{ alignSelf: 'center' }}
                to="#"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="spacing-xxxs"
                  onClick={handleOpenFaucetLink}
                >
                  <Text
                    color="text-brand-medium"
                    variant="bm-semibold"
                  >
                    Get more USDC
                  </Text>
                  <ExternalLink
                    size={16}
                    color="icon-brand-medium"
                  />
                </Box>
              </Link>
            )}
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            gap="spacing-md"
          >
            {/* <Box width={{ initial: '250px', ml: '100%' }}>
            <Button
              onClick={handleApprove}
              leadingIcon={isApproved ? <Tick /> : null}
              block
            >
              Approve
            </Button>
          </Box> */}
            <Box width={'100%'}>
              <Button
                loading={isLoading}
                disabled={isLoading}
                type="submit"
                block
              >
                Purchase
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export { PurchaseSummery };
