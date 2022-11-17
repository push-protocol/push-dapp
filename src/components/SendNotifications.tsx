// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect } from 'react';

// External Packages
import Switch from '@material-ui/core/Switch';
import { CloseIcon } from 'assets/icons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BsFillImageFill } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushAPI from '@pushprotocol/restapi';
import { postReq } from 'api';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import CryptoHelper from 'helpers/CryptoHelper';
import { IPFSupload } from 'helpers/IpfsHelper';
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

// Constants
const CORE_CHAIN_ID = appConfig.coreContractChain;

export const IOSSwitch = styled(Switch).attrs(() => ({
  classes: {
    root: 'root',
    switchBase: 'switchBase',
    thumb: 'thumb',
    track: 'track',
    checked: 'checked',
    focusVisible: 'focusVisible',
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

    &.focusVisible &.thumb {
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

// Set Notification Form Type | 0 is reserved for protocol storage
const NFTypes = [
  { value: '1', label: 'Broadcast (Direct Payload)' },
  // { value: "2", label: "Old Secret (IPFS Payload)" }, -- Deprecated
  { value: '3', label: 'Targeted (Direct Payload)' },
  { value: '4', label: 'Subset (Direct Payload)' },
];
const LIMITER_KEYS = ['Enter', ','];

// Create Header
function SendNotifications() {
  const theme = useTheme();
  const { account, library, chainId } = useWeb3React();
  const { epnsCommWriteProvider, epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const { channelDetails, delegatees } = useSelector((state: any) => state.admin);
  const { CHANNNEL_DEACTIVATED_STATE } = useSelector((state: any) => state.channels);
  const { canSend } = useSelector((state: any) => {
    return state.canSend;
  });
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const [nfProcessing, setNFProcessing] = React.useState(0);
  const [channelAddress, setChannelAddress] = React.useState('');
  const [nfRecipient, setNFRecipient] = React.useState('');
  const [multipleRecipients, setMultipleRecipients] = React.useState([]);
  const [tempRecipeint, setTempRecipient] = React.useState(''); // to temporarily hold the address of one recipient who would be entered into the recipeints array above.
  const [nfType, setNFType] = React.useState('1');
  const [nfSub, setNFSub] = React.useState('');
  const [nfSubEnabled, setNFSubEnabled] = React.useState(false);
  const [nfMsg, setNFMsg] = React.useState('');
  const [nfCTA, setNFCTA] = React.useState('');
  const [nfCTAEnabled, setNFCTAEnabled] = React.useState(false);
  const [nfMedia, setNFMedia] = React.useState('');
  const [nfMediaEnabled, setNFMediaEnabled] = React.useState(false);
  const [nfInfo, setNFInfo] = React.useState('');
  const [delegateeOptions, setDelegateeOptions] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    if (canSend !== 1) {
      const url = window.location.origin;
      window.location.replace(`${url}/#/channels`);
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
  React.useEffect(() => {
    if (!account) return;
    if (!delegatees || !delegatees.length) {
      setChannelAddress(account);
    } else {
      setDelegateeOptions(
        delegatees.map((oneDelegatee: any) => ({
          value: oneDelegatee.address,
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
      setChannelAddress(delegatees[0].address);
    }
  }, [delegatees, account]);

  // const isAllFieldsFilled = () => {
  //     if (nfRecipient == "" ||
  //         nfType == "" ||
  //         nfMsg == "" ||
  //         (nfSubEnabled && nfSub == "") ||
  //         (nfCTAEnabled && nfCTA == "") ||
  //         (nfMediaEnabled && nfMedia == "")
  //     ) {
  //         return false;
  //     }
  //     return true;
  // };

  // const previewNotif = (e: any) => {
  //     e.preventDefault();
  //     if(isAllFieldsFilled())
  //         setPreviewNotifModalOpen(true)
  //     else {
  //         setNFInfo("Please fill all fields to preview");
  //         setTimeout(() => {
  //             setNFInfo('');
  //         }, 2000);
  //     }
  // }

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

  React.useEffect(() => {
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

    // Decide type and storage
    //   switch (nfType) {
    //       // Broadcast Notification
    //       case "1":
    //           break;

    //       // Targeted Notification
    //       case "3":
    //           break;

    //       // Old Secret Notification
    //     //   case "2":
    //     //       // Create secret
    //     //       let secret = CryptoHelper.makeid(14);

    //     //       // Encrypt payload and change sub and nfMsg in notification
    //     //       nsub = "You have a secret message!";
    //     //       nmsg = "Open the app to see your secret message!";

    //     //       // get public key from EPNSCoreHelper
    //     //       let k = await EPNSCoreHelper.getPublicKey(
    //     //           nfRecipient,
    //     //           epnsCommWriteProvider
    //     //       );
    //     //       if (k == null) {
    //     //           // No public key, can't encrypt
    //     //           setNFInfo(
    //     //               "Public Key Registration is required for encryption!"
    //     //           );
    //     //           setNFProcessing(2);

    //     //           toast.update(notificationToast, {
    //     //               render: "Unable to encrypt for this user, no public key registered",
    //     //               type: toast.TYPE.ERROR,
    //     //               autoClose: 5000,
    //     //           });

    //     //           return;
    //     //       }

    //     //       let publickey = k.toString().substring(2);
    //     //       //console.log("This is public Key: " + publickey);

    //     //       secretEncrypted = await CryptoHelper.encryptWithECIES(
    //     //           secret,
    //     //           publickey
    //     //       );
    //     //       asub = CryptoHelper.encryptWithAES(nfSub, secret);
    //     //       amsg = CryptoHelper.encryptWithAES(nfMsg, secret);
    //     //       acta = CryptoHelper.encryptWithAES(nfCTA, secret);
    //     //       aimg = CryptoHelper.encryptWithAES(nfMedia, secret);
    //     //       break;

    //       // Targeted Notification
    //       case "4":
    //           break;

    //       // Secret Notification
    //       case "5":
    //             // Create secret
    //           let secret = CryptoHelper.makeid(8);

    //           // Encrypt payload and change sub and nfMsg in notification
    //           nsub = "You have a secret message!";
    //           nmsg = "Click on Decrypt button to see your secret message!";

    //           // get public key from Backend API
    //           let encryptionKey = await postReq('/encryption_key/get_encryption_key', {
    //               address: nfRecipient,
    //               op: "read"
    //           }).then(res => {
    //               return res.data?.encryption_key;
    //           });

    //           if (encryptionKey == null) {
    //               // No public key, can't encrypt
    //               setNFInfo(
    //                   "Public Key Registration is required for encryption!"
    //               );
    //               setNFProcessing(2);

    //               toast.update(notificationToast, {
    //                   render: "Unable to encrypt for this user, no public key registered",
    //                   type: toast.TYPE.ERROR,
    //                   autoClose: 5000,
    //               });

    //               return;
    //           }

    //           let publickey = encryptionKey;

    //           secretEncrypted = await CryptoHelper.encryptWithRPCEncryptionPublicKey(
    //               secret,
    //               publickey
    //           );
    //         //   console.log(secretEncrypted);
    //           if(nfSubEnabled) asub = CryptoHelper.encryptWithAES(nfSub, secret);
    //           amsg = CryptoHelper.encryptWithAES(nfMsg, secret);
    //           if(nfCTAEnabled) acta = CryptoHelper.encryptWithAES(nfCTA, secret);
    //           if(nfMediaEnabled) aimg = CryptoHelper.encryptWithAES(nfMedia, secret);
    //           break;

    //       // Offchain Notification
    //       case "6":
    //           console.log(
    //               nsub,
    //               nmsg,
    //               nfType,
    //               asub,
    //               amsg,
    //               acta,
    //               aimg,
    //               "case 5"
    //           );

    //           break;

    //       default:
    //           break;
    //   }

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

      //   const jsonPayload = {
      //       notification: {
      //           title: nsub,
      //           body: nmsg,
      //       },
      //       data: {
      //           type: nfType,
      //           secret: secretEncrypted,
      //           asub: asub,
      //           amsg: amsg,
      //           acta: acta,
      //           aimg: aimg,
      //       },
      //   };

      //   // if we are sending a subset type, then include recipients
      //   if (nfType === "4") {
      //       jsonPayload["recipients"] = [...multipleRecipients];
      //   }

      //   const input = JSON.stringify(jsonPayload);
      //   console.log(input);

      //   console.log("Uploding to IPFS...");
      //   toast.update(notificationToast, {
      //       render: "Preparing Payload for upload",
      //   });

      //   const ipfs = require("nano-ipfs-store").at(
      //       "https://ipfs.infura.io:5001"
      //   );

      //   try {
      //     //   storagePointer = await ipfs.add(input);
      //       storagePointer = await IPFSupload(input);
      //   } catch (e) {
      //       setNFProcessing(2);
      //       setNFInfo("IPFS Upload Error");
      //   }

      //   console.log("IPFS cid: %o", storagePointer);
    }
    if (nfType === '1' || nfType === '2' || nfType === '3' || nfType === '4' || nfType === '5') {
      // Prepare Identity and send notification
      //   const identity = nfType + "+" + storagePointer;
      //   const identityBytes = ethers.utils.toUtf8Bytes(identity);
      //   console.log({
      //       identityBytes,
      //   });
      //   const EPNS_DOMAIN = {
      //       name: "Push (EPNS) COMM V1",
      //       chainId: chainId,
      //       verifyingContract: epnsCommReadProvider.address,
      //   };

      //   const type = {
      //       Data: [
      //           { name: "acta", type: "string" },
      //           { name: "aimg", type: "string" },
      //           { name: "amsg", type: "string" },
      //           { name: "asub", type: "string" },
      //           { name: "type", type: "string" },
      //           { name: "secret", type: "string" },
      //       ],
      //   };

      //   const payload = {
      //       data: {
      //           acta: acta,
      //           aimg: aimg,
      //           amsg: amsg,
      //           asub: asub,
      //           type: nfType,
      //           secret: "",
      //       },

      //       notification: {
      //           body: amsg,
      //           title: asub,
      //       },
      //   };

      //   if (nfType === "5" || nfType === "2") {
      //       payload.notification = {
      //           body: nmsg,
      //           title: nsub
      //       };
      //       payload.data.secret = secretEncrypted;
      //   }

      //   const message = payload.data;
      //   console.log(payload, "payload");
      //   console.log("chainId", chainId);
      //   const signature = await library
      //       .getSigner(account)
      //       ._signTypedData(EPNS_DOMAIN, type, message);
      //   console.log("case5 signature", signature);

      try {
        // apiResponse?.status === 204, if sent successfully!

        let notifRecipients: string | Array<string>;
        if (nfType === '4') {
          notifRecipients = multipleRecipients.map((recipient) => convertAddressToAddrCaip(recipient, chainId));
        } else {
          notifRecipients = convertAddressToAddrCaip(nfRecipient, chainId);
        }

        const channelAddressInCaip = convertAddressToAddrCaip(channelAddress, chainId);

        const _signer = await library.getSigner(account);
        await PushAPI.payloads.sendNotification({
          signer: _signer,
          type: parseInt(nfType), // target
          identityType: 2, // direct payload
          notification: {
            title: asub,
            body: amsg,
          },
          payload: {
            title: asub,
            body: amsg,
            cta: acta,
            img: aimg,
          },
          recipients: notifRecipients, // recipient address
          channel: channelAddressInCaip, // your channel address
          env: appConfig.pushNodesEnv,
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
        console.log(err);
      }

      // var anotherSendTxPromise;

      // anotherSendTxPromise = communicatorContract.sendNotification(
      //   channelAddress,
      //   nfRecipient,
      //   identityBytes
      // );

      // console.log("Sending Transaction... ");
      // toast.update(notificationToast, {
      //   render: "Sending Notification...",
      // });

      // anotherSendTxPromise
      //   .then(async (tx) => {
      //     console.log(tx);
      //     console.log("Transaction Sent!");

      //     toast.update(notificationToast, {
      //       render: "Notification Sent",
      //       type: toast.TYPE.INFO,
      //       autoClose: 5000,
      //     });

      //     await tx.wait(1);
      //     console.log("Transaction Mined!");

      //     setNFProcessing(2);
      //     setNFType("");
      //     setNFInfo("Notification Sent");

      //     toast.update(notificationToast, {
      //       render: "Transaction Mined / Notification Sent",
      //       type: toast.TYPE.SUCCESS,
      //       autoClose: 5000,
      //     });
      //   })
      //   .catch((err) => {
      //     console.log("!!!Error handleSendMessage() --> %o", err);
      //     setNFInfo("Transaction Failed, please try again");

      //     toast.update(notificationToast, {
      //       render: "Transacion Failed: " + err,
      //       type: toast.TYPE.ERROR,
      //       autoClose: 5000,
      //     });
      //     setNFProcessing(0);
      //   });
    }
    //   if (nfType === "6") {
    //       // const jsonPayload = {
    //       //   notification: {
    //       //     title: nsub,
    //       //     body: nmsg,
    //       //   },
    //       //   data: {
    //       //     type: nfType,
    //       //     secret: secretEncrypted,
    //       //     asub: asub,
    //       //     amsg: amsg,
    //       //     acta: acta,
    //       //     aimg: aimg,
    //       //   },
    //       // };

    //       const EPNS_DOMAIN = {
    //           name: "Push (EPNS) COMM V1",
    //           chainId: chainId,
    //           verifyingContract: epnsCommReadProvider.address,
    //       };

    //       const type = {
    //           Data: [
    //               { name: "acta", type: "string" },
    //               { name: "aimg", type: "string" },
    //               { name: "amsg", type: "string" },
    //               { name: "asub", type: "string" },
    //               { name: "type", type: "string" },
    //               { name: "secret", type: "string" },
    //           ],
    //       };

    //       const payload = {
    //           data: {
    //               acta: acta,
    //               aimg: aimg,
    //               amsg: amsg,
    //               asub: asub,
    //               type: nfType,
    //               secret: "",
    //           },

    //           notification: {
    //               body: amsg,
    //               title: asub,
    //           },
    //       };

    //       const message = payload.data;
    //       console.log(payload, "payload");
    //       console.log("chainId", chainId);
    //       const signature = await library
    //           .getSigner(account)
    //           ._signTypedData(EPNS_DOMAIN, type, message);
    //       console.log("case5 signature", signature);
    //       try {
    //           postReq("/payloads/add_manual_payload", {
    //               signature,
    //               op: "write",
    //               chainId: chainId.toString(),
    //               channel: channelAddress,
    //               recipient: nfRecipient,
    //               deployedContract: epnsCommReadProvider.address,
    //               payload: payload,
    //               type: "3",
    //           }).then(async (res) => {
    //               toast.update(notificationToast, {
    //                   render: "Notification Sent",
    //                   type: toast.TYPE.INFO,
    //                   autoClose: 5000,
    //               });

    //               setNFProcessing(2);
    //               setNFType("");
    //               setNFInfo("Notification Sent");

    //               toast.update(notificationToast, {
    //                   render: "Notification Sent",
    //                   type: toast.TYPE.SUCCESS,
    //                   autoClose: 5000,
    //               });
    //               console.log(res);
    //           });
    //       } catch (err) {
    //           if (err.code === 4001) {
    //             // EIP-1193 userRejectedRequest error
    //             toast.update(notificationToast, {
    //                 render: "User denied message signature.",
    //                 type: toast.TYPE.ERROR,
    //                 autoClose: 5000,
    //             });
    //           } else {
    //             setNFInfo("Sending Notification Failed, please try again");

    //             toast.update(notificationToast, {
    //                 render: "Notification Failed: " + err,
    //                 type: toast.TYPE.ERROR,
    //                 autoClose: 5000,
    //             });
    //           }
    //           setNFProcessing(0);
    //           console.log(err);
    //       }
    //   }
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
        <Content padding="10px 20px 10px">
          <Item align="center">
            <H2
              textTransform="none"
              weight="400"
              size="32px"
              color={theme.color}
              textAlign="center"
              style={{ width: '100%' }}>
              Send Notification
            </H2>
            <Span
              color={theme.default.secondaryColor}
              weight="400"
              size="15px"
              textTransform="none"
              spacing="0.03em"
              margin="0px 0px"
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
                  {console.log(cannotDisplayDelegatees)}
                  {!cannotDisplayDelegatees && (
                    <Item flex="1" justify="flex-start" align="stretch">
                      <DropdownStyledParent>
                        <DropdownStyled
                          options={delegateeOptions}
                          onChange={(option: any) => {
                            setChannelAddress(option.value);
                            setNFRecipient(option.value);
                          }}
                          placeholder="Select a Channel"
                          value={delegateeOptions[0]}
                          // value={delegateeOptions.find(
                          //     (d) =>
                          //         d.value ==
                          //         channelAddress
                          // )}
                        />
                      </DropdownStyledParent>
                      {/* <DropdownStyledParentWhite>
                                            <DropdownHeader>
                                                SEND NOTIFICATION ON BEHALF
                                                OF
                                            </DropdownHeader>
                                            <DropdownStyledWhite
                                                options={delegateeOptions}
                                                onChange={(option: any) => {
                                                    setChannelAddress(
                                                        option.value
                                                    );
                                                }}
                                                value={delegateeOptions.find(
                                                    (d) =>
                                                        d.value ==
                                                        channelAddress
                                                )}
                                            />
                                        </DropdownStyledParentWhite> */}
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
                          console.log(option);
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
                          weight="600"
                          textTransform="none"
                          size="14px"
                          color="#1E1E1E"
                          padding="5px 15px"
                          radius="30px">
                          Subject
                        </Span>
                        <IOSSwitch checked={nfSubEnabled} onChange={() => setNFSubEnabled(!nfSubEnabled)} />
                      </ToggleOption>

                      <ToggleOption>
                        <Span
                          weight="600"
                          textTransform="none"
                          size="14px"
                          color="#1E1E1E"
                          padding="5px 15px"
                          radius="30px">
                          Media
                        </Span>
                        <IOSSwitch checked={nfMediaEnabled} onChange={() => setNFMediaEnabled(!nfMediaEnabled)} />
                      </ToggleOption>

                      <ToggleOption>
                        <Span
                          weight="600"
                          textTransform="none"
                          size="14px"
                          color="#1E1E1E"
                          padding="5px 15px"
                          radius="30px">
                          CTA Link
                        </Span>
                        <IOSSwitch checked={nfCTAEnabled} onChange={() => setNFCTAEnabled(!nfCTAEnabled)} />
                      </ToggleOption>
                    </ToggleOptionContainer>
                  )}
                </Item>

                {(nfType === '2' || nfType === '3' || nfType === '5') && (
                  <Item margin="15px 0px" flex="1" self="stretch" align="stretch" width="100%">
                    <Label style={{ color: theme.color }}>Recipient Wallet Address</Label>
                    <Input
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
                      <Label style={{ color: theme.color }}>Enter Recipients Wallet Addresses</Label>
                      <Input
                        required={multipleRecipients.length === 0}
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
                        value={tempRecipeint}
                        onKeyPress={handleSubsetInputChange}
                        onChange={(e) => {
                          const text = e.target.value.trim();
                          console.log(text);
                          console.log(tempRecipeint);
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
                    <Label style={{ color: theme.color }}>Subject</Label>
                    <Input
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
                      value={nfSub}
                      onChange={(e) => {
                        setNFSub(e.target.value);
                      }}
                    />
                  </Item>
                )}

                {nfType && (
                  <Item margin="15px 0px" flex="1" self="stretch" align="stretch" width="100%">
                    <Label style={{ color: theme.color }}>Notification Message</Label>
                    <TextField
                      // placeholder="Your Channel's Short Description (250 Characters)"
                      rows="4"
                      maxlength="250"
                      padding="12px"
                      weight="400"
                      margin="7px 0px 0px 0px"
                      border="1px solid #BAC4D6"
                      focusBorder="1px solid #657795"
                      radius="12px"
                      bg="#fff"
                      overflow="auto"
                      value={nfMsg}
                      onChange={(e) => {
                        setNFMsg(e.target.value);
                      }}
                      autocomplete="off"
                    />
                  </Item>
                )}

                {nfType && nfMediaEnabled && (
                  <Item margin="15px 0" flex="1" self="stretch" align="stretch" width="100%">
                    <Label style={{ color: theme.color }}>Media URL</Label>
                    <Input
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
                      value={nfMedia}
                      onChange={(e) => {
                        setNFMedia(e.target.value);
                      }}
                    />
                  </Item>
                )}

                {nfType && nfCTAEnabled && (
                  <Item margin="15px 0" flex="1" self="stretch" align="stretch" width="100%">
                    <Label style={{ color: theme.color }}>CTA Link</Label>

                    <Input
                      maxlength="40"
                      flex="1"
                      padding="12px"
                      weight="400"
                      size="16px"
                      bg="white"
                      height="25px"
                      margin="7px 0px 0px 0px"
                      border="1px solid #BAC4D6"
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
    background-color: white;
    color: #000;
    border: 1px solid #bac4d6;
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
    @media (max-width: 380px) {
      font-size: 0.875rem;
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
    background-color: #fff;
    color: #000;
    font-size: 16px;
    padding: 20px 20px;
  }
  .Dropdown-option:hover {
    background-color: #d00775;
    color: #000;
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
    color: black;
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
  }
`;

const ToggleOptionContainer = styled(ItemH)`
  margin: 40px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ToggleOption = styled(ItemH)`
  box-sizing: border-box;
  margin: 15px 0px;
  width: 10em;
  background: #f4f5fa;
  flex: none;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  direction: row;
  justify-content: space-between;
  @media (max-width: 640px) {
    width: 100%;
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
  }
  @media (max-width: 380px) {
    width: 9.5rem;
  }
`;

// Export Default
export default SendNotifications;
