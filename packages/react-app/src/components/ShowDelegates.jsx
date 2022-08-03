import React, { useEffect } from "react";
import { Item, Span, Section, Content, H2, H3 } from "primaries/SharedStyling";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { postReq } from "api";
import { useWeb3React } from "@web3-react/core";
import styled, { useTheme, css } from "styled-components";
import { useSelector } from "react-redux";
import RemoveDelegateModal from "./RemoveDelegateModal";
import DelegateInfo from "./DelegateInfo";

const blockchainName = {
  1: "ETH_MAINNET",
  137: "POLYGON_MAINNET",
  42: "ETH_TEST_KOVAN",
  80001: "POLYGON_TEST_MUMBAI",
};

const ShowDelegates = () => {
  const { account, chainId } = useWeb3React();
  const [delegatees, setDelegatees] = React.useState([account]);
  const theme = useTheme();
  const [isActiveDelegateDropdown, setIsActiveDelegateDropdown] = React.useState(true);
  const [removeModalOpen, setRemoveModalOpen] = React.useState(false);
  const [delegateToBeRemoved, setDelegateToBeRemoved] = React.useState('');
  const { epnsCommWriteProvider } = useSelector(
    (state) => state.contracts
  );

  const removeDelegate = (walletAddress) => {
    return epnsCommWriteProvider.removeDelegate(walletAddress);
  };

  useEffect(()=>{
    fetchDelegatees()
  },[])

  const fetchDelegatees = async () => {
    try {
      const { data } = await postReq("/channels/delegatee/get_delegate", {
        channelAddress: account,
        blockchain: blockchainName[chainId]
      });

      if (data?.delegateAddress) {
        setDelegatees([account, ...data.delegateAddress]);
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <>
    <Section>
      <Content padding="10px 0px 20px">
      <Item align="flex-start">
          <H2 style={{color : theme.color}}>Channel Delegates </H2>
          <H3 style={{color : theme.color, marginTop:'2px'}}>
            Delegates that can send notifications on behalf of this channel.
          </H3>
      </Item>
      </Content>
    </Section>
      <Item
        flex="5"
        minWidth="280px"
        align="stretch"
        margin="10px 0px 30px 0px"
        radius="10px"
        border="1px solid rgba(169, 169, 169, 0.5)"
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
                padding="8px 5px"
                direction="row"
                justify="space-between"
                key={delegate}
                style={{
                  borderTop: idx !== 0 ? "1px solid rgba(169, 169, 169, 0.5)" : ""
                }}
              >
                <Item direction="row" justify="flex-start">
                  <DelegateInfo delegateAddress={delegate} />
                </Item>
                {(account.toLowerCase() !== delegate.toLowerCase()) ?
                  <RemoveButton onClick={() => {
                    setDelegateToBeRemoved(delegate);
                    setRemoveModalOpen(true);
                  }}>
                    Remove Delegate
                  </RemoveButton> : 
                  <OwnerButton disabled={true}>
                    Channel Creator
                  </OwnerButton>
                }
              </Item>
            )
          })}
        </Item>
        }
        {removeModalOpen && (
          <RemoveDelegateModal
            onClose={() => {
              setRemoveModalOpen(false);
            }}
            onSuccess={() => setRemoveModalOpen(false)}
            removeDelegate={removeDelegate}
            address={delegateToBeRemoved}
          />
        )}
      </Item>
    </>
  )
}

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

const RemoveButton = styled(ChannelActionButton)`
  background: #e20880;
  min-width: 80px;
`;

const OwnerButton = styled(ChannelActionButton)`
  background: #35c5f3;
`;

export default ShowDelegates;