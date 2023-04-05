// @ts-nocheck
// React + Web3 Essentials
import { appConfig, CHAIN_DETAILS } from 'config';
import React, { useEffect, useState } from 'react';

// External Packages
import Dropdown from 'react-dropdown';
import styled, { useTheme } from 'styled-components';
import DateTimePicker from "react-datetime-picker";

// Internal Compoonents
import {
  Button,
  Input,
  Item,
  Section,
  Span,
  TextField,
} from 'primaries/SharedStyling';
import '../modules/createChannel/createChannel.css';
import { useDeviceWidthCheck } from 'hooks';
import { ItemHV2 } from './reusables/SharedStylingV2';
import Toggle from './reusables/toggle/Toggle';
import Tooltip from "./reusables/tooltip/Tooltip"
import { device } from 'config/Globals';
import NewTag from './NewTag';
import ErrorMessage from './reusables/errorMessageLabel/errorMessageLabel';
import { getIsNewTagVisible } from 'helpers/TimerHelper';

const coreChainId = appConfig.coreContractChain;

const ALIAS_CHAINS = appConfig.allowedNetworks.map((chainID: number) => ({ label: CHAIN_DETAILS[chainID].label, value: chainID }));

const ChannelInfo = ({
  channelName,
  channelExpiryDate,
  channelAlias,
  channelInfo,
  channelURL,
  chainDetails,
  errorInfo,
  setChannelAlias,
  setChainDetails,
  setChannelInfo,
  setChannelName,
  setChannelExpiryDate,
  setChannelURL,
  setStepFlow,
  setChannelInfoDone,
  setTxStatus,
  isAllFilledAndValid
}) => {
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(769)
  const isNewTagVisible = getIsNewTagVisible(new Date("2023-02-01T00:00:00.000"), 90);

  const [disabled, setDisabled] = useState<boolean>(true);


  const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  };

  const isChannelExpiryDateEmpty = (channelExpiryDate) => {
    return channelExpiryDate!==undefined && channelExpiryDate===null;
  }

  useEffect(() => {
    if (isEmpty(channelName) || isEmpty(channelInfo) || isEmpty(channelURL)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    return ()=>setDisabled(true);
  }, [channelName, channelInfo, channelURL]);


  return (
    <Section>
      <MainContainer>
        <Item
          flex="1"
          self="stretch"
          align="stretch"
          height="fit-content"
          min-height="fit-content"
        >
          <Label style={{ color: theme.color }}>Channel Name</Label>
          <TopInnerContainer>
              <Item
                flex="1"
                self="stretch"
                align="stretch"
                height="fit-content"
              >
                  <Input
                    required
                    maxlength="40"
                    flex="1"
                    self="stretch"
                    align="stretch"
                    padding="12px"
                    height="25px"
                    weight="400"
                    size="16px"
                    bg="white"
                    radius="12px"
                    border="1px solid #BAC4D6"
                    value={channelName}
                    onChange={(e) => {
                      setChannelName(e.target.value);
                    }}
                  />
                {errorInfo?.name && (<ErrorMessage message = {errorInfo?.name} />)}
              </Item>
            <Tooltip 
              tooltipContent='Timebound channels will be deleted after expiry'
              // disable the tooltip when time bound toggle is NOT on
              placementProps={isMobile
                ?
                {
                  bottom: "-42px",
                  transform: "translateX(6%)",
                  padding:'8px 16px',
                  background: theme.default.bg,
                  border: '1px solid rgba(173, 176, 190, 0.2)',
                  color: theme.tooltipTopSubHeading,
                }
                :
                {
                  bottom: "-63px",
                  transform: "translateX(16%)",
                  padding:'8px 16px',
                  background: theme.default.bg,
                  border: '1px solid rgba(173, 176, 190, 0.2)',
                  color: theme.tooltipTopSubHeading,
                }
              }
            >
              <TimeBoundToggleContainer>
                <ItemHV2 style={{justifyContent: "flex-start", maxWidth: "100%"}}>
                  <Label style={{ color: theme.color }}>Time Bound</Label>
                  {isNewTagVisible && <NewTag />}
                </ItemHV2>
                {/* Toggle should be off only when channelExpiryDate is undefined */}
                <Toggle isToggleOn={channelExpiryDate!==undefined} onToggle={()=>{
                  if(channelExpiryDate===undefined){
                    // turn on the toggle
                    return setChannelExpiryDate(null);
                  }
                  // turn off the toggle
                  setChannelExpiryDate(undefined);
                }} />
              </TimeBoundToggleContainer>
            </Tooltip>
          </TopInnerContainer>
        </Item>

        {
          channelExpiryDate !== undefined && 
          <Item
            flex="1"
            self="stretch"
            align="stretch"
            margin="30px 0px 0px 0px"
          >
            <Label style={{ color: theme.color }}>Channel Expiry Date</Label>
            <DatePickerContainer>
              <CustomDateTimePicker
                className="date"
                value={channelExpiryDate}
                onChange={setChannelExpiryDate}
              />
            </DatePickerContainer>
            {errorInfo?.channelExpiryDate && (<ErrorMessage message = {errorInfo?.channelExpiryDate} />)}
          </Item>
        }
        
        <Item
          flex="1"
          self="stretch"
          align="stretch"
          margin="30px 0px 0px 0px"
        >
          <Label style={{ color: theme.color }}>Network</Label>
          <DropdownStyledParent>
            <DropdownStyled
              options={ALIAS_CHAINS}
              onChange={(option) => {
                setChainDetails(option.value);
              }}
              value={CHAIN_DETAILS[chainDetails].label}
            />
          </DropdownStyledParent>
        </Item>

        {chainDetails != coreChainId ? (
          <Item
            margin="30px 0px 0px 0px"
            flex="1"
            self="stretch"
            align="stretch"
          >
            <Label style={{ color: theme.color }}>Channel Alias address</Label>
            <Input
              required
              maxlength="40"
              flex="1"
              padding="12px"
              weight="400"
              size="16px"
              bg="white"
              height="25px"
              margin="7px 0px 0px 0px"
              border="1px solid #BAC4D6"
              focusBorder="1px solid #657795"
              radius="12px"
              disabled={chainDetails === '' || chainDetails === coreChainId ? true : false}
              visibility={chainDetails === coreChainId ? 'hidden' : 'visible'}
              value={channelAlias}
              onChange={(e) => {
                setChannelAlias(e.target.value);
              }}
            />
            <Span
              size="13px"
              margin="7px 0px 0px 0px"
              color={theme.default.secondaryColor}
            >
              Make sure you own this address as verification will take place.
            </Span>
            {errorInfo?.address && (<ErrorMessage message = {errorInfo?.address} />)}
          </Item>
        ) : null}

          

        <Item
          margin="30px 0px 0px 00px"
          flex="1"
          self="stretch"
          align="stretch"
          style={{ marginTop: `${chainDetails === coreChainId ? '30px' : '30px'}`, position: 'relative' }}
        >
          <Item
            display="flex"
            direction="row"
            align="center"
            flex="1"
            self="stretch"
            justify="space-between"
          >
            <Label style={{ color: theme.color }}>Channel Description</Label>
            <Span
              color={theme.default.secondaryColor}
              size="13px"
              margin="0px 10px 0px 0px"
              weight="700"
            >
              {250 - channelInfo.length}
            </Span>
          </Item>
          <TextField
            required
            rows="4"
            maxlength="250"
            padding="12px"
            weight="400"
            margin="7px 0px 0px 0px"
            border="1px solid #BAC4D6"
            focusBorder="1px solid #657795"
            radius="12px"
            bg="#fff"
            value={channelInfo}
            onChange={(e) => {
              setChannelInfo(e.target.value.slice(0, 250));
            }}
            autocomplete="off"
          />
          <Span
            size="13px"
            margin="7px 0px 0px 0px"
            color={theme.default.secondaryColor}
          >
            Brief description of your channel.
          </Span>
        </Item>
        {errorInfo?.description && (<ErrorMessage message = {errorInfo?.description} />)}

        <Item
          margin="30px 0px 0px 0px"
          flex="1"
          self="stretch"
          align="stretch"
        >
          <Label style={{ color: theme.color }}>Channel Website URL</Label>
          <Input
            required
            maxlength="40"
            flex="1"
            padding="12px"
            weight="400"
            size="16px"
            bg="white"
            height="25px"
            margin="7px 0px 0px 0px"
            border="1px solid #BAC4D6;"
            focusBorder="1px solid #657795"
            radius="12px"
            value={channelURL}
            onChange={(e) => {
              setChannelURL(e.target.value);
            }}
          />
        </Item>
        {errorInfo?.url && (<ErrorMessage message = {errorInfo?.url} />)}

        <Item
          width="12.2em"
          self="stretch"
          align="stretch"
          margin="70px auto 50px auto"
        >
          <Button
            bg={disabled ? '#F4DCEA' : '#CF1C84'}
            color={disabled ? '#CF1C84' : '#fff'}
            // disabled={disabled}
            flex="1"
            radius="15px"
            padding="20px 10px"
            onClick={() => {
              if (!isAllFilledAndValid()) return;
              setTxStatus(2);
              setChannelInfoDone(true);
              setStepFlow(1);
            }}
          >
            <Span
              color={disabled ? '#CF1C84' : '#fff'}
              weight="600"
              textTransform="none"
              line="22px"
              size="16px"
            >
              Next
            </Span>
          </Button>
        </Item>
      </MainContainer>
    </Section>
  );
};

const MainContainer = styled(Item)`
  align-items: "flex-start";
  padding: 40px 13% 0 13%;
  @media (max-width: 1350px) {
    padding: 40px 9% 0 9%;
  }
  @media (max-width: 1250px) {
    padding: 40px 4% 0 4%;
  }
  @media ${device.laptop} {
    padding: 20px 0 0 0;
  }
`

const TopInnerContainer = styled(ItemHV2)`
  align-items: flex-start;
  height: fit-content;
  margin-top: 7px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`

const Label = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`;

const TimeBoundToggleContainer = styled(ItemHV2)`
  height: 25px;
  margin-left: 1.3rem;
  padding: 12px 18px;
  cursor:pointer;
  flex: 1;
  align-items: center;
  border-radius: 15px;
  background: ${(props) => props.theme.toggleContainerBG};
  @media ${device.tablet} {
    margin-left: 0;
    margin-top: 1.25rem;
  }
`

const DatePickerContainer = styled.div`
  margin-top: 7px;
  background-color: white;
  color: #000;
  border: 1px solid #bac4d6;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  /* margin-bottom: 28px; */

  position: relative;
  margin-top:  ${(props) => (props.mttop ? props.mttop : "")};
  @media(max-width:600px){
    margin-top:  ${(props) => (props.mtop ? props.mtop : "")};
  }
`

const CustomDateTimePicker = styled(DateTimePicker)`
  padding-right: 4px;
    flex: 6;
    display: flex;
    align-items: center !important;
    font-family: Strawford, Source Sans Pro;
    .react-datetime-picker__wrapper {
        border: 0px !important;
        border-radius: 5px !important;
        height: 40px !important;
    }
    
    .react-datetime-picker__inputGroup {
        margin: 0px !important;
        margin-left: 12px !important;
        @media(max-width:850px){
                width: 4rem !important;
            }
    }
    
    .react-datetime-picker__inputGroup__input {
        font-weight: 500 !important;
    }
    .react-datetime-picker__inputGroup__input{
        font-weight: 500 !important;
        color: #000;
    }

    .react-datetime-picker__button svg {
        stroke: #000;
    }
    .react-datetime-picker__button{
        @media(max-width:850px){
                margin: 4px !important;
                padding: 0px !important;
            }
    }
    .react-datetime-picker__inputGroup__input--hasLeadingZero {
        font-weight: 500 !important;
    }
    .react-datetime-picker__inputGroup__minute {
        font-weight: 400 !important;
    }

    .react-datetime-picker__clock {
        display: none;
    }
    .react-datetime-picker__inputGroup__divider {
        font-weight: 400;
    }
`

const DropdownStyledParent = styled.div`
  margin-top: 7px;
  flex: 1;
  .is-open {
    margin-bottom: 110px;
  }
`;

const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
    background-color: white;
    color: #000;
    border: 1px solid #bac4d6;
    border-radius: 12px;
    flex: 1;
    outline: none;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .Dropdown-arrow {
    top: 20px;
    bottom: 0;
    border-color: #f #000 #000;
  }
  .Dropdown-menu {
    border-color: #bac4d6;
    border-radius: 12px;
    padding: 0.5rem 0;
    .is-selected {
      background-color: #fff;
      color: #d00775;
    }
  }

  .Dropdown-option {
    background-color: #fff;
    color: #000;
    padding: 0.8rem 2rem;
  }
  .Dropdown-option:hover {
    background-color: #fff;
    color: #d00775;
  }
`;


export default ChannelInfo;
