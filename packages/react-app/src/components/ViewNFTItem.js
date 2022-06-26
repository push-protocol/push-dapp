import React from "react";

import styled, { css, keyframes } from "styled-components";
import {Section, Content, Item, ItemH, ItemBreak, A, B, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';

import { Device } from 'assets/Device';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loader from 'react-loader-spinner';

import Skeleton from '@yisheng90/react-loading';
import { IoIosGift } from 'react-icons/io';
import { GiTwoCoins } from 'react-icons/gi';

import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { envConfig } from "@project/contracts";
import { ethers } from "ethers";
// import { keccak256, arrayify, hashMessage, recoverPublicKey } from 'ethers/utils';

import ReactPlayer from 'react-player';

import NFTHelper from 'helpers/NFTHelper';

// Create Header
function ViewNFTItem({ NFTObject, nftReadProvider, nftWriteProvider, controlAt, setControlAt, setTokenId}) {
  const { account, library, chainId } = useWeb3React();

  const [NFTRewardsContract, setNFTRewardsContract] = React.useState(null);
  const [ loading, setLoading ] = React.useState(true);
  const [ txInProgress, setTxInProgress ] = React.useState(false);

  const onMainnetCore = chainId === envConfig.mainnetCoreContractChain;


  React.useEffect(() => {
    if (!!(library && account)) {
      let signer = library.getSigner(account);
      const NFTRewardsInstance = new ethers.Contract(addresses.NFTRewards, abis.NFTRewards, signer);
      setNFTRewardsContract(NFTRewardsInstance);
    }
  }, [account,library]);

  React.useEffect(() => {
    if(NFTObject){
      setLoading(false);
    }
  }, [account, NFTObject]);

  // to claim
  const handleClaim = async (tokenId) => {
    if(NFTRewardsContract){
      setTxInProgress(true)
      let sendWithTxPromise
      sendWithTxPromise = await NFTRewardsContract.claimReward(tokenId)
      const tx = await sendWithTxPromise;

      console.log(tx);
      console.log("waiting for tx to finish");
      let txToast = toast.dark(<LoaderToast msg="Waiting for Confirmation..." color="#35c5f3"/>, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      try {
        await library.waitForTransaction(tx.hash);

        toast.update(txToast, {
          render: "Transaction Completed!",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000
        });

        setTxInProgress(false);
      }
      catch(e) {
        toast.update(txToast, {
          render: "Transaction Failed! (" + e.name + ")",
          type: toast.TYPE.ERROR,
          autoClose: 5000
        });

        setTxInProgress(false);
      }
      setLoading(false);
    }
  }

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <Loader
       type="Oval"
       color={color}
       height={30}
       width={30}
      />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  )

  // render
  return (
    <Item
      key={NFTObject.id}
    >
      <ChannelLogo
        theme={
          !!account && !!library && account == NFTObject.owner ?
            "#e20880" :
            !!account && !!library && NFTObject.owner != 0xFbA7Df351ADD4E79099f63E33b2679EDFDD5e2aB ?
              "#eee" :
              "#fff"
        }
      >
        <ChannelLogoOuter>
          <ChannelLogoInner>
            {loading &&
              <Skeleton color="#eee" width="100%" height="100%" />
            }
            {!loading &&
              <ReactPlayer url={`https://ipfs.io/ipfs/${NFTObject.metadata}`} controls={true} playing={false} loop={true}/>
            }
            {!!account && !!library && NFTObject.owner != 0xFbA7Df351ADD4E79099f63E33b2679EDFDD5e2aB &&
              <NFTStatus>
                <IoIosGift size={20} color="#fff"/>
                <NFTStatusTitle>
                  Gifted
                </NFTStatusTitle>
              </NFTStatus>
            }

            {!!account && !!library && NFTObject.claimable &&
              <NFTClaim>
                <NFTClaimTitle>
                  2400 $PUSH
                </NFTClaimTitle>
              </NFTClaim>
            }
          </ChannelLogoInner>
        </ChannelLogoOuter>

      {!!account && !!library &&
        <ItemH>

          <ChannelActions>
            {loading &&
              <SkeletonButton>
                <Skeleton />
              </SkeletonButton>
            }
            {!!account && !!library && onMainnetCore && account == NFTObject.owner && !loading &&
              <UnsubscribeButton >
                <ActionTitle onClick={() => {
                  setTokenId(NFTObject.id)
                  setControlAt(2)
                }}
                  >Transfer</ActionTitle>
              </UnsubscribeButton>
            }
            {!!account && !!library && onMainnetCore && account == NFTObject.owner && !loading &&
                <UnsubscribeButton disabled = {!NFTObject.claimable}>
                  {txInProgress &&
                    <ActionLoader>
                      <Loader
                       type="Oval"
                       color="#FFF"
                       height={16}
                       width={16}
                      />
                    </ActionLoader>
                  }
                  {NFTObject.claimable &&
                    <ActionTitle hideit={txInProgress} onClick={() => {handleClaim(NFTObject.id)}}>Claim $PUSH</ActionTitle>
                  }
                  {!NFTObject.claimable &&
                    <ActionTitle hideit={txInProgress} >Rewards Claimed</ActionTitle>
                  }
                </UnsubscribeButton>
            }
          </ChannelActions>
        </ItemH>
      }
      </ChannelLogo>
    </Item>
  );
}

// css styles
const NFTTextStyle = styled.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`

const NFTStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`

const NFTStatusTitle = styled(NFTTextStyle)`
  background: #35c4f3;
`

const NFTClaim = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  left: 10px;
`

const NFTClaimTitle = styled(NFTTextStyle)`
  background: #e20880;
`

const Container = styled.div`
  flex: 1;
  // display: inline;
  display: flex;
  flex-wrap: wrap;

  background: #fff;
  border-radius: 10px;
  border: 1px solid rgb(237, 237, 237);

  margin: 15px 0px;
  justify-content: center;
  padding: 10px;
`

const SkeletonWrapper = styled.div`
  overflow: hidden;
  width: ${props => props.atW + '%' || '100%'};
  height: ${props => props.atH}px;
  border-radius: ${props => props.borderRadius || 10}px;
  margin-bottom: ${props => props.marginBottom || 5}px;
  margin-right: ${props => props.marginRight || 0}px;
`

const ChannelLogo = styled.div`
  background: ${props => props.theme || '#fff'};
  max-width: 25%;
  min-width: 200px;
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 2px solid #fafafa;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

const ChannelLogoOuter = styled.div`
  padding-top: 100%;
  position: relative;
`

const ChannelLogoInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChannelLogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`

const ChannelInfo = styled.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 120px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;
`

const ChannelTitle = styled.div`
  margin-bottom: 5px;
`

const ChannelTitleLink = styled.div`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }
`

const ChannelDesc = styled.div`
  flex: 1;
  display: flex;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 400;
  flex-direction: column;
`

const ChannelDescLabel = styled.label`
  flex: 1;
`

const ChannelMeta = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
`

const ChannelMetaBox = styled.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`

const Subscribers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SubscribersCount = styled(ChannelMetaBox)`
  background: #35c4f3;
`

const Pool = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PoolShare = styled(ChannelMetaBox)`
  background: #674c9f;
`

const LineBreak = styled.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${Device.tablet} {
    display: block;
  }
`

const ChannelActions = styled.div`
  margin: 5px;
  flex-grow: 1;
  max-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChannelActionButton = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${ props => props.disabled && css`
    background: #e20880;
    &:hover {
      opacity: 1;
      cursor: default;
      pointer: default;
    }
    &:active {
      opacity: 1;
      cursor: default;
      pointer: default;
    }
  `}
`

const ActionTitle = styled.span`
  font-size: 12px;
  ${ props => props.hideit && css`
    visibility: hidden;
  `};
`

const ActionLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkeletonButton = styled.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`

const SubscribeButton = styled(ChannelActionButton)`
  background: #e20880;
`

const UnsubscribeButton = styled(ChannelActionButton)`
  background: #000;
`

const OwnerButton = styled(ChannelActionButton)`
  background: #35c5f3;
`

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`

const ToasterMsg = styled.div`
  margin: 0px 10px;
`

// Export Default
export default ViewNFTItem;
