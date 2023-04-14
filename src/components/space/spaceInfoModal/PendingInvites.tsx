// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import { spaces } from 'services/space/spaceList';

export const PendingInvites = ({ setShowPendingInvites, showPendingInvites }) => {
  const theme = useTheme();
  const selectedSpace = spaces[0];

  return (
    <ItemVV2
      border={`1px solid ${theme.default.border}`}
      borderRadius="16px"
      margin="0px 0px 15px 0px"
      maxWidth="445px"
      style={{ boxSizing: 'border-box' }}
    >
      <ItemHV2
        justifyContent="space-between"
        padding="13px 20px 13px 16px"
        onClick={() => setShowPendingInvites(!showPendingInvites)}
      >
        <ItemHV2 justifyContent="flex-start">
          <SpanV2
            fontSize="18px"
            fontWeight="400"
            color={theme.modalProfileTextColor}
          >
            Pending Invites
          </SpanV2>
          <SpanV2
            background="#CF1C84"
            color="#FFFFFF"
            fontSize="13px"
            fontWeight="700"
            borderRadius="8px"
            padding="4px 12px"
            margin="0px 0px 0px 8px"
          >
            {selectedSpace?.pendingMembers?.length}
          </SpanV2>
        </ItemHV2>
        <ToggleArrowImg filter={theme.scheme == 'dark' ? theme.snackbarBorderIcon : 'brightness(0) invert(55%)'}>
          <img
            alt="arrow"
            className={`${showPendingInvites ? 'down' : 'up'}`}
            src="/svg/arrow.svg"
          />
        </ToggleArrowImg>
      </ItemHV2>
      {showPendingInvites && (
        <PendingRequestContainer minHeight={selectedSpace?.pendingMembers?.length < 4 ? 56 * selectedSpace?.members?.length : 224}>
          {selectedSpace?.pendingMembers?.map((member) => {
            return (
              <ItemHV2
                key={member.wallet}
                justifyContent="flex-start"
                padding="8px 16px"
                margin="2px 0px 0px 0px"
              >
                <ItemVV2
                  height="36px"
                  maxWidth="36px"
                  borderRadius="100%"
                  overflow="hidden"
                  margin="0px 12px 0px 0px"
                >
                  <ImageV2
                    objectFit="cover"
                    src={member?.image}
                    alt="profilePicture"
                  />
                </ItemVV2>
                <SpanV2
                  fontSize="18px"
                  fontWeight="400"
                  color={theme.modalProfileTextColor}
                >
                  {/* {shortenText(member?.wallet?.split(':')[1], 6)} */}
                  {shortenText(member?.wallet, 6)}
                </SpanV2>
              </ItemHV2>
            );
          })}
        </PendingRequestContainer>
      )}
    </ItemVV2>
  );
};

const PendingRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 224px;
  min-heght: ${(props) => props.minHeight || '224px'};
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0px 0px 16px 16px;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
  }
`;

const ToggleArrowImg = styled.div`
  margin-left: 2rem;
  filter: ${(props) => props.filter};
  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`;
