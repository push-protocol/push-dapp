import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CloudUpload: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CloudUpload"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 53 52"
          fill="none"
          {...props}
        >
          <path
            d="M16.1888 26.3978L26.7966 15.7901L37.4043 26.3978"
            stroke="#C4CBD5"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.0618 50.0001V16.8509"
            stroke="#C4CBD5"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.4927 35.4144H11.1502C8.05625 35.0608 1.86841 32.4972 1.86841 25.0718C1.86841 17.6464 8.05625 14.9061 11.1502 14.4641C11.769 10.3094 15.6585 2 26.2662 2C39.2607 2 41.0286 10.8398 41.9126 16.0553C45.0065 15.9669 51.4596 19.2906 51.4596 26.9282C51.2828 29.7569 49.6032 35.4144 44.2993 35.4144C38.9955 35.4144 34.1336 35.4144 32.3656 35.4144"
            stroke="#C4CBD5"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CloudUpload;
