// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

export const ReceivedMessageWrapper = (props): JSX.Element => {
  return (
    <MessageWrapper
      align={props?.align}
      height={props?.height}
    >
      <ItemHV2
        position="relative"
        margin={props?.isGroup ? '0 0 0 34px' : '0px'}
      >
        {props?.isGroup && props?.profilePicture && props.msgType !== 'Intent' && (
          <ItemVV2
            height="100%"
            maxWidth="36px"
            justifyContent="flex-start"
          >
            <ImageContainer
              maxHeight="36px"
              maxWidth="36px"
              borderRadius="50%"
              overflow="hidden"
            >
              <ImageV2
                src={props?.profilePicture}
                alt="Sender Profile"
              />
            </ImageContainer>
          </ItemVV2>
        )}
        <ItemVV2 alignItems="flex-start">
          {props?.isGroup && props.msgType !== 'Intent'&& (
            <SpanV2
              position="relative"
              fontSize="15px"
              fontWeight="500"
              left="8px"
              margin="0px 0px 7px 0px"
            >
              {props?.sender}
            </SpanV2>
          )}
          {props.children}
        </ItemVV2>
      </ItemHV2>
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

const ImageContainer = styled(ItemVV2)`
  max-height: ${(props) => props.maxHeight || '36px'};
`;
