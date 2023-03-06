import { AiFillExclamationCircle } from 'react-icons/ai';

//Internal components
import { ItemHV2, SpanV2 } from '../SharedStylingV2';

const ErrorMessage = ({ message }) => {
  return (
    <ItemHV2
      display="flex"
      alignItems="center"
      alignSelf="flex-start"
      flexDirection="row"
      margin="7px 0px"
    >
      <AiFillExclamationCircle
        color="red"
        size="20"
      />
      <SpanV2
        fontSize="14px"
        fontWeight="400"
        margin="0px 5px"
        color={'red'}
      >
        {message}
      </SpanV2>
    </ItemHV2>
  );
};

export default ErrorMessage;
