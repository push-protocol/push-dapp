import styled from 'styled-components';
import { SpanV2 } from './reusables/SharedStylingV2';

const NewTag = () => {
  return <NewTagContainer>New</NewTagContainer>;
};

const NewTagContainer = styled(SpanV2)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  color: #d53893;
  background: #ffdbf0;
  border-radius: 6px;
  padding: 2px 6px;
  margin-left: 5px;
`;

export default NewTag;
