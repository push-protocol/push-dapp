import {
  ISpaceBannerProps,
  ISpaceCreateWidgetProps,
  ISpaceFeedProps,
  ISpaceInvitesProps,
  ISpaceWidgetProps,
  SpacesUI,
} from '@pushprotocol/uiweb';
import React, { useEffect, useState } from 'react';
import * as PushAPI from '@pushprotocol/restapi';
import { appConfig } from 'config';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

export interface IUseSpaceReturnValues {
  spaceUI: SpacesUI;
  SpaceInvitesComponent: React.FC<ISpaceInvitesProps>;
  SpaceWidgetComponent: React.FC<ISpaceWidgetProps>;
  SpaceFeedComponent: React.FC<ISpaceFeedProps>;
  SpaceBannerComponent: React.FC<ISpaceBannerProps>;
  CreateSpaceComponent: React.FC<ISpaceCreateWidgetProps>;
}

export const useSpaceComponents = (): IUseSpaceReturnValues => {
  const { account, library } = useWeb3React<ethers.providers.Web3Provider>();
  const librarySigner = library?.getSigner();

  const [pgpPrivateKey, setPgpPrivateKey] = useState('');

  const spaceUI = new SpacesUI({
    account: account,
    signer: librarySigner,
    pgpPrivateKey: pgpPrivateKey,
    env: appConfig?.appEnv,
  });

  useEffect(() => {
    (async () => {
      if (!account || !appConfig?.appEnv || !library) return;

      const user = await PushAPI.user.get({ account, env: appConfig?.appEnv });
      let pgpPrivateKey;
      const librarySigner = await library.getSigner(account);
      if (user?.encryptedPrivateKey) {
        pgpPrivateKey = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account,
          signer: librarySigner,
          env: appConfig?.appEnv,
        });
      }

      setPgpPrivateKey(pgpPrivateKey);
    })();
  }, [account, appConfig?.appEnv, library]);

  return {
    spaceUI,
    SpaceInvitesComponent: spaceUI.SpaceInvites,
    SpaceWidgetComponent: spaceUI.SpaceWidget,
    SpaceBannerComponent: spaceUI.SpaceBanner,
    SpaceFeedComponent: spaceUI.SpaceFeed,
    CreateSpaceComponent: spaceUI.SpaceCreationButtonWidget,
  };
};
