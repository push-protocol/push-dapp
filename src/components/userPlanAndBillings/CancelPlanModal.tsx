import { FC } from 'react';

import { ModalResponse } from 'common';
import { PricingInfoResponse, PricingPlanStatusResponse } from 'queries/types/pricing';

import { Box, Cross, Modal, Text } from 'blocks';
import { parseStringToArray } from 'modules/pricing/utils';
import { calculateExpirationDetails } from 'components/userSettings/utils';

type CancelPlanModalProps = {
  modalControl: ModalResponse;
  pricingInfoList: PricingInfoResponse;
  pricingPlanStatus: PricingPlanStatusResponse;
};

const CancelPlanModal: FC<CancelPlanModalProps> = ({ modalControl, pricingInfoList, pricingPlanStatus }) => {
  const { isOpen, onClose } = modalControl;
  const activeList = pricingInfoList?.filter((item) => item?.id == parseInt(pricingPlanStatus?.pricing_plan_id!))[0];
  const expiryDetails = calculateExpirationDetails(pricingPlanStatus!);

  return (
    <Modal
      size="medium"
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={{
        children: 'Go Back',
        onClick: () => {
          onClose();
        },
      }}
      cancelButtonProps={{
        children: 'Cancel Plan',
        onClick: () => {
          // cancel plan
          console.log('cancel plan', activeList);
        },
      }}
    >
      <Box width="100%">
        <Text
          variant="h3-semibold"
          color="text-primary"
          textAlign="center"
        >
          We’re sorry to see you go
        </Text>
        <Text
          variant="bs-regular"
          color="text-tertiary"
          textAlign="center"
        >
          If you cancel you will be able to continue using Push {activeList?.name} features until{' '}
          {expiryDetails?.expirationDate}. Once the billing term ends:
        </Text>

        <Box
          display="flex"
          flexDirection="column"
          margin="spacing-md spacing-none"
          gap="spacing-sm"
        >
          {parseStringToArray(activeList?.description).map((item) => (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              gap="spacing-xxs"
            >
              <Cross
                size={24}
                color="icon-primary"
              />

              <Text
                variant="bs-regular"
                color="text-primary"
                textAlign="center"
              >
                {item}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default CancelPlanModal;
