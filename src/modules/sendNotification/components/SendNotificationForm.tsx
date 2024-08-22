import { FC, KeyboardEventHandler, useState } from 'react';

import { useFormik } from 'formik';
import { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { MdCheckCircle, MdError } from 'react-icons/md';

import { NotificationPreview } from './NotificationPreview';
import { Box, Button, Cross, Link, Select, Text, TextArea, TextInput, ToggleSwitch } from 'blocks';

import { useAccount } from 'hooks';
import useToast from 'hooks/useToast';
import { useSendNotification, ChannelDetails } from 'queries';

import {
  getChannelAddress,
  getChannelChainList,
  getChannelDelegatesOptions,
  getChannelSettingsOptions,
  getRecipients,
} from '../SendNotification.utils';
import { CORE_CHAIN_ID } from 'helpers/UtilityHelper';
import { getSelectChains } from 'common';

import { notificationTypeOptions } from '../SendNotification.constants';

import { NotficationValue } from '../SendNotification.types';
import { UserStoreType } from 'types';

import { getFormInitialValues, getValidationSchema } from '../SendNotification.form';

type SendNotificationFormProps = {
  channelDetails: ChannelDetails | undefined;
};
const SendNotificationForm: FC<SendNotificationFormProps> = ({ channelDetails }) => {
  const [subsetRecipients, setSubsetRecipients] = useState<Array<string>>([]);
  const { chainId, switchChain, account } = useAccount();
  const { mutate: sendNotification, isPending } = useSendNotification();
  const toast = useToast();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  /** replace the delegatees with high level sdk function once it is available */
  const { delegatees } = useSelector((state: any) => state.admin);
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const delegateesOptions = getChannelDelegatesOptions(delegatees, channelDetails);

  const selectedChannel =
    delegatees?.find((delegatee: ChannelDetails) => delegatee.channel === delegateesOptions[0]?.value) ||
    channelDetails;

  const aliasChainOptions = getSelectChains(getChannelChainList(selectedChannel, account));

  const formik = useFormik<NotficationValue>({
    initialValues: getFormInitialValues(delegateesOptions, aliasChainOptions),
    validationSchema: getValidationSchema(!!subsetRecipients.length),
    onSubmit: (values) => {
      handleSendNotification(values);
    },
  });

  const showPreview = formik.values.body || formik.values.title || formik.values.ctaLink || formik.values.mediaUrl;

  const handleSendNotification = ({
    chainId,
    title,
    type,
    recipient,
    ctaLink,
    mediaUrl,
    body,
    setting,
  }: NotficationValue) => {
    sendNotification(
      {
        channel: getChannelAddress(selectedChannel, chainId, onCoreNetwork),
        recipients: getRecipients(type, recipient || subsetRecipients.join()),
        notification: { title, body },
        userPushSDKInstance,
        payload: {
          title,
          body,
          cta: ctaLink,
          embed: mediaUrl,
          category: parseInt(setting) ?? undefined,
        },
      },
      {
        onSuccess: () => {
          toast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Successfully sent notification',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });
          formik.resetForm();
        },
        onError: (error: any) => {
          if (error) {
            toast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: 'Unable to send notification',
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }
        },
      }
    );
  };

  const handleSubsetInputChange: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') e.preventDefault();
    const LIMITER_KEYS = ['Enter', ','];
    if (LIMITER_KEYS.includes(e.key)) {
      const newRecipients = formik.values.recipient.split(' ').filter((recipient) => recipient); // Remove any empty strings

      setSubsetRecipients((oldRecipients) => {
        const uniqueRecipients = new Set([...oldRecipients, ...newRecipients]);
        return Array.from(uniqueRecipients);
      });

      formik.setFieldValue('recipient', '');
    }
  };
  const handleRemoveRecipient = (index: number) => {
    setSubsetRecipients((oldRecipients) => oldRecipients.filter((_, i) => i !== index));
  };

  const handleTypeChange = (value: string) => {
    formik.setFieldValue('type', value);
    formik.setFieldValue('recipient', '');
    setSubsetRecipients([]);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xl"
        alignItems="center"
      >
        <Box
          display="flex"
          gap={{ dp: 'spacing-md', ml: 'spacing-sm' }}
          width="100%"
          flexDirection="column"
        >
          <Box
            display="flex"
            gap="spacing-sm"
            flexDirection={{ dp: 'row', ml: 'column' }}
          >
            <Box width={{ dp: '65%', ml: 'auto' }}>
              <Select
                options={delegateesOptions}
                value={formik.values.channelAddress}
                onSelect={formik.handleChange('channelAddress')}
                error={formik.touched.channelAddress && Boolean(formik.errors.channelAddress)}
                errorMessage={formik.touched.channelAddress ? formik.errors.channelAddress : ''}
              />
            </Box>
            <Select
              options={aliasChainOptions}
              value={formik.values.chainId}
              onSelect={(value) => {
                formik.setFieldValue('chainId', value);
                switchChain(parseInt(value));
              }}
              error={formik.touched.chainId && Boolean(formik.errors.chainId)}
              errorMessage={formik.touched.chainId ? formik.errors.chainId : ''}
            />
          </Box>
          <Select
            options={notificationTypeOptions}
            value={formik.values.type}
            onSelect={(value) => handleTypeChange(value)}
            error={formik.touched.type && Boolean(formik.errors.type)}
            errorMessage={formik.touched.type ? formik.errors.type : ''}
          />
          <Box
            display="flex"
            gap="spacing-sm"
            justifyContent="space-between"
            css={css`
              flex-wrap: wrap;
            `}
          >
            <Box
              css={css`
                flex: 1;
              `}
              display="flex"
              alignItems="center"
              backgroundColor="surface-secondary"
              borderRadius="radius-xs"
              justifyContent="space-between"
              padding="spacing-xs"
            >
              <Text
                ellipsis
                variant="bs-semibold"
              >
                Title
              </Text>
              <ToggleSwitch
                leadingToggle={false}
                checked={formik.values.titleChecked}
                onCheckedChange={(checked) => formik.setFieldValue('titleChecked', checked)}
              />
            </Box>
            <Box
              css={css`
                flex: 1;
              `}
              display="flex"
              backgroundColor="surface-secondary"
              borderRadius="radius-xs"
              alignItems="center"
              justifyContent="space-between"
              padding="spacing-xs"
            >
              <Text
                ellipsis
                variant="bs-semibold"
              >
                Media URL
              </Text>
              <ToggleSwitch
                leadingToggle={false}
                checked={formik.values.mediaUrlChecked}
                onCheckedChange={(checked) => formik.setFieldValue('mediaUrlChecked', checked)}
              />
            </Box>
            <Box
              css={css`
                flex: 1;
              `}
              display="flex"
              backgroundColor="surface-secondary"
              borderRadius="radius-xs"
              alignItems="center"
              justifyContent="space-between"
              padding="spacing-xs"
            >
              <Text
                ellipsis
                variant="bs-semibold"
              >
                CTA Link
              </Text>
              <ToggleSwitch
                leadingToggle={false}
                checked={formik.values.ctaLinkChecked}
                onCheckedChange={(checked) => formik.setFieldValue('ctaLinkChecked', checked)}
              />
            </Box>
          </Box>
          {formik.values.type === 'TARGETTED' && (
            <TextInput
              placeholder="Input Value"
              label="Recipient Wallet Address"
              onChange={formik.handleChange('recipient')}
              value={formik.values.recipient}
              error={formik.touched.recipient && Boolean(formik.errors.recipient)}
              errorMessage={formik.touched.recipient ? formik.errors.recipient : ''}
            />
          )}
          {formik.values.type === 'SUBSET' && (
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-xs"
              onKeyDown={(e) => handleSubsetInputChange(e)}
            >
              <Box
                display="flex"
                gap="spacing-xxs"
                css={css`
                  flex-wrap: wrap;
                `}
              >
                {!!subsetRecipients.length &&
                  subsetRecipients.map((address: string, index: number) => (
                    <Box
                      display="flex"
                      gap="spacing-xxs"
                      alignItems="center"
                      justifyContent="space-between"
                      padding="spacing-xxxs spacing-xxs"
                      borderRadius="radius-xxxs"
                      backgroundColor="surface-brand-medium"
                    >
                      <Text color="text-brand-subtle">{address.slice(0, -1)}</Text>
                      <Box
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        onClick={() => handleRemoveRecipient(index)}
                      >
                        <Cross
                          size={14}
                          color="icon-secondary"
                        />
                      </Box>
                    </Box>
                  ))}
              </Box>
              <TextInput
                placeholder="Input Value"
                label="Enter Recipients Wallet Addresses"
                description="Enter recipients wallet addresses separated by a comma or by pressing the enter key"
                onChange={(e) => formik.setFieldValue('recipient', e.target.value)}
                value={formik.values.recipient}
                error={formik.touched.recipient && Boolean(formik.errors.recipient)}
                errorMessage={formik.touched.recipient ? formik.errors.recipient : ''}
              />
            </Box>
          )}
          {formik.values.titleChecked && (
            <TextInput
              totalCount={80}
              placeholder="Input Value"
              label="Notification Title"
              onChange={formik.handleChange('title')}
              value={formik.values.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              errorMessage={formik.touched.title ? formik.errors.title : ''}
            />
          )}
          <TextArea
            label="Notification Message"
            placeholder="Input Value"
            totalCount={500}
            onChange={formik.handleChange('body')}
            value={formik.values.body}
            error={formik.touched.body && Boolean(formik.errors.body)}
            errorMessage={formik.touched.body ? formik.errors.body : ''}
          />
          <Select
            action={
              <Link
                textProps={{ color: 'text-brand-medium' }}
                to="/channel/settings"
              >
                Manage Setting
              </Link>
            }
            label="Notification Setting Type"
            options={getChannelSettingsOptions(selectedChannel)}
            value={formik.values.setting}
            onSelect={formik.handleChange('setting')}
            error={formik.touched.setting && Boolean(formik.errors.setting)}
            errorMessage={formik.touched.setting ? formik.errors.setting : ''}
          />

          {formik.values.mediaUrlChecked && (
            <TextInput
              placeholder="Input Value"
              label="Media URL"
              onChange={formik.handleChange('mediaUrl')}
              value={formik.values.mediaUrl}
              error={formik.touched.mediaUrl && Boolean(formik.errors.mediaUrl)}
              errorMessage={formik.touched.mediaUrl ? formik.errors.mediaUrl : ''}
            />
          )}
          {formik.values.ctaLinkChecked && (
            <TextInput
              placeholder="Input Value"
              label="CTA Link"
              onChange={formik.handleChange('ctaLink')}
              value={formik.values.ctaLink}
              error={formik.touched.ctaLink && Boolean(formik.errors.ctaLink)}
              errorMessage={formik.touched.ctaLink ? formik.errors.ctaLink : ''}
            />
          )}
          {showPreview && (
            <NotificationPreview
              title={formik.values.title}
              body={formik.values.body}
              cta={formik.values.ctaLink}
              channelName={selectedChannel?.name || ''}
              icon={selectedChannel?.iconV2 || ''}
              image={formik.values.mediaUrl}
              chainId={parseInt(formik.values.chainId)}
            />
          )}
        </Box>

        <Button disabled={isPending}>{isPending ? 'Sending' : ' Send Notification'}</Button>
      </Box>
    </form>
  );
};

export { SendNotificationForm };
