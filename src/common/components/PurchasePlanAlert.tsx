import { Alert } from 'blocks';
import { PurchasePlanAlertObjType, purchasePlanAlertTypes } from 'common';
import { FC } from 'react';

export type PurchasePlanAlertProps = {
  variant: 'success' | 'renewalReminder' | 'expired' | 'notificationLimit';
  onClose?: () => void;
  purchasedPlan: { planName: string };
  onAction?: () => void;
};

const PurchasePlanAlert: FC<PurchasePlanAlertProps> = ({ variant, onClose, purchasedPlan, onAction }) => {
  const alert: PurchasePlanAlertObjType = purchasePlanAlertTypes[variant](purchasedPlan?.planName);
  return (
    <Alert
      variant={alert.variant}
      description={alert.description}
      onClose={alert.variant !== 'warning' ? () => onClose?.() : undefined}
      onAction={() => onAction?.()}
      actionText={alert.actionText}
    />
  );
};

export { PurchasePlanAlert };
