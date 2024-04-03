// React + Web3 Essentials
import { shortenText } from 'helpers/UtilityHelper';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';

// Internal Components
import { GlobalContext, ReadOnlyWalletMode } from 'contexts/GlobalContext';
import { AInlineV2, ImageV2, ItemHV2, SpanV2 } from './reusables/SharedStylingV2';
import { useAccount } from 'hooks';

export type DropdownValueType = {
  id: number | string;
  value?: string;
  title: string;
  icon: string;
  textColor?: string;
  function: () => void;
  to?: string; // Add the 'to' property for navigation
};

type DropdownProps = {
  dropdownValues: any[];
  textColor?: string;
  iconFilter?: string;
  hoverBGColor?: string;
  setShowDropdown?: any;
};

// Create Dropdown
function Dropdown({ dropdownValues, textColor, iconFilter, hoverBGColor, setShowDropdown }: DropdownProps) {
  const theme = useTheme();
  const { mode } = useContext(GlobalContext);
  const { wallet } = useAccount();

  const getTextColor = (dropdownValue: DropdownValueType) => {
    return dropdownValue.textColor ? dropdownValue.textColor : textColor ? textColor : theme.snackbarBorderText;
  };

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const copyToClipboard = (address: string) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(address);
    } else {
      const el = document.createElement('textarea');
      el.value = address;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };

  return (
    <>
      {dropdownValues.map((dropdownValue) =>
        dropdownValue.id === 'walletAddress' ? (
          <ItemHV2
            background="linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%)"
            borderRadius="17px"
            padding="2px 12px"
            flexWrap="nowrap"
            margin="0px 0 8px 0"
            width="max-content"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dropdownValue?.function();
            }}
          >
            <SpanV2
              margin="11px 22px 11px 2px"
              font-weight="400"
              fontSize="14px"
              textTransform="uppercase"
              color="#fff"
              letterSpacing="1px"
              max-width="max-content"
            >
              <DesktopAddress>{dropdownValue?.title}</DesktopAddress>

              <MobileAddress>{shortenText(dropdownValue?.title, 3)}</MobileAddress>

              <SpanV2
                fontWeight="600"
                margin="0 0 0 2px"
              >
                {!(wallet?.accounts?.length > 0)
                  ? ReadOnlyWalletMode.GUEST_MODE
                  : userPushSDKInstance?.readMode && ReadOnlyWalletMode.READ_ONLY_MODE}
              </SpanV2>
            </SpanV2>
            {dropdownValue?.invertedIcon && (
              <ImageV2
                src={dropdownValue?.invertedIcon}
                alt="icon"
                width="auto"
                cursor="pointer"
                filter="brightness(0) invert(1)"
                onClick={() => {
                  copyToClipboard(dropdownValue?.value);
                }}
              />
            )}
            {dropdownValue?.icon && (
              <ImageV2
                src={dropdownValue?.icon}
                alt="icon"
                width="auto"
                cursor="pointer"
                onClick={() => {
                  copyToClipboard(dropdownValue?.value);
                }}
              />
            )}
          </ItemHV2>
        ) : (
          <DropdownItemContainer
            hoverBGColor={hoverBGColor}
            onClick={() => dropdownValue?.function()}
          >
            {dropdownValue?.invertedIcon && (
              <ImageV2
                src={dropdownValue.invertedIcon}
                alt="icon"
                width="max-content"
                spacing="1px"
                filter={iconFilter ? iconFilter : theme.snackbarBorderIcon}
              />
            )}
            {dropdownValue?.icon && (
              <ImageV2
                src={dropdownValue.icon}
                alt="icon"
                width="24px"
                cursor="pointer"
              />
            )}
            {!dropdownValue?.to && !dropdownValue?.link && dropdownValue?.function && (
              <SpanV2
                max-width="max-content"
                color={getTextColor(dropdownValue)}
                margin="8px 10px"
                weight="400"
                size="15px"
                cursor="pointer"
              >
                {dropdownValue.title}
              </SpanV2>
            )}
            {dropdownValue?.to && (
              <Link
                to={dropdownValue.to}
                style={{ textDecoration: 'none' }}
              >
                {/* You can customize the Link as needed */}
                <SpanV2
                  width="max-content"
                  color={getTextColor(dropdownValue)}
                  margin="8px 10px"
                  weight="400"
                  size="15px"
                  cursor="pointer"
                >
                  {dropdownValue.title}
                </SpanV2>
              </Link>
            )}
            {dropdownValue?.link && (
              <AInlineV2
                width="max-content"
                href={dropdownValue?.link}
                target="_blank"
                rel="nofollow"
                margin="8px 10px"
                fontWeight="400"
                fontSize="16px"
                color={getTextColor(dropdownValue)}
                hoverBG="transparent"
              >
                {dropdownValue.title}
              </AInlineV2>
            )}
          </DropdownItemContainer>
        )
      )}
    </>
  );
}

// css styles
const SpanAddress = styled(SpanV2)`
  margin: 11px 11px 11px 2px;
  font-weight: 400;
  size: 14px;
  text-transform: uppercase;
  color: #fff;
  spacing: 1px;
  width: max-content;
`;
const MobileAddress = styled(SpanAddress)`
  margin: 11px 0px 11px 2px;
  @media (min-width: 993px) {
    display: none;
  }
`;
const DesktopAddress = styled(SpanAddress)`
  @media (max-width: 992px) {
    display: none;
  }
`;

const DropdownItemContainer = styled(ItemHV2)`
  width: 12.5rem;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin: 1px 0;
  padding: 2px 8px;
  border-radius: 12px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: ${(props) => props.hoverBGColor || 'none'};
  }
`;

export default Dropdown;
