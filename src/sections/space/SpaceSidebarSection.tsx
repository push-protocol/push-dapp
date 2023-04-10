// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import { SpaceSidebar, SpaceSidebarTabs } from 'components/space';
// import Profile from "components/chat/w2wChat/profile";

// Internal Configs

export const SpaceSidebarSection = () => {

  // RENDER
  return (
    <>
    <SpaceSidebarTabs />
    <SpaceSidebar />
    {/* <Profile/> */}
    </>);
};
