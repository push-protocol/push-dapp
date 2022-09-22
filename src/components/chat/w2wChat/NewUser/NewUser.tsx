// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import ArrowLeft from '../../../../assets/chat/arrowleft.svg';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';

import { Context } from 'sections/chat/ChatMainSection';

function NewUser() {
  const { setActiveTab } = useContext(Context);
  return (
    <ItemVV2
      alignItems="stretch"
      justifyContent="flex-start"
    >
      <ItemHV2
        justifyContent="flex-start"
        width="100%"
        flex="initial"
        margin="20px 0px 0px 0px"
        padding="0px 0px 14px 0px"
        style={{ borderBottom: '2px solid #D53893' }}
      >
        <ImageV2
          src={ArrowLeft}
          height="18px"
          width="22px"
          onClick={() => setActiveTab(0)}
        />
        <SpanV2
          color="#D53893"
          margin="0px 0px 0px 7px"
        >
          New Chat
        </SpanV2>
      </ItemHV2>
      <ItemHV2
        justifyContent="space-between"
        width="100%"
        flex="initial"
      >
        <SearchBarContent>
          <Input
            type="text"
            placeholder="Search name.eth or 0x123..."
          />

          <ItemVV2
            position="absolute"
            alignItems="flex-end"
            width="24px"
            height="24px"
            top="32px"
            right="16px"
          >
            {/* {isLoadingSearch && (
              <LoaderSpinner
                type={LOADER_TYPE.SEAMLESS}
                width="auto"
                spinnerSize={24}
                spinnerColor={theme.default.secondaryColor}
              />
            )} */}
            <SearchIcon style={{ cursor: 'pointer' }} />
          </ItemVV2>
        </SearchBarContent>
      </ItemHV2>
    </ItemVV2>
  );
}

const SearchBarContent = styled.form`
  position: relative;
`;

// const Close = styled(CloseIcon)`
//   position: absolute;
//   top: 23px;
//   right: 55px;
//   cursor: pointer;
// `;

const SearchLoader = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  height: 25px;
  width: 20px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 297px;
  height: 48px;
  padding: 13px 60px 13px 21px;
  margin: 20px 0px 17px 0px;
  border-radius: 99px;
  border: 1px solid transparent !important;
  background-color: #f4f5fa;
  &:focus {
    outline: none;
    background-image: linear-gradient(#f4f5fa, #f4f5fa), linear-gradient(to right, #cf1c84, #8ed6ff);
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
  }
`;

export default NewUser;
