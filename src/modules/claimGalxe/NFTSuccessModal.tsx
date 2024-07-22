import { useNavigate } from 'react-router-dom';
import { Box, Button, Cross, HoverableSVG, Text } from 'blocks';
import { pushAlphaCommunityChat } from 'config/RecommendedChatsList';
import { ModalInnerComponentType } from 'hooks/useModalBlur';

export type NFTSuccessModalProps = ModalInnerComponentType;

const NFTSuccessModal = ({ onClose }: ModalInnerComponentType) => {
  const navigate = useNavigate();

  const handleJoinGroup = () => {
    onClose?.();
    navigate(`/chat/${pushAlphaCommunityChat.chatParticipantAlias}`);
  };

  return (
    <Box
      width={{ initial: '324px', ms: '224px', mm: '262px' }}
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      gap="spacing-md"
      padding="spacing-xs spacing-xxxs spacing-md spacing-xxxs"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="end"
          width="100%"
        >
          <HoverableSVG
            icon={
              <Cross
                size={18}
                color="icon-primary"
              />
            }
            onClick={() => {
              onClose?.();
            }}
          />
        </Box>
        <Text variant="bl-semibold">Congratulations!</Text>
        <Text variant="bl-semibold">Your NFT has been minted.</Text>
        <Text
          variant="bs-regular"
          textAlign="center"
        >
          Join the exclusive Push alpha community for further updates!
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="spacing-xs"
      >
        <img
          src={pushAlphaCommunityChat.payload.chatPic}
          width="64px"
          height="64px"
        />
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="spacing-md"
        >
          <Box>
            <Text variant="h5-semibold">Push Alpha Community</Text>
            <Text
              variant="bs-regular"
              textAlign="center"
            >
              VIP group for Push fam.
            </Text>
          </Box>
          <Button
            variant="primary"
            size="medium"
            onClick={handleJoinGroup}
          >
            Join Group
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { NFTSuccessModal };
