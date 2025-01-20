import { FC, useState } from 'react';
import ReactGA from 'react-ga';
import { useFormik } from 'formik';

import { Alert, Box, Button, Select, Text, TextArea, TextInput } from 'blocks';
import { contactFormTopics } from './Support.constants';
import { useSendSupportMessage } from 'queries/hooks/support/useSendSupportMessage';
import { supportValidationSchema } from './Support.utils';

export type SupportProps = {};

const Support: FC<SupportProps> = () => {
  // React GA Analytics
  ReactGA.pageview('/support');

  const [status, setStatus] = useState(0); // 0 = null , 1 = Success , 2 = Error
  const [contactFormAlertMsg, setContactFormAlertMsg] = useState('');
  const [validateOnReset, setValidateOnReset] = useState(true);

  const { mutate: sendMessage, isPending: isSendingMessage } = useSendSupportMessage();

  const supportFormik = useFormik({
    initialValues: { name: '', email: '', topic: contactFormTopics[0].value, subject: '', message: '' },
    validationSchema: validateOnReset ? supportValidationSchema : null,
    onSubmit: () => {
      handleContactFormSubmit();
    },
  });

  const handleContactFormSubmit = () => {
    // Check everything in order
    setValidateOnReset(false);
    const { name, email, topic, subject, message } = supportFormik.values;
    sendMessage(
      {
        from: email,
        name,
        topic,
        sub: subject,
        msg: message,
      },
      {
        onSuccess: () => {
          setStatus(1);
          setContactFormAlertMsg('Message Sent! We will be in Touch :)');
          supportFormik.resetForm();
          setValidateOnReset(true);
        },
        onError: (error: Error) => {
          console.log('Error sending code', error);
          setContactFormAlertMsg('Something went wrong, please try again later');
          setStatus(2);
        },
      }
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="-webkit-fill-available"
      overflow="scroll"
      height="100%"
      padding="spacing-sm spacing-none"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
        alignSelf="center"
        width="800px"
      >
        {status > 0 && (
          <Alert
            variant={status === 1 ? 'success' : 'error'}
            heading={status === 1 ? 'Success' : 'Error'}
            description={contactFormAlertMsg}
            onClose={() => {
              setStatus(0);
              setContactFormAlertMsg('');
            }}
          />
        )}

        <form onSubmit={supportFormik.handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-md"
            padding="spacing-md spacing-lg"
            borderRadius="radius-md"
            backgroundColor="surface-primary"
          >
            <Box alignSelf="center">
              <Text
                variant="h2-semibold"
                color="text-primary"
              >
                Support
              </Text>
              <Text
                variant="bm-regular"
                color="text-secondary"
              >
                Let’s get in touch!
              </Text>
            </Box>

            {/* Render Form input fields */}
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-xs"
            >
              <Box width="219px">
                <TextInput
                  required
                  label="Name"
                  value={supportFormik.values.name}
                  onChange={supportFormik.handleChange('name')}
                  error={supportFormik.touched.name && Boolean(supportFormik.errors.name)}
                  errorMessage={supportFormik.touched.name ? supportFormik.errors.name : ''}
                  disabled={isSendingMessage}
                />
              </Box>

              <TextInput
                required
                value={supportFormik.values.email}
                onChange={supportFormik.handleChange('email')}
                error={supportFormik.touched.email && Boolean(supportFormik.errors.email)}
                errorMessage={supportFormik.touched.email ? supportFormik.errors.email : ''}
                label="E-mail"
                disabled={isSendingMessage}
              />
            </Box>

            <Select
              required
              options={contactFormTopics}
              value={supportFormik.values.topic.length ? supportFormik.values.topic : ''}
              onSelect={supportFormik.handleChange('topic')}
              error={supportFormik.touched.topic && Boolean(supportFormik.errors.topic)}
              errorMessage={supportFormik.touched.topic ? supportFormik.errors.topic : ''}
              label="Topic"
              disabled={isSendingMessage}
            />

            <TextInput
              required
              value={supportFormik.values.subject}
              onChange={supportFormik.handleChange('subject')}
              error={supportFormik.touched.subject && Boolean(supportFormik.errors.subject)}
              errorMessage={supportFormik.touched.subject ? supportFormik.errors.subject : ''}
              label="Subject"
              placeholder="I want to tell you guys a secret!"
              disabled={isSendingMessage}
            />

            <TextArea
              required
              placeholder="This is where you will tell us that secret, or a bug or whatever is on your mind."
              numberOfLines={12}
              value={supportFormik.values.message}
              onChange={supportFormik.handleChange('message')}
              error={supportFormik.touched.message && Boolean(supportFormik.errors.message)}
              errorMessage={supportFormik.touched.message ? supportFormik.errors.message : ''}
              label="Message"
              disabled={isSendingMessage}
            />

            <Button
              onClick={() => supportFormik.handleSubmit()}
              variant="tertiary"
              loading={isSendingMessage}
              disabled={isSendingMessage}
            >
              {isSendingMessage ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export { Support };
