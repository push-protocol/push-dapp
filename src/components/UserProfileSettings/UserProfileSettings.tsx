//Components
import { Avatar, Box, Button, TextInput } from 'blocks';

const UserProfileSettings = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-sm"
        alignItems="center"
        margin="spacing-xs spacing-none spacing-md spacing-none"
      >
        <Avatar />

        <Button
          variant="tertiary"
          size="extraSmall"
        >
          Change Avatar
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        margin="spacing-none spacing-none spacing-xl spacing-none"
      >
        <TextInput
          label="Display Name"
          value={''}
          onChange={() => console.log('new')}
          totalCount={50}
        />
      </Box>

      <Button size="small">Save Changes</Button>
    </Box>
  );
};

export default UserProfileSettings;
