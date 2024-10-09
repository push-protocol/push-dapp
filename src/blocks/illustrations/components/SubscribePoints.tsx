import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const SubscribePoints: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="SubscribePoints"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 48 48"
          fill="none"
          {...props}
        >
          <circle
            cx="24"
            cy="24"
            r="24"
            fill="url(#paint0_linear_8581_29900)"
          />
          <rect
            x="10.6841"
            y="10.7335"
            width="27.4217"
            height="27.4217"
            rx="6"
            fill="white"
          />
          <path
            d="M19.5503 16.4209H29.5466V18.8542H22.3891L22.0603 22.6467H22.2795C22.7508 22.1973 23.7044 21.5725 25.2937 21.5725C28.1764 21.5725 30.4125 23.4358 30.4125 26.8118C30.4125 30.2097 28.2861 32.4676 24.4498 32.4676C20.6025 32.4676 18.498 30.2097 18.3774 27.7544V27.4256H21.4574C21.4794 28.8286 22.4878 30.1 24.3401 30.1C26.2035 30.1 27.2777 28.7957 27.2777 26.9543C27.2777 25.1896 26.1816 23.94 24.4388 23.94C23.0248 23.94 22.148 24.6854 21.6986 25.6609H18.8049L19.5503 16.4209Z"
            fill="black"
          />
          <circle
            cx="36.287"
            cy="12.8317"
            r="4.51849"
            fill="#FF6978"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8581_29900"
              x1="26.1045"
              y1="48"
              x2="25.7854"
              y2="-3.041e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE8BFD" />
              <stop
                offset="1"
                stop-color="#795CFA"
              />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default SubscribePoints;
