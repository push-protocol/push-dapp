// React + Web3 Essentials
import React, { useContext, useEffect, useMemo, useState } from 'react';

// External Packages
import Switch from '@material-ui/core/Switch';
import { CloseIcon } from 'assets/icons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushAPI from '@pushprotocol/restapi';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { AInlineV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import {
  Button,
  Content,
  FormSubmision,
  H2,
  H3,
  Input,
  Item,
  ItemH,
  Section,
  Span,
  TextField
} from 'primaries/SharedStyling';
import useToast from '../hooks/useToast';
import PreviewNotif from './PreviewNotif';

// Internal Configs
import { appConfig } from 'config';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import APP_PATHS from 'config/AppPaths';
import Tag from './reusables/labels/Tag';
import { AppContext } from 'contexts/AppContext';

// Constants
const CORE_CHAIN_ID = appConfig.coreContractChain;

export const IOSSwitch = styled(Switch).attrs(() => ({
  classes: {
    root: 'root',
    switchBase: 'switchBase',
    thumb: 'thumb',
    track: 'track',
    checked: 'checked',
  },
  disableRipple: true,
  focusVisibleClassName: 'focusVisible',
}))`
  &.root {
    width: 42px;
    height: 20px;
    padding: 0px;
  }

  .switchBase {
    padding: 0px;
    margin: 4px;
    transition-duration: 300ms;

    &.checked {
      transform: translateX(22px);
      color: white;
      & + .track {
        background-color: #cf1c84;
        opacity: 1;
        border: none;
      }
    }

    &.thumb {
      color: #52d869;
    }
  }

  .thumb {
    box-sizing: border-box;
    width: 12px;
    height: 12px;
  }

  & .track {
    border-radius: 13px;
    background-color: #a0a3b1;
    opacity: 1;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .checked {
  }
  .focusVisible {
  }
`;

type NFTOptions = {
  value: string;
  label: string; 
}

// Set Notification Form Type | 0 is reserved for protocol storage
const NFTypes: NFTOptions[] = [
  { value: '1', label: 'Broadcast' },
  // { value: "2", label: "Old Secret (IPFS Payload)" }, -- Deprecated
  { value: '3', label: 'Targeted' },
  { value: '4', label: 'Subset' },
];
const LIMITER_KEYS = ['Enter', ','];

// Create Header
function SendNotifications() {
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(425);
  const { account, provider, chainId } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const { epnsCommWriteProvider, epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const { channelDetails, delegatees, aliasDetails: { aliasEthAddr } } = useSelector((state: any) => state.admin);
  const { CHANNNEL_DEACTIVATED_STATE } = useSelector((state: any) => state.channels);
  const { canSend } = useSelector((state: any) => {
    return state.canSend;
  });
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
const {handleConnectWallet} = useContext(AppContext);
  const [nfProcessing, setNFProcessing] = useState(0);
  const [channelAddress, setChannelAddress] = useState('');
  const [nfRecipient, setNFRecipient] = useState(account);
  const [multipleRecipients, setMultipleRecipients] = useState([]);
  const [tempRecipeint, setTempRecipient] = useState(''); // to temporarily hold the address of one recipient who would be entered into the recipeints array above.
  const [nfType, setNFType] = useState('1');
  const [nfSub, setNFSub] = useState('');
  const [nfSubEnabled, setNFSubEnabled] = useState(false);
  const [nfMsg, setNFMsg] = useState('');
  const [nfCTA, setNFCTA] = useState('');
  const [nfCTAEnabled, setNFCTAEnabled] = useState(false);
  const [nfMedia, setNFMedia] = useState('');
  const [nfMediaEnabled, setNFMediaEnabled] = useState(false);
  const [nfInfo, setNFInfo] = useState('');
  const [nfSettingIndex, setNFSettingIndex] = useState('');
  const [delegateeOptions, setDelegateeOptions] = useState([]);

  const channelDetailsFromBackend = useMemo(() => {
    if (delegatees) {
      return delegatees.find(delegatee => delegatee.channel === channelAddress);
    }
    // Return a default value or handle the case when delegatees is not defined.
    return null; // or some other default value
  }, [delegatees, channelAddress]);

  const channelSettings = useMemo(() => {
    if (channelDetailsFromBackend) {
      const { channel_settings } = channelDetailsFromBackend;
  
      if (channel_settings !== null) {
        return JSON.parse(channel_settings);
      }
    }
    // Return a default value or handle the case when channelDetailsFromBackend is not defined.
    return null; // or some other default value
  }, [channelDetailsFromBackend]);  

  const channelSettingsOptions = useMemo(() => {
    const defaultOption = { label: 'Default', value: '', isRange: false };
  
    if (channelSettings) {
      const settingsOptions = channelSettings.map((setting) => ({
        label:
          setting.type === 3 ? (
            <DropdownLabel>
              <div>{setting.description}</div>
              <Tag>Multi-Range</Tag>
            </DropdownLabel>
          ) : setting.type === 2 ? (
            <DropdownLabel>
              <div>{setting.description}</div>
              <Tag>Range</Tag>
            </DropdownLabel>
          ) : (
            setting.description
          ),
        value: setting.index,
        isRange: setting.type === 2,
      }));
  
      return [defaultOption, ...settingsOptions];
    }
    // If channelSettings is not defined, just return the default option.
    return [defaultOption];
  }, [channelSettings]);  

  const openManageSettings = () => {
    const newPageUrl = APP_PATHS.ChannelSettings;
  
    // Use window.open() to open the URL in a new tab
    window.open(newPageUrl, '_blank');
  }
  
  useEffect(() => {
    if (canSend !== 1) {
      const url = window.location.origin;
      window.location.replace(`${url}${APP_PATHS.Channels}`);
    }
  });

  const isChannelDeactivated = channelDetails ? channelDetails.channelState === CHANNNEL_DEACTIVATED_STATE : false;
  // console.log(delegatees);
  let cannotDisplayDelegatees;
  if (onCoreNetwork && delegatees)
    cannotDisplayDelegatees = (delegatees.length === 1 && delegatees[0].address === account) || !delegatees.length;
  //do not display delegatees dropdown if you are the only delegatee to yourself or there are no delegatess
  else if (!onCoreNetwork && delegatees)
    cannotDisplayDelegatees =
      (delegatees.length === 1 && delegatees[0].alias_address === account) || !delegatees.length;

  // construct a list of channel delegators
  useEffect(() => {
    if (!account) return;
    if (!delegatees || !delegatees.length) {
      setChannelAddress(account);
    } else {
      setDelegateeOptions(
        delegatees.map((oneDelegatee: any) => ({
          value: (onCoreNetwork ? oneDelegatee.channel: oneDelegatee.alias_address),
          label: (
            <CustomDropdownItem>
              <img src={oneDelegatee.icon} alt="" />
              <div
                style={{
                  letterSpacing: '0',
                }}>
                {oneDelegatee.name}
              </div>
            </CustomDropdownItem>
          ),
        }))
      );
      // default the channel address to the first one on the list which should be that of the user if they have a channel
      if(onCoreNetwork) setChannelAddress(delegatees[0].channel);
      else setChannelAddress(delegatees[0].alias_address);
    }
  }, [delegatees, account]);

  // on change for the subset type notifications input
  const handleSubsetInputChange = (e: any) => {
    // if the user enters in a comma or an enter then separate the addresses
    if (LIMITER_KEYS.includes(e.key)) {
      e.preventDefault();
      // if they enter a limiter key, then add the temp value to the recipeints list
      // then clear the value of the temp text
      setMultipleRecipients((oldRecipients) =>
        // use this combination to remove duplicates
        Array.from(new Set([...oldRecipients, tempRecipeint]))
      );
      const listRecipients = Array.from(new Set([...multipleRecipients, tempRecipeint]));
      setNFRecipient(listRecipients.join());
      setTempRecipient('');
    }
  };
  // when to remove a subscriber
  const removeRecipient = (recipientAddress: any) => {
    const filteredRecipients = multipleRecipients.filter((rec) => rec !== recipientAddress);
    setNFRecipient(filteredRecipients.join());
    setMultipleRecipients(filteredRecipients);
  };

  useEffect(() => {
    const broadcastIds = ['1']; //id's of notifications which qualify as broadcast
    setMultipleRecipients([]); //reset array when type changes/
    if (broadcastIds.includes(nfType)) {
      // This is broadcast, nfRecipient will be the same
      setNFRecipient(account);
    } else {
      setNFRecipient('');
    }
  }, [nfType]);

  // Notification Toast
  const notificationToast = useToast(5000);

  // validate the body being sent, return true if no errors
  const bodyValidated = () => {
    let validated = true;
    // if we are sending for a subset and there
    if (nfType === '4' && multipleRecipients.length < 2) {
      notificationToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Please enter at least two recipients in order to use subset notifications type',
        toastType: 'ERROR',
        getToastIcon: (size) => <MdError size={size} color="red" />,
      });
      validated = false;
    }
    return validated;
  };

  const handleSendMessage = async (e) => {
    // Check everything in order
    e.preventDefault();

    let userPushInstance = userPushSDKInstance;
    if (!userPushInstance.signer) {
      userPushInstance = await handleConnectWallet();
      if (!userPushInstance) {
        return;
      }
    }

    notificationToast.showLoaderToast({
      loaderMessage: 'Preparing Notification',
    });

    // do some validation
    if (!bodyValidated()) return;

    // Set to processing
    setNFProcessing(1);

    // Form signer and contract connection
    //   const communicatorContract = epnsCommWriteProvider;
    // define the Push (EPNS) comms contracts

    // For payload basic
    let nsub = nfSub;
    let nmsg = nfMsg;
    let secretEncrypted;

    let asub = nfSub;
    let amsg = nfMsg;
    let acta = nfCTA;
    let aimg = nfMedia;

    // Handle Storage
    let storagePointer = '';

    // IPFS PAYLOAD --> 1, 2, 3
    if (nfType === '1' || nfType === '2' || nfType === '3' || nfType === '4' || nfType === '5') {
      // Checks for optional fields
      if (nfSubEnabled && isEmpty(nfSub)) {
        setNFInfo('Please enter a valid notification subject');
        setNFProcessing(2);

        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Incorrect Payload',
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });

        return;
      }

      if (nfMediaEnabled && isEmpty(nfMedia)) {
        setNFInfo('Please enter a valid media URL');
        setNFProcessing(2);

        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Incorrect Payload',
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });
        return;
      }

      if (nfCTAEnabled && isEmpty(nfCTA)) {
        setNFInfo('Please enter a valid CTA link');
        setNFProcessing(2);

        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Incorrect Payload',
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });
        return;
      }

      if (isEmpty(nfMsg)) {
        setNFInfo('Please enter a valid notification message');
        setNFProcessing(2);

        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Incorrect Payload',
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });
        return;
      }
    }
    if (nfType === '1' || nfType === '2' || nfType === '3' || nfType === '4' || nfType === '5') {
      try {
        // apiResponse?.status === 204, if sent successfully!

        let notifRecipients: Array<string>;
        if (nfType === '4') {
          notifRecipients = multipleRecipients.map((recipient) => convertAddressToAddrCaip(recipient, chainId));
        } else {
          notifRecipients = [convertAddressToAddrCaip(nfRecipient, chainId)];
        }
        
        if (nfType === '1') 
          notifRecipients = ['*'];

        const channelAddressInCaip = convertAddressToAddrCaip(channelAddress, chainId);

        await userPushInstance.channel.send(notifRecipients, {
          notification: {
            title: asub,
            body: amsg,
          },
          payload: {
            title: asub,
            body: amsg,
            cta: acta,
            embed: aimg,
            category: nfSettingIndex
          },
          channel: channelAddressInCaip
        });
        //   console.log(nfRecipient);
        //   postReq("/payloads/add_manual_payload", {
        //       signature,
        //       op: "write",
        //       chainId: chainId.toString(),
        //       channel: channelAddress,
        //       recipient: nfRecipient,
        //       deployedContract: epnsCommReadProvider.address,
        //       payload: payload,
        //       type: nfType,
        //   }).then(async (res) => {
        notificationToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Notification Sent',
          toastType: 'SUCCESS',
          getToastIcon: (size) => <MdCheckCircle size={size} color="green" />,
        });

        setNFProcessing(2);
        setNFType('1');
        setNFInfo('Notification Sent');

        notificationToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Notification Sent',
          toastType: 'SUCCESS',
          getToastIcon: (size) => <MdCheckCircle size={size} color="green" />,
        });
        //       console.log(res);
        //   });

        // reseting the notif states
        setNFType("1");
        setNFMsg("");
        setNFSubEnabled(false);
        setNFSub("");
        setNFCTAEnabled(false);
        setNFCTA("");
        setNFMediaEnabled(false);
        setNFMedia("");
        setNFInfo("");
      } catch (err) {
        setNFInfo('Send Notification Failed, please try again');

        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Sending Notification Failed: ' + err,
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });
        setNFProcessing(0);
        console.error(err);
      }
    }
  };

  const isEmpty = (field: any) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  };

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={30} />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  );

  let showPreview = nfSub !== '' || nfMsg !== '' || nfCTA !== '' || nfMedia !== '';

  return (
    <Container>
      <Body>
        <Content padding={isMobile ? "0px 0px 0px" : "10px 20px 10px"}>
          <Item align="center">
            <H2
              textTransform="none"
              weight={isMobile ? "500" : "400"}
              size={isMobile ? "25px" : "32px"}
              color={theme.color}
              textAlign="center"
              margin={isMobile ? "0px 0px" : "20px 0px"}
              style={{ width: '100%' }}>
              Send Notification
            </H2>
            <Span
              color={theme.default.secondaryColor}
              weight={isMobile ? "300" : "400"}
              size="14px"
              textTransform="none"
              spacing="0.03em"
              margin={isMobile ? "10px 0px" : "0px 0px"}
              textAlign="center">
              Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your
              users.
            </Span>
          </Item>
        </Content>
        {/* <Content padding="10px 30px 20px">
                <Item align="flex-start">
                    <H2 textTransform="uppercase" spacing="0.1em">
                        <Span weight="200" style={{color : theme.color}}>Send </Span>
                        <Span
                            bg="#674c9f"
                            color="#fff"
                            weight="600"
                            padding="0px 8px"
                        >
                            Notification
                        </Span>
                    </H2>
                    {!isChannelDeactivated ? (
                        <H3 style={{color : theme.color}}>
                            Push (EPNS) supports three types of notifications (for
                            now!). <b>Groups</b>, <b>Subsets</b>, and{" "}<b>Targeted</b>
                        </H3>
                    ) : (
                        <H3>
                            This channel has been deactivated, please
                            reactivate it!.
                        </H3>
                    )}
                </Item>
            </Content> */}
      </Body>

      {!isChannelDeactivated && (
        <Section>
          <ModifiedContent>
            <Item align="stretch">
              <FormSubmision
                flex="1"
                direction="column"
                justify="center"
                margin="0px"
                size="1.1rem"
                width="100%"
                onSubmit={handleSendMessage}>
                <Item flex="1" self="stretch" align="stretch" width="100%">
                  {!cannotDisplayDelegatees && (
                    <Item flex="1" justify="flex-start" align="stretch">
                      <DropdownStyledParent>
                        <DropdownStyled
                          options={delegateeOptions}
                          onChange={(option: any) => {
                            if(option.value == aliasEthAddr) {
                              setChannelAddress(account);
                              setNFRecipient(account);
                            }
                            else {
                              setChannelAddress(option.value);
                              setNFRecipient(option.value);
                            }
                          }}
                          placeholder="Select a Channel"
                          value={delegateeOptions[0]}
                        />
                      </DropdownStyledParent>
                    </Item>
                  )}

                  <Input
                    display="none"
                    value={nfType}
                    onChange={(e) => {
                      setNFType(e.target.value);
                    }}
                  />

                  <Item
                    flex="1"
                    justify="flex-start"
                    align="stretch"
                    margin="40px 0px 0px 0px"
                    //   minWidth="280px"
                  >
                    <DropdownStyledParent>
                      <DropdownStyled
                        options={NFTypes}
                        onChange={(option) => {
                          setNFType(option.value);
                          console.debug(option);
                        }}
                        value={nfType}
                      />
                    </DropdownStyledParent>
                  </Item>
                  <Input
                    display="none"
                    value={nfType}
                    onChange={(e) => {
                      setNFType(e.target.value);
                    }}
                  />

                  {nfType && (
                    <ToggleOptionContainer>
                      <ToggleOption>
                        <Span
                          weight={isMobile ? "500" : "600"}
                          textTransform="none"
                          size={isMobile ? "15px" : "14px"}
                          color={theme.default.color}
                          padding="5px 15px"
                          radius="30px">
                          Title
                        </Span>
                        <IOSSwitch checked={nfSubEnabled} onChange={() => setNFSubEnabled(!nfSubEnabled)} />
                      </ToggleOption>

                      <ToggleOption>
                        <Span
                          weight={isMobile ? "500" : "600"}
                          textTransform="none"
                          size={isMobile ? "15px" : "14px"}
                          color={theme.default.color}
                          padding="5px 15px"
                          radius="30px">
                          Media URL
                        </Span>
                        <IOSSwitch checked={nfMediaEnabled} onChange={() => setNFMediaEnabled(!nfMediaEnabled)} />
                      </ToggleOption>

                      <ToggleOption>
                        <Span
                         weight={isMobile ? "500" : "600"}
                         textTransform="none"
                         size={isMobile ? "15px" : "14px"}
                          color={theme.default.color}
                          padding="5px 15px"
                          radius="30px">
                          CTA Link
                        </Span>
                        <IOSSwitch checked={nfCTAEnabled} onChange={() => setNFCTAEnabled(!nfCTAEnabled)} />
                      </ToggleOption>
                    </ToggleOptionContainer>
                  )}
                

                {(nfType === '2' || nfType === '3' || nfType === '5') && (
                  <Item margin="15px 0px" flex="1" self="stretch" align="stretch" width="100%">
                    <Label style={{ color: theme.color, fontWeight: isMobile ? "500" : "600", fontSize: isMobile ? "15px" : "14px" }}>Recipient Wallet Address</Label>
                    <Input
                      maxlength="40"
                      flex="1"
                      padding="12px"
                      weight="400"
                      size="16px"
                      color={theme.default.color}
                      bg={theme.default.bg}
                      height="25px"
                      margin="7px 0px 0px 0px"
                      border={`1px solid ${theme.snfBorder}`}
                      focusBorder="1px solid #657795"
                      radius="12px"
                      value={nfRecipient}
                      onChange={(e) => {
                        setNFRecipient(e.target.value);
                      }}
                    />
                  </Item>
                )}

                {nfType === '4' && (
                  <>
                    <MultiRecipientsContainer>
                      {multipleRecipients.map((oneRecipient) => (
                        <span key={oneRecipient}>
                          {oneRecipient}
                          <i onClick={() => removeRecipient(oneRecipient)}>
                            <CloseIcon />
                          </i>
                        </span>
                      ))}
                    </MultiRecipientsContainer>
                    <Item margin="15px 0px" flex="1" self="stretch" align="stretch" width="100%">
                      <Label style={{ color: theme.color, fontWeight: isMobile ? "500" : "600", fontSize: isMobile ? "15px" : "14px" }}>Enter Recipients Wallet Addresses</Label>
                      <Input
                        required={multipleRecipients.length === 0}
                        maxlength="40"
                        flex="1"
                        padding="12px"
                        weight="400"
                        size="16px"
                        color={theme.default.color}
                        bg={theme.default.bg}
                        height="25px"
                        margin="7px 0px 0px 0px"
                        border={`1px solid ${theme.snfBorder}`}
                        focusBorder="1px solid #657795"
                        radius="12px"
                        value={tempRecipeint}
                        onKeyPress={handleSubsetInputChange}
                        onChange={(e) => {
                          const text = e.target.value.trim();
                          console.debug(text);
                          console.debug(tempRecipeint);
                          // if (!LIMITER_KEYS.includes(text) && text.length > 0 ) {
                          setTempRecipient(e.target.value);
                          // }
                        }}
                      />
                      <Span size="13px" margin="7px 0px 0px 0px" color={theme.default.secondaryColor}>
                        Enter recipients wallet addresses separated by a comma or by pressing the enter key
                      </Span>
                    </Item>
                  </>
                )}

                {nfType && nfSubEnabled && (
                  <Item margin="15px 0px" flex="1" self="stretch" align="stretch" width="100%">

                    <Item
                      display="flex"
                      direction="row"
                      align="center"
                      flex="1"
                      self="stretch"
                      justify="space-between"
                    >
                      <Label style={{ color: theme.color, fontWeight: isMobile ? "500" : "600", fontSize: isMobile ? "15px" : "14px" }}>
                        Notification Title
                      </Label>
                      <Span
                        color={theme.default.secondaryColor}
                        size="13px"
                        margin="0px 10px 0px 0px"
                        weight="700"
                      >
                        {80 - nfSub.length}
                      </Span>
                    </Item>
                    <Input
                      maxlength="40"
                      flex="1"
                      padding="12px"
                      weight="400"
                      size="16px"
                      color={theme.default.color}
                      bg={theme.default.bg}
                      height="25px"
                      margin="7px 0px 0px 0px"
                      border={`1px solid ${theme.snfBorder}`}
                      focusBorder="1px solid #657795"
                      radius="12px"
                      value={nfSub}
                      onChange={(e) => {
                        setNFSub(e.target.value.slice(0,80));
                      }}
                    />
                  </Item>
                )}

                {nfType && (
                  <Item margin="15px 0px" flex="1" self="stretch" align="stretch" width="100%">

                    <Item
                      display="flex"
                      direction="row"
                      align="center"
                      flex="1"
                      self="stretch"
                      justify="space-between"
                    >
                      <Label style={{ color: theme.color, fontWeight: isMobile ? "500" : "600", fontSize: isMobile ? "15px" : "14px" }}>
                      Notification Message
                      </Label>
                      <Span
                        color={theme.default.secondaryColor}
                        size="13px"
                        margin="0px 10px 0px 0px"
                        weight="700"
                      >
                        {500 - nfMsg.length}
                      </Span>
                    </Item>
                    <TextField
                      // placeholder="Your Channel's Short Description (250 Characters)"
                      rows="4"
                      maxlength="250"
                      padding="12px"
                      weight="400"
                      margin="7px 0px 0px 0px"
                      border={`1px solid ${theme.snfBorder}`}
                      focusBorder="1px solid #657795"
                      radius="12px"
                      color={theme.default.color}
                      bg={theme.default.bg}
                      overflow="auto"
                      value={nfMsg}
                      onChange={(e) => {
                        setNFMsg(e.target.value.slice(0, 500));
                      }}
                      autocomplete="off"
                    />
                  </Item>
                )}

                {nfType && (
                  <>
                    <Item
                      flex="1"
                      justify="flex-start"
                      align="stretch"
                      margin="30px 0px 15px 0px"
                      //   minWidth="280px"
                    >
                      <Item
                        display="flex"
                        direction="row"
                        align="center"
                        flex="1"
                        self="stretch"
                        justify="space-between"
                        margin="0px 0px 7px 0px"
                      >
                        <Label style={{ color: theme.color, fontWeight: isMobile ? "500" : "600", fontSize: isMobile ? "15px" : "14px" }}>
                          Notification Setting Type
                        </Label>
                        <AInlineV2
                          color={theme.default.primaryPushThemeTextColor}
                          fontSize="13px"
                          margin="0px 10px 0px 0px"
                          fontWeight="600"
                          onClick={openManageSettings}
                          cursor="pointer"
                        >
                          Manage Settings
                        </AInlineV2>
                      </Item>
                      <DropdownStyledParent>
                        <DropdownStyled
                          options={channelSettingsOptions}
                          onChange={(option) => {
                            setNFSettingIndex(String(option.value));
                          }}
                          value={channelSettingsOptions[0]}
                        />
                      </DropdownStyledParent>
                    </Item>
                  </>
                )}

                {nfType && nfMediaEnabled && (
                  <Item margin="15px 0" flex="1" self="stretch" align="stretch" width="100%">
                    <Label style={{ color: theme.color, fontWeight: isMobile ? "500" : "600", fontSize: isMobile ? "15px" : "14px" }}>Media URL</Label>
                    <Input
                      maxlength="40"
                      flex="1"
                      padding="12px"
                      weight="400"
                      size="16px"
                      color={theme.default.color}
                      bg={theme.default.bg}
                      height="25px"
                      margin="7px 0px 0px 0px"
                      border={`1px solid ${theme.snfBorder}`}
                      focusBorder="1px solid #657795"
                      radius="12px"
                      value={nfMedia}
                      onChange={(e) => {
                        setNFMedia(e.target.value);
                      }}
                    />
                  </Item>
                )}

                {nfType && nfCTAEnabled && (
                  <Item margin="15px 0" flex="1" self="stretch" align="stretch" width="100%">
                    <Label style={{ color: theme.color, fontWeight: isMobile ? "500" : "600", fontSize: isMobile ? "15px" : "14px" }}>CTA Link</Label>

                    <Input
                      maxlength="40"
                      flex="1"
                      padding="12px"
                      weight="400"
                      size="16px"
                      color={theme.default.color}
                      bg={theme.default.bg}
                      height="25px"
                      margin="7px 0px 0px 0px"
                      border={`1px solid ${theme.snfBorder}`}
                      radius="12px"
                      focusBorder="1px solid #657795"
                      value={nfCTA}
                      onChange={(e) => {
                        setNFCTA(e.target.value);
                      }}
                    />
                  </Item>
                )}

                {nfInfo && nfProcessing != 1 && (
                  <Item margin="30px 0px 0px 0px" width="100%" padding="1.5rem 0" radius="12px" bg="#F5F5FA">
                    <div style={{ color: '#CF1C84', fontSize: '0.875rem', textAlign: 'center' }}>{nfInfo}</div>
                  </Item>
                )}
                </Item>

                {showPreview && (
                  <PreviewNotif
                    details={{
                      channelAddress: channelAddress,
                      acta: nfCTA,
                      aimg: nfMedia,
                      amsg: nfMsg,
                      asub: nfSub,
                      type: nfType,
                    }}
                  />
                )}

                {nfType && (
                  <SubmitButton disabled={nfProcessing == 1 ? true : false}>
                    {nfProcessing == 1 && (
                      <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={24} spinnerColor="#FFF" />
                    )}
                    {nfProcessing != 1 && (
                      <Input
                        cursor="hand"
                        textTransform="none"
                        color="#fff"
                        weight="600"
                        size="16px"
                        type="submit"
                        value="Send Notification"
                      />
                    )}
                  </SubmitButton>
                )}
              </FormSubmision>
            </Item>
          </ModifiedContent>
        </Section>
      )}
    </Container>
  );
}

// css styles
const Container = styled(SectionV2)``;

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const FullBody = styled.div`
  // background:red;
  // width:50%;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

const DropdownStyledParent = styled.div`
  .is-open {
    // margin-bottom: 130px;
  }
`;

const MultiRecipientsContainer = styled.div`
  width: 100%;
  padding: 0px 20px;
  padding-top: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 7px 15px;
  span {
    color: white;
    background: #e20880;
    padding: 6px 10px;
    border-radius: 5px;
    i {
      cursor: pointer;
      margin-left: 25px;
    }
  }
`;

const ModifiedContent = styled(Content)`
  padding-top: 20px;
  font-weight: 400;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    padding-top: 0px;
    width: 100%;
  }
`;

const DropdownHeader = styled.div`
  color: ${(props) => props.theme.color || '#000'};
  padding: 10px;
  letter-spacing: 3px;
  font-size: 14px;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`;

//   const DropdownStyled = styled(Dropdown)`
//   .Dropdown-control {
//       background-color: #000;
//       color: #fff;
//       padding: 12px 52px 12px 10px;
//       border: 1px solid #000;
//       border-radius: 4px;
//   }
//   .Dropdown-placeholder {
//       text-transform: uppercase;
//       font-weight: 400;
//       letter-spacing: 0.2em;
//       font-size: 0.8em;
//   }
//   .Dropdown-arrow {
//       top: 18px;
//       bottom: 0;
//       border-color: #fff transparent transparent;
//   }
//   .Dropdown-menu {
//       border: 1px solid #000;
//       box-shadow: none;
//       background-color: #000;
//       border-radius: 0px;
//       margin-top: -2px;
//       border-bottom-right-radius: 4px;
//       border-bottom-left-radius: 4px;
//   }
//   .Dropdown-option {
//       background-color: rgb(35 35 35);
//       color: #ffffff99;
//       text-transform: uppercase;
//       letter-spacing: 0.2em;
//       font-size: 0.7em;
//       padding: 15px 20px;
//   }
//   .Dropdown-option:hover {
//       background-color: #000000;
//       color: #fff;
//   }
//   `;

const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
    background-color: ${(props) => props.theme.default.bg};
    color: ${(props) => props.theme.default.color};
    border: 1px solid ${(props) => props.theme.snfBorder};
    border-radius: 12px;
    flex: 1;
    outline: none;
    height: 50px;
    display: flex;
    font-weight: 600;
    font-size: 1rem;
    line-height: 150%;
    align-items: center;
    padding: 0.75rem 1.18rem;
    @media (max-width: 425px) {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .Dropdown-arrow {
    top: 20px;
    bottom: 0;
    border-color: #f #000 #000;
  }
  .Dropdown-menu {
    border-color: #bac4d6;
    border-radius: 12px;
    .is-selected {
      background-color: #d00775;
      color: #fff;
    }
  }

  .Dropdown-option {
    background-color: ${(props) => props.theme.default.bg};
    color: ${(props) => props.theme.default.color};
    font-size: 16px;
    padding: 20px 20px;
  }
  .Dropdown-option:hover {
    background-color: #d00775;
    color: white;
  }
`;

const DropdownStyledWhite = styled(DropdownStyled)`
  .Dropdown-control {
    color: #000;
    background: #fafafa;
    border: 0px;
    padding: 15px 52px 15px 10px;
  }
  .Dropdown-arrow {
    border-color: #000 transparent transparent;
    top: 30px;
  }
  .Dropdown-menu {
    border: 0px;
    background-color: #fafafa;
  }
  .Dropdown-option {
    background-color: #fafafa;
    color: black;
    transition: 300ms;
  }
  .Dropdown-option:hover {
    background-color: #e7e6e6;
  }
  .Dropdown-option.is-selected {
    background-color: #f1efef;
  }
`;

const DropdownStyledParentWhite = styled(DropdownStyledParent)`
  // margin-bottom: 20px;
  border: 1px solid rgba(169, 169, 169, 0.5);
`;

const CustomDropdownItem = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  div {
    color: ${(props) => props.theme.default.color};
    font-size: 16px;
    letter-spacing: 2px;
  }
`;

const Body = styled.div`
  margin: 40px auto 0px auto;
  width: 55%;
  @media (max-width: 1224px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0px auto 0px auto;
  }
`;

const ToggleOptionContainer = styled(ItemH)`
  margin: 40px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin-top:24px;
  }
`;

const ToggleOption = styled(ItemH)`
  box-sizing: border-box;
  margin: 15px 0px;
  width: 10em;
  background: ${(props) => props.theme.snfToggleBg};
  flex: none;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  direction: row;
  justify-content: space-between;
  @media (max-width: 640px) {
    width: 100%;
    margin:5px 0px;
  }
`;

const SubmitButton = styled(Button)`
  width: 15rem;
  margin: 70px auto 0px auto;
  padding: 20px 10px;
  border-radius: 15px;
  background: #cf1c84;
  color: #fff;
  @media (max-width: 640px) {
    width: 13rem;
    padding: 20px 20px;
  }
  @media (max-width: 380px) {
    width: 9.5rem;
  }
`;

const DropdownLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// Export Default
export default SendNotifications;