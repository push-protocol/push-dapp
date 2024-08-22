import { ModalResponse } from 'common/common.types';
import { useState, useCallback } from 'react';

const useModal = (): ModalResponse => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    onClose,
    open,
  };
};

export { useModal };
