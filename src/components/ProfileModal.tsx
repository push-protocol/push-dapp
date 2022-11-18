import React from 'react';
import styled, { useTheme } from "styled-components";

import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import { A, Button, Image, Item, ItemH, Span} from 'primaries/SharedStyling';
import { AiOutlineClose } from 'react-icons/ai'


const ProfileModal = ({ showDropdown, setShowDropdown, dropdownValues })=>{
    const theme = useTheme()
    // const delegateAddressInputRef = React.useRef<HTMLInputElement>();
    // const handleClose = () => onClose();

    // to close the modal upon a click on backdrop
    // const containerRef = React.useRef(null);
    // useClickAway(containerRef, () => onClose())

    return(
        <ModalContainer>
            <Button
                bg="transparent"
                self='flex-end'
                onClick={() => {
                  setShowDropdown(!showDropdown);
                    return 'nothing'
                }}>
                <AiOutlineClose size={30} color={theme.headerIconsBg} />
              </Button>


    <>
      {dropdownValues.map((dropdownValue) =>
        dropdownValue.id === "walletAddress" ? (
          <ItemHead>
            <Span
              margin="11px 22px 11px 2px"
              weight="400"
              size="14px"
              textTransform="uppercase"
              color="#fff"
              width="max-content"
            >
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
          </ItemHead>
        ) : (
          <BodyH>
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
          </BodyH>
        )
      )}
    </>

        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.default.bg};;
    align-items: flex-start;
`

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

const ItemHead = styled(ItemH)`
    background: linear-gradient(90deg, #5762C2 0%, #F72CBE 72.11%, #FF9C9C 100%);
    border-radius: 13px;
    padding: 2px 12px;
    flex-wrap: nowrap;
    margin:0px auto 8px auto;
    width: 80%;
    max-height: 42px !important;
    justify-content: space-between
`

const BodyH = styled(ItemH)`
    wrap: nowrap;
    margin: 8px 0;
    max-height: 50px !important;
    margin:0px 0 8px 40px;
`

export default ProfileModal;