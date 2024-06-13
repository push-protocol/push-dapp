export type FeaturedNotificationChannelsProps = {
  channelName: string;
  isVerified: boolean;
  Chains: string[];
  subscribersCount: number;
  channelDescription: string;
  channelAddress: string;
};

export interface ChannelDetailsProps {
  id: number;
  channel: string;
  ipfshash: string;
  name: string;
  info: string;
  url: string;
  icon: string;
  processed: number;
  attempts: number;
  verified_status: number;
  alias_address: string;
  activation_status: number;
  timestamp: string;
  counter: null;
  subgraph_details: null;
  alias_blockchain_id: null;
  alias_verification_event: null;
  blocked: number;
  is_alias_verified: number;
  subgraph_attempts: number;
  channel_settings: string;
  minimal_channel_settings: string;
  iconV2: string;
  icon_migration: number;
  payload_migration: number;
  initiate_verification_proof: null;
  verify_verification_proof: null;
  itemcount: number;
  subscriber_count: number;
}

export const FeaturedNotificationChannels: ChannelDetailsProps[] = [
  {
    id: 1,
    channel: '0xB88460Bb2696CAb9D66013A05dFF29a28330689D',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 2,
    channel: '0x0f0aE1ceEBc4b5aB14A47202eD6A52D3ef698b5B',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 3,
    channel: '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 4,
    channel: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 5,
    channel: '0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 6,
    channel: '0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 7,
    channel: '0x26C8C84adDA6dbA89E93f139D48c0E39B3a6A8fF',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 8,
    channel: '0xef6426D522CfE5B7Ae5dB05623aB0Ef78023dBe0',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACAAIADASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYCAwUHCAQB/8QAQBAAAQMCAwUEBgYIBwAAAAAAAQACAwQFBhEhBxIxQWETIlGBcZGTsdHSIzI2QqGyFBUXRXSUweIkM1KSs+Hw/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQYCAf/EACoRAAICAQMDAwMFAQAAAAAAAAABAgMRBBIhBTFRE0FhQlKBInHB0fAy/9oADAMBAAIRAxEAPwDqlERAEREAREQBERAEREAREQBERAEREAREQHxNMkWucb32uu15ZhXDTi2peM6uoadIm8xny04+kDiVLTU7ZYX5+Ee663Y8GRxHj6httWaG2QyXS5Z7vYwZkNPgSM9egz8l9wxUYwrrpHUXimpKK2kHOAf5h005nI5+PqXqslksuCLQ+Z744sh9PVy6Oef/AHAD8ViqbaDJdLkyDD9kq66n7QMfUE7jWjPU8Dl5kKzsUotUxyvL/wBhFpJOLVUcryzYARfF4bndKS2sa6qlDS76rQMyfJUSpGLm9sVlnvRY223miuJLaaTvjUscMjksjkncThKD2yWGR3E7sRRzwy2FtPLC1p7SKTRzj8PNeC140YKkUd+pH22p4Zv+ofPl7uqXzGFTZLrLFXWap/V7SA2rjO8Dp6Mh61kmus2LrXmwsqIvHg+N3vBU+1qK3LjyX1DbWvWh+n7l3/r8MzrHte0OaQQdQQqlA7VVVOFLsy1XKV0ttnOVNMfudPj4cVPBrqopRwVL6HU1h5T7PyfURF5IQiIgMVie6Nstgrrg7I9hEXNB4F3Bo8yQFFtk1pNHh+S71pLq65OM8kj+O7mSPXq7z6LKbR7PXX3DEtDbOzMz5GFwe7dBaDn8FdxHR1NNgSrobZE6WoZSdhGyPiRkGnLyzVytxVKgnzJ8/sTxa2bV7shtDBLtIxJPV1bntw3QSbkMIJHbO8T7z4AgeJWz6Slgo6dkFLEyGFgyaxjQA0ehYTAFqNowlb6WWIxz9nvytPEOccyD68vJRfari+S3AWm2yblVI3OeRp1jaeAHgT+A9IXqe7UW+lX/AMrt/ZPCuertVNfb/cmexBja32qV9PD/AIuqboWMPdaerv6KA3O+S3audVTANJAaGtOjQFBoaggjPisjT1PVSz0KgsHV6bpVWl5XMvJMLZcH0tVFURkb7DmM/cp5asV09S5sdW3sHn72ebT8FqWnqeqyVPUacVnTqlDsRavp9eo5kuTdbmslYQ4BzXDUHUELXmJbTJhOuZfrC3cpt4NqqYaMLSeI8B7jkvbg2+lkrKGpdnE/SNx+6fD0KX3OkZXW+opZBmyaNzD5jJfarMP49znMT0N2yfMX38NGGv1LT4mwuZabvl8YmgdzDstB/QqrA1zNzw/C+RxdNF9E8nmRwPqyXk2b01dSYaFNcoHwvjle1jX8S3j7yVfwhZ6q01F0FRuCCacvhDTn3dePhyXuSSTj4PNuyMJ05ztfH8kmREUJQCIiAIiIC1PK2GF8jzkxgLiegC5eu9wkul1qq2YkvnkL9TwHIeQ0XSOKSW4burmnIillI/2Fcugrb6RWnukb/Q8Rcpe5fBV6KUtIXlDlW1y1Z15Ophbky8FTw1WSgqOqjTHlvBeyCo4a6rPu02T24prgldNVFrmua4gg5ghbostX+nWumqTlnIwE5ePP8Vz7BUdVu3Z9IX4UoiT/AK/zlY99Pp8nN9eqSrjP3ySNERVzmAiIgCIiAIiIDFYr+zN2/hZfyFctNcupMWfZe7fwkv5CuVwV0XQ45jP8Gx0ue1SL4KrBVgFVgrZlA3q7i8Cqw7XqrAKrBUEoF2u49kM5aRmt+7MXb+C6E9ZPzuXPIK6B2UfYa3+mT/kcsbqcFGtP5Mvr8lLTx/f+GS9ERYhyAREQBERAfEJA4r6sRim2zXfD9dQU1QaeaeMsbJ4dD0PA9CvsUnJJvARHto+LLZbcOV1M2pimramJ0McMbw53eGWZy4AZrnUFT47JMSA8aH2x+VfRslxJ40Ptj8q67QS0Wjg4q1Nsv0zhV2ZAwVUCp2Nk2JBzofbH5VUNlGJBzofan5Valr9L96L8NZBe5BQVWCpyNlOI/Gi9qfgqhsqxEOdF7U/KoZa3TP60W4a+pfUQcFbm2S4moBY47VVTxwVMDnbgkcAJGkk6E89Tool+yvEQ50XtT8FUNluIfGi9qfgqOrnptRDY5oam7Taqv05Twb2je17A5jg5p5g8VUo1s/sVVh6wNo66dsspkdJk0ktYDl3Rn6/SSpLkucnFRk0nlHM2RUZtReV5PqIi8ngIiIAiIgCIiAjGPcTuwpao60UT6sPlEWQfuhuhOZOR8FAxtoJ/cY/mv7Fta7W+mutunoq6IS08zd1zDz/75rSWINkl3pah5s0kdbTE90PeGSDoc9D6c/JbHTlobIuGoWJecssU+n2mjMjbMT+5B/Nf2KW4CxqcVy1bDbnUwga074k32nPPTgMjotY2jZViGqqGtrmwUMOfee54e7LoGk5+sLdWGLBR4dtbKKhad0d573fWkdzJ66L71COhrjto5l8PJLc6FDEFyZhERYxSCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  },
  {
    id: 9,
    channel: '0x03EAAAa48ea78d1E66eA3458364d553AD981871E',
    ipfshash: 'QmUsxtLBhQp9jp46LB4i7Hrh7L1oPzyxr4nWPeX3yDUXsD',
    name: 'Push Protocol',
    info:
      'Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    url: 'https://push.org/',
    icon: 'https://backend.epns.io/cache/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D.jpeg',
    processed: 1,
    attempts: 0,
    verified_status: 1,
    alias_address: 'NULL',
    activation_status: 1,
    timestamp: '2024-05-09T17:00:12.000Z',
    counter: null,
    subgraph_details: null,
    alias_blockchain_id: null,
    alias_verification_event: null,
    blocked: 0,
    is_alias_verified: 0,
    subgraph_attempts: 0,
    channel_settings:
      '[{"type": 1, "index": 1, "default": true, "description": "Product and Feature Updates"}, {"type": 1, "index": 2, "default": true, "description": "Push DAO Alerts"}, {"type": 1, "index": 3, "default": false, "description": "Partnership Alerts"}, {"type": 1, "index": 4, "default": false, "description": "Push Hackathons & Events"}]',
    minimal_channel_settings: '4+1-1+1-1+1-0+1-0',
    iconV2:
      'data:image/jpeg;base64,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',
    icon_migration: 1,
    payload_migration: 1,
    initiate_verification_proof: null,
    verify_verification_proof: null,
    itemcount: 256,
    subscriber_count: 80402
  }
];
