import { AlertProps, AlertVariant } from 'blocks';
import { ReactNode } from 'react';

export type ModalResponse = {
  isOpen: boolean;
  onClose: () => void;
  open: () => void;
};

export type UnlockProfileModalTypes = 'portal' | 'container';

export type EnvType = 'prod' | 'dev' | 'staging';

export type PurchasePlanAlertObjType = {
  description: AlertProps['description'];
  actionText: AlertProps['actionText'];
  variant: AlertVariant;
};

export type FAQItemTypes = {
  id: number;
  question: string;
  answer: ReactNode;
};
