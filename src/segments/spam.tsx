// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React from 'react';

// External Packages
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { toast as toaster } from 'react-toastify';
import { useClickAway } from 'react-use';
import { Waypoint } from 'react-waypoint';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import * as EpnsAPI from '@epnsproject/sdk-restapi';
import { NotificationItem } from '@epnsproject/sdk-uiweb';

// Internal Components
import { getReq, postReq } from 'api';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import CryptoHelper from 'helpers/CryptoHelper';
import { Item } from 'primaries/SharedStyling';
import {
  addPaginatedNotifications,
  incrementPage,
  setFinishedFetching,
  updateTopNotifications
} from 'redux/slices/spamSlice';
import SearchFilter from '../components/SearchFilter';
import DisplayNotice from '../primaries/DisplayNotice';
import NotificationToast from '../primaries/NotificationToast';
import useToast from 'hooks/useToast';
import { MdCheckCircle, MdError } from "react-icons/md";
import { updateSubscriptionStatus } from 'redux/slices/channelSlice';

// Internal Configs
import { appConfig } from "config";
import { device } from 'config/Globals';
;

const NOTIFICATIONS_PER_PAGE = 10;
// Create Header
const SpamBox = ({ showFilter, setShowFilter, search, setSearch }) => {
  const dispatch = useDispatch();
  const modalRef = React.useRef(null);
  useClickAway(modalRef, () => showFilter && setShowFilter(false));
  const { account, chainId, library } = useWeb3React();
  const { epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const { subscriptionStatus } = useSelector((state: any) => state.channels);

  const themes = useTheme();
  let user = convertAddressToAddrCaip(account, chainId);

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  const { run } = useSelector((state: any) => state.userJourney);

  const { notifications, page, finishedFetching } = useSelector((state: any) => state.spam);
  const EPNS_DOMAIN = {
    name: 'EPNS COMM V1',
    chainId: chainId,
    verifyingContract: epnsCommReadProvider?.address
  };
  const [allNotif, setNotif] = React.useState([]);
  const [loadFilter, setLoadFilter] = React.useState(false);
  const [filteredNotifications, setFilteredNotifications] = React.useState([]);
  const [filter, setFilter] = React.useState(false);
  const [allFilter, setAllFilter] = React.useState([]);
  const [bgUpdateLoading, setBgUpdateLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const NormalToast = ({ msg }) => (
    <Toaster>
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  );

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);

  const nameToId = {
    POLYGON_TEST_MUMBAI: 80001,
    ETH_TEST_KOVAN: 42,
    ETH_TEST_GOERLI: 5,
    POLYGON_MAINNET: 137,
    ETH_MAINNET: 1
  };

  const reset = () => setFilter(false);
  const filterNotifications = async (query, channels, startDate, endDate) => {
    if (loading) return;
    setLoading(true);
    setBgUpdateLoading(true);
    setFilter(true);
    if (startDate == null) startDate = new Date('January 1, 2000');
    if (endDate == null) endDate = new Date('January 1, 3000');
    startDate = startDate.getTime() / 1000;
    endDate = endDate.getTime() / 1000;
    var Filter = {
      channels: channels,
      date: { lowDate: startDate, highDate: endDate }
    };
    if (channels.length == 0) delete Filter.channels;

    setFilteredNotifications([]);

    let filterNotif = [];
    for (const notif of allNotif) {
      let timestamp;
      const matches = notif.message.match(/\[timestamp:(.*?)\]/);
      if (matches) {
        timestamp = matches[1];
      } else timestamp = notif.epoch;
      if (
        (Filter.channels === undefined ? true : Filter.channels.includes(notif.channel)) &&
        timestamp >= startDate &&
        timestamp <= endDate &&
        notif.message.toLowerCase().includes(query.toLowerCase())
      )
        filterNotif.push(notif);
    }
    const newNotifs = filterNotif;
    setAllFilter(newNotifs);
    // }
    setLoading(false);
    setBgUpdateLoading(false);
  };

  React.useEffect(() => {
    console.log(filteredNotifications, allFilter);
    setFilteredNotifications(allFilter);
  }, [allFilter]);

  const loadNotifications = async () => {
    if (loading || finishedFetching || run) return;
    setLoading(true);
    try {
      const results = await EpnsAPI.user.getFeeds({
        user: user,
        limit: NOTIFICATIONS_PER_PAGE,
        page: page,
        env: appConfig.pushNodesEnv,
        spam: true,
        raw: true
      });
      let parsedResponse = EpnsAPI.utils.parseApiResponse(results);
      parsedResponse.forEach((each, i) => {
        each['date'] = results[i].epoch;
        each['epoch'] = new Date(each['date']).getTime() / 1000;
      });
      const parsedResponsePromise = results.map(async (elem: any, i: any) => {
        elem.channel = results[i].sender;
        let address = results[i].sender;

        // const {
        //   data: { subscribers }
        // } = await postReq('/channels/_get_subscribers', {
        //   channel: account,
        //   blockchain: chainId,
        //   op: 'read'
        // });
        // elem.subscribers = subscribers;
        return { ...elem };
      });
      parsedResponse = await Promise.all(parsedResponsePromise);
      dispatch(addPaginatedNotifications(parsedResponse));
      if (parsedResponse.length === 0) {
        dispatch(setFinishedFetching());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestNotifications = async () => {
    if (loading || bgUpdateLoading || run) return;
    setBgUpdateLoading(true);
    setLoading(true);

    try {
      const results = await EpnsAPI.user.getFeeds({
        user: user,
        limit: NOTIFICATIONS_PER_PAGE,
        page: 1,
        env: appConfig.pushNodesEnv,
        spam: true,
        raw: true
      });
      if (!notifications.length) {
        dispatch(incrementPage());
      }
      let parsedResponse = EpnsAPI.utils.parseApiResponse(results);
      parsedResponse.forEach((each, i) => {
        each['date'] = results[i].epoch;
        each['epoch'] = new Date(each['date']).getTime() / 1000;
      });
      const parsedResponsePromise = parsedResponse.map(async (elem: any, i: any) => {
        elem.channel = results[i].sender;
        let address = results[i].sender;

        // const {
        //   data: { subscribers }
        // } = await postReq('/channels/_get_subscribers', {
        //   channel: account,
        //   blockchain: chainId,
        //   op: 'read'
        // });
        // elem.subscribers = subscribers;
        return { ...elem };
      });
      parsedResponse = await Promise.all(parsedResponsePromise);
      // dispatch(
      //   updateTopNotifications({
      //     notifs: parsedResponse,
      //     pageSize: NOTIFICATIONS_PER_PAGE,
      //   })
      // );
      if (parsedResponse.length === 0) {
        dispatch(setFinishedFetching());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setBgUpdateLoading(false);
      setLoading(false);
    }
  };

  const fetchAllNotif = async () => {
    setLoadFilter(true);
    try {
      const results = await EpnsAPI.user.getFeeds({
        user: user,
        limit: 100000,
        page: 1,
        env: appConfig.pushNodesEnv,
        spam: true,
        raw: true
      });

      if (!notifications.length) {
        dispatch(incrementPage());
      }
      let parsedResponse = EpnsAPI.utils.parseApiResponse(results);
      parsedResponse.forEach((each, i) => {
        each['date'] = results[i].epoch;
        each['epoch'] = new Date(each['date']).getTime() / 1000;
      });
      const parsedResponsePromise = parsedResponse.map(async (elem: any, i: any) => {
        elem.channel = results[i].sender;
        let address = results[i].sender;

        // const {
        //   data: { subscribers }
        // } = await postReq('/channels/_get_subscribers', {
        //   channel: account,
        //   blockchain: chainId,
        //   op: 'read'
        // });
        // elem.subscribers = subscribers;
        return { ...elem };
      });
      parsedResponse = await Promise.all(parsedResponsePromise);
      console.log(parsedResponse);
      let res = parsedResponse.filter((notif) => !isSubscribedFn(notif['channel']));
      dispatch(
        updateTopNotifications({
          notifs: res,
          pageSize: NOTIFICATIONS_PER_PAGE
        })
      );
      setNotif(res);
    } catch (err) {
      console.log(err);
    } finally {
      setBgUpdateLoading(false);
      setLoading(false);
      setLoadFilter(false);
    }
  };

  React.useEffect(() => {
    fetchLatestNotifications();
    fetchAllNotif();
  }, []);

  React.useEffect(() => {
    if (epnsCommReadProvider) {
      loadNotifications();
    }
  }, [epnsCommReadProvider, account]);

  // const fetchAliasAddress = async (channelAddress) => {
  //   if (channelAddress === null) return;
  //   const userAddressInCaip = convertAddressToAddrCaip(channelAddress, chainId);
  //   const ethAlias = await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
  //     let aliasAccount;
  //     if (data) {
  //       aliasAccount = data.alias_address;
  //     }
  //     return aliasAccount;
  //   });

  //   return ethAlias;
  // };

  // const fetchEthAddress = async (channelAddress) => {
  //   if (channelAddress === null) return;
  //   const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
  //   const aliasEth = await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
  //     let ethAccount;
  //     if (data) {
  //       ethAccount = data.channel;
  //     }
  //     return ethAccount;
  //   });

  //   return aliasEth;
  // };

  //function to query more notifications
  const handlePagination = async () => {
    loadNotifications();
    dispatch(incrementPage());
  };

  const showWayPoint = (index: any) => {
    return Number(index) === notifications.length - 1 && !finishedFetching && !bgUpdateLoading;
  };

  const subscribeToast = useToast();
  const onSubscribeToChannel = async (channelAddress, blockchain) => {
    if (!channelAddress) return;
    let address = channelAddress;

    // const nameToObj = nameToId;
    // if (chainId !== nameToObj[blockchain]) {
    //   if (!onCoreNetwork) {
    //     address = await fetchAliasAddress(channelAddress);
    //   } else {
    //     address = await fetchEthAddress(channelAddress);
    //   }
    // }

    if (!address) return;
    console.log(address);
    subscribeToast.showLoaderToast({loaderMessage: "Waiting for Confirmation..."});
    console.log(library, account);
    const _signer = await library.getSigner(account);
    console.log(_signer);
    console.log({
      signer: _signer,
      channelAddress: convertAddressToAddrCaip(channelAddress, nameToId[blockchain]), // channel address in CAIP
      userAddress: convertAddressToAddrCaip(account, chainId), // user address in CAIP
    })
    await EpnsAPI.channels.subscribe({
      signer: _signer,
      channelAddress: convertAddressToAddrCaip(channelAddress, chainId), // channel address in CAIP
      userAddress: convertAddressToAddrCaip(account, chainId), // user address in CAIP
      onSuccess: () => {
        subscribeToast.showMessageToast({
          toastTitle:"Success", 
          toastMessage: "Successfully opted into channel !", 
          toastType: "SUCCESS", 
          getToastIcon: (size) => <MdCheckCircle size={size} color="green" />
        })
        dispatch(updateSubscriptionStatus({ channelAddress: channelAddress, status: true }));
      },
      onError: (err) => {
        console.error(err);
        subscribeToast.showMessageToast({
          toastTitle:"Error", 
          toastMessage: `There was an error opting into channel`, 
          toastType:  "ERROR", 
          getToastIcon: (size) => <MdError size={size} color="red" />
        })
      },
      env: appConfig.pushNodesEnv
    })
  };

  const isSubscribedFn = (channel: string) => {
    return subscriptionStatus[channel];
  };

  const onDecrypt = async ({ secret, title, message, image, cta }) => {
    let txToast;
    try {
      let decryptedSecret = await CryptoHelper.decryptWithWalletRPCMethod(library.provider, secret, account);

      // decrypt notification message
      const decryptedBody = await CryptoHelper.decryptWithAES(message, decryptedSecret);

      // decrypt notification title
      let decryptedTitle = await CryptoHelper.decryptWithAES(title, decryptedSecret);

      // decrypt notification image
      let decryptedImage = await CryptoHelper.decryptWithAES(image, decryptedSecret);

      // decrypt notification cta
      let decryptedCta = await CryptoHelper.decryptWithAES(cta, decryptedSecret);
      return { title: decryptedTitle, body: decryptedBody, image: decryptedImage, cta: decryptedCta };
    } catch (error) {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.error(error);
        txToast = toaster.dark(<NormalToast msg="User denied message decryption" />, {
          position: 'bottom-right',
          type: toaster.TYPE.ERROR,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      } else if (error.code === -32601) {
        console.error(error);
        txToast = toaster.dark(<NormalToast msg="Your wallet doesn't support message decryption." />, {
          position: 'bottom-right',
          type: toaster.TYPE.ERROR,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      } else {
        console.error(error);
        txToast = toaster.dark(<NormalToast msg="There was an error in message decryption" />, {
          position: 'bottom-right',
          type: toaster.TYPE.ERROR,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
    }
  };

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Container>
        <div ref={modalRef}>
          <SearchFilter
            notifications={allNotif}
            filterNotifications={filterNotifications}
            filter={filter}
            reset={reset}
            loadFilter={loadFilter}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            search={search}
            setSearch={setSearch}
          />
        </div>

        {notifications && (
          <Items id="scrollstyle-secondary">
            {bgUpdateLoading && (
              <Item padding="10px 20px">
                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
              </Item>
            )}
            {(filter && !run ? filteredNotifications : allNotif).map((oneNotification, index) => {
              const {
                cta,
                title,
                message,
                app,
                icon,
                image,
                secret,
                notification,
                channel,
                blockchain,
                url
              } = oneNotification;
              // render the notification item
              // console.log(app , index);
              return (
                <NotifsOuter key={index}>
                  {showWayPoint(index) && !loading && <Waypoint onEnter={handlePagination} />}
                  <NotificationItem
                    notificationTitle={title}
                    notificationBody={message}
                    cta={cta}
                    app={app}
                    icon={icon}
                    image={image}
                    theme={themes.scheme}
                    subscribeFn={() => onSubscribeToChannel(channel, blockchain)}
                    isSpam
                    isSubscribedFn={async () => isSubscribedFn(channel)}
                    isSecret={secret != ''}
                    decryptFn={() => onDecrypt({ secret, title, message, image, cta })}
                    chainName={blockchain}
                    url={url}
                  />
                </NotifsOuter>
              );
            })}
          </Items>
        )}
        {loading && !bgUpdateLoading && <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />}
        {(!notifications.length || (filter && !filteredNotifications.length)) && !loading && (
          <CenteredContainerInfo>
            <DisplayNotice title="You currently have no spam notifications." />
          </CenteredContainerInfo>
        )}
        {toast && <NotificationToast notification={toast} clearToast={clearToast} />}
      </Container>
    </ThemeProvider>
  );
};

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
`;
// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-weight: 200;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  height: 100%;
  // margin: 0px 10px;
  overflow: scroll;
`;

const NotifsOuter = styled.div`
  margin: 25px 0px;
`;

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 10px;
  overflow: scroll;

  @media ${device.laptop} {
  }

  @media ${device.mobileM} {
  }
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

// Export Default
export default SpamBox;
