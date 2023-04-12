// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import { SpaceSidebar, SpaceSidebarTabs } from 'components/space';
import { Button } from 'primaries/SharedStyling';
import useModalBlur from 'hooks/useModalBlur';
import { MODAL_POSITION } from 'hooks/useModalBlur';
import useToast from 'hooks/useToast';
import CreateSpaceModal from 'components/space/spaceModals/CreateSpaceModal';

// Internal Configs

export const SpaceSidebarSection = ({
  showCreateSpaceModal
}) => {

  // RENDER
  return (
    <>

    <div>
      Space Sidebar Section
    </div>

    <Button onClick={showCreateSpaceModal}>Create Space</Button>

    <SpaceSidebarTabs />
    <SpaceSidebar />
    {/* Profile */}
    </>);
};
