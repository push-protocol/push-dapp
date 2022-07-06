import React,{useContext,useState,useEffect} from 'react';
import './Profile.css';
import { Context } from '../w2wIndex';
import {uploadUserProfileImage} from '../../../../helpers/w2wChatHelper';
import * as IPFSHelper from '../../../../helpers/w2w/IPFS';
import { IPFSHTTPClient } from 'ipfs-http-client';
import {CID} from 'ipfs-http-client';
declare const Buffer

interface profilePropsType{
    profile_picture:string,
    updateProfile:(image:string)=>void
}
const Profile = (props:profilePropsType)=>{
    const { did,userWallets } = useContext(Context);
    console.log(userWallets);
    const wallets = userWallets.split(' ');
    const [copiedDid,setCopiedDid] = useState<boolean>(false);
    const [copiedWallet,setCopiedWallet] = useState<boolean>(false);
    const [profile,setProfile] = useState('');
    useEffect(()=>{
        try{
            console.log(props.profile_picture);
            const cid = CID.parse(props.profile_picture);
            setProfile(`https://ipfs.infura.io/ipfs/${props.profile_picture}`)
        }
        catch(err)
        {
            setProfile(props.profile_picture);
        }
        
    },[])
    async function copyTextToClipboard(text:string) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
    const handleClickDid = async (wallet:string)=>{
      copyTextToClipboard(wallet)
      .then(()=>{
        setCopiedDid(true);
        setTimeout(() => {
          setCopiedDid(false);
        }, 1000);
      })
    }
    const handleClickWallet = async (wallet:string)=>{
        copyTextToClipboard(wallet)
        .then(()=>{
          setCopiedWallet(true);
          setTimeout(() => {
            setCopiedWallet(false);
          }, 1000);
        })
      }
      const changeHandler = async (event)=>{
        const file = event.target.files[0];
        const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
        const cid = await IPFSHelper.uploadImage(file,IPFSClient);
        console.log(cid);
        setProfile(`https://ipfs.infura.io/ipfs/${cid}`);
        props.updateProfile(cid);
        await uploadUserProfileImage(did.id,cid);
      }
    return (
        <div className = "profilePageContainer">
            <div className='profilePageprofileImg'>
                <img src = {profile}/>
            </div>
            <div className = "profilePageDetails">
                <div className = "profilePageDetailsSection">
                    <div className = "profilePageHead1">
                        <div className='changeProfilePicture' >
                            <img src = {profile}/>
                            <input type="file"  onChange = {changeHandler} accept="image/png, image/jpg, image/gif, image/jpeg"></input>
                            <section>
                               <h4>click to change profile</h4>
                            </section>
                        </div>
                        <div className='userDid'>
                            Your Did:
                            <br></br>
                            <p>
                            {did.id}{!copiedDid ? <i className="fa fa-clone" aria-hidden="true"  onClick={()=>{handleClickDid(did.id)}}></i>:<i className="fa fa-check" aria-hidden="true"></i>} 
                            </p>
                        </div>
                        
                        <div className='userProfileWallets'>
                            Wallets:
                            <br></br>
                            {
                                wallets.map(wallet=>(
                                     <span>{wallet}{!copiedWallet ? <i className="fa fa-clone" aria-hidden="true"  onClick={()=>{handleClickWallet(wallet)}}></i>:<i className="fa fa-check" aria-hidden="true"></i>} <br></br></span>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;