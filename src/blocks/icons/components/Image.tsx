import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Image: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Image"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 24 22"
          fill="none"
          {...props}
        >
          <path
            d="M15.2109 9.20528C15.97 9.20528 16.5854 8.58987 16.5854 7.83073C16.5854 7.07158 15.97 6.45618 15.2109 6.45618C14.4517 6.45618 13.8363 7.07158 13.8363 7.83073C13.8363 8.58987 14.4517 9.20528 15.2109 9.20528Z"
            fill="currentColor"
          />
          <path
            d="M14.2155 15.1617L17.1581 12.2224C17.33 12.0507 17.563 11.9542 17.8059 11.9542C18.0488 11.9542 18.2818 12.0507 18.4537 12.2224L23 16.7722"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.0072 15.6989L7.23163 9.47329C7.31674 9.38809 7.41781 9.3205 7.52905 9.27438C7.6403 9.22827 7.75954 9.20453 7.87997 9.20453C8.00039 9.20453 8.11963 9.22827 8.23088 9.27438C8.34213 9.3205 8.44319 9.38809 8.5283 9.47329L19.2555 20.2017"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="1"
            y="1.79828"
            width="22"
            height="18.4034"
            rx="4"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Image;
