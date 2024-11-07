// React + Web3 Essentials
import { useState, useContext } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'blocks';

// Internal Configs
import { defaultSnapOrigin } from 'config/index.js';
import { device } from 'config/Globals';
import { AppContext } from 'contexts/AppContext';
import { updateSnoozeDuration } from 'helpers';
import { useAccount } from 'hooks';
import { SnoozeDurationType } from 'types';

const EnableSnoozeModal = ({
  setSnoozeDuration,
}: {
  setSnoozeDuration: (snoozeDuration: SnoozeDurationType) => void;
}) => {
  const { setSnapState } = useContext(AppContext);
  const { isWalletConnected } = useAccount();

  const [snoozeDurationInput, setSnoozeDurationInput] = useState<number>(1);

  const handleChange = async () => {
    if (!isWalletConnected) return;

    const duration = snoozeDurationInput;

    if (duration >= 1 && duration <= 72) {
      await window.ethereum?.request({
        method: 'wallet_invokeSnap',
        params: {
          snapId: defaultSnapOrigin,
          request: {
            method: 'pushproto_setsnoozeduration',
            params: { snoozeDuration: snoozeDurationInput.toString() },
          },
        },
      });

      setSnapState(3);
    } else {
      // Display an error message if the input is invalid
      console.error('Invalid input. Please enter a number between 1 and 72.');
    }
    await updateSnoozeDuration(setSnoozeDuration);
  };

  const handleCancel = async () => {
    setSnapState(3); // go back to step one
  };

  return (
    <Container>
      <ItemHV2
        alignItems="baseline"
        margin="24px 0 0 0"
        padding="0 9px 0 0"
        Gap="8px"
        justifyContent="flex-start"
      >
        <PrimaryText>Set Snooze Duration</PrimaryText>
        <SecondaryText>
          How long would you like to snooze notifications? You can snooze for 1 to 72 hours.
        </SecondaryText>
        <Input
          type="number"
          min="1"
          max="72"
          value={snoozeDurationInput}
          onChange={(e) => {
            const duration = parseInt(e.target.value);
            if (!isNaN(duration) && duration >= 1 && duration <= 72) {
              setSnoozeDurationInput(duration);
            }
          }}
          placeholder="Snooze duration in Hours (e.g. 6)"
        />
      </ItemHV2>

      <ItemHV2
        margin="24px 0 0 0"
        gap="8px"
      >
        <Button
          onClick={handleCancel}
          variant="outline"
        >
          Cancel
        </Button>
        <Button onClick={handleChange}>Enable Snooze</Button>
      </ItemHV2>
    </Container>
  );
};

export default EnableSnoozeModal;

const Container = styled(ItemVV2)`
  padding: 0px 0px 12px 9px;
`;

const PrimaryText = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  align-self: baseline;
  color: ${(props) => props.theme.modalMessageColor};
`;

const SecondaryText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis; // Show ellipsis (...) when text overflows

  color: ${(props) => props.theme.snapSecondaryText};
`;

const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 240px;
  height: 48px;
  padding: 13px 16px 13px 16px;
  margin: 10px 3px 0px;
  background: ${(props) => props.theme.modalSearchBarBackground};

  border-radius: 12px;
  border: 1px solid #bac4d6;

  color: ${(props) => props.theme.default.secondaryColor || '#000'};
  &:focus {
    outline: none;
    background-origin: border;
    border: 1px solid #bac4d6 !important;
    background-clip: padding-box, border-box;
  }
  &::placeholder {
    color: ${(props) => props.theme.default.secondaryColor || '#000'};
  }
  @media ${device.mobileL} {
    min-width: 300px;
  }
`;
