// React + Web3 Essentials
import React, { useRef } from "react";

// External Packages
import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { useClickAway } from 'react-use';
import { useTheme } from "styled-components";

// Internal Configs
import { addresses } from "config";

type UniswapWidgetModalProps = {
  InnerComponentProps: {
    defaultPushTokenAmount: number;
  },
  onClose: () => void;
}

const ONE_INCH_TOKEN_LIST = "https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link";

export const UniswapWidgetModal = ({ InnerComponentProps, onClose }: UniswapWidgetModalProps) => {
  const { defaultPushTokenAmount } = InnerComponentProps;
  const theme = useTheme();

  const containerRef = useRef(null);
  useClickAway(containerRef, () => {
      onClose()
  });

  return (
    <div className="Uniswap" ref={containerRef}>
      <SwapWidget 
        width={360}
        tokenList={ONE_INCH_TOKEN_LIST}
        defaultOutputTokenAddress={addresses.pushToken}
        defaultOutputAmount={defaultPushTokenAmount}
        theme={theme.scheme === "dark" ? darkTheme : lightTheme}
      />
    </div>
  )
}