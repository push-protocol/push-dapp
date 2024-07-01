import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const EditProfile: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="EditProfile"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_402_5211)">
            <path
              d="M25 9C26.1046 9 27 8.10457 27 7C27 5.89543 26.1046 5 25 5C23.8954 5 23 5.89543 23 7C23 8.10457 23.8954 9 25 9Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 5V3.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.2675 6L21.9688 5.25"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.2675 8L21.9688 8.75"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 9V10.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.7325 8L28.0312 8.75"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.7325 6L28.0312 5.25"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.97498 24.9212C8.72736 23.4393 9.87542 22.1946 11.2919 21.3251C12.7084 20.4557 14.3379 19.9955 16 19.9955C17.662 19.9955 19.2916 20.4557 20.708 21.3251C22.1245 22.1946 23.2726 23.4393 24.025 24.9212"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.8337 14C28.2556 16.5067 27.8699 19.0826 26.7324 21.3558C25.5948 23.6289 23.7642 25.4818 21.5049 26.6467C19.2456 27.8116 16.6746 28.2284 14.163 27.8368C11.6514 27.4452 9.32924 26.2656 7.53182 24.4682C5.7344 22.6707 4.55474 20.3486 4.16315 17.837C3.77157 15.3254 4.18834 12.7543 5.35328 10.4951C6.51822 8.23579 8.37105 6.4052 10.6442 5.26763C12.9174 4.13005 15.4933 3.74436 18 4.16624"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_402_5211">
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

export default EditProfile;
