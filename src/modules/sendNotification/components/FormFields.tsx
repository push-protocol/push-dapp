import { Box, Button, Select, Text, TextArea, TextInput, ToggleSwitch } from 'blocks';
import { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { css } from 'styled-components';
import { NotficationValue } from '../SendNotification.types';
import { useAccount } from 'hooks';
import { useGetChannelDetails, useSendNotification } from 'queries';
import { notificationTypeOptions } from '../SendNotification.constants';
import { getChannelChainList, getChannelDelegatesOptions, getChannelSettingsOptions } from '../SendNotification.utils';
import { getSelectChains } from 'common';
import useToast from 'hooks/useToast';
import { MdError } from 'react-icons/md';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { NotificationPreview } from './NotificationPreview';
import { title } from 'process';

const FormFields: FC = () => {
  const { account } = useAccount();
  // const { mutate: sendNotification, isPending } = useSendNotification();
  const { data: channelDetails } = useGetChannelDetails(account);
  const toast = useToast();

  const alaisChainOptions = getSelectChains(getChannelChainList(channelDetails));
  //get delegates
  console.debug(channelDetails, 'channelDetails');
  //add validation

  const validationSchema = yup.object().shape({
    channelAddress: yup.string().required('Delegate is required'),
    chainId: yup.string().required('Chain is required'),
    type: yup.string().required('Type is required'),
    body: yup.string().required('Description is required'),
    setting: yup.string().required('Setting is required'),
    // titleChecked: yup.boolean().required('Title is required'),
    // mediaUrlChecked: yup.boolean().required('Title is required'),
    // ctaLinkChecked:yup.boolean().required('Title is required'),
    title: yup.string().test('title', 'Title is Required', function () {
      return this.parent.title;
    }),
    // title: yup.string().required('title is required'),
    mediaUrl: yup.string().test('mediaUrl', 'Media URL is Required', function () {
      return this.parent.mediaUrl;
    }),
    ctaLink: yup.string().test('ctaLink', 'CTA Link is Required', function () {
      return this.parent.ctaLink;
    }),
  });
  //optimise and shift

  // const getChannelDelegatesValues = () => {
  //   if (channelDetails) return [channelDetails?.channel];
  //   return [];
  // };
  const formik = useFormik<NotficationValue>({
    initialValues: {
      channelAddress: channelDetails?.channel || '',
      chainId: alaisChainOptions[0].value,
      type: 'broadcast',
      titleChecked: false,
      mediaUrlChecked: false,
      ctaLinkChecked: false,
      title: '',
      body: '',
      setting: '0',
      mediaUrl: '',
      ctaLink: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // handleSendNotification(values);
    },
  });
  // const handleSendNotification = ({channelAddress,chainId,t}: NotficationValue) => {
  //   sendNotification(
  //     {
  //       channel: convertAddressToAddrCaip(),
  //       password,
  //     },
  //     {
  //       onSuccess: (response) => {
  //         console.debug(response, 'response');
  //       },
  //       onError: (error: any) => {
  //         console.debug(error, 'response');
  //         // if (error.name) {
  //         //   toast.showMessageToast({
  //         //     toastTitle: 'Error',
  //         //     toastMessage: error.response.data.error,
  //         //     toastType: 'ERROR',
  //         //     getToastIcon: (size) => (
  //         //       <MdError
  //         //         size={size}
  //         //         color="red"
  //         //       />
  //         //     ),
  //         //   });
  //         // }
  //       },
  //     }
  //   );
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
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
          <Box width="65%">
            <Select
              options={getChannelDelegatesOptions(channelDetails)}
              value={formik.values.channelAddress}
              onSelect={formik.handleChange('channelAddress')}
              error={formik.touched.channelAddress && Boolean(formik.errors.channelAddress)}
              errorMessage={formik.touched.channelAddress ? formik.errors.channelAddress : ''}
            />
          </Box>
          <Select
            options={alaisChainOptions}
            value={formik.values.chainId}
            onSelect={formik.handleChange('chainId')}
            error={formik.touched.chainId && Boolean(formik.errors.chainId)}
            errorMessage={formik.touched.chainId ? formik.errors.chainId : ''}
          />
        </Box>
        <Select
          options={notificationTypeOptions}
          value={formik.values.type}
          onSelect={formik.handleChange('type')}
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
        {/* settings and tag in select */}
        <Select
          label="Notification Setting Type"
          options={getChannelSettingsOptions(channelDetails)}
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
        {formik.values.body && (
          <NotificationPreview
            title={formik.values.title}
            body={formik.values.body}
            cta={formik.values.ctaLink}
            channelName={channelDetails?.name || ''}
            icon={channelDetails?.iconV2 || ''}
            image={formik.values.mediaUrl}
            chainId={parseInt(formik.values.chainId)}
          />
        )}
      </Box>
      {/* doesnot update body */}

      <Button> Send Notification</Button>
    </form>
  );
};

export { FormFields };
