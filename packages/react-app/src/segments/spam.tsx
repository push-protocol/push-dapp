import React, {useState} from "react";
import styled, { useTheme } from 'styled-components';
import Loader from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { useWeb3React } from "@web3-react/core";
import { useSelector, useDispatch } from "react-redux";
import { envConfig } from "@project/contracts";
import SearchFilter from '../components/SearchFilter';
import {
  api,
  utils,
  NotificationItem,
} from "@epnsproject/frontend-sdk-staging";
import {
  addPaginatedNotifications,
  incrementPage,
  setFinishedFetching,
  updateTopNotifications
} from "redux/slices/spamSlice";
import { postReq } from "api";
import DisplayNotice from "components/DisplayNotice";
import { ThemeProvider } from "styled-components";
import { ethers } from "ethers";

const NOTIFICATIONS_PER_PAGE = 10;
// Create Header
function SpamBox({ currentTab }) {
  const dispatch = useDispatch();
  const { account, chainId, library } = useWeb3React();
  const { epnsCommReadProvider } = useSelector(
    (state: any) => state.contracts
  );

  const themes = useTheme();

  const [darkMode, setDarkMode] = useState(false);

  const { run } = useSelector((state: any) => state.userJourney);

  const { notifications, page, finishedFetching } = useSelector((state: any) => state.spam);
  const { toggle } = useSelector(
    (state: any) => state.notifications
  );
  const EPNS_DOMAIN = {
    name: "EPNS COMM V1",
    chainId: chainId,
    verifyingContract: epnsCommReadProvider?.address,
  };
  const [allNotif , setNotif] = React.useState([]);
  const [loadFilter , setLoadFilter] = React.useState(false);
  const [filteredNotifications , setFilteredNotifications] = React.useState([]);
  const [filter , setFilter] = React.useState(false);
  const [bgUpdateLoading, setBgUpdateLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onCoreNetwork = (chainId === envConfig.coreContractChain);

  const nameToIdDev = {
    "POLYGON_TEST_MUMBAI": 80001,
    "ETH_TEST_KOVAN": 42
  }

  const nameToIdProd = {
    "POLYGON": 137,
    "ETH": 1
  }

  const reset = ()=>setFilter(false);
  const filterNotifications = async (query , channels , startDate , endDate) => {
    if(loading)return;
    setLoading(true);
    setBgUpdateLoading(true);
    setFilter(true);
    if(startDate == null)startDate = new Date('January 1, 2000');
    if(endDate == null)endDate = new Date('January 1, 3000');
    startDate = startDate.getTime()/1000;
    endDate = endDate.getTime()/1000;
    var Filter = {
        channels : channels , 
        date : {lowDate : startDate , highDate : endDate}
    };
    if(channels.length == 0)delete Filter.channels;


    setFilteredNotifications([]);
    // if(notifications.length >= NOTIFICATIONS_PER_PAGE){
    //     try {
    //         const {count , results} = await postReq("/feeds/search", {
    //             subscriber : account,
    //             searchTerm: query,
    //             filter: Filter,
    //             isSpam: 1,
    //             page: 1,
    //             pageSize: 5,
    //             op: "read"
    //         });
    //         const parsedResponse = utils.parseApiResponse(results);
    //         setFilteredNotifications([parsedResponse]);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }
    // else{
    
    let filterNotif = [];
        for(const notif of allNotif){
          let timestamp;
          const matches = notif.message.match(/\[timestamp:(.*?)\]/);
            if(matches){
              timestamp = matches[1];
            }
            else timestamp = notif.epoch;
            if(
                ( (Filter.channels === undefined ?  true : (Filter.channels.includes(notif.channel)))&&
            timestamp >= startDate && timestamp <= endDate
            &&  notif.message.toLowerCase().includes(query.toLowerCase()) )
            )
            filterNotif.push(notif);
        }
        setFilteredNotifications(filterNotif);
    // }
    setLoading(false);
    setBgUpdateLoading(false);
}

  const loadNotifications = async () => {
    if (loading || finishedFetching  || run) return;
    setLoading(true);
    try {
      const { count, results } = await api.fetchSpamNotifications(
        account,
        NOTIFICATIONS_PER_PAGE,
        page,
        envConfig.apiUrl
      );
        let parsedResponse = utils.parseApiResponse(results);
          parsedResponse.forEach( (each,i) => {
              each.date = results[i].epoch;
              each.epoch = (new Date(each.date).getTime() / 1000);
          })
          const parsedResponsePromise = parsedResponse.map(async (elem: any, i: any) => {
            elem.channel = results[i].channel;
            let address = results[i].channel;
            
            if (results[i].blockchain === 'POLYGON_TEST_MUMBAI') {
              address = await fetchEthAddress(results[i].channel);
            }
            const {
              data: { subscribers },
            } = await postReq("/channels/get_subscribers", {
              channel: address,
              blockchain: chainId,
              op: "read",
            });
            elem.subscribers = subscribers;
            return { ...elem };
        });
        parsedResponse = await Promise.all(parsedResponsePromise);
      dispatch(addPaginatedNotifications(parsedResponse));
      if (count === 0) {
        dispatch(setFinishedFetching());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestNotifications = async () => {
    if (loading || bgUpdateLoading  || run) return;
    setBgUpdateLoading(true);
    setLoading(true);

    try {
      const { count, results } = await api.fetchSpamNotifications(
        account,
        NOTIFICATIONS_PER_PAGE,
        1,
        envConfig.apiUrl
      );
      if (!notifications.length) {
        dispatch(incrementPage());
      }
      let parsedResponse = utils.parseApiResponse(results);
        parsedResponse.forEach( (each,i) => {
            each.date = results[i].epoch;
            each.epoch = (new Date(each.date).getTime() / 1000);
        })
        const parsedResponsePromise = parsedResponse.map(async (elem: any, i: any) => {
          elem.channel = results[i].channel;
          let address = results[i].channel;
          if (results[i].blockchain === 'POLYGON_TEST_MUMBAI') {
            address = await fetchEthAddress(results[i].channel);
          }
          const {
            data: { subscribers },
          } = await postReq("/channels/get_subscribers", {
            channel: address,
            blockchain: chainId,
            op: "read",
          });
          elem.subscribers = subscribers;
          return { ...elem };
        });
      parsedResponse = await Promise.all(parsedResponsePromise);
      dispatch(
        updateTopNotifications({
          notifs: parsedResponse,
          pageSize: NOTIFICATIONS_PER_PAGE,
        })
      );
      if (count === 0) {
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
      const { count, results } = await api.fetchSpamNotifications(
        account,
        100000,
        1,
        envConfig.apiUrl
      );
      if (!notifications.length) {
        dispatch(incrementPage());
      }
      let parsedResponse = utils.parseApiResponse(results);
        parsedResponse.forEach( (each,i) => {
            each.date = results[i].epoch;
            each.epoch = (new Date(each.date).getTime() / 1000);
        })
        const parsedResponsePromise = parsedResponse.map(async (elem: any, i: any) => {
          elem.channel = results[i].channel;
          let address = results[i].channel;
          if (results[i].blockchain === 'POLYGON_TEST_MUMBAI') {
            address = await fetchEthAddress(results[i].channel);
          }
          const {
            data: { subscribers },
          } = await postReq("/channels/get_subscribers", {
            channel: address,
            op: "read",
          });
          elem.subscribers = subscribers;
          return { ...elem };
        });
      parsedResponse = await Promise.all(parsedResponsePromise);
      let res = parsedResponse.filter(notif => !isSubscribedFn(notif.subscribers));
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
    // if (account && currentTab === "spambox") {
      fetchLatestNotifications();
      fetchAllNotif();
    // }
    // else{
    //   console.log(account);
    // }
  }, []);

  React.useEffect(() => {
    if (epnsCommReadProvider) {
      loadNotifications();
    }
  }, [epnsCommReadProvider, account]);

  const fetchAliasAddress = async (channelAddress) => {
    if (channelAddress === null) return;
    const ethAlias = await postReq("/channels/get_alias_details", {
          channel: channelAddress,
          op: "read",
        }).then(({ data }) => {
          console.log({ data });
          let aliasAccount;
          if (data) {
            aliasAccount = data.aliasAddress
          }
          return aliasAccount;
        });
    
    return ethAlias;
  }

  const fetchEthAddress = async (channelAddress) => {
    if (channelAddress === null) return;
    const aliasEth = await postReq("/channels/get_eth_address", {
      aliasAddress: channelAddress,
      op: "read",
    }).then(({ data }) => {
      console.log({ data });
      let ethAccount;
      if (data) {
        ethAccount = data.ethAddress
      }
      return ethAccount;
    });
    
    return aliasEth;
  }

  //function to query more notifications
  const handlePagination = async () => {
    loadNotifications();
    dispatch(incrementPage());
  };

  const showWayPoint = (index: any) => {
    return (
      Number(index) === notifications.length - 1 &&
      !finishedFetching &&
      !bgUpdateLoading
    );
  };

  const onSubscribeToChannel = async (channelAddress, blockchain) => {
    if (!channelAddress) return;
    let txToast;
    let address = channelAddress;

    const nameToObj = (envConfig.coreContractChain === 1) ? nameToIdProd : nameToIdDev;
    if (chainId !== nameToObj[blockchain]) {
      if (!onCoreNetwork) {
        address = await fetchAliasAddress(channelAddress);
      } else {
        address = await fetchEthAddress(channelAddress);
      }
    }

    if (!address) return;
    const type = {
      Subscribe: [
        { name: "channel", type: "address" },
        { name: "subscriber", type: "address" },
        { name: "action", type: "string" },
      ],
    };
    const message = {
      channel: address,
      subscriber: account,
      action: "Subscribe",
    };

    const signature = await library
      .getSigner(account)
      ._signTypedData(EPNS_DOMAIN, type, message);
    return postReq("/channels/subscribe_offchain", {
      signature,
      message,
      op: "write",
      chainId,
      contractAddress: epnsCommReadProvider.address,
    });
  };

  const isSubscribedFn = (subscribers: any) => {
    return subscribers
      .map((a) => a.toLowerCase())
      .includes(account.toLowerCase());
  };

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Container>
      <SearchFilter notifications = {allNotif} filterNotifications = {filterNotifications} filter={filter} reset={reset} loadFilter={loadFilter}/>
        {bgUpdateLoading && (
          <div style={{ marginTop: "10px" }}>
            <Loader type="Oval" color="#35c5f3" height={40} width={40} />
          </div>
        )}
        {notifications && (
          <Items id="scrollstyle-secondary">
            {(filter && !run ? filteredNotifications : allNotif).map((oneNotification, index) => {
              const {
                cta,
                title,
                message,
                app,
                icon,
                image,
                channel,
                subscribers,
                blockchain
              } = oneNotification;
              // render the notification item
              // console.log(app , index);
              return (
                <div key={index}>
                  {showWayPoint(index) && !loading && (
                    <Waypoint onEnter={handlePagination} />
                  )}
                  <NotificationItem
                    notificationTitle={title}
                    notificationBody={message}
                    cta={cta}
                    app={app}
                    icon={icon}
                    image={image}
                    theme={themes.scheme}
                    subscribeFn={(e) => {
                      e?.stopPropagation();
                      onSubscribeToChannel(channel, blockchain);
                    }}
                    isSpam
                    isSubscribedFn={async () => isSubscribedFn(subscribers)}
                    chainName={blockchain}
                  />
                </div>
              );
            })}
          </Items>
        )}
        {loading && !bgUpdateLoading && (
          <Loader type="Oval" color="#35c5f3" height={40} width={40} />
        )}
        {(!notifications.length || (filter && !filteredNotifications.length)) && !loading && (
          <CenteredContainerInfo>
            <DisplayNotice
              title="You currently have no spam notifications."
              theme="third"
            />
          </CenteredContainerInfo>
        )}
      </Container>
    </ThemeProvider>
  );
}

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
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  background: ${props => props.theme.mainBg};

  // padding: 20px;
  // font-size: 16px;
  // display: flex;
  // font-weight: 200;
  // align-content: center;
  // align-items: center;
  // justify-content: center;
  // width: 100%;
  // min-height: 40vh;
`;

// Export Default
export default SpamBox;