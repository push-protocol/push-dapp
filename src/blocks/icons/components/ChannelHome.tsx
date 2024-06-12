import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ChannelHome: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ChannelHome"
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
            d="M4 14L6 11.9335M28 14L26 11.9335M6 11.9335L14.5905 3.40011C15.3705 2.62534 16.6295 2.62534 17.4095 3.40011L26 11.9335M6 11.9335V24C6 25.1046 6.89543 26 8 26H24C25.1046 26 26 25.1046 26 24V11.9335"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9999 18L15.9999 22"
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

export default ChannelHome;
