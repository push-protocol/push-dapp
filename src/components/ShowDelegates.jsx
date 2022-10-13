// React + Web3 Essentials
import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { utils } from "ethers";

// External Packages
import {
  AiOutlineUserDelete
} from 'react-icons/ai';
import { useSelector } from "react-redux";
import styled, { css, useTheme } from "styled-components";
import { MdCheckCircle, MdError } from "react-icons/md";

// Internal Components
import { convertAddressToAddrCaip, getCaipToObj } from "helpers/CaipHelper";
import { useDeviceWidthCheck } from "hooks";
import useModal from "hooks/useModal";
import useToast from "hooks/useToast";
import { Button, Content, H2, H3, Item, Section, Span } from "primaries/SharedStyling";
import { getChannelDelegates } from "services";
import DelegateInfo from "./DelegateInfo";
import RemoveDelegateModalContent from "./RemoveDelegateModalContent";
import { appConfig } from "config";
import { aliasChainIdsMapping, chainIdToNetwork, networkName, Networks } from "helpers/UtilityHelper";

const isOwner=(account,delegate)=>{
  return account.toLowerCase() === delegate.toLowerCase() 
}

const ShowDelegates = () => {
  const { account, chainId, library } = useWeb3React();
  const [delegatees, setDelegatees] = React.useState([]);
  const theme = useTheme();
  const [isActiveDelegateDropdown, setIsActiveDelegateDropdown] = React.useState(true);
  const { epnsCommWriteProvider } = useSelector(
    (state) => state.contracts
  );
  const isMobile = useDeviceWidthCheck(700);
  const changeNetworkToast = useToast();

  const {
    isModalOpen: isRemoveDelegateModalOpen, 
    showModal: showRemoveDelegateModal, 
    ModalComponent: RemoveDelegateModalComponent} = useModal();

  const removeDelegateToast = useToast();
  const removeDelegate = (walletAddress) => {
    return epnsCommWriteProvider.removeDelegate(walletAddress);
  };

  useEffect(()=>{
    fetchDelegatees()
  },[])

  const fetchDelegatees = async () => {
    try {
      const channelAddressinCAIP = convertAddressToAddrCaip(account, chainId);
      const channelDelegates = await getChannelDelegates({channelCaipAddress: channelAddressinCAIP});
      if (channelDelegates) {
        const delegateeList = channelDelegates.map((delegate) => {
          const obj = getCaipToObj(delegate);
          return obj;
        });
        delegateeList.unshift(getCaipToObj(channelAddressinCAIP));
        setDelegatees(delegateeList);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const switchNetwork = async () => {
    const switchChainId = (chainId === appConfig.coreContractChain) ? aliasChainIdsMapping[chainId] : appConfig.coreContractChain;
  
    try {
      changeNetworkToast.showLoaderToast({ loaderMessage: "Waiting for Confirmation..."});

      console.log(switchChainId);
  
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: utils.hexValue(switchChainId) }],
      });
  
      changeNetworkToast.showMessageToast({
        toastTitle:"Success", 
        toastMessage: `Successfully switched to ${networkName[switchChainId]} !`, 
        toastType: "SUCCESS", 
        getToastIcon: (size) => <MdCheckCircle size={size} color="green" />
    })
    } catch (switchError) {
      changeNetworkToast.showMessageToast({
        toastTitle:"Error", 
        toastMessage: `There was an error switching Chain ( ${switchError.message} )`, 
        toastType:  "ERROR", 
        getToastIcon: (size) => <MdError size={size} color="red" />
    })

    if (switchError.code === 4001) {
      // This error code indicates that user denied the wallet switch chain request.
      changeNetworkToast.showMessageToast({
        toastTitle:"Error", 
        toastMessage: `${switchError.message}`, 
        toastType:  "ERROR", 
        getToastIcon: (size) => <MdError size={size} color="red" />
      })
    } else if(switchError.code === 4902) {
      // This error code indicates that the chain has not been added to MetaMask.
      try {
        await library.provider.request({
          method: 'wallet_addEthereumChain',
          params: [Networks[chainIdToNetwork[switchChainId]]],
        });
      } catch (addError) {
        console.error(`Unable to add ${networkName[switchChainId]} Network in wallet`);
        changeNetworkToast.showMessageToast({
          toastTitle:"Error", 
          toastMessage: `Unable to add ${networkName[switchChainId]} Network in wallet. Kindly add it manually and try switching again`, 
          toastType:  "ERROR", 
          getToastIcon: (size) => <MdError size={size} color="red" />
        })
      }
    } else {
      // error toast - Your wallet doesn't support switch network. Kindly, switch the network to Polygon manually.
      changeNetworkToast.showMessageToast({
        toastTitle:"Error", 
        toastMessage: `Your wallet doesn't support switching chains. Kindly, switch the network to ${networkName[switchChainId]} manually.( ${switchError.message} )`, 
        toastType:  "ERROR", 
        getToastIcon: (size) => <MdError size={size} color="red" />
      })
    }
      console.error("Unable to switch chains");
    }
  }
  
  return (
    <>
    <Section>
      <Content padding="20px 0px">
      <Item align="flex-start">
          <DelegatesInfoHeader style={{color : theme.color}}>Channel Delegates </DelegatesInfoHeader>
          <div style={{height:'4px'}}/>
          <DelegatesInfoLabel>
            Delegates that can send notifications on behalf of this channel.
          </DelegatesInfoLabel>
      </Item>
      </Content>
    </Section>

    <Item
      flex="5"
      minWidth="280px"
      self="stretch"
      align="stretch"
      margin="10px 0px 30px 0px"
      radius={isMobile ? "10px" : "20px"}
      border="1px solid #D4DCEA;"
    >
      {isActiveDelegateDropdown && delegatees && 
        <Item
          flex="5"
          justify="flex-start"
          align="stretch"
        >
          {delegatees.map((delegate,idx) => {
            return (
              <Item
                padding={!isMobile ? "25px":"12px"}
                direction="row"
                justify="space-between"
                key={delegate.addr}
                style={{
                  borderTop: idx !== 0 ? "1px solid rgba(169, 169, 169, 0.5)" : ""
                }}
              >
                <DelegateInfo 
                  delegateAddress={delegate.addr} 
                  delegateChainId={delegate.chainId}
                  isDelegate={!isOwner(account,delegate.addr)} 
                  maxWidth={'200px'}
                />
                {isOwner(account,delegate.addr) 
                  ?
                    <OwnerButton disabled={true}>
                      Channel Creator
                    </OwnerButton>
                  :
                    <InfoButton
                        clickHandler={chainId === parseInt(delegate.chainId) ? showRemoveDelegateModal : switchNetwork}
                        hoverText={chainId === parseInt(delegate.chainId) ? "Remove Delegate" : "Switch Network"}
                    />
                }
              </Item>
            )
          })}
        </Item>
        }
        <RemoveDelegateModalComponent
          InnerComponent={RemoveDelegateModalContent}
          onConfirm={removeDelegate}
          toastObject={removeDelegateToast}
        />
      </Item>
    </>
  )
}

const InfoButton = ({ clickHandler, hoverText }) => {
  const theme = useTheme();
  const [isHovered,setIsHovered] = useState(false)
  
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
      <CustomButtonUI onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} onClick={() => clickHandler()}>
        {
        isHovered ?
        <div style={{display:'flex',width:'100%',alignItems: 'center',justifyContent: 'center'}}>
          <AiOutlineUserDelete fontSize={15}/>
          <div style={{padding:'3px'}}/>
          <div>
            {hoverText} 
          </div>
        </div>
          :
          <div style={{color:theme.secondaryColor,textAlign:'right',width:'100%'}}>
            Delegate
          </div>
        }
      </CustomButtonUI>
  )
}

const ChannelActionButton = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
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
  ${(props) =>
    props.disabled &&
    css`
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
`;

const CustomButtonUI = styled(ChannelActionButton)`
  background: transparent;
  color: ${props => props.theme.color};
  height: 36px;
  max-width: 164px;
  flex:1; 
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 141%;
  display: flex;
  align-items: center;
  text-align: right;
  padding: 6px 10px 6px 9px;
  gap: 5px;
  
  &:hover {
    opacity: 0.9;
    background: #E93636;
    border-radius: 8px;
    color: #fff;
  };
  cursor: pointer;
`;

const OwnerButton = styled(Button)`
  all: unset;
  background: transparent;
  font-weight: 500;
  font-size: 16px;
  color: #CF1C84;
  cursor: auto;
`;

const DelegatesInfoHeader = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 150%;
display: flex;
align-items: center;
color: ${(props) => props.theme.color};
`;

const DelegatesInfoLabel = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: #657795;
`;

export default ShowDelegates;