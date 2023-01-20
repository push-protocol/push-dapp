import React, { useContext, useEffect, useState } from "react";
import { Peer } from "peerjs";
import { useDispatch, useSelector } from "react-redux";
// import { resetPeerSlice, setConnectedPeer, setLocalPeer } from "redux/slices/peerSlice";
// import { resetPeerSlice} from "redux/slices/peerSlice";
import { Context } from "modules/chat/ChatModule";

const usePeer = () => {
    const dispatch = useDispatch();
    // const {localPeer, localPeerID} = useSelector((state: any) => state.peer);
    const { setLocalPeer,localPeer,setConnectedPeerID } = useContext(Context);
    const [myPeer, setPeer] = useState(localPeer.peer);
    // const [myPeer, setPeer] = useState(localPeer);
    // const [myPeerID, setMyPeerID] = useState(localPeerID);
    const [myPeerID, setMyPeerID] = useState(localPeer.peerID);


    const cleanUp = () => {
        if (myPeer) {
            myPeer.disconnect();
            myPeer.destroy();
        }
        setPeer(null);
        setMyPeerID(null);
        setLocalPeer({peer:'',peerID:''})
        setConnectedPeerID({peerID:''})
        // dispatch(resetPeerSlice());
    }

    useEffect(() => {
      const peer = myPeer ? myPeer : new Peer();

      peer.on('open', () => {
          console.log(peer);
          console.log(peer.id);
          setPeer(peer);
          setMyPeerID(peer.id);
          setLocalPeer({
            peer:peer,
            peerID:peer.id
          })
        //   dispatch(setLocalPeer({peer: peer, peerID: peer.id}))
      })

      peer.on("connection", (connection) => {
        console.log("we got connection");
        connection.on("data", (data) => {
          // Will print 'hi!'
          console.log("got data", data);
          setConnectedPeerID({peerID:data.peerID})
        //   dispatch(setConnectedPeer({peerID: data.peerID}))
        });
      });

      peer.on('disconnected', () => {
          console.log("Peer disconnected");
          cleanUp()
      });

      peer.on('close', () => {
          console.log("Peer closed remotely");
          cleanUp()
      });

      peer.on('error', (error) => {
          console.log("peer error", error);
          cleanUp()
      });
    }, [])

    return [myPeer, myPeerID];
}

export default usePeer;