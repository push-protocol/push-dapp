import React,{useState,useEffect,useCallback} from 'react';
import './messageFeed.css';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
//@ts-ignore
import test from '../w2wAsset/test.jpg'
import {getInbox} from '../../../../helpers/w2wChatHelper';
//import IPFS from '../../../../helpers/w2w/IPFS';
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
        console.log(response);
        let resolvedFeeds = [];
        response.forEach(element => {
            
        });
        setFeeds(response);

    },[])
    useEffect(()=>{
        if(!props.isValid)
        {
            /*setFeeds([{wallet:'0y03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved`,time:`5/27/2022`,did:"0xwefwf",intent:true}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...743',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...744',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...745',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
            ,{wallet:'0x03faC3d...746',lastMessage:'Hello, how are u? wefwf ervesrv',avatar:`${test}`,time:`5/27/2022`,did:"0xwefwf",intent:false}
        ])*/
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