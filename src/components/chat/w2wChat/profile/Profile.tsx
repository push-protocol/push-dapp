import React, { useContext } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { ImageV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { caip10ToWallet } from 'helpers/w2w';
import { Context } from 'modules/chat/ChatModule';
import styled, { useTheme } from 'styled-components';
import styles from './styles';

const Profile = ({ setActiveTab }: any): JSX.Element => {
  // theme context
  const theme = useTheme();

  const { connectedUser } = useContext(Context);

  return (
    <>
      {/* <Tooltip title="Profile" placement="top-start"> */}
      <WalletDetailsContainer
        direction="row"
        spacing={2}
        onClick={(): void => setActiveTab(2)}
      >
        <ItemVV2
          width="48px"
          maxWidth="48px"
          borderRadius="100%"
          overflow="hidden"
          margin="0 5px 0 0"
        >
          <ImageV2
            alt="Profile"
            src={connectedUser.profilePicture}
          />
        </ItemVV2>
        <SpanV2
          color={theme.default.secondaryColor}
          size="16px"
          weight="400"
        >
          {caip10ToWallet(connectedUser.wallets).slice(0, 8) + '...' + caip10ToWallet(connectedUser.wallets).slice(-7)}
        </SpanV2>
      </WalletDetailsContainer>
      {/* </Tooltip> */}
      {/* <IconButton aria-label="more">
        <MoreVertIcon />
      </IconButton> */}
    </>
  );
};

const WalletDetailsContainer = styled(Stack)`
  display: flex;
  align-items: center;
  displaytext-align: center;
  height: 100%;
`;
const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`;

export default Profile;
