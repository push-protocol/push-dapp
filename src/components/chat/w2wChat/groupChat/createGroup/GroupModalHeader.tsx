import { ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React from 'react';

import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import { useDeviceWidthCheck } from 'hooks';
import { useTheme } from 'styled-components';

const GroupModalHeader = ({
    handlePrevious,
    handleClose,
    title,
    margin,
}) => {
    const isMobile = useDeviceWidthCheck(600);
    const themes = useTheme();
    return (
        <ItemHV2
            justifyContent='center'
            alignItems="center"
            margin={margin}
        >
            {handlePrevious &&
                (<Back
                    onClick={handlePrevious}
                    style={{ cursor: 'pointer' }}
                />)
            }

            <SpanV2
                fontWeight="500"
                fontSize="24px"
                color={themes.fontColor}
                flex="1"
            >
                {title}
            </SpanV2>
            <Close
                onClick={() => handleClose()}
                style={{ cursor: 'pointer'}}
            />
        </ItemHV2>
    );
};

export default GroupModalHeader;