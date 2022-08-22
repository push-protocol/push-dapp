import React,{useEffect,useState} from "react";
import styled, { useTheme } from "styled-components";
import { Item,} from "primaries/SharedStyling";
import { AiOutlineSearch,AiOutlineMenuUnfold } from "react-icons/ai";
import Feedbox from "segments/Feedbox";
import Spambox from "segments/Spambox";


const InboxComponent = ()=>{
    const [showInbox, setShowInbox] = useState(true);
    const [showFilter, setShowFilter] = useState(false);
    const themes = useTheme();

    const toggleShowInbox = ()=> setShowInbox((prev)=> !prev)
    const toggleShowFilter = ()=> setShowFilter((prev)=> !prev)

    const handleToggle = () =>{
      toggleShowInbox()
      setShowFilter(false)
    }
    
    return(
        <>
            <NavBoxHolder>
                <div style={{display:'flex'}}>
                    <NavTitleButton isActive={showInbox} onClick={handleToggle}>Inbox</NavTitleButton>
                    <NavTitleButton isActive={!showInbox} onClick={handleToggle}>Spam</NavTitleButton>
                </div>
                <SearchContainer
              >
                <SearchBar
                  type="text"
                  className="input"
                  placeholder="Search Notification"
                />
                <ItemIcon
                  position="absolute"
                  top="0"
                  bottom="0"
                  left="22px"
                >
                  <AiOutlineSearch size={20} style={{ color: themes.viewChannelSearchIcon }} />
                </ItemIcon>

                <ItemIcon
                  position="absolute"
                  top="0"
                  bottom="0"
                  right="22px"
                  onClick={toggleShowFilter}
                >
                  <AiOutlineMenuUnfold size={20} style={{ color: themes.viewChannelSearchIcon }} />
                </ItemIcon>
              </SearchContainer>
            </NavBoxHolder>

            {showInbox ? <Feedbox showFilter={showFilter}/> : <Spambox showFilter={showFilter}/>}
        </>
    )
}

const NavBoxHolder = styled.div`
    margin: 30px 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    :after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: 0;
        width: 100%;
        content: '';
        background-color: #E4E8EF;
    }

`

const NavTitleButton = styled.div`
    width: 48;
    height: 25px;
    padding: 0 25px;
    padding-bottom: 13px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 141%;
    text-align: center;
    position: relative;
    color: ${(props) => (props.isActive ? "#CF1C84" : props.theme.color)};
    cursor: pointer;
    
    ${(props) =>
        props.isActive &&
        `&:after{
            position: absolute;
            height: 2px;
            left: 0;
            bottom: -10px;
            width: 100%;
            content: '';
            background-color: #CF1C84;
            z-index: 1;
            
        }`
    }
`

// css styles
const SearchContainer = styled(Item)`
  position: relative;
  top: -14px;
  max-width: 496px;
  min-width: 320px;
  @media (max-width: 768px) {
    min-width: 320px;
  }

  @media (max-width: 480px) {
    min-width: 210px;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 50px;
  border-radius: 99px;
  border: 1px solid ${props => props.theme.viewChannelSearchBorder} !important;

  background: ${props => props.theme.viewChannelSearchBg};
  color: ${props => props.theme.viewChannelSearchText};
  
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  input[type="reset"] {
    display: none;
  }
  &::placeholder {
    letter-spacing: 0.15em;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &:focus {
    border: 1px solid #ec008c;
  }
`;

const ItemIcon = styled(Item)`
    cursor: pointer;
`;

export default InboxComponent