import styled from 'styled-components';

type CheckboxPropsType = {
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ checked, onChange }: CheckboxPropsType) => {
  return (
    <CheckboxInput
      id="Checkbox-switch"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

const CheckboxInput = styled.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`;

export default Checkbox;
