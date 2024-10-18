export type ModalResponse = {
  isOpen: boolean;
  onClose: () => void;
  open: () => void;
};

export type UnlockProfileModalTypes = 'portal' | 'container';

export type EnvType = 'prod' | 'dev' | 'staging';
