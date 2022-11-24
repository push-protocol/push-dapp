import React, { useEffect, useState } from "react";
import { Peer } from "peerjs";
import { useDispatch, useSelector } from "react-redux";
import { resetPeerSlice, setConnectedPeer, setLocalPeer } from "redux/slices/peerSlice";

const usePeer = () => {
    const dispatch = useDispatch();
    const {localPeer, localPeerID} = useSelector((state: any) => state.peer);
    const [myPeer, setPeer] = useState(localPeer);
    const [myPeerID, setMyPeerID] = useState(localPeerID);

    const cleanUp = () => {
        if (myPeer) {
            myPeer.disconnect();
            myPeer.destroy();
        }
        setPeer(null);
        setMyPeerID(null);
        dispatch(resetPeerSlice());
    }

    useEffect(() => {
      const peer = myPeer ? myPeer : new Peer();

      peer.on('open', () => {
          console.log(peer);
          console.log(peer.id);
          setPeer(peer);
          setMyPeerID(peer.id);
          dispatch(setLocalPeer({peer: peer, peerID: peer.id}))
      })

      peer.on("connection", (connection) => {
        console.log("we got connection");
        connection.on("data", (data) => {
          // Will print 'hi!'
          console.log("got data", data);
          dispatch(setConnectedPeer({peerID: data.peerID}))
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