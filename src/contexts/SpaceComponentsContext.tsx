// React + Web3 Essentials
import { createContext, FC, ReactNode } from 'react';

import {
  ISpaceBannerProps,
  ISpaceCreateWidgetProps,
  ISpaceFeedProps,
  ISpaceInvitesProps,
  ISpaceWidgetProps,
  SpacesUI,
} from '@pushprotocol/uiweb';

export interface IUseSpaceReturnValues {
  SpaceInvitesComponent: FC<ISpaceInvitesProps>;
  SpaceWidgetComponent: FC<ISpaceWidgetProps>;
  SpaceFeedComponent: FC<ISpaceFeedProps>;
  SpaceBannerComponent: FC<ISpaceBannerProps>;
  CreateSpaceComponent: FC<ISpaceCreateWidgetProps>;
}

export const SpaceComponentContext = createContext({});

const SpaceComponentContextProvider: FC<{
  spaceUI: SpacesUI;
  children: ReactNode;
}> = ({ spaceUI, children }) => {
  return (
    <SpaceComponentContext.Provider
      value={{
        SpaceInvitesComponent: spaceUI.SpaceInvites,
        SpaceWidgetComponent: spaceUI.SpaceWidget,
        SpaceBannerComponent: spaceUI.SpaceBanner,
        SpaceFeedComponent: spaceUI.SpaceFeed,
        CreateSpaceComponent: spaceUI.SpaceCreationButtonWidget,
      }}
    >
      {children}
    </SpaceComponentContext.Provider>
  );
};

export default SpaceComponentContextProvider;
