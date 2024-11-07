import { appConfig } from 'config';

export type FeaturedChannelDetailsProps = {
  id: number;
  channel: string;
};

const devFeaturedChannelsList: FeaturedChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0x74415Bc4C4Bf4Baecc2DD372426F0a1D016Fa924',
  },
  {
    id: 2,
    channel: '0x0000000000000000000000000000000000000000',
  },
  {
    id: 3,
    channel: '0x778D3206374f8AC265728E18E3fE2Ae6b93E4ce4',
  },
  {
    id: 4,
    channel: '0xf9dF4b44Bb6BAf88074bb97C654bec0e4f137fE6',
  },
  {
    id: 5,
    channel: '0x35B84d6848D16415177c64D64504663b998A6ab4',
  },
  {
    id: 6,
    channel: '0x4e97Bc6129dfe5b4b5f527049BC18DcC4925Fd62',
  },
  {
    id: 7,
    channel: '0xD8634C39BBFd4033c0d3289C4515275102423681',
  },
  {
    id: 8,
    channel: '0xfFA1aF9E558B68bBC09ad74058331c100C135280',
  },
  {
    id: 9,
    channel: '0x2177cFc66474bBEce7Cbf114d780A5cfE78485De',
  },
];

const stagingFeaturedChannelsList: FeaturedChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0x74415Bc4C4Bf4Baecc2DD372426F0a1D016Fa924',
  },
  {
    id: 2,
    channel: '0x9601f08b9EcB981D273B72e7f33964Cb98f977fe',
  },
  {
    id: 3,
    channel: '0x94c3016ef3e503774630fC71F59B8Da9f7D470B7',
  },
  {
    id: 4,
    channel: '0xa1016081D6Da53b4246178eD83922C55F7171e54',
  },
  {
    id: 5,
    channel: '0x08D77bD7500a07d791dD1323919C22e1FDb72224',
  },
  {
    id: 6,
    channel: '0x463308c3CF49C0C7947D4fA5C94E2077a6572068',
  },
  {
    id: 7,
    channel: '0x0000000000000000000000000000000000000000',
  },
  {
    id: 8,
    channel: '0x5ac9E6205eACA2bBbA6eF716FD9AabD76326EEee',
  },
  {
    id: 9,
    channel: '0xD8634C39BBFd4033c0d3289C4515275102423681',
  },
];

const prodFeaturedChannelsList: FeaturedChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0xdbBc2Ac8cb8D02B26F165b4BC120fd4b14DA6cDA',
  },
  {
    id: 2,
    channel: '0x991552E1C2A96D0Ae72E19552b08A1889aebCF53',
  },
  {
    id: 3,
    channel: '0x0f0aE1ceEBc4b5aB14A47202eD6A52D3ef698b5B',
  },
  {
    id: 4,
    channel: '0x48De2669db5C2da4bf36C29ef9CFd62057B4b6C8',
  },
  {
    id: 5,
    channel: '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',
  },
  {
    id: 6,
    channel: '0x4E15B14B9950A04370E36f2Ec05546ED5867ADeF',
  },
  {
    id: 7,
    channel: '0x76bA9825A5F707F133124E4608F1F2Dd1EF4006a',
  },
  {
    id: 8,
    channel: '0xef6426D522CfE5B7Ae5dB05623aB0Ef78023dBe0',
  },
  {
    id: 9,
    channel: '0xde3e447E125FA2391DC9BCbfA0B821424422FEAF',
  },
];

const alphaFeaturedChannelsList: FeaturedChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0x65bB67c2416186aE3107F7c2C6728b272a579e3d',
  },
  {
    id: 2,
    channel: '0xf198eBCc8dB86F707bAdDdBa236aB5b619c59D3c',
  },
  {
    id: 3,
    channel: '0x0f0aE1ceEBc4b5aB14A47202eD6A52D3ef698b5B',
  },
  {
    id: 4,
    channel: '0x48De2669db5C2da4bf36C29ef9CFd62057B4b6C8',
  },
  {
    id: 5,
    channel: '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',
  },
  {
    id: 6,
    channel: '0x4E15B14B9950A04370E36f2Ec05546ED5867ADeF',
  },
  {
    id: 7,
    channel: '0x76bA9825A5F707F133124E4608F1F2Dd1EF4006a',
  },
  {
    id: 8,
    channel: '0xef6426D522CfE5B7Ae5dB05623aB0Ef78023dBe0',
  },
  {
    id: 9,
    channel: '0xde3e447E125FA2391DC9BCbfA0B821424422FEAF',
  },
];

export const featuredChannelsList: {
  [env: string]: FeaturedChannelDetailsProps[];
} = {
  dev: devFeaturedChannelsList,
  staging: stagingFeaturedChannelsList,
  prod: prodFeaturedChannelsList,
  alpha: alphaFeaturedChannelsList,
};

export const mobileFeaturedChannelsList: FeaturedChannelDetailsProps[][] = featuredChannelsList[
  appConfig.appEnv
].reduce<FeaturedChannelDetailsProps[][]>((acc, item, index) => {
  const chunkIndex = Math.floor(index / 3);
  if (!acc[chunkIndex]) {
    acc[chunkIndex] = [];
  }
  acc[chunkIndex].push(item);
  return acc;
}, []);
