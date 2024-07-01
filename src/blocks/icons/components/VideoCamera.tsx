import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const VideoCamera: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="VideoCamera"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_304_22836)">
            <rect
              x="3.87"
              y="8"
              width="22"
              height="16"
              rx="2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M25.87 14.5L31.87 11V22L25.87 18.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_304_22836">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0.869995)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default VideoCamera;
