import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Info: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Info"
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
            d="M14.7272 10.9092C14.7272 10.2063 15.297 9.63647 15.9999 9.63647C16.7028 9.63647 17.2726 10.2063 17.2726 10.9092C17.2726 11.6121 16.7028 12.1819 15.9999 12.1819C15.297 12.1819 14.7272 11.6121 14.7272 10.9092ZM14.7272 16.0001C14.7272 15.2972 15.297 14.7274 15.9999 14.7274C16.7028 14.7274 17.2726 15.2972 17.2726 16.0001V21.091C17.2726 21.7939 16.7028 22.3637 15.9999 22.3637C15.297 22.3637 14.7272 21.7939 14.7272 21.091V16.0001Z"
            fill="currentColor"
          />
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Info;
