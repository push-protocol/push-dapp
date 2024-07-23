import { NotificationType } from '@pushprotocol/restapi';
import { SelectOption } from 'blocks/select/Select';
import * as yup from 'yup';

export const getValidationSchema = (isSubsetRecipientPresent: boolean) => {
  return yup.object().shape({
    channelAddress: yup.string().required('Delegate is required'),
    chainId: yup.string().required('Chain is required'),
    type: yup.string().required('Type is required'),
    body: yup.string().required('Description is required'),
    setting: yup.string().required('Setting is required'),
    recipient: yup.string().test('recipient', 'Recipient is Required', function (value) {
      return (
        (this.parent.type !== 'SUBSET' || isSubsetRecipientPresent) && (this.parent.type !== 'TARGETTED' || !!value)
      );
    }),
    title: yup.string().test('title', 'Title is Required', function (value) {
      return !this.parent.titleChecked || !!value;
    }),
    mediaUrl: yup.string().test('mediaUrl', 'Media URL is Required', function (value) {
      return !this.parent.mediaUrlChecked || !!value;
    }),
    ctaLink: yup.string().test('ctaLink', 'CTA Link is Required', function (value) {
      return !this.parent.ctaLinkChecked || !!value;
    }),
  });
};

export const getFormInitialValues = (delegateesOptions: SelectOption[]) => {
  return {
    channelAddress: delegateesOptions[0]?.value || '',
    chainId: '11155111',
    type: 'BROADCAST' as NotificationType,
    recipient: '',
    titleChecked: false,
    mediaUrlChecked: false,
    ctaLinkChecked: false,
    title: '',
    body: '',
    setting: '0',
    mediaUrl: '',
    ctaLink: '',
  };
};
