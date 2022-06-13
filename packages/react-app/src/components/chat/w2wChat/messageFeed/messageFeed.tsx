import React,{useState,useEffect,useCallback} from 'react';
import './messageFeed.css';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
//@ts-ignore
import {getInbox} from '../../../../helpers/w2wChatHelper';
import {createIPFSClient,get,store} from '../../../../helpers/w2w/IPFS';
interface messageFeedProps{
    isValid:boolean,
    filteredUserData:{}[],
    setChat: (arg0: any)=> void;
}
interface Feeds{
    name:string,
    lastMessage:string,
    profile_picture:string,
    time:string,
    intent:Boolean
   
}
const MessageFeed = (props:messageFeedProps)=>{
    const [feeds,setFeeds] = useState([]);
    //const [searchedFeeds,setSearchedFeeds] = useState([]);
    const [feedCount,setFeedCount] = useState<number>(0);
    const [messagesLoading,setMessagesLoading] = useState<boolean>(true);
    const [error,setError] = useState(null);

    const fetchMyApi = useCallback(async ()=>{
        const response = await getInbox('0x0c322eD612C8e5231073e6A8e4c5D02a829D2523');
        let resolvedFeeds = [];
        const ipfs = createIPFSClient();
        /*response.forEach(async (element: { threadhash: string; }) => {
           const v = await get(element.threadhash,ipfs);
           console.log(v);
        });*/
        setFeeds(response);

    },[])
    useEffect(()=>{
        console.log(props);
        if(!props.isValid)
        {
            // fetching from server
           
           fetchMyApi();
        }
        else{
            setFeeds(props.filteredUserData);
        }
        setMessagesLoading(false);
        setFeedCount(2)
        
    },[props.isValid,props.filteredUserData]);
    
    const setCurrentChat = (feed: any)=>{
        feed = {...feed,intent:true}
        props.setChat(feed);
    }
    
    const catchError = (error)=>{
        setError(error)
    }

        return(
            <>
                <section className='messageFeed_body'>
                    {messagesLoading && (
                        <div style={{position:'relative',textAlign:'center',width:'100%',height:'100%'}}>
                            <Loader/>
                        </div>
                    )}
                    {feeds.length===0 && !messagesLoading?(
                        <p style = {{position:'relative',textAlign:'center',width:'100%',background:'#d2cfcf',padding:'10px'}}>
                            No Address found.
                        </p>
                        ):null 
                    }
                    {!messagesLoading   &&
                        <div>
                            {feeds.map((feed: Feeds)=>(
                               <div onClick = {()=>{setCurrentChat(feed)}} >
                                <DefaultMessage
                                    name = {feed.name.split('-').toString().replace(/,/g," ").charAt(0).toUpperCase()+feed.name.split('-').toString().replace(/,/g," ").slice(1)}
                                    lastMessage = {feed.lastMessage}
                                    time = {feed.time}
                                    avatar = {feed.profile_picture}
                                />
                                </div>
                            ))}
                        </div>
                    }
                </section>
                
            </>
        )
    
}
export default MessageFeed;