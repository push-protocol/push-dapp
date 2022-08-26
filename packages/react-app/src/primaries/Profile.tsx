import { useWeb3React } from '@web3-react/core';
import React,{useContext} from "react";
import { Web3Provider } from 'ethers/providers'
import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import {NavigationDropdownValues} from "../config/NavigationList.js";
import { NavigationContext } from "../contexts/NavigationContext";
import {Item} from "./SharedStyling.js";

import { Oval } from 'react-loader-spinner';

// Create Header
const Profile = () => {
  const { error, account, library } = useWeb3React();

  const [address, setAddress] = React.useState('');
  const [ens, setENS] = React.useState('');
  const [ensFetched, setENSFetched] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  // Get Web3 Context
  const context = useWeb3React<Web3Provider>()
  const { deactivate } = context
  const { navigationSetup } = useContext(NavigationContext)
  console.log(navigationSetup)
  const dropdownValues = [
    {
      id: "walletAddress",
      value: account,
      title: account,
      icon: "./copy.png",
    },
    {
      id: "prodDapp",
      value: "",
      link: "https://epns.io/",
      title: "Production dapp",
      icon: "./prod.png",
    },
    {
      id: "latestUpdates",
      value: "",
      sideBarData: {
        title: "Checkout latest news",
        alt: "Open What's Latest",
        id: "olvy-target",
        isMenuLogic: false,
        isRoute: true,
        newTab: false,
        opened: false,
        active: false,       
      },
      title: "Latest updates",
      icon: "./latest.png",
    },
    {
      id: "disconnect",
      value: "",
      function: ()=>deactivate(),
      title: "Logout",
      icon: "./logout.png",
    },
  ];
  
  
  React.useEffect(() => {
    if (account && account != '') {
      // Check if the address is the same
      if (address !== account) {
        setENS('');
        setENSFetched(false);

        // get ens
        library
          .lookupAddress(account).then(function (name) {
            setENS(name);
            setENSFetched(true);
            setAddress(account);
          })
          .catch(() => {
            setENSFetched(true);
            setAddress(account);
          })
      }

    }
  }, [account]);

  // to create blockies

  return (
    <>
      {account && account !== "" && !error && (
        <Container>
          <Wallet>
            {!ensFetched && (
              <Loader type="Oval" color="#FFF" height={16} width={16} />
            )}
            {ensFetched && ens && <>{ens}</>}
            {ensFetched && !ens && (
              <>
                {account.substring(0, 6)}.....
                {account.substring(account.length - 6)}
              </>
            )}
            <ToggleArrowImg onClick={() => setShowDropdown(!showDropdown)}>
              <img
                alt="arrow"
                className={`${showDropdown ? "down" : "up"}`}
                src="/svg/arrow.svg"
              />
            </ToggleArrowImg>
          </Wallet>
          {showDropdown && (
            <Item
              bg="#fff"
              border="1px solid #E5E8F7"
              radius="24px"
              align="flex-start"
              padding="1.5rem"
              position="absolute"
              top="4.1rem"
              right="-0.5rem"
            >
              <Dropdown dropdownValues={dropdownValues} />
            </Item>
          )}
        </Container>
      )}
    </>
  );
}

// css styles
const Container = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  justify-content: flex-start;
  flex: 1,
  flex-direction: row;
  align-items: center;
  display: flex;
`
const Wallet = styled.span`
  margin: 0px 10px;
  padding: 4px 16px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  border-radius:17px;
  background: rgb(226,8,128);
  background: linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%);
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
`
const ToggleArrowImg = styled.div`
  margin-left: 2rem;
  filter: brightness(0) invert(1);
  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`;

// Export Default
export default Profile;
