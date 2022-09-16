import React from 'react'
import styled from 'styled-components'
import { caip10ToWallet } from 'helpers/w2w'

function IntentCondition(props): JSX.Element {
  console.log('condition called')
  return (
    <MessageWrapper>
      <ReceivedMessage>
        <Message>
          You have received an intent from {props?.receivedIntentFrom ? caip10ToWallet(props?.receivedIntentFrom) : ''}.
        </Message>
        <DecisionContainer>
          <Icon>
            <img src="/svg/chats/cancel.svg" height="39px" width="39px" alt="cancel" />
          </Icon>
          <Icon onClick={() => props?.ApproveIntent('Approved')}>
            <img src="/svg/chats/accept.svg" height="39px" width="39px" alt="accept" />
          </Icon>
        </DecisionContainer>
      </ReceivedMessage>
    </MessageWrapper>
  )
}

const Icon = styled.i`
  padding: 0px;
  &:hover {
    cursor: pointer;
  }
`

const DecisionContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Message = styled.p`
  // height: 100%;
  min-height: 26px;
  max-width: 300px;
  padding-bottom: 10px;
  font-size: 14px;
  word-wrap: break-word;
  margin: 0;
  // margin: 0px 44px 0px 0px;
`

const MessageWrapper = styled.div`
  width: 100%;
  min-height: ${(props): string => props.height || '48px'};
  padding: 0;
  margin-bottom: 5px;
`

const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  max-width: 419px;
  min-height: 32px;
  padding: 11px 11px 5px 24px;
  background: #ffffff;
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
`
export default IntentCondition
