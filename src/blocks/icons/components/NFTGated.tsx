import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const NFTGated: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="NFTGated"
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
            d="M13.5115 20H11.9955L10.066 15.73L9.38603 20H7.87L9.00013 13H10.5162L12.4549 17.25L13.1256 13H14.6416L13.5115 20Z"
            fill="currentColor"
          />
          <path
            d="M16.3314 20H14.797L15.9271 13H20.1444L19.9056 14.52H17.2226L17.0021 15.88H19.4186L19.1705 17.38H16.754L16.3314 20Z"
            fill="currentColor"
          />
          <path
            d="M22.9206 20H21.3219L22.2039 14.55H20.3847L20.6328 13H25.87L25.6219 14.55H23.8027L22.9206 20Z"
            fill="currentColor"
          />
          <path
            d="M16.87 3L28.1283 9.5V22.5L16.87 29L5.61166 22.5V9.5L16.87 3Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default NFTGated;
