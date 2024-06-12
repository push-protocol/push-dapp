import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ReceiveNotification: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ReceiveNotification"
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
            d="M25.1818 11.6364C27.2906 11.6364 29 9.92691 29 7.81818C29 5.70946 27.2906 4 25.1818 4C23.0731 4 21.3636 5.70946 21.3636 7.81818C21.3636 9.92691 23.0731 11.6364 25.1818 11.6364Z"
            stroke="currentColor"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.0909 5.09088H10C7.23857 5.09088 5 7.32946 5 10.0909V23C5 25.7614 7.23858 28 10 28H22.9091C25.6705 28 27.9091 25.7614 27.9091 23V14.9091"
            stroke="currentColor"
            stroke-width="1.33333"
            stroke-linecap="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ReceiveNotification;
