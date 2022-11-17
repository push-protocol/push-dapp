// React + Web3 Essentials
import React from "react";

// External Packages
import styled, { useTheme } from "styled-components";

// Internal Components
import {
  A, Image, ItemH, RouterLink, Span
} from "../primaries/SharedStyling.js";

// Create Dropdown
function Dropdown(props) {
  const theme = useTheme();
  const copyToClipboard = (address) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(address);
    } else {
      const el = document.createElement("textarea");
      el.value = address;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  };
  return (
    <>
      {props.dropdownValues.map((dropdownValue) =>
        dropdownValue.id === "walletAddress" ? (
          <ItemH
            bg="linear-gradient(87.17deg, #F72C81 0%, #6C55AF 50%, #4FD5FF 100%)"
            radius="17px"
            padding="2px 12px"
            wrap="nowrap"
            margin="0px 0 8px 0"
            width="max-content"
          >
            <Span
              margin="11px 22px 11px 2px"
              weight="400"
              size="14px"
              textTransform="uppercase"
              color="#fff"
              spacing="1px"
              width="max-content"
            >
              <DesktopAddress>
                {dropdownValue?.title}
              </DesktopAddress>
              <MobileAddress>
              {dropdownValue?.title.substring(0, 6)}.....
                {dropdownValue?.title.substring(dropdownValue?.title.length - 6)}
              </MobileAddress>
            </Span>
           {dropdownValue?.invertedIcon && <Image
              src={dropdownValue?.invertedIcon}
              alt="icon"
              width="auto"
              cursor="pointer"
              filter="brightness(0) invert(1)"
              onClick={() => {
                copyToClipboard(dropdownValue?.value);
              }}
            />}
            {dropdownValue?.icon && <Image
              src={dropdownValue?.icon}
              alt="icon"
              width="auto"
              cursor="pointer"
              onClick={() => {
                copyToClipboard(dropdownValue?.value);
              }}
            />}
          </ItemH>
        ) : (
          <ItemH wrap="nowrap" margin="8px 0">
             {dropdownValue?.invertedIcon && <Image
              src={dropdownValue.invertedIcon}
              alt="icon"
              width="max-content"
              spacing="1px"
              filter={theme.snackbarBorderIcon}
            />}
            {dropdownValue?.icon && <Image
              src={dropdownValue.icon}
              alt="icon"
              width="max-content"
              spacing="1px"
            />}
            {!dropdownValue?.link && dropdownValue?.function && (
              <Span
                width="max-content"
                color={theme.snackbarBorderText}
                margin="10px 20px"
                weight="400"
                size="16px"
                cursor="pointer"
                width="max-content"
                onClick={() => dropdownValue?.function()}
              >
                {dropdownValue.title}
              </Span>
            )}
            {dropdownValue?.link && (
              <A
                width="max-content"
                href={dropdownValue?.link}
                target="_blank"
                rel="nofollow"
                margin="10px 20px"
                weight="400"
                size="16px"
                width="max-content"
                color={theme.snackbarBorderText}
                hoverBG="transparent"
              >
                {dropdownValue.title}
              </A>
            )}
          </ItemH>
        )
      )}
    </>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const DropdownItem = styled.div`
  display: flex;
  margin: 1rem;
`;

const SpanAddress= styled(Span)`
  margin:11px 22px 11px 2px;
  weight:400;
  size:14px;
  text-transform:uppercase;
  color:#fff;
  spacing:1px;
  width:max-content;
`
const MobileAddress= styled(SpanAddress)`
  @media (min-width: 993px) {
    display: none;
  }
`
const DesktopAddress = styled(SpanAddress)`
  @media (max-width: 992px) {
    display: none;
  }
`
// Export Default
export default Dropdown;
