// React + Web3 Essentials
import React, { useRef } from 'react';
import { useWeb3React } from '@web3-react/core';

// External Packages
import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { useClickAway } from 'react-use';
import { useTheme } from 'styled-components';

// Internal Configs
import { addresses, appConfig } from 'config';

type UniswapWidgetModalProps = {
  InnerComponentProps: {
    defaultPushTokenAmount: number;
  };
  onClose: () => void;
};

const ONE_INCH_TOKEN_LIST = 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link';

const jsonRpcUrlMap = {
  1: [appConfig.coreRPC],
};

const WidgetCustomTheme = {
  light: {
    ...lightTheme,
    accent: '#D53994',
    accentSoft: '#F4DCEA',
    active: '#D53994',
    activeSoft: '#F4DCEA',
    success: '#2FCA8A',
    error: '#E93535',
  },
  dark: {
    ...darkTheme,
    accent: '#D53994',
    accentSoft: '#282A2E',
    container: '#000000',
    module: '#191B1F',
    active: '#D53994',
    activeSoft: '#282A2E',
    interactive: '#2F3137',
    success: '#30CC8B',
    error: '#ED5858',
  },
};

export const UniswapWidgetModal = ({ InnerComponentProps, onClose }: UniswapWidgetModalProps) => {
  const { defaultPushTokenAmount } = InnerComponentProps;
  const theme = useTheme();
  const { library } = useWeb3React();

  const containerRef = useRef(null);
  useClickAway(containerRef, () => {
    onClose();
  });

  return (
    <div
      className="Uniswap"
      ref={containerRef}
    >
      {/* HERE */}
      <SwapWidget
        width={360}
        tokenList={ONE_INCH_TOKEN_LIST}
        defaultOutputTokenAddress={addresses.pushToken}
        defaultOutputAmount={defaultPushTokenAmount}
        theme={WidgetCustomTheme[theme.scheme]}
        jsonRpcUrlMap={jsonRpcUrlMap}
        provider={library}
      />
    </div>
  );
};
