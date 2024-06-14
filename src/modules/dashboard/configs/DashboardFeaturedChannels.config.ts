export interface ChannelDetailsProps {
  id: number;
  channel: string;
}

const DevFeaturedChannelsList: ChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0x74415Bc4C4Bf4Baecc2DD372426F0a1D016Fa924'
  },
  {
    id: 2,
    channel: '0x0000000000000000000000000000000000000000'
  },
  {
    id: 3,
    channel: '0x778D3206374f8AC265728E18E3fE2Ae6b93E4ce4'
  },
  {
    id: 4,
    channel: '0xf9dF4b44Bb6BAf88074bb97C654bec0e4f137fE6'
  },
  {
    id: 5,
    channel: '0x35B84d6848D16415177c64D64504663b998A6ab4'
  },
  {
    id: 6,
    channel: '0x4e97Bc6129dfe5b4b5f527049BC18DcC4925Fd62'
  },
  {
    id: 7,
    channel: '0xD8634C39BBFd4033c0d3289C4515275102423681'
  },
  {
    id: 8,
    channel: '0xfFA1aF9E558B68bBC09ad74058331c100C135280'
  },
  {
    id: 9,
    channel: '0x2177cFc66474bBEce7Cbf114d780A5cfE78485De'
  }
];

const StagingFeaturedChannelsList: ChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0x74415Bc4C4Bf4Baecc2DD372426F0a1D016Fa924'
  },
  {
    id: 2,
    channel: '0x9601f08b9EcB981D273B72e7f33964Cb98f977fe'
  },
  {
    id: 3,
    channel: '0x94c3016ef3e503774630fC71F59B8Da9f7D470B7'
  },
  {
    id: 4,
    channel: '0xa1016081D6Da53b4246178eD83922C55F7171e54'
  },
  {
    id: 5,
    channel: '0x08D77bD7500a07d791dD1323919C22e1FDb72224'
  },
  {
    id: 6,
    channel: '0x463308c3CF49C0C7947D4fA5C94E2077a6572068'
  },
  {
    id: 7,
    channel: '0x0000000000000000000000000000000000000000'
  },
  {
    id: 8,
    channel: '0x5ac9E6205eACA2bBbA6eF716FD9AabD76326EEee'
  },
  {
    id: 9,
    channel: '0xD8634C39BBFd4033c0d3289C4515275102423681'
  }
];

const ProdFeaturedChannelsList: ChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0xB88460Bb2696CAb9D66013A05dFF29a28330689D'
  },
  {
    id: 2,
    channel: '0x0f0aE1ceEBc4b5aB14A47202eD6A52D3ef698b5B'
  },
  {
    id: 3,
    channel: '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF'
  },
  {
    id: 4,
    channel: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be'
  },
  {
    id: 5,
    channel: '0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F'
  },
  {
    id: 6,
    channel: '0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082'
  },
  {
    id: 7,
    channel: '0x26C8C84adDA6dbA89E93f139D48c0E39B3a6A8fF'
  },
  {
    id: 8,
    channel: '0xef6426D522CfE5B7Ae5dB05623aB0Ef78023dBe0'
  },
  {
    id: 9,
    channel: '0x03EAAAa48ea78d1E66eA3458364d553AD981871E'
  }
];

const AlphaFeaturedChannelsList: ChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0xB88460Bb2696CAb9D66013A05dFF29a28330689D'
  },
  {
    id: 2,
    channel: '0x0f0aE1ceEBc4b5aB14A47202eD6A52D3ef698b5B'
  },
  {
    id: 3,
    channel: '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF'
  },
  {
    id: 4,
    channel: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be'
  },
  {
    id: 5,
    channel: '0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F'
  },
  {
    id: 6,
    channel: '0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082'
  },
  {
    id: 7,
    channel: '0x26C8C84adDA6dbA89E93f139D48c0E39B3a6A8fF'
  },
  {
    id: 8,
    channel: '0xef6426D522CfE5B7Ae5dB05623aB0Ef78023dBe0'
  },
  {
    id: 9,
    channel: '0x03EAAAa48ea78d1E66eA3458364d553AD981871E'
  }
];

export const FeaturedNotificationChannelsList: {
  [env: string]: { id: number; channel: string }[];
} = {
  dev: DevFeaturedChannelsList,
  staging: StagingFeaturedChannelsList,
  prod: ProdFeaturedChannelsList,
  alpha: AlphaFeaturedChannelsList
};
