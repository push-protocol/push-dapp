import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Copy: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Copy"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_3114_35098)">
            <path
              d="M21 21H24C25.6569 21 27 19.6569 27 18V8C27 6.34315 25.6569 5 24 5H14C12.3431 5 11 6.34315 11 8V11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 11H8C6.34315 11 5 12.3431 5 14V24C5 25.6569 6.34315 27 8 27H18C19.6569 27 21 25.6569 21 24V14C21 12.3431 19.6569 11 18 11Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3114_35098">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(4 4)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Copy;
