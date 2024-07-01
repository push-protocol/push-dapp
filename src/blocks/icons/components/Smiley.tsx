import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Smiley: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Smiley"
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
            d="M15.7091 28C22.216 28 27.4909 22.6274 27.4909 16C27.4909 9.37258 22.216 4 15.7091 4C9.20215 4 3.92725 9.37258 3.92725 16C3.92725 22.6274 9.20215 28 15.7091 28Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.2909 14.9999C12.1043 14.9999 12.7636 14.3284 12.7636 13.4999C12.7636 12.6715 12.1043 11.9999 11.2909 11.9999C10.4775 11.9999 9.81818 12.6715 9.81818 13.4999C9.81818 14.3284 10.4775 14.9999 11.2909 14.9999Z"
            fill="currentColor"
          />
          <path
            d="M20.1273 14.9999C20.9406 14.9999 21.6 14.3284 21.6 13.4999C21.6 12.6715 20.9406 11.9999 20.1273 11.9999C19.3139 11.9999 18.6545 12.6715 18.6545 13.4999C18.6545 14.3284 19.3139 14.9999 20.1273 14.9999Z"
            fill="currentColor"
          />
          <path
            d="M20.8146 18.9999C20.2956 19.9107 19.5508 20.6666 18.6548 21.1921C17.7588 21.7176 16.7431 21.9941 15.7092 21.9941C14.6752 21.9941 13.6595 21.7176 12.7635 21.1921C11.8675 20.6666 11.1227 19.9107 10.6037 18.9999"
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

export default Smiley;
