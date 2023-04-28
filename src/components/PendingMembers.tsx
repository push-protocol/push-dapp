// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import { ProfileImage } from './ProfileImage';
import { caip10ToWallet } from 'helpers/w2w';

export const PendingMembers = ({
  setshowPendingRequests,
  showPendingRequests,
  pendingMemberData,
  backgroundColor,
  pendingHeader,
}) => {
  const theme = useTheme();
  console.log("pending members",pendingMemberData);
  return (
    <PendingMembersContainer
      border={`1px solid ${theme.default.border}`}
      borderRadius="16px"
      margin="0px 0px 15px 0px"
    >
      <ItemHV2
        justifyContent="space-between"
        padding="13px 20px 13px 16px"
        onClick={() => setshowPendingRequests(!showPendingRequests)}
      >
        <ItemHV2 justifyContent="flex-start">
          <SpanV2
            fontSize="18px"
            fontWeight="400"
            color={theme.modalProfileTextColor}
          >
            {pendingHeader}
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
            {pendingMemberData?.length}
          </SpanV2>
        </ItemHV2>
        <ToggleArrowImg filter={theme.scheme == 'dark' ? theme.snackbarBorderIcon : 'brightness(0) invert(55%)'}>
          <img
            alt="arrow"
            className={`${showPendingRequests ? 'down' : 'up'}`}
            src="/svg/arrow.svg"
          />
        </ToggleArrowImg>
      </ItemHV2>
      {showPendingRequests && (
        <PendingRequestContainer minHeight={pendingMemberData?.length < 4 ? 56 * pendingMemberData?.length : 224}>
          {pendingMemberData?.map((member) => {
            return (
              <ItemHV2
                key={member.wallet}
                justifyContent="flex-start"
                background={backgroundColor}
                padding="8px 16px"
                margin="2px 0px 0px 0px"
              >
                <ProfileImage
                  imageSrc={member?.image}
                  dimension="36px"
                  borderRadius="50%"
                  margin="0px 12px 0px 0px"
                />
                <SpanV2
                  fontSize="18px"
                  fontWeight="400"
                  color={theme.modalProfileTextColor}
                >
                  {shortenText( caip10ToWallet(member?.wallet), 6)}
                </SpanV2>
              </ItemHV2>
            );
          })}
        </PendingRequestContainer>
      )}
    </PendingMembersContainer>
  );
};

const PendingMembersContainer = styled(ItemVV2)`
  box-sizing: border-box;
  max-width: 445px;
  @media (max-width: 480px) {
    // max-width: 300px;
    min-width: 300px;
  }
`;

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
