import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const AddEmoji: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="AddEmoji"
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
            d="M20.5298 4.66521C19.3154 4.23423 18.0105 4 16.6518 4C10.1449 4 4.87 9.37258 4.87 16C4.87 22.6274 10.1449 28 16.6518 28C23.1587 28 28.4336 22.6274 28.4336 16C28.4336 15.5955 28.414 15.1957 28.3756 14.8015"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.3427 14C13.1561 14 13.8154 13.3284 13.8154 12.5C13.8154 11.6716 13.1561 11 12.3427 11C11.5294 11 10.87 11.6716 10.87 12.5C10.87 13.3284 11.5294 14 12.3427 14Z"
            fill="currentColor"
          />
          <path
            d="M21.179 14C21.9924 14 22.6518 13.3284 22.6518 12.5C22.6518 11.6716 21.9924 11 21.179 11C20.3657 11 19.7063 11.6716 19.7063 12.5C19.7063 13.3284 20.3657 14 21.179 14Z"
            fill="currentColor"
          />
          <path
            d="M21.8664 18C21.3474 18.9107 20.6026 19.6667 19.7066 20.1922C18.8107 20.7176 17.7949 20.9942 16.761 20.9942C15.7271 20.9942 14.7113 20.7176 13.8153 20.1922C12.9193 19.6667 12.1745 18.9107 11.6555 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.87 5L25.87 11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.87 8L22.87 8"
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

export default AddEmoji;
