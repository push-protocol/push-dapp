// React + Web3 Essentials
import { useState, useRef } from 'react';

// External Packages
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { P } from 'components/SharedStyling';
import { Input } from 'primaries/SharedStyling';
import { useAccount } from 'hooks';

// Internal Configs

import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { formatTokens } from 'helpers/StakingHelper';

const UnstakingModalComponent = ({ onClose, InnerComponentProps, toastObject }) => {
  const { title, userData, getUserData, getPoolStats, PoolStats, withdrawTokens, unstakeErrorMessage } =
    InnerComponentProps;

  const withdrawAmount = formatTokens(userData?.userStaked);

  const theme = useTheme();
  const { account, provider } = useAccount();
  const [amount, setAmount] = useState(withdrawAmount);
  const [txInProgressWithdraw, setTxInProgressWithdraw] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const containerRef = useRef(null);
  useClickAway(containerRef, () => handleClose());

  return (
    <Container>
      <ItemHV2 justifyContent="space-between">
        <PrimaryText>{title} Staking Pool</PrimaryText>
        <Close
          onClick={() => handleClose()}
          style={{ cursor: 'pointer' }}
        />
      </ItemHV2>

      <ItemVV2 gap="8px">
        <P
          margin="0"
          weight="500"
          size="14px"
          self="baseline"
          color={theme.stakingSecondaryText}
        >
          Balance
        </P>

        <ItemHV2
          width="-webkit-fill-available"
          background="#F4F5FA"
          // height='35px'
          padding="14px 12px"
          borderRadius="12px"
          border={`1px solid ${theme.modalBorderColor}`}
        >
          <TokenInput
            placeholder="Enter Amount"
            flex="2"
            radius="4px"
            size="28px"
            height="28px"
            self="auto"
            bg="#FFF"
            color={theme.stakingSecondaryText}
            defaultValue={amount}
            autoFocus={true}
            readOnly={true}
          />

          <MaxText>PUSH</MaxText>
        </ItemHV2>
      </ItemVV2>

      <ItemHV2>
        <FilledButton
          border={`1px solid ${theme.activeButtonText}`}
          background={'transparent'}
          color={theme.activeButtonText}
          cursor="pointer"
          onClick={() => withdrawTokens()}
        >
          {txInProgressWithdraw ? (
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={26}
              spinnerColor="#FFF"
              title="Unstaking"
              titleColor="#FFF"
            />
          ) : (
            'Withdraw'
          )}
        </FilledButton>
      </ItemHV2>

      <WarningText>
        {/* You must wait until the current epoch is over to unstake funds. */}

        {unstakeErrorMessage}
      </WarningText>
    </Container>
  );
};

export default UnstakingModalComponent;

const Container = styled(ItemVV2)`
  padding: 8px;
  width: 340px;
  gap: 20px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 500px) {
    width: 270px;
    padding: 16px 15px;
  }
`;

const TokenInput = styled(Input)`
  background: transparent;
`;

const PrimaryText = styled(H2V2)`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.304px;
  color: ${(props) => props.theme.stakingPrimaryText};
`;

const MaxText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: #657795;
  margin: 0px;
`;

const FilledButton = styled(ButtonV2)`
  width: 100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const EmptyButton = styled(ButtonV2)`
  font-size: 16px;
  line-height: 19px;
  flex-direction: row;
  flex: 1;
  height: 49px;
  padding: 12px;
  border-radius: 8px;
  & > div {
    display: block;
  }
  &:after {
    background: transparent;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const WarningText = styled.p`
  margin: 0px;
  color: #d53a94;
  text-align: center;
  font-family: FK Grotesk Neu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
