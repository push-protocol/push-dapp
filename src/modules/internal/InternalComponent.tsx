import React, { useState } from 'react';
import GLOBALS from 'config/Globals';
import ProgressBar from 'components/reusables/progress/ProgressBarUnit';
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import styled from 'styled-components';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

export const InternalComponent = ({ onClose, onConfirm }: ModalInnerComponentType) => {
  const [progress, setProgress] = useState(50);
  return (
    <IndividualComps caption="components/reusables/progress/ProgressBarUnit">
      <ProgressBar
        percent={progress}
        color={GLOBALS.COLORS.PRIMARY_PINK}
      />
    </IndividualComps>
  );
};

const IndividualComps = styled(ItemVV2)`
  border-radius: 32px;
  border: 1px solid ${(props) => props.theme.default.secondaryBg};
  background: ${(props) => props.theme.default.secondaryBg};
  margin: 20px;
  min-height: 100px;
  min-width: 100%;
  overflow: hidden;

  &:after {
    background: ${(props) => props.theme.nav.bg};
    bottom: 0;
    content: '${(props) => props.caption}';
    font-size: 10px;
    left: 0;
    padding: 2px;
    position: absolute;
    right: 0;
    text-align: center;
    z-index: 100;
  }
`;
