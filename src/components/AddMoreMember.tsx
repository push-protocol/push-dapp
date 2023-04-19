// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ItemHV2, SpanV2 } from './reusables/SharedStylingV2';
import { ReactComponent as AddMember } from 'assets/chat/group-chat/addicon.svg';

export const AddMoreMember = ({ showAddMoreMemberModal, title }) => {
  const theme = useTheme();

  return (
    <AddWalletContainer onClick={() => showAddMoreMemberModal(true)}>
      <AddMember />
      <SpanV2
        color={theme.modalProfileTextColor}
        margin="0px 14px"
        fontSize="18px"
        fontWeight="400"
      >
        {title}
      </SpanV2>
    </AddWalletContainer>
  );
};

const AddWalletContainer = styled(ItemHV2)`
  border: 1px solid ${(props) => props.theme.default.border};
  border-radius: 16px;
  padding: 15px 24px;
  margin-bottom: 15px;
  cursor: pointer;
`;
