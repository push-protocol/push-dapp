import { FC } from 'react';
import { Box, Modal, Text, Tick } from 'blocks';
import { PricingPlansItemTypes } from 'modules/pricing/Pricing.types';
import PushLogoDark from '../../../assets/pushDark.svg';
import PushLogoLight from '../../../assets/pushLight.svg';
import styled from 'styled-components';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { ModalResponse } from 'common';

export type PlanPurchasedModalProps = {
  plan: PricingPlansItemTypes;
  modalControl: ModalResponse;
  onClose: () => void;
};

const PlanPurchasedModal: FC<PlanPurchasedModalProps> = ({ plan, modalControl, onClose }) => {
  const { mode } = useBlocksTheme();
  const { isOpen } = modalControl || {};
  return (
    <Modal
      size={'medium'}
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={{ children: 'Get Started' }}
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
          <Logo src={mode === 'light' ? PushLogoLight : PushLogoDark} />
          <Text
            textAlign="center"
            variant="h3-semibold"
          >
            Your {plan?.planName} plan is now active
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
            {plan?.planBenefits.map((benefit, benefitIndex) => (
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
                  {benefit?.limit && (
                    <Text
                      color="text-primary"
                      variant="bs-bold"
                    >
                      {benefit?.limit}
                    </Text>
                  )}
                  <Text
                    color="text-primary"
                    variant="bs-regular"
                  >
                    {benefit?.benefitName}
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

const Logo = styled.img`
  height: 40px;
`;
