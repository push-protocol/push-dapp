import React from "react";
import styled, { css } from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';
import Loader from 'react-loader-spinner';
import Skeleton from '@yisheng90/react-loading';
import { useWeb3React } from '@web3-react/core';

// Faucet URLs
function Faucets() {
  
  const { account, library } = useWeb3React();

  const [ loading, setLoading ] = React.useState(false);

  // render
  return (
    <Container >
      <ChannelMeta>
          {!loading &&
            <>
              <Pool>
                <br></br>
                <PoolShare>
                  Ropsten Ether Faucets
                </PoolShare>
              </Pool>
            </>
          }
      </ChannelMeta>

      <FaucetBox>
        <FaucetTitle>
          {loading &&
            <Skeleton color="#eee" width="50%" height={24} />
          }
        </FaucetTitle>
        <FaucetTitle>
          {!loading &&
            <ChannelTitleLink href="https://faucet.metamask.io/" target="_blank" rel="nofollow">
            <FaucetIcon src = "./svg/faucet.svg" />
            </ChannelTitleLink>
          }
        </FaucetTitle>
        <FaucetTitle>
          {!loading &&
            <ChannelTitleLink href="https://faucet.ropsten.be/" target="_blank" rel="nofollow">
              <FaucetIcon src = "./svg/faucet.svg" />
            </ChannelTitleLink>
          }
        </FaucetTitle>
      </FaucetBox>
    </Container>
  );
}

// css styles
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  background: #fff;
  border-radius: 10px;
  border: 1px solid rgb(237, 237, 237);

  margin: 0px 0px;
  justify-content: center;
  padding: 10px;
 
`
const FaucetTitle = styled.div`
  // margin-bottom: 5px;
  padding: 20px
  // flex: 0;
  // display: flex;
  // flex-direction: row;
  // display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  // justify-content: center;
`

const FaucetIcon = styled.img`
  height: 50px;
  width: 100px;
  border-radius:50%;
  overflow:hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    opacity: 0.85;
    cursor: pointer;
    pointer: hand;
  }
  // border-radius: 10px;
  // border: 3px solid #BADA55;
  // margin-right: 15px;
  
`

const FaucetBox = styled.div`
  flex: 1;
  // margin: 5px 10px;
  min-width: 120px;
  flex-grow: 4;
  flex-direction: row;
  display: flex;
  // align-items: center;
  // justify-content: center

  
`

const ChannelTitleLink = styled.a`
  // text-decoration: none;
  // font-weight: 600;
  // color: #e20880;
  // font-size: 20px;
  // &:hover {
  //   text-decoration: underline;
  //   cursor: pointer;
  //   pointer: hand;
  // }
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
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
  // font-size: 11px;
`

const Pool = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PoolShare = styled(ChannelMetaBox)`
  background: #9aa3a6;
  // background: #674c9f;
`

// Export Default
export default Faucets;
