// @ts-nocheck
// React + Web3 Essentials
import { appConfig } from 'config';
import React, { useEffect, useState } from 'react';

// External Packages
import Dropdown from 'react-dropdown';
import { FiLink } from 'react-icons/fi';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { aliasChainIdsMapping, isValidUrl, networkName } from 'helpers/UtilityHelper';
import {
  Button,
  Content,
  FormSubmision,
  H3,
  Input,
  Item,
  ItemH,
  P,
  Section,
  Span,
  TextField,
} from 'primaries/SharedStyling';
import './createChannel.css';

const coreChainId = appConfig.coreContractChain;
const aliasChainId = aliasChainIdsMapping[coreChainId];

const ALIAS_CHAINS = [
  { value: coreChainId, label: networkName[coreChainId] },
  { value: aliasChainId, label: networkName[aliasChainId] },
];

const ChannelInfo = ({
  channelName,
  channelAlias,
  channelInfo,
  channelURL,
  chainDetails,
  setChannelAlias,
  setChainDetails,
  setChannelInfo,
  setChannelName,
  setChannelURL,
  setStepFlow,
  setChannelInfoDone,
  setTxStatus,
  errorInfo,
  isAllFilledAndValid,
}) => {
  const theme = useTheme();
  const [disabled, setDisabled] = useState<boolean>(true);

  const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  };

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
      <Item
        padding="40px 0 0 0"
        align="flex-start"
      >
        <Label style={{ color: theme.color }}>Channel Name</Label>
        <Item
          margin="7px 0px 0px 0px"
          flex="1"
          self="stretch"
          align="stretch"
          border="1px solid #BAC4D6"
          radius="12px"
        >
          <Input
            required
            maxlength="40"
            flex="1"
            padding="12px"
            weight="400"
            size="16px"
            bg="white"
            radius="12px"
            height="25px"
            value={channelName}
            onChange={(e) => {
              setChannelName(e.target.value);
            }}
          />
        </Item>
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
              value={networkName[chainDetails]}
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

        {errorInfo?.length > 0 && (
          <Item
            margin="30px 0px 0px 0px"
            flex="1"
            self="center"
            width="100%"
            padding="1.5rem 0"
            radius="12px"
            bg="#F5F5FA"
          >
            <div style={{ color: '#CF1C84' }}>{errorInfo}</div>
          </Item>
        )}

        <Item
          width="12.2em"
          self="stretch"
          align="stretch"
          margin="70px auto 50px auto"
        >
          <Button
            bg={disabled ? '#F4DCEA' : '#CF1C84'}
            color={disabled ? '#CF1C84' : '#fff'}
            disabled={disabled}
            flex="1"
            radius="15px"
            padding="20px 10px"
            onClick={() => {
              if (!isAllFilledAndValid()) return;
              setTxStatus(2);
              setChannelInfoDone(true);
              setStepFlow(2);
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
      </Item>
    </Section>
  );
};

const Label = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`;

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
