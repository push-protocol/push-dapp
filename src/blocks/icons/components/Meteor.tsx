import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Meteor: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Meteor"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 16 16"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_10640_33711)">
            <path
              d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 11L13.5 8"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 8L11.5 6.5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 5L14 4"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 6L12.5 1.5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.82845 12.8281C8.45906 13.2085 8.01773 13.5116 7.53014 13.7199C7.04254 13.9281 6.51841 14.0374 5.98822 14.0412C5.45802 14.0451 4.93235 13.9435 4.44176 13.7424C3.95118 13.5413 3.50547 13.2447 3.13056 12.8698C2.75564 12.4949 2.45901 12.0491 2.2579 11.5586C2.05679 11.068 1.95522 10.5423 1.95909 10.0121C1.96297 9.48191 2.07221 8.95778 2.28047 8.47019C2.48873 7.98259 2.79185 7.54127 3.1722 7.17188L8.34345 2"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_10640_33711">
              <rect
                width="16"
                height="16"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Meteor;
