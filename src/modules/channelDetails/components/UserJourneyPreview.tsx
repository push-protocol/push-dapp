import { Box, Modal } from 'blocks';
import { ModalResponse } from 'common';
import { FC } from 'react';

export type UserJourneyProps = { videoLink: string; modalControl: ModalResponse };
const UserJourney: FC<UserJourneyProps> = ({ videoLink, modalControl }) => {
  const { isOpen, onClose } = modalControl;
  return (
    <Modal
      size="large"
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      <Box
        width="100%"
        height={{ initial: '80vh', ml: 'auto' }}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoLink}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Modal>
  );
};

export { UserJourney };
