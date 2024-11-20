import { AlertVariant } from 'blocks/alert';

export type ModalResponse = {
  isOpen: boolean;
  onClose: () => void;
  open: () => void;
};

export type UnlockProfileModalTypes = 'portal' | 'container';

export type EnvType = 'prod' | 'dev' | 'staging';

export type PurchasePlanAlertObjType = {
  description: string;
  actionText: string;
  variant: AlertVariant;
};

export type FAQItemTypes = {
  id: number;
  question: string;
};
