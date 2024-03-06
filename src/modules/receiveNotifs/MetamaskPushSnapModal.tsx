// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useLocation } from 'react-router-dom';

// Internal Compoonents
import InstallPushSnapModal from 'components/PushSnap/InstallPushSnapModal';
import PushSnapConfigureModal from 'components/PushSnap/PushSnapConfigureModal';
import SnapInformationModal from 'components/PushSnap/SnapInformationModal';
import { Button } from 'components/SharedStyling';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import ArrowLeft from 'assets/chat/arrowleft.svg';
import { ImageV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { AppContext } from 'contexts/AppContext';
import EnableSnoozeModal from 'components/PushSnap/EnableSnoozeModal';
import { SnoozeDurationType } from 'types';

const MetamaskPushSnapModal = ({ onClose, closeEnabled = true }: { onClose: () => void; closeEnabled?: boolean }) => {
  const theme = useTheme();
  const location = useLocation();

  const [configure, setConfigure] = useState(false);
  const [snoozeDuration, setSnoozeDuration] = useState<SnoozeDurationType>({
    enabled: false,
    hrsLeft: 0
  });

  const { setSnapState, SnapState } = React.useContext(AppContext);

  const handleCloseModal = () => {
    var uri = window.location.toString();

    if (uri.indexOf('#') > 0) {
      var clean_uri = uri.substring(0, uri.indexOf('#'));

      window.history.replaceState({}, document.title, clean_uri);
    }

    setSnapState(1);
    onClose();
  };

  const isSnapRoute = location?.pathname === '/snap';

  return (
    <Container padding="20px 15px">
      <ItemHV2 justifyContent="space-between">

        {SnapState === 1 && (
          <SpanV2
            fontWeight="500"
            fontSize="20px"
            color={theme.modalMessageColor}
            flex="1"
          >
            Receive Notifications
          </SpanV2>
        )}
        {(SnapState == 3 || SnapState == 2) && (
          <ImageV2
            src={ArrowLeft}
            height="22px"
            width="22px"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSnapState(1);
            }}
          />
        )}
        {SnapState === 3 && (
          <SpanV2
            fontWeight="500"
            fontSize="22px"
            color={theme.modalMessageColor}
            flex="1"
          >
            Settings
          </SpanV2>
        )}
        {SnapState == 4 && (
          <ImageV2
            src={ArrowLeft}
            height="22px"
            width="22px"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSnapState(3);
            }}
          />
        )}

        {closeEnabled && (
          <Close
            onClick={handleCloseModal}
            style={{ cursor: 'pointer' }}
          />
        )}
      </ItemHV2>

      {SnapState == 1 && (
        <InstallPushSnapModal
          setSnapState={setSnapState}
          setConfigure={setConfigure}
          configure={configure}
        />
      )}
      {SnapState == 2 && <SnapInformationModal handleCloseModal={handleCloseModal} />}
      {SnapState == 3 && <PushSnapConfigureModal snoozeDuration={snoozeDuration} setSnoozeDuration={setSnoozeDuration} />}
      {SnapState == 4 && <EnableSnoozeModal setSnoozeDuration={setSnoozeDuration} />}
    </Container>
  );
};

export default MetamaskPushSnapModal;

const Container = styled(ItemVV2)`
  width: 420px;

  @media (max-width: 476px) {
    width: 360px;
  }
`;
