// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'components/SharedStyling';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import InstallMetamaskSnapModal from 'components/MetamaskSnap/InstallMetamaskSnapModal';
import SnapInformationModal from 'components/MetamaskSnap/SnapInformationModal';
import MetamaskSnapConfigureModal from 'components/MetamaskSnap/MetamaskSnapConfigureModal';


const MetamaskPushSnapModal = ({
    onClose
}) => {
    const theme = useTheme();

    const [SnapState, setSnapState] = useState(1);
    const [configure, setConfigure] = useState(false);




    return (
        <Container padding="20px 15px" >
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


        </Container>
    );
};

export default MetamaskPushSnapModal;

const Container = styled(ItemVV2)`
    min-width:420px;

    @media(max-width:476px){
        min-width:360px;
    }

`   