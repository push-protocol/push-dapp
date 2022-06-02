import React from "react";
import { Item, Span, Section, Content, H2, H3 } from "./SharedStyling";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { AiOutlineCopy } from "react-icons/ai";
import { postReq } from "api";
import { useWeb3React } from "@web3-react/core";
import styled, { useTheme, css } from "styled-components";
import { useSelector } from "react-redux";
import { useDeviceWidthCheck } from "hooks";
import RemoveDelegateModal from "./RemoveDelegateModal";

const ShowDelegates = () => {
  const { account } = useWeb3React();
  const [delegatees, setDelegatees] = React.useState([account]);
  const isMobile = useDeviceWidthCheck(600);
  const theme = useTheme();
  const [isActiveDelegateDropdown, setIsActiveDelegateDropdown] = React.useState(false);
  const [removeModalOpen, setRemoveModalOpen] = React.useState(false);
  const [delegateToBeRemoved, setDelegateToBeRemoved] = React.useState('');
  const { epnsCommWriteProvider } = useSelector(
    (state) => state.contracts
  );

  const removeDelegate = (walletAddress) => {
    return epnsCommWriteProvider.removeDelegate(walletAddress);
  };

  const showList = async () => {
    if (isActiveDelegateDropdown) {
      setIsActiveDelegateDropdown(false);
      return;
    }
    setIsActiveDelegateDropdown(true);
    fetchDelegatees();
  }

  const fetchDelegatees = async () => {
    try {
      const { data } = await postReq("/channels/delegatee/get_delegate", {
        channelAddress: account
      });

      if (data?.delegateAddress) {
        setDelegatees(data.delegateAddress);
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
        <H2 textTransform="uppercase" spacing="0.1em">
            <Span weight="200" style={{color : theme.color}}>Channel </Span>
            <Span
                bg="#674c9f"
                color="#fff"
                weight="600"
                padding="0px 8px"
            >
                Delegates
            </Span>
          </H2>
          <H3 style={{color : theme.color}}>
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
        border="1px solid rgba(169, 169, 169, 0.5)"
      >
        <Item
          direction="row"
          justify="space-between"
        >
          <Span
            textTransform="uppercase"
            padding="10px"
            spacing="3px"
            size="14px"
            color="#000"
          >
            List of Delegate Addresses
          </Span>
          <Span
            padding="10px"
            onClick={showList}
          >
            {!isActiveDelegateDropdown ? <GoTriangleDown color={theme.headerTagBg}/> : <GoTriangleUp color={theme.headerTagBg}/>}
            </Span>
          </Item>
          {
            isActiveDelegateDropdown && delegatees && 
              <Item
                flex="5"
                justify="flex-start"
                align="stretch"
              >
                {delegatees.map((delegate) => {
                  return (
                    <Item
                      border="1px solid rgba(169, 169, 169, 0.5)"
                      padding="5px"
                      direction="row"
                      justify="space-between"
                      key={delegate}
                    >
                      <Item direction="row" justify="flex-start">
                        <Wallet>
                          {!isMobile ?
                            delegate :
                            <>{delegate.substring(0, 6)}.....{delegate.substring(delegate.length - 6)}</>
                          }
                        </Wallet>
                        <CopyToClipboard
                          color={theme.headerTagBg}
                          onClick={() => navigator.clipboard.writeText(delegate)}
                        />
                      </Item>
                      {(account.toLowerCase() != delegate.toLowerCase()) ?
                        <RemoveButton onClick={() => {
                          setDelegateToBeRemoved(delegate);
                          setRemoveModalOpen(true);
                        }}>
                          Remove Delegate
                        </RemoveButton> : 
                        <OwnerButton disabled={true}>
                          Owner
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

const Wallet = styled.span`
  margin: 0px 10px;
  padding: 8px 15px;
  height: 16px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
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

const CopyToClipboard = styled(AiOutlineCopy)`
  font-size: 20px;
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