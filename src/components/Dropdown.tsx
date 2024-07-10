// React + Web3 Essentials
import { shortenText } from 'helpers/UtilityHelper';
import { Link } from 'react-router-dom';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';

// Internal Components
import { A, Image, ItemH, Span } from '../primaries/SharedStyling';
import { ReadOnlyWalletMode } from 'contexts/GlobalContext';
import { SpanV2 } from './reusables/SharedStylingV2';
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
function Dropdown({ dropdownValues, textColor, iconFilter, hoverBGColor }: DropdownProps) {
  const theme = useTheme();
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
    <Div>
      {dropdownValues.map((dropdownValue) =>
        dropdownValue.id === 'walletAddress' ? (
          <ItemH
            bg="linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%)"
            radius="17px"
            padding="2px 12px"
            wrap="nowrap"
            margin="0px 0 8px 0"
            width="max-content"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dropdownValue?.function();
            }}
          >
            <Span
              margin="11px 22px 11px 2px"
              weight="400"
              size="14px"
              textTransform="uppercase"
              color="#fff"
              spacing="normal"
              width="max-content"
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
            </Span>
            {dropdownValue?.invertedIcon && (
              <Image
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
              <Image
                src={dropdownValue?.icon}
                alt="icon"
                width="auto"
                cursor="pointer"
                onClick={() => {
                  copyToClipboard(dropdownValue?.value);
                }}
              />
            )}
          </ItemH>
        ) : (
          <DropdownItemContainer
            hoverBGColor={hoverBGColor}
            onClick={() => dropdownValue?.function()}
          >
            {dropdownValue?.invertedIcon && (
              <Image
                src={dropdownValue.invertedIcon}
                alt="icon"
                width="max-content"
                spacing="normal"
                filter={iconFilter ? iconFilter : theme.snackbarBorderIcon}
              />
            )}
            {dropdownValue?.icon && (
              <Image
                src={dropdownValue.icon}
                alt="icon"
                width="24px"
                cursor="pointer"
              />
            )}
            {!dropdownValue?.to && !dropdownValue?.link && dropdownValue?.function && (
              <Span
                width="max-content"
                color={getTextColor(dropdownValue)}
                margin="8px 10px"
                weight="400"
                size="15px"
                cursor="pointer"
              >
                {dropdownValue.title}
              </Span>
            )}
            {dropdownValue?.to && (
              <Link
                to={dropdownValue.to}
                style={{ textDecoration: 'none' }}
              >
                {/* You can customize the Link as needed */}
                <Span
                  width="max-content"
                  color={getTextColor(dropdownValue)}
                  margin="8px 10px"
                  weight="400"
                  size="15px"
                  cursor="pointer"
                >
                  {dropdownValue.title}
                </Span>
              </Link>
            )}
            {dropdownValue?.link && (
              <A
                width="max-content"
                href={dropdownValue?.link}
                target="_blank"
                rel="nofollow"
                margin="8px 10px"
                weight="400"
                size="16px"
                color={getTextColor(dropdownValue)}
                hoverBG="transparent"
              >
                {dropdownValue.title}
              </A>
            )}
          </DropdownItemContainer>
        )
      )}
    </Div>
  );
}

// css styles
const Div = styled.div`
  span {
    white-space: nowrap;
  }
`;
const SpanAddress = styled(Span)`
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

const DropdownItemContainer = styled(ItemH)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin: 1px 0;
  padding: 4px 8px;
  border-radius: 12px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: ${(props) => props.hoverBGColor || 'none'};
  }
`;

export default Dropdown;
