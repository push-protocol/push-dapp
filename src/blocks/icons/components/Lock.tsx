import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Lock: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Lock"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_9875_5020)">
            <path
              d="M16 21.5638C16.8284 21.5638 17.5 20.8922 17.5 20.0638C17.5 19.2354 16.8284 18.5638 16 18.5638C15.1716 18.5638 14.5 19.2354 14.5 20.0638C14.5 20.8922 15.1716 21.5638 16 21.5638Z"
              fill="currentColor"
            />
            <path
              d="M11 12.9362V8.93622C11 7.61014 11.5268 6.33837 12.4645 5.40068C13.4021 4.463 14.6739 3.93622 16 3.93622C17.3261 3.93622 18.5979 4.463 19.5355 5.40068C20.4732 6.33837 21 7.61014 21 8.93622V12.9362"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="5"
              y="13"
              width="22"
              height="15"
              rx="3"
              stroke="currentColor"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_9875_5020">
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

export default Lock;
