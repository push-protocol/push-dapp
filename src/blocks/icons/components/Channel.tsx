import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Channel: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Channel"
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
            d="M27.3333 16C27.3333 22.2592 22.2592 27.3333 16 27.3333C9.74077 27.3333 4.66667 22.2592 4.66667 16C4.66667 9.74077 9.74077 4.66667 16 4.66667C22.2592 4.66667 27.3333 9.74077 27.3333 16Z"
            stroke="currentColor"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M11.9667 20.0333L14.3862 14.375L20.3009 11.6891L17.6242 17.614L11.9667 20.0333Z"
            stroke="currentColor"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Channel;
