import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Tutorial: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Tutorial"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 'inherit', height: 'inherit' }}
          viewBox="0 0 22 21"
          fill="none"
          {...props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 2.09998V14.9666C0 16.0712 0.895431 16.9666 2 16.9666H20C21.1046 16.9666 22 16.0712 22 14.9666V2.09998C22 0.995407 21.1046 0.0999756 20 0.0999756H2C0.89543 0.0999756 0 0.995406 0 2.09998ZM8.8 4.31022V12.6964C8.8 12.9192 9.06929 13.0307 9.22678 12.8732L13.7424 8.35756C13.8454 8.25459 13.8389 8.08575 13.7284 7.99097L9.2127 4.12041C9.05053 3.98141 8.8 4.09663 8.8 4.31022Z"
            fill="currentColor"
          />
          <path
            d="M5.8667 19.9H16.1334"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Tutorial;
