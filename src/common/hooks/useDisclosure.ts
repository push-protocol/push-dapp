import { ModalResponse } from 'common/Common.types';
import { useState, useCallback } from 'react';

const useDisclosure = (): ModalResponse => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    onClose,
    open,
  };
};

export { useDisclosure };
