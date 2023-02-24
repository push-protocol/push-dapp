// External Packages
import styled from 'styled-components';

export const SentMessageWrapper = (props): JSX.Element => {
  return (
    <MessageWrapper
      align={props?.align}
      height={props?.height}
    >
      {props.children}
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  width: 100%;
  min-height: ${(props: any): string => props.height || '48px'};
  padding: 0;
  margin-bottom: 5px;
  display: flex;
  flex-direction: ${(props: any): string => props.align || 'row'};
`;
