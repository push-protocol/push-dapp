import { NotificationType } from '@pushprotocol/restapi';
import * as yup from 'yup';

import { SelectOption } from 'blocks/select/Select';
import { getRequiredFieldMessage } from 'common';
import { appConfig } from 'config';

export const getValidationSchema = (isSubsetRecipientPresent: boolean) => {
  return yup.object().shape({
    channelAddress: yup.string().required(getRequiredFieldMessage('Delegate')),
    chainId: yup.string().required(getRequiredFieldMessage('Chain')),
    type: yup.string().required(getRequiredFieldMessage('Type')),
    body: yup.string().required(getRequiredFieldMessage('Description')),
    setting: yup.string().required(getRequiredFieldMessage('Setting')),
    recipient: yup.string().test('recipient', getRequiredFieldMessage('Recipient'), function(value) {
      return (
        (this.parent.type !== 'SUBSET' || isSubsetRecipientPresent) && (this.parent.type !== 'TARGETTED' || !!value)
      );
    }),
    title: yup.string().test('title', getRequiredFieldMessage('Title'), function(value) {
      return !this.parent.titleChecked || !!value;
    }),
    mediaUrl: yup.string().test('mediaUrl', getRequiredFieldMessage('Media URL'), function(value) {
      return !this.parent.mediaUrlChecked || !!value;
    }),
    ctaLink: yup.string().test('ctaLink', getRequiredFieldMessage('CTA Link'), function(value) {
      return !this.parent.ctaLinkChecked || !!value;
    })
  });
};

export const getFormInitialValues = (delegateesOptions: SelectOption[]) => {
  return {
    channelAddress: delegateesOptions[0]?.value || '',
    chainId: appConfig.coreContractChain.toString(),
    type: 'BROADCAST' as NotificationType,
    recipient: '',
    titleChecked: false,
    mediaUrlChecked: false,
    ctaLinkChecked: false,
    title: '',
    body: '',
    setting: '0',
    mediaUrl: '',
    ctaLink: ''
  };
};
