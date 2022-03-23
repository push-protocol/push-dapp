import React from "react";
import styled, {useTheme} from "styled-components";
import Loader from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { useWeb3React } from "@web3-react/core";
import { useSelector, useDispatch } from "react-redux";
import { envConfig } from "@project/contracts";
import DisplayNotice from "components/DisplayNotice";
import { postReq } from "api";
import SearchFilter from '../components/SearchFilter';
import {ThemeProvider} from "styled-components";
import {
  api,
  utils,
  NotificationItem,
} from "@epnsproject/frontend-sdk-staging";
import {
  addPaginatedNotifications,
  incrementPage,
  setFinishedFetching,
  updateTopNotifications,
} from "redux/slices/notificationSlice";
import { Item } from 'components/SharedStyling';

const NOTIFICATIONS_PER_PAGE = 100000;

// Create Header
function Feedbox() {
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const { epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const { notifications, page, finishedFetching, toggle } = useSelector(
    (state: any) => state.notifications
  );

  const themes = useTheme();
  const [filteredNotifications , setFilteredNotifications] = React.useState([]);
  const [filter , setFilter] = React.useState(false);
  const [bgUpdateLoading, setBgUpdateLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("inbox");
  
    const reset = ()=>setFilter(false);
    const filterNotifications = async (query , channels , startDate , endDate) => {
        if(startDate == null)startDate = new Date('January 1, 2000');
        if(endDate == null)endDate = new Date('January 1, 3000');
        startDate = startDate.getTime()/1000;
        endDate = endDate.getTime()/1000;
        if(loading)return;
        setLoading(true);
        setFilter(true);
        var Filter = {
            channels : channels , 
            date : {lowDate : startDate , highDate : endDate}
        };
        if(channels.length == 0)delete Filter.channels;

        
        setFilteredNotifications([]);
        if(notifications.length >= NOTIFICATIONS_PER_PAGE){
            try {
                const {count , results} = await postReq("/feeds/search", {
                    subscriber : account,
                    searchTerm: query,
                    filter: Filter,
                    isSpam: 0,
                    page: 1,
                    pageSize: 5,
                    op: "read"
                });
                const parsedResponse = utils.parseApiResponse(results);
                setFilteredNotifications([parsedResponse]);
            }
            catch (err) {
                console.log(err);
            }
        }
        else{
            const regex = new RegExp(`^.*?${query.toLowerCase()}.*?$`);
            let filterNotif = [];
            for(const notif of notifications){
                if(
                    ( (Filter.channels === undefined ?  true : (Filter.channels.includes(notif.channel)))&&
                notif.epoch >= startDate && notif.epoch <= endDate
                && await notif.message.toLowerCase().match(regex)!==null )
                )
                filterNotif.push(notif);
            }
            setFilteredNotifications(filterNotif);
        }
        setLoading(false);
    }
  const loadNotifications = async () => {
    if (loading || finishedFetching) return;
    setLoading(true);
    try {
      const { count, results } = await api.fetchNotifications(
        account,
        NOTIFICATIONS_PER_PAGE,
        page,
        envConfig.apiUrl
      );
      const parsedResponse = utils.parseApiResponse(results);
      dispatch(addPaginatedNotifications(parsedResponse));
      if (count === 0) {
        dispatch(setFinishedFetching());
      }
      console.log(notifications);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
    const fetchLatestNotifications = async () => {
        if (loading || bgUpdateLoading) return;
        setBgUpdateLoading(true);
        setLoading(true);
        try {
            const { count, results } = await api.fetchNotifications(
                account,
                NOTIFICATIONS_PER_PAGE,
                1,
                envConfig.apiUrl
            );
            if (!notifications.length) {
                dispatch(incrementPage());
            }
            const parsedResponse = utils.parseApiResponse(results);
            const map1 = new Map();
            const map2 = new Map();
            results.forEach( each => {
                map1.set(each.payload.data.sid , each.epoch);
                map2.set(each.payload.data.sid , each.channel);
            })
            parsedResponse.forEach( each => {
                each.date = map1.get(each.sid);
                each.epoch = (new Date(each.date).getTime() / 1000);
                each.channel = map2.get(each.sid);
            })
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

    React.useEffect(() => {
        if (account && currentTab === "inbox") {
            fetchLatestNotifications();
        }
    }, [account, currentTab]);

    React.useEffect(() => {
        fetchLatestNotifications();
    }, [toggle]);

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
    const [clicked, setClicked] = React.useState(false);

  // Render
  return (
    <ThemeProvider theme={themes}>
    <Container>
    <SearchFilter notifications={notifications} filterNotifications={filterNotifications} filter={filter} reset={reset}/>
      {notifications && (
        <Notifs id="scrollstyle-secondary">

          {bgUpdateLoading && (
            <Item
              padding="10px 20px"
            >
              <Loader type="Oval" color="#35c5f3" height={40} width={40} />
            </Item>
          )}

            {(filter? filteredNotifications : notifications).map((oneNotification, index) => {
            const {
              cta,
              title,
              message,
              app,
              icon,
              image,
            } = oneNotification;

            // render the notification item
            return (
              <div key={`${message}+${title}`}>
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
                  theme={themes.scheme}
                />
              </div>
            );
          })}

          {loading && !bgUpdateLoading && (
            <Item
              padding="10px 20px"
            >
              <Loader type="Oval" color="#35c5f3" height={40} width={40} />
            </Item>
          )}
        </Notifs>
      )}
      {(!notifications.length || (filter && !filteredNotifications.length)) && !loading && (
        <Item>
          <DisplayNotice
            title="You currently have no notifications, try subscribing to some channels."
            theme="third"
          />
        </Item>
      )}
    </Container>
    </ThemeProvider>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${props => props.theme.mainBg};

  font-weight: 200;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  height: inherit;
`;

const Notifs = styled.div`
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  
  flex: 1;

  "-webkit-scrollbar-track": {
    background-color: #EEE;
    border-radius: 10px;
  }
`;

// Export Default
export default Feedbox;
