// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React from "react";

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import Blockies from "components/BlockiesIdenticon";
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { shortenText } from 'helpers/UtilityHelper';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';

// Create Header
function Profile() {
  const { web3NameList }:AppContextType = React.useContext(AppContext);
  const { active, error, account, library, chainId } = useWeb3React();

  useResolveWeb3Name(account);

  // get ens name from context
  const ensName= web3NameList[account]

  React.useEffect(() => {
    if (account && account != '') {

    }
  }, [account]);

  // to create blockies

  return (
    <>
    {account && account !== '' && !error &&
      <Container>
        <Blocky>
          <BlockyInner>
             <Blockies seed={account.toLowerCase()} opts={{seed: account.toLowerCase(), size: 7, scale: 7}}/>
          </BlockyInner>
        </Blocky>
        <Wallet>
        {ensName &&
          <>{ensName}</>
        }
        {!ensName &&
          <>{shortenText(account,6)}</>
        }
        </Wallet>
      </Container>
    }
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

const Blocky = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  transform: scale(0.85);
  outline-width: 2px;
  outline-color: rgba(225,225,225,1);
`

const BlockyInner = styled.div`
`

const Wallet = styled.span`
  margin: 0px 10px;
  padding: 8px 15px;
  height: 16px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border-radius: 15px;
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

// Export Default
export default Profile;
