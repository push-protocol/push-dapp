import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const BellSimpleSlash: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="BellSimpleSlash"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M5.52783 4.4353L19.3386 19.6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.42357 6.49341C7.04446 6.90863 6.28622 8.18319 6.28622 9.95964C6.28622 12.1802 5.85294 15.8631 4.39062 17.4337H17.2265"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.59013 20.25H15.3852M9.31934 4.70613C10.6192 3.80347 13.9554 2.73472 16.9017 5.68101C17.2912 6.07049 18.4295 7.23159 18.5807 10.9345C18.6168 11.8191 18.8731 14.0541 19.6097 15.9172"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default BellSimpleSlash;
