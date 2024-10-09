import { NotificationType } from '@pushprotocol/restapi';
import * as yup from 'yup';

import { SelectOption } from 'blocks/select/Select';
import { getMaxCharLimitFieldMessage, getRequiredFieldMessage, getValidURLMessage, isValidURL } from 'common';
import { appConfig } from 'config';

export const getValidationSchema = (isSubsetRecipientPresent: boolean) => {
  return yup.object().shape({
    channelAddress: yup.string().required(getRequiredFieldMessage('Delegate')),
    chainId: yup.string().required(getRequiredFieldMessage('Chain')),
    type: yup.string().required(getRequiredFieldMessage('Type')),
    body: yup.string().required(getRequiredFieldMessage('Description')).max(500, getMaxCharLimitFieldMessage(500)),
    setting: yup.string().required(getRequiredFieldMessage('Setting')),
    recipient: yup.string().test('recipient', getRequiredFieldMessage('Recipient'), function (value) {
      return (
        (this.parent.type !== 'SUBSET' || isSubsetRecipientPresent) && (this.parent.type !== 'TARGETTED' || !!value)
      );
    }),
    title: yup
      .string()
      .test('title', getRequiredFieldMessage('Title'), function (value) {
        return !this.parent.titleChecked || !!value;
      })
      .max(80, getMaxCharLimitFieldMessage(80)),
    mediaUrl: yup.string().test('mediaUrl', getRequiredFieldMessage('Media URL'), function (value) {
      return !this.parent.mediaUrlChecked || !!value;
    }),
    ctaLink: yup.string().test('ctaLink', getValidURLMessage('CTA Link'), function (value) {
      return this.parent.ctaLinkChecked ? !!value && isValidURL(value) : true;
    }),
  });
};

export const getFormInitialValues = (delegateesOptions: SelectOption[], aliasChainOptions: SelectOption[]) => {
  return {
    channelAddress: delegateesOptions[0]?.value || '',
    chainId: aliasChainOptions[0]?.value || appConfig.coreContractChain.toString(),
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
