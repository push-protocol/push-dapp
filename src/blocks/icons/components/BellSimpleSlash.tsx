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
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 18 18"
          fill="none"
          {...props}
        >
          <path
            d="M2.52783 1.4353L16.3386 16.6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.42357 3.49341C4.04446 3.90863 3.28622 5.18319 3.28622 6.95964C3.28622 9.18019 2.85294 12.8631 1.39062 14.4337H14.2265"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.59013 17.25H12.3852M6.31934 1.70613C7.61917 0.803471 10.9554 -0.265283 13.9017 2.68101C14.2912 3.07049 15.4295 4.23159 15.5807 7.93451C15.6168 8.81912 15.8731 11.0541 16.6097 12.9172"
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
