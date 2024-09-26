export type ModalResponse = {
  isOpen: boolean;
  onClose: () => void;
  open: () => void;
};

export const VAR_MODAL_POSITION = {
  ON_ROOT: 'ON_ROOT',
  ON_PARENT: 'ON_PARENT',
} as const;

export type MODAL_POSITION_TYPE = keyof typeof VAR_MODAL_POSITION;
