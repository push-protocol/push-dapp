import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { ModalResponse } from 'common';
import { PricingPlanType } from 'queries/types/pricing';

import { Box, Modal, PushLogoWithNameDark, PushLogoWithNameLight, Text, Tick } from 'blocks';
import { formatSentenceWithBoldNumbers, parseStringToArray } from 'modules/pricing/utils';

export type PlanPurchasedModalProps = {
  plan: PricingPlanType;
  modalControl: ModalResponse;
  paymentId: string;
  account: string;
  channelStatus: boolean;
};

const PlanPurchasedModal: FC<PlanPurchasedModalProps> = ({ plan, modalControl, paymentId, account, channelStatus }) => {
  const { mode } = useBlocksTheme();
  const { isOpen, onClose } = modalControl;
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (channelStatus) {
      navigate(`/channel/${account}?paymentId=${paymentId}`);
    } else {
      navigate(`/create/channel?paymentId=${paymentId}`);
    }
  };
  return (
    <Modal
      size={'medium'}
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={{ children: 'Get Started', onClick: () => handleRedirect() }}
      cancelButtonProps={null}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-md"
          alignItems="center"
        >
          {mode === 'light' ? <PushLogoWithNameLight /> : <PushLogoWithNameDark />}
          <Text
            textAlign="center"
            variant="h3-semibold"
          >
            Your {plan?.name} plan is now active
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-md"
          padding="spacing-none spacing-none spacing-md spacing-none"
          alignItems="center"
        >
          <Text
            color="text-tertiary"
            variant="bs-regular"
          >
            You now have access to the following features:
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-sm"
          >
            {parseStringToArray(plan?.description)?.map((benefit, benefitIndex) => (
              <Box
                flexDirection="row"
                display="flex"
                key={`${benefitIndex}-plan-benefits-item-keys`}
                gap="spacing-xxs"
              >
                <Tick
                  color="icon-tertiary"
                  size={17}
                />
                <Box
                  flexDirection="row"
                  display="flex"
                  gap="spacing-xxxs"
                >
                  <Text
                    color="text-primary"
                    variant="bs-regular"
                  >
                    {formatSentenceWithBoldNumbers(benefit)}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export { PlanPurchasedModal };
