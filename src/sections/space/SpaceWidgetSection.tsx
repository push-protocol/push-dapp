// React + Web3 Essentials
import { useContext, useState } from 'react';

// External Packages
import { useNavigate } from 'react-router-dom';

// Internal Compoonents
import { SpaceContext } from 'contexts/SpaceContext';
import { SpaceComponentContext } from 'contexts/SpaceComponentsContext';
import { useAccount, useDeviceWidthCheck } from 'hooks';

export const SpaceWidgetSection = () => {
  const { SpaceWidgetComponent } = useContext(SpaceComponentContext);
  const { account } = useAccount();
  const { spaceId, setSpaceId } = useContext(SpaceContext);
  const [width] = useState<string>('400');
  const [zIndex] = useState<string>('1000');
  const isMobile = useDeviceWidthCheck(480);
  const navigate = useNavigate();

  const handleClose = () => {
    setSpaceId(null);
    navigate('/spaces');
  };

  return (
    <SpaceWidgetComponent
      account={account}
      spaceId={spaceId}
      width={isMobile ? '100%' : Number(width)}
      zIndex={Number(zIndex)}
      onClose={handleClose}
      rightOffset={isMobile ? 0 : 23}
      bottomOffset={isMobile ? 0 : 33}
      //   share={{
      //     shareUrl: shareUrl,
      //     shareOptions: ['Lenster', 'Twitter', 'CopyShareUrl'],
      //   }}
    />
  );
};
