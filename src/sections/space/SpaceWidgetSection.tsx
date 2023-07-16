// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// Internal Compoonents
import { useSpaceComponents } from 'hooks/useSpaceComponents';
import { SpaceContext } from 'contexts/SpaceContext';
import { useWeb3React } from '@web3-react/core';

export const SpaceWidgetSection = () => {
  const { SpaceWidgetComponent } = useSpaceComponents();
  const { account } = useWeb3React();
  const {spaceId, setSpaceId} = useContext(SpaceContext);
  const [width, setWidth] = useState<string>('400');
  const [zIndex, setZIndex] = useState<string>('1000');
  const [shareUrl, setShareUrl] = useState<string>('');

  const handleClose = ()=>{
    setSpaceId(null);
  }

  console.log("Account",account);


  return (
    <SpaceWidgetComponent
      account={account}
      spaceId={spaceId}
      width={Number(width)}
      zIndex={Number(zIndex)}
      onClose={handleClose}
    //   share={{
    //     shareUrl: shareUrl,
    //     shareOptions: ['Lenster', 'Twitter', 'CopyShareUrl'],
    //   }}
    />
  );
};