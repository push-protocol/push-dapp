export const GuestModeWalletAddress = 'eip155:0x0000000000000000000000000000000000000001';
export const GuestWalletAddress = '0x0000000000000000000000000000000000000001';

import { IllustrationProps } from 'blocks';
import Arbitrum from 'blocks/illustrations/components/Arbitrum';
import BNB from 'blocks/illustrations/components/BNB';
import Base from 'blocks/illustrations/components/Base';
import Cyber from 'blocks/illustrations/components/Cyber';
import Ethereum from 'blocks/illustrations/components/Ethereum';
import Fuse from 'blocks/illustrations/components/Fuse';
import Linea from 'blocks/illustrations/components/Linea';
import Optimisim from 'blocks/illustrations/components/Optimisim';
import Polygon from 'blocks/illustrations/components/Polygon';
import PolygonZK from 'blocks/illustrations/components/PolygonZK';
import { FC } from 'react';
import {
  FAQItemTypes,
  PurchasePlanAlertObjType,
  FirstFAQAnswer,
  SecondFAQAnswer,
  ThirdFAQAnswer,
  FourthFAQAnswer,
  FifthFAQAnswer,
} from 'common';

export const LOGO_ALIAS_CHAIN: {
  [x: number]: FC<IllustrationProps>;
} = {
  1: Ethereum,
  11155111: Ethereum,
  137: Polygon,
  80002: Polygon,
  97: BNB,
  56: BNB,
  42161: Arbitrum,
  421614: Arbitrum,
  11155420: Optimisim,
  10: Optimisim,
  2442: PolygonZK,
  1101: PolygonZK,
  111557560: Cyber,
  7560: Cyber,
  122: Fuse,
  123: Fuse,
  8453: Base,
  84532: Base,
  59141: Linea,
  59144: Linea,
};

export const SepoliaFaucetLink =
  'https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

/* This is a temporary fix where we add suggested channel categories on the frontend */
export const channelCategoriesMap: Record<string, string> = {
  '0xaa940b3501176af328423d975c350d0d1baaae50': 'DeFI',
  '0x0e255B1900b8cE23f8E818C7Ee08cfd5b41df748': 'DeFI',
  '0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3': 'DeFI',
  '0x4E15B14B9950A04370E36f2Ec05546ED5867ADeF': 'DeFI',
  '0x03EAAAa48ea78d1E66eA3458364d553AD981871E': 'Tooling',
  '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF': 'Media',
  '0x93A829d16DE51745Db0530A0F8E8A9B8CA5370E5': 'DeFI',
  '0x76bA9825A5F707F133124E4608F1F2Dd1EF4006a': 'DeFI',
  '0x30a1627fDdc0dBB7dD00b881D25A45B443f294bB': 'Service',
  '0xde3e447E125FA2391DC9BCbfA0B821424422FEAF': 'Service',
  '0x7239B1896ad2b6A9D3aA6C4B12D8993E78fb67Dc': 'Service',
  '0xBCAc4dafB7e215f2F6cb3312aF6D5e4F9d9E7eDA': 'NFT',
  '0x4BaaC83d0A68C079550142B9d792328b7C239844': 'DAO',
  '0xbc7797319B3eD4246c7078CC4e8B28Ea2C6872D0': 'Service',
  '0x983110309620D911731Ac0932219af06091b6744': 'Service',
  '0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082': 'Tooling',
  '0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F': 'Tooling',
  '0x361Cb6BE977d0113A33914A8f952Ced95747F793': 'Gaming',
  '0xf4b71ceF90736Eb644Cc678b2C795ACdeaC198E1': 'Media',
  '0x9Fb3d86157a9e2dC2a771C297f88FA9784fa4e31': 'DeFi',
  '0x955DE87bC52688d626930C7718232FF02522cf18': 'Gaming',
  '0xef6426D522CfE5B7Ae5dB05623aB0Ef78023dBe0': 'Social',
  '0x2Ee77bA42220Cb41f972b9F66088D0A9f4F156f1': 'Service',
  '0x4310f4F206c9a18d8436bD0052065528771f4723': 'Service',
  '0x6575A93aBdFf85e5A6b97c2DB2b83bCEbc3574eC': 'DeFI',
  '0x48De2669db5C2da4bf36C29ef9CFd62057B4b6C8': 'Tooling',
  '0x48608159077516aFE77A04ebC0448eC32E6670c1': 'DeFi',
  '0x026B7A15ad04180aBEe7fEaf34e0F695426BD193': 'Media',
  '0xfE4A6Fbd27B496855245A1e8047F693f0aDfDb08': 'DAO',
  '0x991552E1C2A96D0Ae72E19552b08A1889aebCF53': 'DeFi',
  '0xf198eBCc8dB86F707bAdDdBa236aB5b619c59D3c': 'DeFi',
  '0x57cD6665e725232123F5250328E35Db6ABf6d80C': 'Media',
  '0x6B787b16445983197bf4b291016c74363d78979a': 'Infrastructure',
  '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be': 'DeFi',
  '0x0D54bD457AF5b5691d1D9790746d4C95f7885CFF': 'Social',
  '0x094A1ef2F50F36956a90E410Ffc143362340865c': 'Media',
  '0x8C28Cf33d9Fd3D0293f963b1cd27e3FF422B425c': 'Tooling',
  '0x1A17beA23DFa5D9CF5B0d0838C826Ad88537c6fb': 'Service',
  '0x458E4E1877F2F0D6752bD6f6DFd2e9048C2A56b3': 'DeFi',
  '0x26C8C84adDA6dbA89E93f139D48c0E39B3a6A8fF': 'Media',
  '0x97E5271f2987c7A3450e21dD7FFe4D004ddE773E': 'DeFi',
  '0x0f0aE1ceEBc4b5aB14A47202eD6A52D3ef698b5B': 'Tooling',
  '0x554d29160f779Adf0a4328597cD33Ea1Df4D9Ee9': 'Service',
  '0x5aaB02cCA6F3c89bB2E10749603387c287A115Cb': 'Infrastructure',
  '0x338EF19fA2eC0fc4d1277B1307a613fA1FBbc0cb': 'DeFi',
  '0x18C6A47AcA1c6a237e53eD2fc3a8fB392c97169b': 'DAO',
  '0xEf0D8F546880d1D41e7F35c5BA06a43C7F42FF2f': 'Tooling',
  '0x1a9dDEf485674fC60a269cf97FAbc6b8728A3497': 'DeFi',
  '0x53638975BC11de3029E46DF193d64879EAeA94eB': 'DeFi',
  '0x33F04Cf7fa115165aF33CEA6846AA0dbC20c318B': 'Other',
  '0xFAb61bC810051F3c15f1fd1172E25fc634b25555': 'Tooling',
  '0x147cDAE10Cd2f8AA87776617Cbd370B665F75eef': 'DeFi',
  '0xA2dEe32662F6243dA539bf6A8613F9A9e39843D3': 'DeFi',
  '0x348Eed6A95263A728954693fA0D241B5f96F2c29': 'Infrastructure',
  '0xaf962c18538A6498AcC9980b3Da74E0D9A131eBa': 'Service',
  '0xf995b8145F6d17AECf0d0Fb54435Dd4D6B3060e5': 'DAO',
  '0x0DEFE95102FeE830aEC32A3e0927b9367Ac67043': 'Service',
  '0x5aFeDeF166bd626B3043cb1D53e16EA9BF863E06': 'DeFi',
  '0xE6d194fbeF9215976a80D4479A3caFf0caf14BD1': 'Other',
  '0x46e6C2aADbb7c37a38a583FA2136444085DFD322': 'DeFi',
  '0x9D61ae5875E89036FBf6059f3116d01a22ACe3C8': 'Service',
  '0xC75378478Bf346e50845CdE0E69D18eaEdA0f5F7': 'NFT',
  '0xA8aF754379d8ae406dFbDD0D6c46324aD647243E': 'Media',
  '0x2cE6BD653220436eB8f35E146B0Dd1a6013E97a7': 'Service',
  '0x7DBF6820D32cFBd5D656bf9BFf0deF229B37cF0E': 'Service',
  '0xa643fF2599F4b117E399C17E378f8df42D144298': 'Service',
  '0x9bBb9c87E1B203c8B62Bd0c91FfDAD32bc3b16bD': 'DeFi',
  '0xa385B298d5Cb1051e3a34269dcC7D5Eb12fA6013': 'Service',
  '0xb1676B5Ab63F01F154bb9938F5e8999d9Da5444B': 'Service',
  '0x6B4D338E5b65c4F6336Ac15393735bf910CCd1a4': 'NFT',
  '0x66f046d4fCeF99106cba0A450f3cD19f3C1d7323': 'NFT',
  '0x67F9bdC8330bED073c87eB54C3dccE7f7DA3e146': 'Service',
  '0x95de504e94cc0c85534FcCc3e640BBc9b02056Fc': 'Service',
  '0x174e4Bb368B9a31661B4C35bE595369fF1A68a13': 'Service',
  '0x278A2d5B5C8696882d1D2002cE107efc74704ECf': 'Other',
  '0x9E3EbaA4c1714326426524328Aa1128ef4d7824f': 'Service',
  '0x6da3BCF0F43051eF03266f17bcf8e9Ac38F94BF7': 'NFT',
  '0xc1d457128dEcAE1CC092728262469Ee796F1Ac45': 'Service',
  '0xb591b1577a38FE2b8C9adD1aB42B10461225206F': 'Other',
  '0x1586bCB3088a57a97c3436867544253F3dC88937': 'Service',
  '0xD1CCfb9Fbd9A8DE0cf9950eFbCFb29adcDA81C93': 'Service',
  '0x069e85D4F1010DD961897dC8C095FBB5FF297434': 'DAO',
  '0x436D73319d5f7d21A89489017d693a4A8D822900': 'Media',
  '0xAeF69730D3210B151036C04434c2b1E551e20928': 'DeFi',
  '0xF6a16a48099497C59e8abEAa37Bb37B2F9B793d4': 'Defi',
  '0x8AAAa9c3a06a4A9FE7C5cCe17d8B5db1E225Eadf': 'Infrastructure',
  '0x5cbDFE918c64D4630a1e5BD90c98cC8BE8f47F21': 'Service',
  '0xCAEbD06d75b5F8C77A73DF27AB56964CCc64f793': 'Other',
  '0x1b403ff6EB37D25dCCbA0540637D65550f84aCB3': 'DAO',
  '0x54728f10F525193A61Ded237707f2d5022cA4977': 'DAO',
  '0xC5d5f9cbC114E22bB23aAf10F847ECF28756dFB7': 'Marketplace',
  '0x63381E4b8fE26cb1f55cc38e8369990594E017b1': 'Service',
  '0x80375eAD5561e19668eb1Dd2b6A44Fa14D5eB6BF': 'Service',
};

export const purchasePlanAlertConfig: { [x: string]: (planName?: string) => PurchasePlanAlertObjType } = {
  success: (planName) => ({
    description: `Purchase Successful. Push ${planName} Plan`,
    actionText: 'View on Explorer',
    variant: 'success',
  }),
  renewalReminder: (planName) => ({
    description: `Your Push ${planName} plan ends in 7 days`,
    actionText: 'Renew Plan',
    variant: 'warning',
  }),
  expired: (planName) => ({
    description: `Your Push ${planName} plan has expired`,
    actionText: 'Renew Plan',
    variant: 'error',
  }),
  notificationLimit: () => ({
    description: `Web2 Notifications limit reached. Upgrade for more features.`,
    actionText: 'Upgrade Plan',
    variant: 'warning',
  }),
};

export const faqList: FAQItemTypes[] = [
  {
    id: 1,
    question: 'What is Push?',
    answer: <FirstFAQAnswer />,
  },
  {
    id: 2,
    question: 'What is Push trying to solve?',
    answer: <SecondFAQAnswer />,
  },
  {
    id: 3,
    question: 'What are the web3 communication products launched by Push?',
    answer: <ThirdFAQAnswer />,
  },
  {
    id: 4,
    question: 'How can I use Push as an end-user?',
    answer: <FourthFAQAnswer />,
  },
  {
    id: 5,
    question: 'Is Push a blockchain? Is Push decentralised?',
    answer: <FifthFAQAnswer />,
  },
];
