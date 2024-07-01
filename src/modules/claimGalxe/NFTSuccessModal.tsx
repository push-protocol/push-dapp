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
      gap="s6"
      padding="s3 s1 s6 s1"
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
                color="gray-600"
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
          color="gray-600"
        >
          Join the exclusive Push alpha community for further updates!
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="s3"
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
          gap="s6"
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
