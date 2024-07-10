import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const PrivateChat: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="PrivateChat"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M17.7272 12.1429C18.7272 12.2857 20.8129 13.2572 21.1557 16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.87 10C9.29857 11 5.89857 13.6857 4.87 16.4286C6.44142 20.1429 12.5843 26.7143 22.4414 22.8571"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.29858 7L25.4414 25.8571"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.7272 8.71424C17.87 8.28567 25.0986 9.22852 28.87 16.4285C28.4415 17.4285 27.07 19.7714 25.0129 21.1428"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.87 13.4286C13.1557 14 11.9842 15.7429 13.0128 18.1429C14.2985 21.1429 17.7271 21.1429 19.4414 19.8572"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default PrivateChat;
