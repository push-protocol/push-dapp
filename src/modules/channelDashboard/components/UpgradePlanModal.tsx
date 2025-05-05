import { FC } from 'react';

import { ModalResponse } from 'common';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { useGetPricingInfo } from 'queries';
import { formatSentenceWithBoldNumbers, parseStringToArray } from 'modules/pricing/utils';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Modal, PushLogoWithNameDark, PushLogoWithNameLight, Text, Tick } from 'blocks';

export type ConfirmPurchaseModalProps = {
  modalControl: ModalResponse;
};

const UpgradePlanModal: FC<ConfirmPurchaseModalProps> = ({ modalControl }) => {
  const { isOpen, onClose } = modalControl;
  const { mode } = useBlocksTheme();
  const { data: pricingInfoList } = useGetPricingInfo();
  const navigate = useNavigate();

  const selectedPlan = pricingInfoList?.find((item) => item.name == 'Pro');

  return (
    <Modal
      size={'medium'}
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={null}
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
            Go Pro for $14.99/mo
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
            Upgrade to get access to the following features:
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-sm"
          >
            {parseStringToArray(selectedPlan?.description ?? '')?.map((benefit, benefitIndex) => (
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

        <Box>
          <Box
            display="flex"
            flexDirection="row"
            padding="spacing-sm"
            gap="spacing-sm"
          >
            <Button
              size="small"
              variant="outline"
              onClick={() => onClose()}
            >
              Continue for Free
            </Button>
            <Button
              size="small"
              onClick={() => navigate('/pricing')}
            >
              Go Pro for $14.99/mo
            </Button>
          </Box>
          <Text
            variant="bes-regular"
            color="text-tertiary"
            textAlign="center"
          >
            Compare all plans. Change or cancel anytime
          </Text>
        </Box>
      </Box>
    </Modal>
  );
};

export { UpgradePlanModal };
