import GLOBALS from 'config/Globals';
import { Content, Item, Section } from 'primaries/SharedStyling';
import React, { useEffect, useState } from 'react';
import { FiSearch, FiSliders } from 'react-icons/fi';
import Feedbox from 'segments/Feedbox';
import Spambox from 'segments/Spambox';
import styled, { useTheme } from 'styled-components';

const InboxComponent = () => {
  const [showInbox, setShowInbox] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState('');
  const themes = useTheme();

  const toggleShowInbox = () => setShowInbox((prev) => !prev);
  const toggleShowFilter = () => setShowFilter((prev) => !prev);

  const handleToggle = () => {
    toggleShowInbox();
    setShowFilter(false);
    setSearch('');
  };

  return (
    <Container>
      <NavBoxHolder>
        <NavHolder>
          <NavTitleButton isActive={showInbox} onClick={handleToggle}>
            Inbox
          </NavTitleButton>
          <NavTitleButton isActive={!showInbox} onClick={handleToggle}>
            Spam
          </NavTitleButton>
        </NavHolder>
        <SearchContainer>
          <SearchBar
            type="text"
            className="input"
            placeholder="Search Notification"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <ItemIcon position="absolute" top="0" bottom="0" left="22px">
            <FiSearch size={18} style={{ color: '#657795' }} />
          </ItemIcon>

          <ItemIconRotate position="absolute" top="0" bottom="0" right="22px" onClick={toggleShowFilter}>
            <FiSliders size={18} style={{ color: '#657795' }} />
          </ItemIconRotate>
        </SearchContainer>
      </NavBoxHolder>
      {showInbox ? (
        <Feedbox showFilter={showFilter} setShowFilter={setShowFilter} search={search} setSearch={setSearch} />
      ) : (
        <Spambox showFilter={showFilter} setShowFilter={setShowFilter} search={search} setSearch={setSearch} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: stretch;
  align-self: stretch;
`;

const NavBoxHolder = styled.div`
  margin: 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  // height: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    margin: 40px 30px;
  }

  :after {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0;
    width: 100%;
    content: '';
    background-color: ${props => props.theme.default.border};
  }
`;

const NavHolder = styled.div`
  display: flex;
  align-self: flex-end;
  padding-bottom: 15px;
  padding-top: 0px;

  @media (max-width: 768px) {
    align-self: flex-start;
    padding-top: 15px;
  }
`;

const NavTitleButton = styled.div`
  width: 48;
  height: 25px;
  padding: 0 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${(props) => (props.isActive ? '#CF1C84' : props.theme.color)};
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -15px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}
`;

// css styles
const SearchContainer = styled(Item)`
  position: relative;
  max-width: 496px;
  min-width: 320px;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 44px;
  padding-left: 50px;
  border-radius: 99px;
  border: none;
  background: #F4F5FA;
  // background: ${(props) => props.theme.viewChannelSearchBg};
  // color: ${(props) => props.theme.viewChannelSearchText};
  color: #657795;

  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  input[type="reset"] {
    display: none;
  }
  &::placeholder {
  color: #657795;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &:focus {
    // border: 1px solid #ec008c;
  }
`;

const ItemIcon = styled(Item)`
  cursor: pointer;
`;

const ItemIconRotate = styled(Item)`
  cursor: pointer;
  transform: rotate(90deg);
`;

export default InboxComponent;
