// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// Internal Compoonents
import { useSpaceComponents } from 'hooks/useSpaceComponents';
import { SpaceContext } from 'contexts/SpaceContext';

export const SpaceWidgetSection = () => {
  const { SpaceWidgetComponent } = useSpaceComponents();
  const { spaceId } = useContext(SpaceContext)
  // const [spaceId, setSpaceId] = useState<string>('spaceId');
  const [width, setWidth] = useState<string>('400');
  const [zIndex, setZIndex] = useState<string>('1000');
  const [shareUrl, setShareUrl] = useState<string>('');
  const [isHost, setisHost] = useState<boolean>(false);
  const [isLive, setisLive] = useState<boolean>(false);
  const [isMember, setisMember] = useState<boolean>(false);
  const [isJoined, setisJoined] = useState<boolean>(false);
  const [isTimeToStartSpace, setisTimeToStartSpace] = useState<boolean>(false);
  return (
    <SpaceWidgetComponent
      spaceId={spaceId}
      width={Number(width)}
      zIndex={Number(zIndex)}
    //   share={{
    //     shareUrl: shareUrl,
    //     shareOptions: ['Lenster', 'Twitter', 'CopyShareUrl'],
    //   }}
      isHost={isHost}
      isLive={isLive}
      isJoined={isJoined}
      isMember={isMember}
      isTimeToStartSpace={isTimeToStartSpace}
    />
  );
};
