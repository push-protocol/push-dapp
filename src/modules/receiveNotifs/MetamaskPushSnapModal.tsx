import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { Button } from 'components/SharedStyling';
import InstallMetamaskSnapModal from 'components/MetamaskSnap/InstallMetamaskSnapModal';
import SnapInformationModal from 'components/MetamaskSnap/SnapInformationModal';
import MetamaskSnapConfigureModal from 'components/MetamaskSnap/MetamaskSnapConfigureModal';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';


const MetamaskPushSnapModal = ({
    onClose
}) => {
    const theme = useTheme();

    const [SnapState, setSnapState] = useState(1);
    const [configure, setConfigure] = useState(false);




    return (
        <ItemVV2 padding="20px 15px" width="420px">
            <ItemHV2 justifyContent='space-between'>

                {SnapState !== 1 && <Back width='24px' cursor='pointer' onClick={()=>setSnapState(1)}/>}

                {SnapState === 1 && <SpanV2
                    fontWeight="500"
                    fontSize="20px"
                    color={theme.modalMessageColor}
                    flex="1"
                >
                    Receive Notifications
                </SpanV2>}
                <Close
                    onClick={() => onClose()}
                    style={{ cursor: 'pointer' }}
                />
            </ItemHV2>

            {SnapState == 1 && <InstallMetamaskSnapModal setSnapState={setSnapState} setConfigure={setConfigure} configure={configure} />}
            {SnapState == 2 && <SnapInformationModal />}
            {SnapState == 3 && <MetamaskSnapConfigureModal />}


        </ItemVV2>
    );
};

export default MetamaskPushSnapModal;