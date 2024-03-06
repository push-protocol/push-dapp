// React + Web3 Essentials
import React, { useContext } from "react";

// External Packages
import { useDispatch, useSelector } from "react-redux";
import { toast as toaster } from "react-toastify";
import { useClickAway } from "react-use";
import { Waypoint } from "react-waypoint";
import styled, { ThemeProvider, useTheme } from "styled-components";

// Internal Compoonents
import * as PushAPI from "@pushprotocol/restapi";
import { NotificationItem } from "@pushprotocol/uiweb";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import SearchFilter from "components/SearchFilter";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import CryptoHelper from "helpers/CryptoHelper";
import { Item } from "primaries/SharedStyling";
import {
  addPaginatedNotifications,
  incrementPage,
  resetNotificationsSlice,
  setFinishedFetching,
  updateTopNotifications
} from "redux/slices/notificationSlice";
import DisplayNotice from "../primaries/DisplayNotice";
import NotificationToast from "../primaries/NotificationToast";
import { ScrollItem } from "./ViewChannels";
import { useAccount, useDeviceWidthCheck } from "hooks";
import { ReactComponent as MetamaskLogo } from 'assets/PushSnaps/metamasksnap.svg';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as OpenLink } from 'assets/PushSnaps/GoToImage.svg'
import { GlobalContext } from "contexts/GlobalContext";

// Internal Configs
import { appConfig } from "config";
import { device } from "config/Globals";
import { ItemHV2, SpanV2 } from "components/reusables/SharedStylingV2";
import { Image } from "components/SharedStyling";
import { useNavigate } from "react-router-dom";

// Constants
const NOTIFICATIONS_PER_PAGE = 10;

// Create Header
const Feedbox = ({ showFilter, setShowFilter, search, setSearch }) => {
  const dispatch = useDispatch();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const modalRef = React.useRef(null);
  useClickAway(modalRef, () => showFilter && setShowFilter(false));

  const { account, provider, chainId } = useAccount();
  const { notifications, page, finishedFetching, toggle } = useSelector(
    (state: any) => state.notifications
  );

  const themes = useTheme();
  let user = convertAddressToAddrCaip(account, chainId)

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  const { run, welcomeNotifs } = useSelector((state: any) => state.userJourney);

  const [limit, setLimit] = React.useState(10);
  const [allNotf, setNotif] = React.useState([]);
  const [filteredNotifications, setFilteredNotifications] = React.useState([]);
  const [filter, setFilter] = React.useState(false);
  const [allFilter, setAllFilter] = React.useState([]);
  const [loadFilter, setLoadFilter] = React.useState(false);
  const [bgUpdateLoading, setBgUpdateLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {readOnlyWallet } = useContext(GlobalContext);

  const [showSnapInfo, setShowSnapInfo] = React.useState(true);

  const navigate = useNavigate();
  const navigateToSnaps = () => {
    navigate('/snap');
  };

  const NormalToast = ({ msg }) => (
    <Toaster>
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  )

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);

  const reset = () => setFilter(false);
  const filterNotifications = async (query, channels, startDate, endDate) => {
    if (startDate == null) startDate = new Date('January 1, 2000');
    if (endDate == null) endDate = new Date('January 1, 3000');
    startDate = startDate.getTime() / 1000;
    endDate = endDate.getTime() / 1000;

    if (loading) return;
    setBgUpdateLoading(true);
    setLoading(true);
    setFilter(true);
    var Filter = {
      channels: channels,
      date: { lowDate: startDate, highDate: endDate }
    };
    if (channels.length == 0) delete Filter.channels;

    setFilteredNotifications([]);
    try {
      let filterNotif = [];
      for (const notif of allNotf) {
        let timestamp;
        const matches = notif.message.match(/\[timestamp:(.*?)\]/);
        if (matches) {
          timestamp = matches[1];
        }
        else timestamp = notif.epoch;
        if (
          ((Filter.channels === undefined ? true : (Filter.channels.includes(notif.channel))) &&
            timestamp >= startDate && timestamp <= endDate
            && (query === "" || notif.message.toLowerCase().includes(query.toLowerCase())))
        )
          filterNotif.push(notif);
      }
      const newNotifs = filterNotif
      setAllFilter(newNotifs)
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setBgUpdateLoading(false);
    }
  }

  React.useEffect(() => {
    // console.log(allFilter)
    setFilteredNotifications(allFilter)
  }, [allFilter])

  const loadNotifications = async () => {
    if (loading || finishedFetching || !userPushSDKInstance) return;
    setLoading(true);
    try {
      // const { count, results } = await PushAPI.fetchNotifications({
      //   user: account,
      //   pageSize: NOTIFICATIONS_PER_PAGE,
      //   page,
      //   chainId,
      //   dev: true,
      // });
      const results = await userPushSDKInstance.notification.list('INBOX', {
        raw: true,
        page: page,
        limit: NOTIFICATIONS_PER_PAGE
      });
      const parsedResponse = PushAPI.utils.parseApiResponse(results);
      dispatch(addPaginatedNotifications(parsedResponse));
      if (parsedResponse.length === 0) {
        dispatch(setFinishedFetching());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchLatestNotifications = async () => {
    // if (loading || bgUpdateLoading) return;
    setBgUpdateLoading(true);
    setLoading(true);
    try {
      const results = await await userPushSDKInstance.notification.list('INBOX', {
        raw: true,
        page: 1,
        limit: NOTIFICATIONS_PER_PAGE
      });
      if (!notifications.length) {
        dispatch(incrementPage());
      }
      const parsedResponse = PushAPI.utils.parseApiResponse(results);
      const map1 = new Map();
      const map2 = new Map();
      results.forEach(each => {
        map1.set(each.payload.data.sid, each.epoch);
        map2.set(each.payload.data.sid, each.sender);
      })
      parsedResponse.forEach(each => {
        each['date'] = map1.get(each.sid);
        each['epoch'] = (new Date(each['date']).getTime() / 1000);
        each['channel'] = map2.get(each.sid);
      })
      dispatch(
        updateTopNotifications({
          notifs: parsedResponse,
          pageSize: NOTIFICATIONS_PER_PAGE,
        })
      );
      if (parsedResponse.length === 0) {
        dispatch(setFinishedFetching());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setBgUpdateLoading(false);
      setLoading(false);
    }
  };

  const fetchAllNotif = async () => {
    setLoadFilter(true);
    try {
      const results = await userPushSDKInstance.notification.list('INBOX', {
        limit: 100000,
        page: page,
        raw: true
      });
      if (!notifications.length) {
        dispatch(incrementPage());
      }
      const parsedResponse = PushAPI.utils.parseApiResponse(results);
      const map1 = new Map();
      const map2 = new Map();
      results.forEach(each => {
        map1.set(each.payload.data.sid, each.epoch);
        map2.set(each.payload.data.sid, each.sender);
      })
      parsedResponse.forEach(each => {
        each['date'] = map1.get(each.sid);
        each['epoch'] = (new Date(each['date']).getTime() / 1000);
        each['channel'] = map2.get(each.sid);
      })
      setNotif(parsedResponse);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadFilter(false);
    }
  };

  React.useEffect(() => {
    if (userPushSDKInstance?.account == readOnlyWallet || !userPushSDKInstance) return;
    fetchLatestNotifications();
    fetchAllNotif();
  }, [toggle, userPushSDKInstance]);

  //function to query more notifications
  const handlePagination = async () => {
    if (filter) {
      setLimit(limit + 10);
    }
    else {
      loadNotifications();
      dispatch(incrementPage());
    }
  };

  const showWayPoint = (index: any) => {
    if (!filter) {
      return (
        Number(index) === notifications.length - 1 &&
        !finishedFetching &&
        !bgUpdateLoading
      );
    }
    else {
      return (
        Number(index) === limit - 1
      );
    }

  };

  const onDecrypt = async ({ secret, title, message, image, cta }) => {
    let txToast;
    try {
      let decryptedSecret = await CryptoHelper.decryptWithWalletRPCMethod(provider, secret, account);
      // let decryptedSecret = await CryptoHelper.decryptWithWalletRPCMethod(library.provider, secret, account);

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
        txToast = toaster.dark(
          <NormalToast msg="User denied message decryption" />,
          {
            position: "bottom-right",
            type: toaster.TYPE.ERROR,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else if (error.code === -32601) {
        console.error(error);
        txToast = toaster.dark(
          <NormalToast msg="Your wallet doesn't support message decryption." />,
          {
            position: "bottom-right",
            type: toaster.TYPE.ERROR,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else {
        console.error(error);
        txToast = toaster.dark(
          <NormalToast msg="There was an error in message decryption" />,
          {
            position: "bottom-right",
            type: toaster.TYPE.ERROR,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
  };

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Container>
        <div ref={modalRef}>
          <SearchFilter
            notifications={allNotf}
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

        <ScrollItem>
          {showSnapInfo && (
            <>
              <SnapSection flexWrap='nowrap'>
                <MetamaskLogo />
                <InstallText justifyContent='space-between'>
                  <SpanV2 fontSize='14px' fontWeight='400'>Get Notifications directly in MetaMask using Push Snap.</SpanV2>
                  <InstallPushSnap onClick={navigateToSnaps} >Install Push Snap <OpenLink /> </InstallPushSnap>
                </InstallText>
                <CloseButton onClick={() => {
                  setShowSnapInfo(false);
                }} />
              </SnapSection>

            </>
          )}

          {((!run && !notifications.length) ||
            (!run && filter && !filteredNotifications.length) ||
            (run && !welcomeNotifs.length)) &&
            !loading && (
              <div style={{ textAlign: "center" }}>
                <DisplayNotice
                  title="You currently have no notifications, try subscribing to some channels."
                />
              </div>
            )}
          {notifications && (
            <Notifs id="scrollstyle-secondary">
              {bgUpdateLoading && (
                <Item padding="10px 20px">
                  <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
                </Item>
              )}
              {run &&
                welcomeNotifs.map((oneNotification, index) => {
                  const {
                    cta,
                    title,
                    message,
                    app,
                    icon,
                    image,
                    blockchain,
                    url
                  } = oneNotification;

                  // render the notification item
                  return (
                    <NotifsOuter key={`${message}+${title}`}>
                      <NotificationItem
                        notificationTitle={title}
                        notificationBody={message}
                        cta={cta}
                        app={app}
                        icon={icon}
                        image={image}
                        theme={themes.scheme}
                        chainName={blockchain}
                        url={url}
                      />
                    </NotifsOuter>
                  );
                })}
              {(filter
                ? filteredNotifications
                : notifications
              ).map((oneNotification, index) => {
                const {
                  cta,
                  title,
                  message,
                  app,
                  icon,
                  image,
                  secret,
                  notification,
                  blockchain,
                  url
                } = oneNotification;
                if (run) return;
                // render the notification item
                return (
                  <NotifsOuter key={index}>
                    {showWayPoint(index) && (
                      <Waypoint onEnter={() => handlePagination()} />
                    )}
                    <NotificationItem
                      notificationTitle={title}
                      notificationBody={message}
                      cta={cta}
                      app={app}
                      icon={icon}
                      image={image}
                      isSecret={secret != ""}
                      decryptFn={() =>
                        onDecrypt({ secret, title, message, image, cta })
                      }
                      chainName={blockchain}
                      theme={themes.scheme}
                      url={url}
                    />
                  </NotifsOuter>
                );
              })}

              {loading && !bgUpdateLoading && (
                <Item padding="10px 20px">
                  <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
                </Item>
              )}
            </Notifs>
          )}

          {toast && (
            <NotificationToast notification={toast} clearToast={clearToast} />
          )}
        </ScrollItem>
      </Container>
    </ThemeProvider>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${device.tablet} {
    height: 74%;
  }
`;

const NotifsOuter = styled.div`
  margin: 25px 0px;
`;

const Notifs = styled.div`
  align-self: stretch;
  flex: 1;
`;

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

const SnapSection = styled(ItemHV2)`
  max-height:28px;
  margin-top:20px;
  border-radius: 12px;
  border: 1px solid #D4DCEA;
  background: #FFF;
  border: 1px solid ${(props) => props.theme.default.border};
  background:${(props) => props.theme.default.bg};
  padding: 12px 16px;
  align-items: center;
  gap: 16px;

  @media ${device.tablet} {
    gap: 9px;  
    margin-right:10px;
  }

  @media (max-width:525px) {
    max-height:50px;
  }
`

const InstallText = styled(ItemHV2)`
  @media ${device.tablet} {
    flex-direction:column;  
    align-items: baseline;
    display: block;
    align-self: auto;
  }
  
`

const CloseButton = styled(Close)`
  cursor:pointer;
  height:20px;
  width:20px;
  


`

const InstallPushSnap = styled(SpanV2)`
  cursor:pointer;
  font-size:14px;
  font-weight:500;
  color:#D53A94;

  &:hover{
    text-decoration:underline;
    text-underline-position: under;
  }
`

// Export Default
export default Feedbox;