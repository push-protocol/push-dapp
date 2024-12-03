import { useState } from 'react';
import { Alert, Box } from 'blocks';
import { SocialHandles } from 'modules/dashboard/components/Socialhandles';

const SocialHandleItem = () => {
  // for alerts
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >
      {successMessage && (
        <Box margin="spacing-sm spacing-none spacing-none spacing-none">
          <Alert
            variant="success"
            heading={successMessage}
          />
        </Box>
      )}

      {errorMessage && (
        <Box margin="spacing-sm spacing-none spacing-none spacing-none">
          <Alert
            variant="error"
            heading={errorMessage}
          />
        </Box>
      )}

      <SocialHandles
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
        padding="spacing-none spacing-none spacing-none spacing-none"
      />
    </Box>
  );
};

export default SocialHandleItem;
