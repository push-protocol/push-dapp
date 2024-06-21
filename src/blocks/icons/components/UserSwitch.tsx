import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const UserSwitch: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="UserSwitch"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_3429_11288)">
            <path
              d="M24.5 29.0636C28.0899 29.0636 31 26.1535 31 22.5636C31 18.9738 28.0899 16.0636 24.5 16.0636C20.9101 16.0636 18 18.9738 18 22.5636C18 26.1535 20.9101 29.0636 24.5 29.0636Z"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 36.0637C14.9844 33.9576 16.4866 32.1888 18.3399 30.9532C20.1932 29.7177 22.3254 29.0637 24.5 29.0637C26.6746 29.0637 28.8068 29.7177 30.6601 30.9532C32.5134 32.1888 34.0156 33.9576 35 36.0637"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36 24.0636L40 28.0636L44 24.0636"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 24.0637L9 20.0637L13 24.0637"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 20.0637V24.0625C8.99878 27.449 10.0357 30.7485 11.9613 33.4858C13.887 36.2231 16.6021 38.257 19.7155 39.2945C22.8289 40.332 26.18 40.3196 29.2862 39.2591C32.3924 38.1985 35.0933 36.1446 37 33.393"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M40 28.0637V24.0649C40.0012 20.6783 38.9643 17.3788 37.0387 14.6415C35.113 11.9042 32.3979 9.8703 29.2845 8.8328C26.1711 7.7953 22.82 7.80772 19.7138 8.86827C16.6076 9.92881 13.9067 11.9828 12 14.7343"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3429_11288">
              <rect
                width="48"
                height="48"
                fill="white"
                transform="translate(0.5 0.0636597)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default UserSwitch;
