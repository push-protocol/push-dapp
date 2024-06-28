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
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_3426_11246)">
            <path
              d="M16 19.3333C18.3932 19.3333 20.3333 17.3932 20.3333 15C20.3333 12.6067 18.3932 10.6666 16 10.6666C13.6067 10.6666 11.6666 12.6067 11.6666 15C11.6666 17.3932 13.6067 19.3333 16 19.3333Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 24C9.65629 22.596 10.6577 21.4167 11.8933 20.593C13.1288 19.7693 14.5503 19.3333 16 19.3333C17.4497 19.3333 18.8712 19.7693 20.1067 20.593C21.3423 21.4167 22.3437 22.596 23 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.6666 16L26.3333 18.6667L29 16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 16L5.66667 13.3333L8.33333 16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.66663 13.3333V15.9992C5.66582 18.2569 6.35708 20.4565 7.64085 22.2814C8.92463 24.1063 10.7347 25.4622 12.8103 26.1539C14.8859 26.8456 17.12 26.8373 19.1908 26.1302C21.2615 25.4232 23.0622 24.0539 24.3333 22.2196"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.3333 18.6666V16.0008C26.3341 13.7431 25.6428 11.5434 24.3591 9.71854C23.0753 7.89366 21.2653 6.53774 19.1896 5.84607C17.114 5.1544 14.8799 5.16268 12.8092 5.86972C10.7384 6.57675 8.93775 7.94605 7.66663 9.7804"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3426_11246">
              <rect
                width="32"
                height="32"
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

export default UserSwitch;
