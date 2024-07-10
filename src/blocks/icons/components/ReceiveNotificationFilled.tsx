import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ReceiveNotificationFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ReceiveNotificationFilled"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.1817 3C22.5207 3 20.3635 5.15717 20.3635 7.81818C20.3635 10.4792 22.5207 12.6364 25.1817 12.6364C27.8427 12.6364 29.9999 10.4792 29.9999 7.81818C29.9999 5.15717 27.8427 3 25.1817 3Z"
            fill="currentColor"
          />
          <path
            d="M18.0909 5.09088H8.33333C6.49238 5.09088 5 6.58327 5 8.42421V24.6666C5 26.5076 6.49238 28 8.33333 28H24.5758C26.4167 28 27.9091 26.5076 27.9091 24.6666V14.9091"
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

export default ReceiveNotificationFilled;
