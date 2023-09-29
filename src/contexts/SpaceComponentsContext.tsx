// React + Web3 Essentials
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

// External imports
import * as PushAPI from '@pushprotocol/restapi';

// Internal Components imports
import { appConfig } from 'config';

import {
    ISpaceBannerProps,
    ISpaceCreateWidgetProps,
    ISpaceFeedProps,
    ISpaceInvitesProps,
    ISpaceWidgetProps,
    SpacesUI,
  } from '@pushprotocol/uiweb';

export interface IUseSpaceReturnValues {
    SpaceInvitesComponent: React.FC<ISpaceInvitesProps>;
    SpaceWidgetComponent: React.FC<ISpaceWidgetProps>;
    SpaceFeedComponent: React.FC<ISpaceFeedProps>;
    SpaceBannerComponent: React.FC<ISpaceBannerProps>;
    CreateSpaceComponent: React.FC<ISpaceCreateWidgetProps>;
}

export const SpaceComponentContext = createContext({});

const SpaceComponentContextProvider: React.FC<{
    spaceUI: SpacesUI,
    children: React.ReactNode
}> = ({ spaceUI, children }) => {


  return <SpaceComponentContext.Provider value={{
        SpaceInvitesComponent: spaceUI.SpaceInvites,
        SpaceWidgetComponent: spaceUI.SpaceWidget,
        SpaceBannerComponent: spaceUI.SpaceBanner,
        SpaceFeedComponent: spaceUI.SpaceFeed,
        CreateSpaceComponent: spaceUI.SpaceCreationButtonWidget,
  }}>{children}</SpaceComponentContext.Provider>;
};

export default SpaceComponentContextProvider;
