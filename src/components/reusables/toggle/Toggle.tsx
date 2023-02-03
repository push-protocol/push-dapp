import styled from 'styled-components';

type TogglePropsType = {
  isToggleOn: boolean;
  onToggle: () => void;
};

const Toggle = ({ isToggleOn, onToggle }: TogglePropsType) => {
  return (
      <ToggleContainer>
        <ToggleInput
          id="toggle-switch"
          type="checkbox"
          defaultChecked={isToggleOn}
          onClick={onToggle}
        />
        <ToggleLabel htmlFor="toggle-switch" />
      </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 20px;
  border-radius: 15px;
  background: ${(props) => props.theme.toggleInactiveBG};
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin: 5.5px 4px;
    background: #ffffff;
    transition: 0.2s;
  }
`;

const ToggleInput = styled.input`
  cursor: pointer;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 32px;
  height: 20px;
  &:checked + ${ToggleLabel} {
    background: ${(props) => props.theme.toggleActiveBG};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 13px;
      height: 13px;
      margin: 3.5px 0;
      margin-left: 16px;
      transition: 0.2s;
    }
  }
`;

export default Toggle;
