import {
  ISpaceBannerProps,
  ISpaceCreateWidgetProps,
  ISpaceFeedProps,
  ISpaceInvitesProps,
  ISpaceWidgetProps,
  SpacesUI,
} from '@pushprotocol/uiweb';
import React, { useContext } from 'react';
import * as PushAPI from '@pushprotocol/restapi';
import { appConfig } from 'config';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { ChatUserContext } from 'contexts/ChatUserContext';

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

  const { pgpPvtKey } = useContext(ChatUserContext);

  console.log("pgpPvtKey >>>>>>>",pgpPvtKey)

  const spaceUI = new SpacesUI({
    account: account,
    signer: librarySigner,
    pgpPrivateKey: pgpPvtKey,
    env: appConfig?.appEnv,
  });

  return {
    spaceUI,
    SpaceInvitesComponent: spaceUI.SpaceInvites,
    SpaceWidgetComponent: spaceUI.SpaceWidget,
    SpaceBannerComponent: spaceUI.SpaceBanner,
    SpaceFeedComponent: spaceUI.SpaceFeed,
    CreateSpaceComponent: spaceUI.SpaceCreationButtonWidget,
  };
};
